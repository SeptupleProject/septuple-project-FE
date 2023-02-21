import {
   Text,
   Tag,
   Button,
   Card,
   CardBody,
   Divider,
   SkeletonText,
} from '@chakra-ui/react';
import React from 'react';
import '../../assets/scss/main.scss';

const IdeaPreview = () => {
   return (
      <Card
         width={'92%'}
         variant='elevated'
      >
         <CardBody className='post'>
            <div className='idea'>
               <i
                  className='fa-regular fa-circle-user avatarIcon'
                  size={'24px'}
               ></i>
               <Text
                  fontSize='5xl'
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
               <Divider
                  orientation='horizontal'
                  className='divider'
                  width={'40%'}
               />
               <Text
                  fontSize='3xl'
                  className='ideaTitle'
               >
                  Idea Title
               </Text>
            </div>

            <div className='skeleton'>
               <SkeletonText
                  mt='4'
                  noOfLines={5}
                  spacing='3'
                  skeletonHeight='2'
                  startColor='gray.200'
                  endColor='gray.200'
               />
               <Button
                  colorScheme='blue'
                  size='md'
                  variant='solid'
                  className='revealBtn'
               >
                  Reveal
               </Button>
            </div>
         </CardBody>
      </Card>
   );
};

export default IdeaPreview;
