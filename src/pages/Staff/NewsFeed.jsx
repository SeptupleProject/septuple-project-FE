import React from 'react';
import PostIdea from '../../components/PostIdea/PostIdea';
import StaffComment from '../../components/StaffComment/StaffComment';
import IdeaPost from '../../components/IdeaPost/IdeaPost';
import YourIdeaPost from '../../components/IdeaPost/YourIdeaPost';
import { useSelector } from 'react-redux';

const NewsFeed = () => {
   const listOfIdeas = useSelector((state) => state.ideaReducer.listOfIdeas);

   const renderlistOfIdeas = () => {
      return listOfIdeas.map((item) => {
         return (
            <YourIdeaPost
               key={item.id}
               ideaTitle={item.title}
               content={item.content}
               category={item.category}
               img={item.img}
               like={item.like}
               dislike={item.dislike}
               comment={item.comments}
            />
         );
      });
   };
   return (
      <>
         <div className='staff-newsfeed pt-5'>
            <div style={{ width: '80%', margin: '0 auto' }}>
               {/* <PostIdea /> */}

               <div className='my-5'>{renderlistOfIdeas()}</div>
            </div>
         </div>
      </>
   );
};

export default NewsFeed;
