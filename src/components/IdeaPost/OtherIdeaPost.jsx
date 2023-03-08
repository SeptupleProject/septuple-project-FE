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
   useDisclosure,
   SlideFade,
   Accordion,
   AccordionButton,
   AccordionItem,
   AccordionPanel,
   Editable,
   EditablePreview,
   EditableTextarea,
   EditableInput,
   Alert,
   Switch,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState, useRef } from 'react';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
import alternativeImg from '../../assets/img/gwuni.png';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addCommentAction } from '../../redux/action/ideaAction';
import { ToastContainer } from 'react-toastify';

const OtherIdeaPost = (props) => {
   let {
      id,
      email,
      category,
      title,
      content,
      image,
      like,
      dislike,
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
   const comment = useRef();
   const formik = useFormik({
      initialValues: {
         content: '',
         email: signedInAccount.username,
         ideaId: id,
         isCmtAnonymous: false,
      },
      validationSchema: Yup.object({
         content: Yup.string().required('Write something, dude !'),
      }),
      onSubmit: (values) => {
         dispatch(addCommentAction(values));
      },
   });
   const handleSubmitComment = (e) => {
      e.preventDefault();
      if (formik.errors.content) {
         toast.warn(`${formik.errors.content}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
         });
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
      if (comments !== undefined) {
         return comments.map((item) => {
            return (
               <div
                  key={item.id}
                  className='my-4'
               >
                  <StaffComment item={item} />
               </div>
            );
         });
      } else {
         toast.error('No comment to show !!!', {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
         });
      }
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
                        {!isAnonymous ? 'Anonymous' : email}
                     </Text>
                     <Tag
                        colorScheme='blue'
                        size='md'
                        className='categoryTag'
                     >
                        {category}
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
                              src={uploadImg === null ? alternativeImg : image}
                              alt='...'
                              className='img-fluid image'
                           />
                        </HStack>

                        <ButtonGroup
                           variant='ghost'
                           size='lg'
                        >
                           <Button
                              colorScheme='blue'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-up' />
                              }
                           >
                              {like}
                           </Button>
                           <Button
                              colorScheme='red'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-down' />
                              }
                           >
                              {dislike}
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
                              {comments === undefined ? '0' : comments.length}
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
                                 onBlur={formik.handleBlur}
                                 name='content'
                              />

                              <InputRightElement>
                                 <IconButton
                                    onClick={handleSubmitComment}
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
                                 name='isCmtAnonymous'
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
         <ToastContainer />
      </Accordion>
   );
};

export default OtherIdeaPost;
