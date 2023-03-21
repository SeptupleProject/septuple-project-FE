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
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import Icon from '../../components/Icon/Icon';
import { Slide, toast } from 'react-toastify';
import { getCurrentAcademicYearAction } from '../../redux/action/academicYearAction';
import moment from 'moment/moment';
const NewsFeed = () => {
   const dispatch = useDispatch();
   const listOfIdeas = useSelector((state) => state.ideaReducer.listOfIdeas);
   const signedInAccount = useSelector(
      (state) => state.accountReducer.signedInAccount
   );
   const currentAcademicYear = useSelector(
      (state) => state.academicYearReducer.currentAcademicYear
   );
   const USER_SIGNED_IN = localStorage.getItem('signedInAccount');
   const daysLeft = useSelector((state) => state.academicYearReducer.daysLeft);
   const items = listOfIdeas;
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 5;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = items.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(items.length / itemsPerPage);
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
   };
   useEffect(() => {
      if (USER_SIGNED_IN) {
         dispatch(getlistUserByRoleAction(Staff, signedInAccount.role));
         dispatch(
            getUserDetailAction(signedInAccount.id, signedInAccount.role)
         );
         dispatch(getCategoryDropdownAction());
         dispatch(getCurrentAcademicYearAction());
      }
      dispatch(getListIdeaAction());
   }, []);

   useEffect(() => {
      let listIdeaInterval = setInterval(() => {
         dispatch(getListIdeaAction());
      }, 1000);
      return () => {
         clearInterval(listIdeaInterval);
      };
   }, []);

   useEffect(() => {
      if (daysLeft > 0 && signedInAccount.role == Staff) {
         toast.info(`👋 Hey, ${daysLeft} days left to share your idea `, {
            transition: Slide,
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
         });
      }
   }, [daysLeft]);

   const renderIdeas = (currentItems) => {
      return currentItems.map((item) => {
         if (signedInAccount.email === item.createdBy) {
            return (
               <div
                  key={item.id}
                  className='my-5'
               >
                  <YourIdeaPost
                     currentAcademicYear={currentAcademicYear}
                     item={item}
                  />
               </div>
            );
         } else {
            return (
               <div
                  key={item.id}
                  className='my-5'
               >
                  <OtherIdeaPost
                     currentAcademicYear={currentAcademicYear}
                     item={item}
                  />
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
               <div className='mt-5'>
                  {renderIdeas(currentItems)}
                  <ReactPaginate
                     marginPagesDisplayed={1}
                     pageRangeDisplayed={1}
                     breakLabel='...'
                     breakClassName='pagin-list'
                     nextLabel={
                        <Button
                           colorScheme='facebook'
                           variant='ghost'
                           size='sm'
                        >
                           <Icon
                              content='fa-solid fa-caret-right'
                              fontSize='14px'
                           />
                        </Button>
                     }
                     onPageChange={handlePageClick}
                     pageCount={pageCount}
                     previousLabel={
                        <Button
                           colorScheme='facebook'
                           variant='ghost'
                           size='sm'
                        >
                           <Icon
                              content='fa-solid fa-caret-left'
                              fontSize='14px'
                           />
                        </Button>
                     }
                     renderOnZeroPageCount={null}
                     previousLinkClassName='pagin-link'
                     nextLinkClassName='pagin-link'
                     nextClassName='pagin-list'
                     previousClassName='pagin-list'
                     pageClassName='pagin-list my-1 mx-1'
                     activeLinkClassName='pagin-list active px-3 py-2 m-0'
                     containerClassName='d-flex justify-content-end w-90 mt-3'
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default NewsFeed;
