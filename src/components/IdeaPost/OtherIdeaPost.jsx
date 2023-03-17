import {
   Text,
   Tag,
   Button,
   Card,
   CardBody,
   Divider,
   ButtonGroup,
   HStack,
   Input,
   InputGroup,
   InputRightElement,
   IconButton,
   Accordion,
   AccordionButton,
   AccordionItem,
   AccordionPanel,
   Editable,
   EditablePreview,
   EditableTextarea,
   EditableInput,
   Switch,
} from '@chakra-ui/react';
import { getIdeaDetailAction } from '../../redux/action/ideaAction';
import React from 'react';
import { useState, useRef } from 'react';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
import alternativeImg from '../../assets/img/gwuni.png';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
   dislikeIdeaAtion,
   incrementViewIdeaAction,
   likeIdeaAction,
} from '../../redux/action/ideaAction';
import { createNewCommentAction } from '../../redux/action/commentAction';
const OtherIdeaPost = (props) => {
   let {
      id,
      createdBy,
      categoryName,
      title,
      content,
      image,
      like,
      disLike,
      comments,
      isAnonymous,
      views,
   } = props.item;

   const [lock, setLock] = useState(false);
   const dispatch = useDispatch();
   const [showComment, setShowComment] = useState(false);
   const [uploadImg, setUploadImg] = useState(image);
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const ideaDetail = useSelector((state) => state.ideaReducer.ideaDetail);
   const comment = useRef();
   const formik = useFormik({
      initialValues: {
         Content: '',
         IsAnonymous: false,
         IdeaId: id,
      },
      validationSchema: Yup.object({
         Content: Yup.string().required('Write something, dude !'),
      }),
      onSubmit: (values) => {
         dispatch(createNewCommentAction(values, id));
         comment.current.value = '';
      },
   });
   const handleAddComment = (e) => {
      if (formik.errors.Content) {
         alert.error(formik.errors.Content, 'top-right', null, 'dark');
      } else {
         formik.handleSubmit();
      }
   };
   const handleOnSwitch = (e) => {
      let { name, checked } = e.target;
      formik.setFieldValue(name, checked);
      setLock(!lock);
   };

   const renderListComment = () => {
      if (ideaDetail.comments !== 0) {
         return ideaDetail.comments.map((item) => {
            return (
               <div
                  key={item.id}
                  className='my-4'
               >
                  <StaffComment
                     // createdBy={createdBy}
                     item={item}
                     ideaId={id}
                  />
               </div>
            );
         });
      } else {
         alert.error('No comment to show !!!', 'top-right', null, 'dark');
         setShowComment(!showComment);
      }
   };
   const handleOnIncrementView = () => {
      dispatch(incrementViewIdeaAction(id));
      dispatch(getIdeaDetailAction(id));
   };
   return (
      <Accordion allowToggle>
         <Card
            className='px-4 py-2'
            variant='elevated'
         >
            <CardBody className='post'>
               <div className='d-flex justify-content-between align-middle'>
                  <HStack
                     spacing='13px'
                     align='center'
                     paddingBottom={'0'}
                  >
                     <Icon
                        content='fa-regular fa-circle-user'
                        fontSize='45px'
                        color='#2b6cb0'
                        className='iconAvatar'
                     ></Icon>
                     <Text
                        fontSize='2xl'
                        className='staffName'
                     >
                        {isAnonymous ? 'Anonymous' : createdBy}
                     </Text>
                     <Tag
                        colorScheme='blue'
                        size='md'
                        className='categoryTag'
                     >
                        {categoryName}
                     </Tag>
                  </HStack>
                  <HStack className='justify-content-center'>
                     <Icon
                        content='fa-regular fa-eye'
                        fontSize='20px'
                        color='#2b6bb1'
                     />
                     <Text
                        color='#2b6bb1'
                        fontSize='md'
                        as='b'
                     >
                        {views}
                     </Text>
                  </HStack>
               </div>
            </CardBody>

            <AccordionItem
               style={{
                  borderTop: '2px solid rgba(43, 107, 177,0.6)',
                  borderTopRightRadius: '8px',
                  borderTopLeftRadius: '8px',
                  borderBottom: 'none',
               }}
               className='p-3'
            >
               {({ isExpanded }) => (
                  <>
                     <HStack>
                        <Editable
                           isDisabled={true}
                           fontSize='2xl'
                           className='ideaTitle w-50 text-wrap'
                           placeholder={title}
                           style={{ marginLeft: '1%' }}
                        >
                           <EditablePreview />
                           <EditableInput />
                        </Editable>

                        {isExpanded ? (
                           <>
                              <div className='d-flex align-baseline'>
                                 <div className='mx-5'>
                                    <AccordionButton
                                       onClick={() => {
                                          setShowComment(false);
                                       }}
                                       className='p-0'
                                    >
                                       <div
                                          style={{
                                             border: '2px solid #2b6bb1',
                                             borderRadius: '6px',
                                             padding: '2px 8px',
                                          }}
                                       >
                                          <Icon
                                             content='fa-solid fa-chevron-up'
                                             color='#2b6bb1'
                                             fontSize='18px'
                                          />
                                       </div>
                                    </AccordionButton>
                                 </div>
                              </div>
                           </>
                        ) : (
                           <AccordionButton
                              className='text-wrap w-auto p-0 mx-5'
                              variant='ghost'
                              onClick={handleOnIncrementView}
                           >
                              <HStack>
                                 <div
                                    style={{
                                       border: '2px solid #2b6bb1',
                                       borderRadius: '6px',
                                       padding: '2px 8px',
                                    }}
                                 >
                                    <Icon
                                       content='fa-solid fa-chevron-down'
                                       color='#2b6bb1'
                                       fontSize='18px'
                                    />
                                 </div>
                              </HStack>
                           </AccordionButton>
                        )}
                     </HStack>

                     <AccordionPanel className='hiddenPanel'>
                        <Editable
                           isDisabled={true}
                           className='editablePara my-4'
                           placeholder={content}
                        >
                           <EditablePreview />
                           <EditableTextarea
                              style={{ height: '20vh' }}
                              maxHeight={'max-content'}
                           />
                        </Editable>

                        <HStack>
                           <img
                              src={uploadImg === '' ? alternativeImg : image}
                              alt='...'
                              className='img-fluid image'
                           />
                        </HStack>

                        <ButtonGroup
                           variant='ghost'
                           size='lg'
                        >
                           <Button
                              onClick={() => {
                                 dispatch(likeIdeaAction(id));
                              }}
                              colorScheme='blue'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-up' />
                              }
                           >
                              {like}
                           </Button>
                           <Button
                              onClick={() => {
                                 dispatch(dislikeIdeaAtion(id));
                              }}
                              colorScheme='red'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-down' />
                              }
                           >
                              {disLike}
                           </Button>
                           <Button
                              onClick={() => {
                                 setShowComment(!showComment);
                              }}
                              leftIcon={
                                 <Icon content='fa-regular fa-comment-dots' />
                              }
                              colorScheme='gray'
                           >
                              {comments}
                           </Button>
                        </ButtonGroup>
                        <Divider />
                        <HStack>
                           <Icon
                              content='fa-regular fa-circle-user'
                              fontSize='34px'
                              color='#2b6cb0'
                           ></Icon>
                           <InputGroup>
                              <Input
                                 ref={comment}
                                 placeholder='What do you think?'
                                 variant='outline'
                                 borderRadius={'20px'}
                                 onChange={formik.handleChange}
                                 name='Content'
                              />
                              <InputRightElement>
                                 <IconButton
                                    onClick={handleAddComment}
                                    icon={
                                       <Icon
                                          content='fa-regular fa-paper-plane'
                                          fontSize='15px'
                                       />
                                    }
                                    variant='ghost'
                                    colorScheme='blue'
                                    borderRadius={'20px'}
                                 />
                              </InputRightElement>
                           </InputGroup>

                           <div className='d-flex justify-content-center align-middle'>
                              <Switch
                                 name='IsAnonymous'
                                 data-toggle='tooltip'
                                 data-placement='bottom'
                                 title='Comment as an anonymous'
                                 size='sm'
                                 className='p-0 mt-2 ml-2 mr-3 '
                                 onChange={handleOnSwitch}
                              />

                              <Icon
                                 content={
                                    lock
                                       ? 'fa-solid fa-user-secret'
                                       : 'fa-solid fa-user'
                                 }
                                 fontSize='20px'
                              />
                           </div>
                        </HStack>
                     </AccordionPanel>
                  </>
               )}
            </AccordionItem>

            <div style={{ width: '85%', margin: '0 auto' }}>
               {showComment ? renderListComment() : ''}
            </div>
         </Card>
      </Accordion>
   );
};

export default OtherIdeaPost;
