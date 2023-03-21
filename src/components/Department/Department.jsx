import React from 'react';
import {
   Heading,
   Text,
   IconButton,
   useDisclosure,
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   ModalCloseButton,
} from '@chakra-ui/react';
import { history } from '../../App';
import Icon from '../Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import {
   deleteDepartmentAction,
   getDepartmentDetailAction,
} from '../../redux/action/departmentAction';
const Department = (props) => {
   const {
      isOpen: deleteIsOpen,
      onOpen: deleteOnOpen,
      onClose: deleteOnClose,
   } = useDisclosure();
   const dispatch = useDispatch();
   const handleOnDeleteButton = () => {
      dispatch(deleteDepartmentAction(props.id));
      setTimeout(() => {
         deleteOnClose();
         window.location.reload();
      }, 1000);
   };
   const handleOnUpdateButton = () => {
      dispatch(getDepartmentDetailAction(props.id));
   };
   return (
      <div className='deparment-infor px-4 py-3'>
         <div className='d-flex align-middle justify-content-between'>
            <Heading
               className='text-link'
               as='b'
               fontSize={30}
               onClick={handleOnUpdateButton}
            >
               {props.text}
            </Heading>
            <div className='d-flex'>
               <IconButton
                  variant='ghost'
                  className='mr-1'
                  colorScheme='blue'
                  onClick={handleOnUpdateButton}
                  children={
                     <Icon
                        fontSize='15px'
                        content='fa-solid fa-pen-to-square'
                     />
                  }
               />

               <IconButton
                  variant='ghost'
                  className='mr-1'
                  colorScheme='red'
                  onClick={deleteOnOpen}
                  children={
                     <Icon
                        fontSize='15px'
                        content='fa-regular fa-trash-can'
                     />
                  }
               />

               <Modal
                  isOpen={deleteIsOpen}
                  onClose={deleteOnClose}
                  isCentered
               >
                  <ModalOverlay />
                  <ModalContent>
                     <ModalHeader>Delete {props.text}</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody>
                        <Text
                           fontSize='md'
                           className='deleteNotice'
                        >
                           Are you sure? You can't undo this action afterwards.
                        </Text>
                     </ModalBody>

                     <ModalFooter>
                        <Button
                           colorScheme='blue'
                           variant='ghost'
                           mr={3}
                           onClick={deleteOnClose}
                        >
                           Cancel
                        </Button>
                        <Button
                           variant='solid'
                           colorScheme='red'
                           onClick={handleOnDeleteButton}
                        >
                           Delete
                        </Button>
                     </ModalFooter>
                  </ModalContent>
               </Modal>
            </div>
         </div>

         <div className='d-flex mt-4 justify-content-between'>
            <div className='d-flex'>
               <Icon
                  fontSize='15px'
                  color='#2B6CB0'
                  content='fa-regular fa-user'
               />
               <Text
                  as='b'
                  className='text-department-1 mt-1 ml-2'
               >
                  {props.number} Members
               </Text>
            </div>
            <Text
               as='cite'
               className='text-department-2 text-right mt-1 m-0'
            >
               Managed by: <b>{props.user}</b>
            </Text>
         </div>
      </div>
   );
};

export default Department;
