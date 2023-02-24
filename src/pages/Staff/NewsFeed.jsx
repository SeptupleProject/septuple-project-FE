import React from 'react';
import { VStack } from '@chakra-ui/react';
import IdeaPost from '../../components/IdeaPost/IdeaPost';
import YourIdeaPost from '../../components/IdeaPost/YourIdeaPost';

const NewsFeed = () => {
   return <VStack spacing={6} align='stretch'>
      <IdeaPost />
      <YourIdeaPost />
   </VStack>;
};

export default NewsFeed;
