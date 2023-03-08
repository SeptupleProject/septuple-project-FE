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
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
import alternativeImg from '../../assets/img/gwuni.png';
import { toast } from 'react-toastify';
import { deleteIdeaAction } from '../../redux/action/ideaAction';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addCommentAction } from '../../redux/action/ideaAction';
import { ToastContainer } from 'react-toastify';

const YourIdeaPost = (props) => {
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
   const dispatch = useDispatch();
   const [lock, setLock] = useState(isAnonymous);
   const [showComment, setShowComment] = useState(false);
   const { isOpen: deleteIsOpen, onToggle: deleteOnToggle } = useDisclosure();
   const {
      isOpen: uploadIsOpen,
      onOpen: uploadOnOpen,
      onClose: uploadOnClose,
   } = useDisclosure();
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
         isAnonymous: lock,
      },
      validationSchema: Yup.object({
         content: Yup.string().required('Write something, dude !'),
      }),
      onSubmit: (values) => {
         dispatch(addCommentAction(values));
      },
   });
   const handleOnChange = () => {
      setLock(!lock);
   };
   const handleUploadImage = (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => setUploadImg(event.target.result);
      }
   };
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
         comment.current.value = '';
      }
   };
   const openModal = () => {
      return (
         <Modal
            isOpen={uploadIsOpen}
            onClose={uploadOnClose}
            isCentered
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Do you want to update your post ?</ModalHeader>
               <ModalCloseButton />
               <ModalFooter>
                  <Button
                     variant='ghost'
                     colorScheme='red'
                     mr={3}
                     onClick={uploadOnClose}
                  >
                     Close
                  </Button>
                  <Button
                     colorScheme='facebook'
                     onClick={() => {
                        setUploadImg();
                     }}
                     variant='outline'
                  >
                     Update
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
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
                        You
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
                                 <div className='d-flex w-100'>
                                    <Button
                                       variant='outline'
                                       size='md'
                                       colorScheme='red'
                                       onClick={deleteOnToggle}
                                    >
                                       Delete Idea
                                    </Button>
                                    <SlideFade
                                       className={deleteIsOpen ? 'd-flex' : ''}
                                       in={deleteIsOpen}
                                    >
                                       <HStack>
                                          <Text
                                             size='md'
                                             className='deleteBtn ml-3'
                                             as='b'
                                          >
                                             Are you sure?
                                          </Text>
                                          <ButtonGroup
                                             variant='ghost'
                                             size='sm'
                                          >
                                             <Button
                                                onClick={() => {
                                                   dispatch(
                                                      deleteIdeaAction(id)
                                                   );
                                                }}
                                                size='md'
                                                colorScheme='red'
                                             >
                                                Yes
                                             </Button>
                                             <Button
                                                onClick={deleteOnToggle}
                                                colorScheme='twitter'
                                                size='md'
                                             >
                                                No
                                             </Button>
                                          </ButtonGroup>
                                       </HStack>
                                    </SlideFade>
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

                           <div className='col-2 px-0 ml-4 text-center'>
                              <div className='container px-0'>
                                 <label
                                    htmlFor='uploadImageToEdid'
                                    className='d-flex justify-content-center uploadBtn p-0'
                                 >
                                    <HStack className='uploadStack'>
                                       <Icon
                                          content='fa-solid fa-upload'
                                          color='#3182ce'
                                          fontSize='18px'
                                       />
                                       <p className='ml-2 uploadBtnText'>
                                          New photo
                                       </p>
                                    </HStack>
                                 </label>
                                 <input
                                    onChange={handleUploadImage}
                                    accept='image/png,image/jpg,image/jpeg'
                                    className='disapear'
                                    id='uploadImageToEdid'
                                    type='file'
                                 />
                              </div>
                              <div className='my-3'>
                                 <b>As an anonymous ?</b>
                              </div>
                              <div className='d-flex justify-content-center align-middle'>
                                 <Switch
                                    defaultChecked={isAnonymous}
                                    size='sm'
                                    className='p-0 mt-1 mr-3'
                                    onChange={handleOnChange}
                                 />

                                 <Icon
                                    content={
                                       lock
                                          ? 'fa-solid fa-lock'
                                          : 'fa-solid fa-lock-open'
                                    }
                                    fontSize='15px'
                                 />
                              </div>
                              <VStack>
                                 <Button
                                    className='mt-4'
                                    variant='outline'
                                    size='md'
                                    colorScheme='facebook'
                                    onClick={uploadOnOpen}
                                 >
                                    Edit
                                 </Button>
                              </VStack>
                              {openModal()}
                           </div>
                        </HStack>

                        <ButtonGroup
                           variant='ghost'
                           size='lg'
                        >
                           <Button
                              isDisabled
                              colorScheme='blue'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-up' />
                              }
                           >
                              {like}
                           </Button>
                           <Button
                              isDisabled
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
                              fontSize='35px'
                              color='#2b6cb0'
                           ></Icon>
                           <InputGroup>
                              <Input
                                 placeholder='What do you think?'
                                 variant='outline'
                                 borderRadius={'20px'}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 name='content'
                                 ref={comment}
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

export default YourIdeaPost;
