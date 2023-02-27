import { FormControl, Textarea } from '@chakra-ui/react';
import React from 'react';
import Icon from '../Icon/Icon';
import { Input, Alert, Switch } from '@chakra-ui/react';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createNewIdeaAction } from '../../redux/action/ideaAction';
import { FormErrorMessage } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import * as Yup from 'yup';
const PostIdea = () => {
   const [lock, setLock] = useState(false);
   const [post, setPost] = useState(false);
   const [uploadImg, setUploadImg] = useState(null);
   const titleInput = useRef(null);
   const contentInput = useRef(null);
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         title: '',
         content: '',
         views: 0,
         image: '',
         isAnonymous: 'false',
         createdBy: '',
      },
      validationSchema: Yup.object({
         title: Yup.string()
            .required('Title cannot be empty')
            .max(50, 'Title cannot be longer than 50 letters'),
         content: Yup.string().required('Idea cannot be empty'),
      }),
      onSubmit: (values) => {
         setPost(true);
         setTimeout(() => {
            setUploadImg(null);
            setPost(false);
         }, 700);
         dispatch(createNewIdeaAction(values));
         titleInput.current.value = '';
         contentInput.current.value = '';
      },
   });
   const handleOnSwitch = (e) => {
      let { name, checked } = e.target;
      formik.setFieldValue(name, checked);
      setLock(!lock);
   };

   const handleOnClick = () => {
      formik.handleSubmit();
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
         formik.setFieldValue('image', file);
      }
   };
   return (
      <FormControl
         isInvalid={formik.errors.title}
         className='row post-idea mx-0'
      >
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
                  ref={titleInput}
                  name='title'
                  placeholder='Title'
                  className='w-100'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.errors.title ? (
                  <FormErrorMessage
                     fontSize='md'
                     className='mt-2'
                  >
                     {formik.errors.title}
                  </FormErrorMessage>
               ) : null}
               <Textarea
                  ref={contentInput}
                  name='content'
                  height={150}
                  className='mt-4'
                  placeholder='What is your great idea today ?'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               ></Textarea>
               {formik.errors.content ? (
                  <FormErrorMessage
                     fontSize='md'
                     className='mt-2'
                  >
                     {formik.errors.content}
                  </FormErrorMessage>
               ) : null}
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
                  name='isAnonymous'
                  size='sm'
                  className='p-0 mt-1 mr-3'
                  onChange={(e) => {
                     handleOnSwitch(e);
                  }}
               />

               <Icon
                  content={lock ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'}
                  fontSize='15px'
               />
            </div>
         </div>
      </FormControl>
   );
};

export default PostIdea;
