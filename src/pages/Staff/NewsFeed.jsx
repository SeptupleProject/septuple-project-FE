import React from 'react';
import PostIdea from '../../components/PostIdea/PostIdea';
import OtherIdeaPost from '../../components/IdeaPost/OtherIdeaPost';
import YourIdeaPost from '../../components/IdeaPost/YourIdeaPost';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Staff } from '../../settings/setting';
import { useDispatch } from 'react-redux';
import { getlistUserByRoleAction } from '../../redux/action/accountAction';
import { getUserDetailAction } from '../../redux/action/accountAction';
import { useEffect } from 'react';
import { getListIdeaAction } from '../../redux/action/ideaAction';
import { getCategoryDropdownAction } from '../../redux/action/categoryAction';
const NewsFeed = () => {
   const dispatch = useDispatch();
   const listOfIdeas = useSelector((state) => state.ideaReducer.listOfIdeas);
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   useEffect(() => {
      dispatch(getlistUserByRoleAction(Staff, signedInAccount.role));
      dispatch(getUserDetailAction(signedInAccount.id, signedInAccount.role));
      dispatch(getCategoryDropdownAction());
      dispatch(getListIdeaAction());
   }, []);

   useEffect(() => {
      dispatch(getListIdeaAction());
      let listIdeaInterval = setInterval(() => {
         dispatch(getListIdeaAction());
      }, 1000);
      return () => {
         clearInterval(listIdeaInterval);
      };
   }, []);

   const renderIdeas = () => {
      return listOfIdeas.map((item) => {
         if (signedInAccount.email === item.createdBy) {
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
         <div className='staff-newsfeed py-5'>
            <div
               className='mx-auto'
               style={{ width: '80%' }}
            >
               {signedInAccount.role === Staff ? <PostIdea /> : ''}
            </div>
            <div
               className='mx-auto'
               style={{ width: '70%' }}
            >
               <div className='mt-5'>{renderIdeas()}</div>
            </div>
         </div>
      </>
   );
};

export default NewsFeed;
