import {
   Text,
   Tag,
   Button,
   Card,
   CardBody,
   Divider,
   Accordion,
   AccordionItem,
   AccordionPanel,
   AccordionButton,
   ButtonGroup,
   HStack,
   Input,
   InputGroup,
   InputRightElement,
   IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import '../../assets/scss/main.scss';
import gwuni from '../../assets/img/gwuni.png';
import Icon from '../Icon/Icon';

const IdeaPost = () => {
   const [likeCount, setLikeCount] = useState(0);
   const [dislikeCount, setDislikeCount] = useState(0);
   const [activeBtn, setActiveBtn] = useState('none');

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

   return (
      <Accordion allowToggle>
         <Card variant='elevated'>
            <CardBody className='post'>
               <HStack
                  spacing='13px'
                  align='center'
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
                     Segun Adebayo
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
            >
               {({ isExpanded }) => (
                  <>
                     <AccordionButton
                        style={{ width: 'fit-content' }}
                        className='m-2'
                     >
                        {isExpanded ? (
                           <HStack>
                              <Text
                                 fontSize='2xl'
                                 className='ideaTitle'
                              >
                                 Idea Title
                              </Text>
                              <Divider
                                 orientation='row'
                                 p={4}
                              />

                              <div className=''>
                                 <IconButton
                                    className='m-0 p-0'
                                    colorScheme='blue'
                                    aria-label='Search database'
                                    variant='outline'
                                    icon={
                                       <Icon content='fa-solid fa-eye-slash' />
                                    }
                                 />
                              </div>
                           </HStack>
                        ) : (
                           <HStack>
                              <Text
                                 fontSize='2xl'
                                 className='ideaTitle'
                              >
                                 Idea Title
                              </Text>
                              <Divider
                                 orientation='row'
                                 p={4}
                              />
                              <div>
                                 <IconButton
                                    className='m-0 p-0'
                                    colorScheme='blue'
                                    aria-label='Search database'
                                    variant='outline'
                                    icon={<Icon content='fa-solid fa-eye' />}
                                 />
                              </div>
                           </HStack>
                        )}
                     </AccordionButton>

                     <AccordionPanel className='hiddenPanel'>
                        <div className='ideaPara'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Consectetur adipiscing elit duis
                           tristique sollicitudin nibh. Pharetra pharetra massa
                           massa ultricies mi. Cras fermentum odio eu feugiat
                           pretium nibh ipsum consequat nisl. Libero justo
                           laoreet sit amet cursus sit. In ornare quam viverra
                           orci sagittis. Ac felis donec et odio pellentesque
                           diam volutpat commodo sed. Gravida neque convallis a
                           cras semper. Massa sapien faucibus et molestie ac
                           feugiat. Duis at tellus at urna. Neque viverra justo
                           nec ultrices dui sapien eget mi proin. Cras fermentum
                           odio eu feugiat pretium nibh. Et odio pellentesque
                           diam volutpat commodo sed egestas egestas fringilla.
                           Habitant morbi tristique senectus et netus et
                           malesuada fames ac. In fermentum posuere urna nec
                           tincidunt. Adipiscing at in tellus integer feugiat
                           scelerisque. Platea dictumst vestibulum rhoncus est
                           pellentesque elit ullamcorper dignissim. Diam quis
                           enim lobortis scelerisque fermentum. Ac tortor vitae
                           purus faucibus ornare suspendisse sed. Arcu non odio
                           euismod lacinia at quis risus sed.
                        </div>

                        <img
                           src={gwuni}
                           alt='University of Greenwich'
                           className='image'
                        />

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

export default IdeaPost;
