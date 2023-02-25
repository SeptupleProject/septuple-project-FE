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
import gwuni from '../../assets/img/gwuni.png';
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

const YourIdeaPost = () => {
   const [likeCount, setLikeCount] = useState(0);
   const [dislikeCount, setDislikeCount] = useState(0);
   const [activeBtn, setActiveBtn] = useState('none');
   const [lock, setLock] = useState(false);
   const { isOpen, onToggle } = useDisclosure();
   const [uploadImg, setUploadImg] = useState(gwuni);
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

   const handleLikeClick = () => {
      if (activeBtn === 'none') {
         setLikeCount(likeCount + 1);
         setActiveBtn('like');
         return;
      }

      if (activeBtn === 'like') {
         setLikeCount(likeCount - 1);
         setActiveBtn('none');
         return;
      }

      if (activeBtn === 'dislike') {
         setLikeCount(likeCount + 1);
         setDislikeCount(dislikeCount - 1);
         setActiveBtn('like');
      }
   };

   const handleDisikeClick = () => {
      if (activeBtn === 'none') {
         setDislikeCount(dislikeCount + 1);
         setActiveBtn('dislike');
         return;
      }

      if (activeBtn === 'dislike') {
         setDislikeCount(dislikeCount - 1);
         setActiveBtn('none');
         return;
      }

      if (activeBtn === 'like') {
         setDislikeCount(dislikeCount + 1);
         setLikeCount(likeCount - 1);
         setActiveBtn('dislike');
      }
   };

   const openModal = () => {};
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
                     CATEGORY 1
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
                           className='ideaTitle'
                           placeholder='Idea Title'
                           marginLeft={'1%'}
                        >
                           <EditablePreview />
                           <EditableInput />
                        </Editable>

                        {isExpanded ? (
                           <>
                              <div>
                                 <AccordionButton
                                    className='p-0'
                                    _hover={{ bgColor: 'none' }}
                                 >
                                    <IconButton
                                       className='mx-5'
                                       colorScheme='blue'
                                       aria-label='Search database'
                                       variant='outline'
                                       icon={
                                          <Icon content='fa-solid fa-eye-slash' />
                                       }
                                    />
                                 </AccordionButton>
                              </div>
                              <Button
                                 variant='outline'
                                 size='md'
                                 colorScheme='red'
                                 onClick={onToggle}
                              >
                                 Delete Post
                              </Button>

                              <SlideFade
                                 in={isOpen}
                                 marginLeft={'3%'}
                              >
                                 <HStack>
                                    <Text
                                       size='md'
                                       className='deleteBtn'
                                    >
                                       Are you sure?
                                    </Text>
                                    <ButtonGroup
                                       variant='ghost'
                                       size='sm'
                                    >
                                       <Button colorScheme='red'>Yes</Button>
                                       <Button colorScheme='twitter'>No</Button>
                                    </ButtonGroup>
                                 </HStack>
                              </SlideFade>
                           </>
                        ) : (
                           <AccordionButton
                              width={'10%'}
                              _hover={{ bgColor: 'none' }}
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
                           placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus. Sagittis id consectetur purus ut faucibus. Dolor purus non enim praesent. Amet nisl suscipit adipiscing bibendum est ultricies integer. Cras tincidunt lobortis feugiat vivamus at augue eget. Praesent semper feugiat nibh sed pulvinar proin gravida. Tincidunt ornare massa eget egestas. Tellus at urna condimentum mattis. Condimentum vitae sapien pellentesque habitant morbi. Arcu dictum varius duis at consectetur lorem donec massa. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Porta lorem mollis aliquam ut. Nisl vel pretium lectus quam.'
                        >
                           <EditablePreview />
                           <EditableTextarea maxHeight={'max-content'} />
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
                                    className='d-flex justify-content-center uploadBtn'
                                 >
                                    <HStack className='uploadStack'>
                                       <Icon
                                          content='fa-regular fa-image'
                                          color='#3182ce'
                                       />
                                       <p className='ml-1 uploadBtnText'>
                                          Change photo
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
                                 <b>Post Anonymously ?</b>
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
                                    onClick={() => {
                                       setUploadImg();
                                    }}
                                 >
                                    Upload
                                 </Button>
                              </VStack>
                           </div>
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
                              onClick={handleLikeClick}
                              className={`${
                                 activeBtn === 'like' ? 'like-active' : ''
                              }`}
                           >
                              {likeCount}
                           </Button>
                           <Button
                              colorScheme='red'
                              leftIcon={
                                 <Icon content='fa-regular fa-thumbs-down' />
                              }
                              onClick={handleDisikeClick}
                              className={`${
                                 activeBtn === 'dislike' ? 'dislike-active' : ''
                              }`}
                           >
                              {dislikeCount}
                           </Button>
                           <Button
                              isDisabled
                              leftIcon={
                                 <Icon content='fa-regular fa-comment-dots' />
                              }
                              colorScheme='black'
                           >
                              0
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
         </Card>
      </Accordion>
   );
};

export default YourIdeaPost;
