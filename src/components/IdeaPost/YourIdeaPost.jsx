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
   Switch,
   VStack,
   ModalBody,
   FormControl,
   FormLabel,
   Textarea,
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
   ModalCloseButton,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
import alternativeImg from '../../assets/img/gwuni.png';
import {
   deleteIdeaAction,
   getIdeaDetailAction,
} from '../../redux/action/ideaAction';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addCommentAction } from '../../redux/action/ideaAction';
import alert from '../../settings/alert';
import { convertObjectToFormData } from '../../settings/common';
import { updateIdeaAction } from '../../redux/action/ideaAction';
const YourIdeaPost = (props) => {
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
   const dispatch = useDispatch();
   const [lock, setLock] = useState(isAnonymous);
   const [showComment, setShowComment] = useState(false);
   const { isOpen: deleteIsOpen, onToggle: deleteOnToggle } = useDisclosure();
   const {
      isOpen: uploadIsOpen,
      onOpen: uploadOnOpen,
      onClose: uploadOnClose,
   } = useDisclosure();
   const [uploadImgDetail, setUploadImgDetail] = useState('');
   const comment = useRef();
   const ideaDetail = useSelector((state) => state.ideaReducer.ideaDetail);
   const formik = useFormik({
      initialValues: {
         id: id,
         title: title,
         content: content,
         image: image,
         isAnonymous: isAnonymous,
         File: null,
      },
      validationSchema: Yup.object({
         title: Yup.string().max(50, 'Title cannot be longer than 50 letters'),
      }),
      onSubmit: (values) => {
         let ideaUpdate = convertObjectToFormData(values);
         dispatch(updateIdeaAction(id, ideaUpdate));
         uploadOnClose();
      },
   });

   const handleOnChange = (e) => {
      let { name, checked } = e.target;
      formik.setFieldValue(name, checked);
      setLock(!lock);
   };
   const handleUploadImage = async (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         await formik.setFieldValue('File', file);
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => {
            setUploadImgDetail(event.target.result);
         };
      }
   };
   const handleOnOpenUpdateIdea = () => {
      dispatch(getIdeaDetailAction(id));
      uploadOnOpen();
   };
   const handleOnUpdate = (e) => {
      e.preventDefault();
      if (formik.errors.title) {
         alert.warning(`${formik.errors.title}`, 'top-right', null, 'dark');
      } else {
         formik.handleSubmit();
      }
   };
   const openModal = () => {
      return (
         <Modal
            isOpen={uploadIsOpen}
            onClose={uploadOnClose}
            isCentered
            size='xl'
            scrollBehavior='inside'
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>
                  <Text
                     fontSize='3xl'
                     className='text-center title-2'
                  >
                     Update your post
                  </Text>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <FormControl>
                     <FormLabel>Title</FormLabel>
                     <Input
                        name='title'
                        onChange={formik.handleChange}
                        placeholder={ideaDetail.title}
                     />
                  </FormControl>

                  <FormControl mt={4}>
                     <FormLabel>Content</FormLabel>
                     <Textarea
                        name='content'
                        onChange={formik.handleChange}
                        placeholder={ideaDetail.content}
                     />
                  </FormControl>
                  <HStack>
                     <div className='px-0 d-flex text-center w-75 mx-auto my-4'>
                        <div className='w-50'>
                           <div className='my-3'>
                              <b>As an anonymous ?</b>
                           </div>
                           <div className='d-flex justify-content-center'>
                              <Switch
                                 name='isAnonymous'
                                 defaultChecked={ideaDetail.isAnonymous}
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
                        </div>
                        <div className='container px-0 w-50 '>
                           <label
                              htmlFor='uploadImageToEdid'
                              className='w-75 d-flex justify-content-center uploadBtn p-0 mx-auto mt-3'
                           >
                              <HStack className='uploadStack'>
                                 <Icon
                                    content='fa-solid fa-upload'
                                    color='#3182ce'
                                    fontSize='18px'
                                 />
                                 <p className='ml-2 uploadBtnText'>New photo</p>
                              </HStack>
                           </label>
                           <input
                              onChange={handleUploadImage}
                              accept='image/png,image/jpg,image/jpeg'
                              className='disappear'
                              id='uploadImageToEdid'
                              type='file'
                           />
                        </div>
                     </div>
                  </HStack>
                  <FormControl>
                     <img
                        height='100px'
                        className='img-fluid mx-auto'
                        src={uploadImgDetail == '' ? '' : uploadImgDetail}
                     />
                  </FormControl>
               </ModalBody>
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
                     onClick={handleOnUpdate}
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
      if (comments !== 0) {
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
         alert.error('No comment to show !!!', 'top-right', null, 'dark');
         setShowComment(!showComment);
      }
   };
   const handleOnDelete = () => {
      dispatch(deleteIdeaAction(id));
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
                           fontSize='2xl'
                           className='ideaTitle w-50 text-wrap'
                           placeholder={title}
                           isDisabled={true}
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
                                                onClick={handleOnDelete}
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
                        <div className='d-flex'>
                           <div className='w-75'>
                              <img
                                 src={image !== '' ? image : alternativeImg}
                                 alt='...'
                                 className='img-fluid image'
                              />
                           </div>

                           <VStack className='w-25'>
                              <Button
                                 className='my-auto mx-auto'
                                 variant='outline'
                                 size='md'
                                 colorScheme='facebook'
                                 onClick={handleOnOpenUpdateIdea}
                              >
                                 Edit Post
                              </Button>
                           </VStack>
                           {openModal()}
                        </div>
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
                                 ref={comment}
                              />

                              <InputRightElement>
                                 <IconButton
                                    // onClick={handleOnUpdate}
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
      </Accordion>
   );
};

export default YourIdeaPost;
