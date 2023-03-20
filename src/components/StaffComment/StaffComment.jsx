import React from 'react';
import Icon from '../Icon/Icon';
import { useState } from 'react';
import { Editable, Text } from '@chakra-ui/react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import {
   deleteCommentAction,
   updateCommentAction,
} from '../../redux/action/commentAction';
import { IconButton } from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
   Modal,
   ModalContent,
   ModalBody,
   ModalHeader,
   ModalFooter,
   ModalCloseButton,
   useDisclosure,
   ModalOverlay,
   Button,
   Textarea,
} from '@chakra-ui/react';
import { convertContentToArray } from '../../settings/common';
import alert from '../../settings/alert';
import { useRef } from 'react';
const StaffComment = (props) => {
   const { id, createdAt, createdBy, content, isAnonymous } = props.item;
   const dispatch = useDispatch();
   const [seeMore, setSeeMore] = useState({
      text: 'See more',
      open: true,
   });
   const {
      isOpen: deleteIsOpen,
      onOpen: deleteOnOpen,
      onClose: deleteOnClose,
   } = useDisclosure();
   const {
      isOpen: updateIsOpen,
      onOpen: updateOnOpen,
      onClose: updateOnClose,
   } = useDisclosure();

   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const comment = useRef();
   const formik = useFormik({
      initialValues: {
         Content: '',
         IsAnonymous: false,
         Id: id,
      },
      validationSchema: Yup.object({
         Content: Yup.string().max(
            1000,
            'Idea should be less than 1000 letters'
         ),
      }),
      onSubmit: (values) => {
         dispatch(updateCommentAction(id, values, props.ideaId));
         comment.current.value = '';
         updateOnClose();
      },
   });

   const expandContent = () => {
      if (seeMore.open) {
         setSeeMore({
            text: 'See less',
            open: false,
         });
      } else {
         setSeeMore({
            text: 'See more',
            open: true,
         });
      }
   };
   const renderContent = () => {
      let paragraph = [];
      if (!seeMore.open) {
         paragraph = convertContentToArray(content).join(' ');
         return paragraph;
      } else {
         if (convertContentToArray(content).length < 20) {
            for (let i = 0; i < 20; i++) {
               paragraph.push(convertContentToArray(content)[i]);
            }
            setSeeMore({ text: '', open: false });
            return paragraph.join(' ');
         } else {
            for (let i = 0; i < 30; i++) {
               paragraph.push(convertContentToArray(content)[i]);
            }
            return paragraph.join(' ') + '...';
         }
      }
   };
   const renderCommentEmail = () => {
      if (createdBy == signedInAccount.email) {
         return 'You';
      } else {
         if (isAnonymous) {
            return 'Anonymous';
         } else {
            return createdBy;
         }
      }
   };
   const renderDeleteModal = () => {
      return (
         <>
            <Modal
               isCentered
               isOpen={deleteIsOpen}
               onClose={deleteOnClose}
            >
               <ModalOverlay />
               <ModalContent>
                  <ModalHeader>
                     Do you want to delete your comment ?
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalFooter>
                     <Button
                        variant='ghost'
                        mr={3}
                        onClick={deleteOnClose}
                     >
                        Close
                     </Button>
                     <Button
                        onClick={handleOnDeleteComment}
                        colorScheme='red'
                     >
                        Delete
                     </Button>
                  </ModalFooter>
               </ModalContent>
            </Modal>
         </>
      );
   };
   const handleOnDeleteComment = () => {
      dispatch(deleteCommentAction(id, props.ideaId));
      deleteOnClose();
   };
   const renderUpdateModal = () => {
      return (
         <>
            <Modal
               isCentered
               isOpen={updateIsOpen}
               onClose={updateOnClose}
            >
               <ModalOverlay />
               <ModalContent>
                  <ModalHeader>Edit your comment</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                     <Textarea
                        ref={comment}
                        name='Content'
                        onChange={formik.handleChange}
                        defaultValue={content}
                        size='md'
                     />
                  </ModalBody>
                  <ModalFooter>
                     <Button
                        variant='ghost'
                        colorScheme='red'
                        mr={3}
                        onClick={updateOnClose}
                     >
                        Close
                     </Button>
                     <Button
                        onClick={handleOnUpdateComment}
                        colorScheme='blue'
                     >
                        Update
                     </Button>
                  </ModalFooter>
               </ModalContent>
            </Modal>
         </>
      );
   };
   const handleOnUpdateComment = () => {
      if (formik.errors.Content) {
         alert.error(formik.errors.Content, 'top-right', null, 'dark');
      } else {
         formik.handleSubmit();
      }
   };

   return (
      <div className='row align-middle mx-0 comment'>
         <div className='col-1 text-center px-0'>
            <Icon
               color='#2B6CB0'
               content='fa-regular fa-circle-user'
               fontSize='40px'
            />
         </div>
         <div className='col-11 px-0'>
            <div className='d-flex justify-content-between mt-1'>
               <h2 className='comment-name mt-2'>{renderCommentEmail()}</h2>
               <div className='d-flex'>
                  <div className='mr-4 mt-2'>
                     <Text
                        as='em'
                        className='font-poppin title-1'
                        fontSize={12}
                     >
                        Posted at : {moment(createdAt).format('HH:mm - DD/MM ')}
                     </Text>
                  </div>
                  {signedInAccount.email === createdBy ? (
                     <>
                        <div>
                           <IconButton
                              size='sm'
                              onClick={updateOnOpen}
                              colorScheme='blackAlpha'
                              variant='ghost'
                              icon={
                                 <Icon
                                    color='#385898'
                                    content='fa-solid fa-pen'
                                    fontSize='16px'
                                 />
                              }
                           />
                           {renderUpdateModal()}
                        </div>
                        <div className='ml-2'>
                           <IconButton
                              size='sm'
                              onClick={deleteOnOpen}
                              colorScheme='blackAlpha'
                              variant='ghost'
                              icon={
                                 <Icon
                                    content='fa-regular fa-trash-can'
                                    fontSize='16px'
                                    color='#e53e3e'
                                 />
                              }
                           />
                           {renderDeleteModal()}
                        </div>
                     </>
                  ) : (
                     <></>
                  )}
               </div>
            </div>

            <Text className='text-justify text-wrap comment-content mt-2'>
               {renderContent()}
               <a
                  onClick={expandContent}
                  className={'text-decoration-none see-more'}
               >
                  {''} {seeMore.text}
               </a>
            </Text>
         </div>
      </div>
   );
};

export default StaffComment;
