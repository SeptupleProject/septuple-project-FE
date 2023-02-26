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
import { useState } from 'react';
import '../../assets/scss/main.scss';
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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import StaffComment from '../StaffComment/StaffComment';
const YourIdeaPost = (props) => {
   const [lock, setLock] = useState(false);
   const [showComment, setShowComment] = useState(false);
   const { isOpen: deleteIsOpen, onToggle: deleteOnToggle } = useDisclosure();
   const {
      isOpen: uploadIsOpen,
      onOpen: uploadOnOpen,
      onClose: uploadOnClose,
   } = useDisclosure();
   const [uploadImg, setUploadImg] = useState(props.img);

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
      return props.comment.map((item) => {
         console.log(item);
         return (
            <div className='my-4'>
               <StaffComment
                  key={item.id}
                  name={item.name}
                  comment={item.content}
               />
            </div>
         );
      });
   };
   return (
      <Accordion allowToggle>
         <Card variant='elevated'>
            <CardBody className='post'>
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
                     fontSize='3xl'
                     className='staffName'
                  >
                     You
                  </Text>
                  <Tag
                     colorScheme='blue'
                     size='md'
                     className='categoryTag'
                  >
                     {props.category}
                  </Tag>
               </HStack>
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
                           placeholder={props.ideaTitle}
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
                                       className='p-0'
                                       _hover={{ bgColor: 'none' }}
                                    >
                                       <IconButton
                                          colorScheme='blue'
                                          aria-label='Search database'
                                          variant='outline'
                                          icon={
                                             <Icon content='fa-solid fa-eye-slash' />
                                          }
                                       />
                                    </AccordionButton>
                                 </div>
                                 <div className='d-flex'>
                                    <Button
                                       variant='outline'
                                       size='md'
                                       colorScheme='red'
                                       onClick={deleteOnToggle}
                                    >
                                       Delete Idea
                                    </Button>
                                    <SlideFade
                                       style={{ marginLeft: '3%' }}
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
                                             <Button colorScheme='red'>
                                                Yes
                                             </Button>
                                             <Button
                                                onClick={deleteOnToggle}
                                                colorScheme='twitter'
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
                              width={'10%'}
                              _hover={{ bgColor: 'none' }}
                              className='text-wrap'
                           >
                              <HStack>
                                 <IconButton
                                    colorScheme='blue'
                                    aria-label='Search database'
                                    variant='outline'
                                    icon={<Icon content='fa-solid fa-eye' />}
                                 />
                              </HStack>
                           </AccordionButton>
                        )}
                     </HStack>

                     <AccordionPanel className='hiddenPanel'>
                        <Editable
                           className='editablePara'
                           placeholder={props.content}
                        >
                           <EditablePreview />
                           <EditableTextarea
                              style={{ height: '20vh' }}
                              maxHeight={'max-content'}
                           />
                        </Editable>

                        <HStack>
                           <img
                              src={uploadImg}
                              alt='University of Greenwich'
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
                                 {openModal()}
                              </VStack>
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
                              {props.like}
                           </Button>
                           <Button
                              isDisabled
                              colorScheme='red'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-down' />
                              }
                           >
                              {props.dislike}
                           </Button>
                           <Button
                              onClick={() => {
                                 setShowComment(!showComment);
                              }}
                              leftIcon={
                                 <Icon content='fa-regular fa-comment-dots' />
                              }
                              variant='ghost'
                              colorScheme='gray'
                           >
                              {props.comment.length}
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
                                 placeholder='What do you think?'
                                 variant='outline'
                                 borderRadius={'20px'}
                              />
                              <InputRightElement>
                                 <IconButton
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
            <div className='container'>
               {showComment ? renderListComment() : ''}
            </div>
         </Card>
      </Accordion>
   );
};

export default YourIdeaPost;
