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
import {
   Modal,
   ModalOverlay,
   ModalBody,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalCloseButton,
} from '@chakra-ui/react';
import { getIdeaDetailAction } from '../../redux/action/ideaAction';
import React from 'react';
import { Slide } from 'react-toastify';
import { useState, useRef } from 'react';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
import alternativeImg from '../../assets/img/gwuni.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { clearIdeaDetailReducer } from '../../redux/reducers/ideaReducer';
import {
   dislikeIdeaAtion,
   incrementViewIdeaAction,
   likeIdeaAction,
} from '../../redux/action/ideaAction';
import alert from '../../settings/alert';
import { createNewCommentAction } from '../../redux/action/commentAction';
import { resetFormInput } from '../../settings/common';
import { useDisclosure } from '@chakra-ui/react';
import { today } from '../../settings/setting';

const OtherIdeaPost = (props) => {
   const USER_SIGNED_IN = localStorage.getItem('signedInAccount');
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
   const ideaDetail = useSelector((state) => state.ideaReducer.ideaDetail);
   const {
      isOpen: commentIsOpen,
      onOpen: commentOnOpen,
      onClose: commentOnClose,
   } = useDisclosure();
   const comment = useRef();
   const formik = useFormik({
      initialValues: {
         Content: '',
         IsAnonymous: false,
         IdeaId: id,
      },
      validationSchema: Yup.object({
         Content: Yup.string().required('Write something !!!'),
      }),
      onSubmit: (values) => {
         dispatch(createNewCommentAction(values, id));
         resetFormInput(comment);
         setLock(false);
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

      if (Object.keys(ideaDetail).length > 0) {
         return ideaDetail.comments.map((item) => {
            return (
               <div
                  key={item.id}
                  className='my-4'
               >
                  <StaffComment
                     item={item}
                     ideaId={id}
                  />
               </div>
            );
         });
      }
   };
   const handleOnIncrementView = () => {
      dispatch(incrementViewIdeaAction(id));
      dispatch(getIdeaDetailAction(id));
   };
   const handleOnLikePost = () => {
      if (USER_SIGNED_IN) {
         dispatch(likeIdeaAction(id));
      } else {
         alert.info('Please sign in first !', null, Slide, 'dark');
      }
   };
   const handleOnDislikePost = () => {
      if (USER_SIGNED_IN) {
         dispatch(dislikeIdeaAtion(id));
      } else {
         alert.info('Please sign in first !', null, Slide, 'dark');
      }
   };
   const unexpiredComment = today <= props.currentAcademicYear.endDate;
   const openModalListComment = () => {
      return (
         <Modal
            isOpen={commentIsOpen}
            onClose={commentOnClose}
            isCentered
            size='5xl'
            scrollBehavior='inside'
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader className='mt-3'>
                  <Text
                     fontSize='xl'
                     className='text-left title-2'
                  >
                     This post has {comments} comments
                  </Text>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <div style={{ width: '90%', margin: '0 auto' }}>
                     {renderListComment()}
                  </div>
               </ModalBody>
               <ModalFooter>
                  <Button
                     variant='ghost'
                     colorScheme='red'
                     mr={3}
                     onClick={commentOnClose}
                  >
                     Close
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   };
   const handleOnOpenCommentModal = () => {
      dispatch(clearIdeaDetailReducer());
      dispatch(getIdeaDetailAction(id));
      setTimeout(() => {
         commentOnOpen();
      }, 100);
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
                              onClick={handleOnLikePost}
                              colorScheme='blue'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-up' />
                              }
                           >
                              {like}
                           </Button>
                           <Button
                              onClick={handleOnDislikePost}
                              colorScheme='red'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-down' />
                              }
                           >
                              {disLike}
                           </Button>
                           <Button
                              onClick={handleOnOpenCommentModal}
                              leftIcon={
                                 <Icon content='fa-regular fa-comment-dots' />
                              }
                              colorScheme='gray'
                           >
                              {comments}
                           </Button>
                           {openModalListComment()}
                        </ButtonGroup>
                        <Divider />
                        <HStack
                           className={
                              USER_SIGNED_IN === null ? 'disappear' : ''
                           }
                        >
                           <Icon
                              content='fa-regular fa-circle-user'
                              fontSize='34px'
                              color='#2b6cb0'
                           ></Icon>
                           <InputGroup>
                              <Input
                                 disabled={unexpiredComment ? false : true}
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
                                 isChecked={lock}
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
