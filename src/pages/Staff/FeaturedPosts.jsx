import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Staff } from '../../settings/setting';
import { useEffect } from 'react';
import { getStatisticIdeaAction } from '../../redux/action/ideaAction';
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost';
const FeaturedPosts = () => {
   const dispatch = useDispatch();
   const statisticList = useSelector(
      (state) => state.ideaReducer.statisticList
   );
   const statisticAction = useSelector(
      (state) => state.ideaReducer.statisticAction
   );
   useEffect(() => {
      dispatch(getStatisticIdeaAction());
   }, []);

   const handleGetStatisticInfor = (action) => {
      dispatch(getStatisticIdeaAction(action));
   };

   const renderListMostViewIdea = (array, action) => {
      if (array !== undefined) {
         return array.map((item) => {
            return (
               <div key={item.id}>
                  <div className='my-3 py-3 mx-auto'>
                     <FeaturedPost
                        item={item}
                        post={action}
                     />
                  </div>
               </div>
            );
         });
      }
   };
   return (
      <>
         <div className='staff-featuredposts pt-5'>
            <div className='staff-featuredposts-detail'>
               <Tabs
                  isFitted
                  variant='enclosed'
               >
                  <TabList className='staff-tabname'>
                     <Tab
                        onClick={() => {
                           handleGetStatisticInfor('views');
                        }}
                        _selected={{ bg: 'white' }}
                        color='purple.500'
                     >
                        Most Viewed Idea Posts
                     </Tab>
                     <Tab
                        onClick={() => {
                           handleGetStatisticInfor('comments');
                        }}
                        _selected={{ bg: 'white' }}
                        color='pink.500'
                     >
                        Most Commented Idea Posts
                     </Tab>
                     <Tab
                        onClick={() => {
                           handleGetStatisticInfor('likes');
                        }}
                        _selected={{ bg: 'white' }}
                        color='green.500'
                     >
                        Most Like Idea Posts
                     </Tab>
                     <Tab
                        _selected={{ bg: 'white' }}
                        color='red.500'
                        onClick={() => {
                           handleGetStatisticInfor('dislikes');
                        }}
                     >
                        Most Dislike Idea Posts
                     </Tab>
                  </TabList>
                  <TabPanels className='bg-white'>
                     <TabPanel>
                        <div className='container'>
                           {renderListMostViewIdea(
                              statisticList,
                              statisticAction
                           )}
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className='container'>
                           {renderListMostViewIdea(
                              statisticList,
                              statisticAction
                           )}
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className='container'>
                           {renderListMostViewIdea(
                              statisticList,
                              statisticAction
                           )}
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className='container'>
                           {renderListMostViewIdea(
                              statisticList,
                              statisticAction
                           )}
                        </div>
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            </div>
         </div>
      </>
   );
};

export default FeaturedPosts;
