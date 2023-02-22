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
   IconButton
} from '@chakra-ui/react';
import React from 'react';
import '../../assets/scss/main.scss';
import gwuni from '../../assets/img/gwuni.png'
import Icon from '../Icon/Icon';

const IdeaPost = () => {
   return (
      <Accordion allowToggle>
         <Card
            width={'92%'}
            variant='elevated'
         >

            <CardBody className='post'>
               {/* <div className='idea'> */}
               <HStack spacing='13px' align='center'>
                  <Icon
                     content='fa-regular fa-circle-user'
                     fontSize='62px'
                     color='#2b6cb0'
                     className='iconAvatar'
                  ></Icon>
                  <Text
                     fontSize='4xl'
                     className='staffName'
                  >
                     Segun Adebayo
                  </Text>
                  <Tag
                     colorScheme='blue'
                     size='lg'
                     className='categoryTag'
                  >
                     CATEGORY 1
                  </Tag>
                  
               </HStack>   
               {/* </div> */}


            </CardBody>
            <AccordionItem>


               {({ isExpanded }) => (
                  <>
                     <AccordionButton className='hiddenArea' >

                        {isExpanded ? (
                           <>
                              <Text
                                 fontSize='3xl'
                                 className='ideaTitle'
                              >
                                 Idea Title
                              </Text>
                              <Divider orientation='row' p={4} />
                              <Button 
                                 variant='outline'
                                 size='lg'
                                 colorScheme='blue'
                              >
                                 Collapse
                              </Button></>

                        ) : (
                           <>
                              <Text
                                 fontSize='3xl'
                                 className='ideaTitle'
                              >
                                 Idea Title
                              </Text>
                              <Divider orientation='row' p={4} />
                              <Button variant='solid'
                                 size='lg'
                                 colorScheme='blue'
                              >
                                 Reveal
                              </Button>
                           </>

                        )}
                     </AccordionButton>

                     <AccordionPanel className='hiddenPanel'>
                        <div className='ideaPara'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique sollicitudin nibh. Pharetra pharetra massa massa ultricies mi. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Libero justo laoreet sit amet cursus sit. In ornare quam viverra orci sagittis. Ac felis donec et odio pellentesque diam volutpat commodo sed. Gravida neque convallis a cras semper. Massa sapien faucibus et molestie ac feugiat. Duis at tellus at urna. Neque viverra justo nec ultrices dui sapien eget mi proin. Cras fermentum odio eu feugiat pretium nibh. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Habitant morbi tristique senectus et netus et malesuada fames ac. In fermentum posuere urna nec tincidunt. Adipiscing at in tellus integer feugiat scelerisque. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Diam quis enim lobortis scelerisque fermentum. Ac tortor vitae purus faucibus ornare suspendisse sed. Arcu non odio euismod lacinia at quis risus sed.
                        </div>

                        <img
                           src={gwuni}
                           alt='University of Greenwich'
                           className='image'
                        />

                        <ButtonGroup variant='ghost' size='lg'>
                           <Button _focus={{ color: '#2b6cb0' }} leftIcon={<Icon content='fa-regular fa-thumbs-up' />} >12</Button>
                           <Button _focus={{ color: '#e53e3e' }} leftIcon={<Icon content='fa-regular fa-thumbs-down' />}>5</Button>
                           <Button isDisabled leftIcon={<Icon content='fa-regular fa-comment-dots' />}>22</Button>
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
                                 borderRadius={'20px'} />
                              <InputRightElement>
                                 <IconButton 
                                    icon={<Icon 
                                             content='fa-regular fa-paper-plane' 
                                             fontSize='15px' />}
                                    variant='ghost'
                                    colorScheme='blue' />
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
