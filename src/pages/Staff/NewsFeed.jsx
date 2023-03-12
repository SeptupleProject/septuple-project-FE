import React from 'react';
import PostIdea from '../../components/PostIdea/PostIdea';
import OtherIdeaPost from '../../components/IdeaPost/OtherIdeaPost';
import YourIdeaPost from '../../components/IdeaPost/YourIdeaPost';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Staff } from '../../settings/setting';
const NewsFeed = () => {
   const listOfIdeas = useSelector((state) => state.ideaReducer.listOfIdeas);
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );

   const renderIdeas = () => {
      return listOfIdeas.map((item) => {
         if (signedInAccount.username === item.email) {
            return (
               <div
                  key={item.id}
                  className='my-5'
               >
                  <YourIdeaPost item={item} />
               </div>
            );
         } else {
            return (
               <div
                  key={item.id}
                  className='my-5'
               >
                  <OtherIdeaPost item={item} />
               </div>
            );
         }
      });
   };

   return (
      <>
         <Helmet>
            <title>IDEALLi</title>
         </Helmet>
         <div className=' staff-newsfeed pt-5'>
            <div style={{ width: '65%', margin: '0 auto' }}>
               {signedInAccount.role === Staff ? <PostIdea /> : ''}
               <div className='mt-5'>{renderIdeas()}</div>
            </div>
            <ToastContainer />
         </div>
      </>
   );
};

export default NewsFeed;
