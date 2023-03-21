import React from 'react';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import {
   Center,
   Card,
   CardBody,
   HStack,
   Text,
   Tag,
   Badge,
   Stat,
   StatHelpText,
   StatLabel,
   StatArrow,
   StatNumber,
   Divider,
   VStack,
   TagLabel,
   TagLeftIcon,
} from '@chakra-ui/react';
import alternativeImg from '../../assets/img/gwuni.png';

const FeaturedPost = (props) => {
   let {
      categoryName,
      comments,
      content,
      createdBy,
      disLike,
      id,
      image,
      isAnonymous,
      like,
      title,
      views,
   } = props.item;
   switch (props.post) {
      case 'views':
         return (
            <Center>
               <Card
                  className='px-4 py-5'
                  variant='elevated'
                  borderBottom='solid 3px #9747FF'
                  borderTop='solid 1px rgba(0, 0, 0, 0.18)'
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
                              {createdBy}
                           </Text>
                           <Tag
                              colorScheme='blue'
                              size='md'
                              className='categoryTag'
                           >
                              {categoryName}
                           </Tag>
                        </HStack>
                     </div>
                     <HStack
                        spacing={3}
                        className='my-2'
                     >
                        <Text
                           fontSize='2xl'
                           fontWeight='bold'
                        >
                           {title}
                        </Text>
                        <Badge
                           className='mt-1'
                           colorScheme='purple'
                           variant='solid'
                        >
                           Most viewed idea post
                        </Badge>
                     </HStack>
                     <Text
                        fontSize='md'
                        className='my-3 text-justify'
                     >
                        {content}
                     </Text>
                     <HStack>
                        <img
                           src={image !== '' ? image : alternativeImg}
                           alt='...'
                           className='img-fluid image'
                        />
                        <Stat>
                           <StatLabel fontSize='lg'>Number of views</StatLabel>
                           <StatNumber
                              color='#9747FF'
                              fontWeight='semibold'
                              style={{ fontSize: '40px' }}
                           >
                              {views}
                           </StatNumber>
                           <StatHelpText>
                              <StatArrow type='increase' />
                              26% more than last month
                           </StatHelpText>
                        </Stat>

                        <VStack
                           spacing={6}
                           alignItems='flex-start'
                        >
                           <Tag
                              variant='outline'
                              colorScheme='pink'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-comment-dots' />
                              </div>
                              <TagLabel>{comments} comments</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='green'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-up' />
                              </div>
                              <TagLabel>{like} likes</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='red'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-down' />
                              </div>
                              <TagLabel>{disLike} dislikes</TagLabel>
                           </Tag>
                        </VStack>
                     </HStack>
                  </CardBody>
               </Card>
            </Center>
         );
      case 'comments':
         return (
            <Center>
               <Card
                  className='px-4 py-5'
                  variant='elevated'
                  borderBottom='solid 4px #D53F8C'
                  borderTop='solid 1px rgba(0, 0, 0, 0.18)'
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
                              {createdBy}
                           </Text>
                           <Tag
                              colorScheme='blue'
                              size='md'
                              className='categoryTag'
                           >
                              {categoryName}
                           </Tag>
                        </HStack>
                     </div>
                     <HStack
                        spacing={3}
                        className='my-2'
                     >
                        <Text
                           fontSize='xl'
                           fontWeight='bold'
                        >
                           {title}
                        </Text>
                        <Badge
                           colorScheme='pink'
                           variant='solid'
                           className='mt-1'
                        >
                           Most commented idea post
                        </Badge>
                     </HStack>
                     <Text
                        fontSize='md'
                        className='my-3 text-justify'
                     >
                        {content}
                     </Text>
                     <HStack>
                        <img
                           src={image !== '' ? image : alternativeImg}
                           alt='...'
                           className='img-fluid image'
                        />
                        <Stat>
                           <StatLabel fontSize='lg'>
                              Number of comments
                           </StatLabel>
                           <StatNumber
                              color='#D53F8C'
                              fontWeight='semibold'
                              style={{ fontSize: '40px' }}
                           >
                              {comments}
                           </StatNumber>
                           <StatHelpText>
                              <StatArrow type='increase' />
                              26% more than last month
                           </StatHelpText>
                        </Stat>

                        <VStack
                           spacing={6}
                           alignItems='flex-start'
                        >
                           <Tag
                              variant='outline'
                              colorScheme='purple'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-eye' />
                              </div>
                              <TagLabel>{views} views</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='green'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-up' />
                              </div>
                              <TagLabel>{like} likes</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='red'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-down' />
                              </div>
                              <TagLabel>{disLike} dislikes</TagLabel>
                           </Tag>
                        </VStack>
                     </HStack>
                  </CardBody>
               </Card>
            </Center>
         );
      case 'likes':
         return (
            <Center>
               <Card
                  className='px-4 py-2'
                  variant='elevated'
                  borderBottom='solid 4px #38A169'
                  borderTop='solid 1px rgba(0, 0, 0, 0.18)'
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
                              {createdBy}
                           </Text>
                           <Tag
                              colorScheme='blue'
                              size='md'
                              className='categoryTag'
                           >
                              {categoryName}
                           </Tag>
                        </HStack>
                     </div>
                     <HStack
                        spacing={3}
                        className='my-2'
                     >
                        <Text
                           fontSize='xl'
                           fontWeight='bold'
                        >
                           {title}
                        </Text>
                        <Badge
                           colorScheme='green'
                           variant='solid'
                           className='mt-1'
                        >
                           Most liked idea post
                        </Badge>
                     </HStack>
                     <Text
                        fontSize='md'
                        className='my-3 text-justify'
                     >
                        {content}
                     </Text>
                     <HStack>
                        <img
                           src={image !== '' ? image : alternativeImg}
                           alt='...'
                           className='img-fluid image'
                        />
                        <Stat>
                           <StatLabel fontSize='lg'>Number of likes</StatLabel>
                           <StatNumber
                              color='#38A169'
                              fontWeight='semibold'
                              style={{ fontSize: '40px' }}
                           >
                              {like}
                           </StatNumber>
                           <StatHelpText>
                              <StatArrow type='increase' />
                              26% more than last month
                           </StatHelpText>
                        </Stat>

                        <VStack
                           spacing={6}
                           alignItems='flex-start'
                        >
                           <Tag
                              variant='outline'
                              colorScheme='purple'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-eye' />
                              </div>
                              <TagLabel>{views} views</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='pink'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-comment-dots' />
                              </div>
                              <TagLabel>{comments} comments</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='red'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-down' />
                              </div>
                              <TagLabel>{disLike} dislikes</TagLabel>
                           </Tag>
                        </VStack>
                     </HStack>
                  </CardBody>
               </Card>
            </Center>
         );
      case 'dislikes':
         return (
            <Center>
               <Card
                  className='px-4 py-2'
                  variant='elevated'
                  borderBottom='solid 4px #FF0000CC'
                  borderTop='solid 1px rgba(0, 0, 0, 0.18)'
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
                              {createdBy}
                           </Text>
                           <Tag
                              colorScheme='blue'
                              size='md'
                              className='categoryTag'
                           >
                              {categoryName}
                           </Tag>
                        </HStack>
                     </div>
                     <HStack
                        spacing={3}
                        className='my-2'
                     >
                        <Text
                           fontSize='xl'
                           fontWeight='bold'
                        >
                           {title}
                        </Text>
                        <Badge
                           colorScheme='red'
                           variant='solid'
                        >
                           Most disliked idea post
                        </Badge>
                     </HStack>
                     <Text
                        fontSize='md'
                        className='my-3 text-justify'
                     >
                        {content}
                     </Text>
                     <HStack>
                        <img
                           src={image !== '' ? image : alternativeImg}
                           alt='...'
                           className='img-fluid image'
                        />
                        <Stat>
                           <StatLabel fontSize='lg'>
                              Number of dislikes
                           </StatLabel>
                           <StatNumber
                              color='#FF0000CC'
                              fontWeight='semibold'
                              style={{ fontSize: '40px' }}
                           >
                              {disLike}
                           </StatNumber>
                           <StatHelpText>
                              <StatArrow type='increase' />
                              26% more than last month
                           </StatHelpText>
                        </Stat>

                        <VStack
                           spacing={6}
                           alignItems='flex-start'
                        >
                           <Tag
                              variant='outline'
                              colorScheme='purple'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-eye' />
                              </div>
                              <TagLabel>{views} views</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='pink'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-comment-dots' />
                              </div>
                              <TagLabel>{comments} comments</TagLabel>
                           </Tag>
                           <Tag
                              variant='outline'
                              colorScheme='green'
                              size='lg'
                           >
                              <div className='mr-2'>
                                 <Icon content='fa-regular fa-thumbs-up' />
                              </div>
                              <TagLabel>{like} likes</TagLabel>
                           </Tag>
                        </VStack>
                     </HStack>
                  </CardBody>
               </Card>
            </Center>
         );
   }
};

export default FeaturedPost;
