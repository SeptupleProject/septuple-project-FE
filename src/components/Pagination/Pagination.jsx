import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Icon from '../Icon/Icon';
const Pagination = (props) => {
   const items = props.data;
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = props.itemPerPage;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = items.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(items.length / itemsPerPage);
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
   };
   return (
      <>
         {props.renderTable(currentItems)}
         <ul className='w-100'>
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
         </ul>
      </>
   );
};

export default Pagination;
