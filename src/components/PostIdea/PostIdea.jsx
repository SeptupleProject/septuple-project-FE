import { Textarea } from '@chakra-ui/react';
import React from 'react';
import Icon from '../Icon/Icon';
import { Input, Alert, Switch } from '@chakra-ui/react';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
const PostIdea = () => {
   const [lock, setLock] = useState(false);
   const [post, setPost] = useState(false);
   const [uploadImg, setUploadImg] = useState(null);
   const handleOnChange = () => {
      setLock(!lock);
   };
   const handleOnClick = () => {
      setPost(true);
      setTimeout(() => {
         setUploadImg(null);
         setPost(false);
      }, 700);
   };
   const handleUploadImage = (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => setUploadImg(event.target.result);
         // formik.setFieldValue('hinhAnh', file);
      }
   };
   return (
      <div className='row post-idea mx-0'>
         <div className='col-10 d-flex px-0 mx-0'>
            <div
               style={{ width: '10%' }}
               className='post-idea-avatar text-center'
            >
               <Icon
                  color='#2B6CB0'
                  content='fa-regular fa-circle-user'
                  fontSize='40px'
               />
            </div>
            <div
               style={{ width: '90%' }}
               className='post-idea-input'
            >
               <Input
                  placeholder='Title'
                  className='w-100'
                  type='text'
               />

               <Textarea
                  height={150}
                  className='mt-4'
                  placeholder='What is your great idea today ?'
                  type='text'
               ></Textarea>
               <div className='w-100 d-flex justify-content-end'>
                  <Button
                     style={{ width: 'fit-content' }}
                     className={post ? 'mt-3 button-post' : 'mt-3'}
                     colorScheme='facebook'
                     variant='outline'
                     onClick={handleOnClick}
                  >
                     <Icon
                        content='fa-solid fa-paper-plane'
                        fontSize='20px'
                     />
                  </Button>
               </div>
            </div>
         </div>
         <div className='col-2 px-0 mx-0 text-center'>
            <div className='container w-75'>
               <label
                  className='button-upload-img'
                  htmlFor='loadImgInput'
               >
                  <div className='d-flex align-middle'>
                     <Icon content='fa-solid fa-folder-plus' />
                     <p className='ml-1'>Photos</p>
                  </div>
               </label>
               <input
                  onChange={handleUploadImage}
                  accept='image/png,image/jpg,image/jpeg'
                  className='disapear'
                  id='loadImgInput'
                  type='file'
               />
               {uploadImg == null ? (
                  <Alert
                     style={{ borderRadius: '8px' }}
                     status='success'
                     variant='top-accent'
                     className='d-block text-left mt-3'
                  >
                     <div>
                        <b>Photo</b>
                     </div>
                     <div>
                        <span>photo.png</span>
                     </div>
                  </Alert>
               ) : (
                  <img
                     className='img-fluid'
                     src={uploadImg}
                  />
               )}
            </div>
            <div className='my-3'>
               <b>Post Anonymously ?</b>
            </div>
            <div className='d-flex justify-content-center align-middle'>
               <Switch
                  size='sm'
                  className='p-0 mt-1 mr-3'
                  onChange={handleOnChange}
               />

               <Icon
                  content={lock ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'}
                  fontSize='15px'
               />
            </div>
         </div>
      </div>
   );
};

export default PostIdea;
