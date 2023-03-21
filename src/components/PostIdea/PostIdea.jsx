import Icon from '../Icon/Icon';
import {
   Text,
   Input,
   Alert,
   Switch,
   FormControl,
   Textarea,
   Button,
   Select,
   FormErrorMessage,
} from '@chakra-ui/react';
import { today } from '../../settings/setting';
import { useFormik } from 'formik';
import React, { useDispatch, useSelector } from 'react-redux';
import { createNewIdeaAction } from '../../redux/action/ideaAction';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import alert from '../../settings/alert';
import { resetFormInput } from '../../settings/common';
import { Slide } from 'react-toastify';
import { convertObjectToFormData } from '../../settings/common';
const PostIdea = () => {
   const [lock, setLock] = useState(false);
   const [post, setPost] = useState(false);
   const [switchInput, setSwitchInput] = useState(false);
   const [uploadImg, setUploadImg] = useState(null);
   const titleInput = useRef(null);
   const contentInput = useRef(null);
   const categoryInput = useRef(null);
   const dispatch = useDispatch();
   const currentAcademicYear = useSelector(
      (state) => state.academicYearReducer.currentAcademicYear
   );
   const listOfCategory = useSelector(
      (state) => state.categoryReducer.categoryDropdown
   );
   const formik = useFormik({
      initialValues: {
         title: '',
         content: '',
         File: null,
         isAnonymos: false,
         categoryId: '',
      },
      validationSchema: Yup.object({
         title: Yup.string()
            .required('We need a titlte !')
            .max(70, 'Title cannot be longer than 70 letters'),
         content: Yup.string().required('Share you idea !'),
         categoryId: Yup.string().required('What is your idea about ?'),
      }),
      onSubmit: (values) => {
         let newIdea = convertObjectToFormData(values);
         dispatch(createNewIdeaAction(newIdea));
         setPost(true);
         setLock(false);
         setSwitchInput(false);
         resetFormInput(titleInput, contentInput, categoryInput, switchInput);
      },
   });
   const handleOnSwitch = (e) => {
      let { name, checked } = e.target;
      formik.setFieldValue(name, checked);
      setLock(!lock);
      setSwitchInput(true);
   };
   const handleOnClick = () => {
      if (titleInput.current.value == '' || contentInput.current.value == '') {
         alert.warning(
            'Come on, fill in something!',
            'top-right',
            Slide,
            'dark'
         );
      } else {
         formik.handleSubmit();
      }
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
         reader.onload = (event) => {
            setUploadImg(event.target.result);
         };
         formik.setFieldValue('File', file);
      }
   };
   const unexpried = today <= currentAcademicYear.ideaDeadline;
   return (
      <FormControl
         id='postIdeaForm'
         isInvalid={(formik.errors.title, formik.errors.content)}
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
                  disabled={unexpried ? false : true}
                  ref={titleInput}
                  name='title'
                  placeholder='Title'
                  className='w-100'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.errors.title ? (
                  <Text
                     fontSize='md'
                     className='mt-1 text-danger'
                  >
                     {formik.errors.title}
                  </Text>
               ) : null}
               <Textarea
                  disabled={unexpried ? false : true}
                  ref={contentInput}
                  name='content'
                  height={150}
                  className='mt-3'
                  placeholder='What is your great idea today ?'
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               ></Textarea>
               {formik.errors.content ? (
                  <Text
                     fontSize='md'
                     className='mt-1 text-danger'
                  >
                     {formik.errors.content}
                  </Text>
               ) : null}

               <div className='w-100 mt-3 font-poppin'>
                  <Select
                     disabled={unexpried ? false : true}
                     color='#2B6CB0'
                     variant='filled'
                     size='md'
                     placeholder='Choose category'
                     onChange={formik.handleChange}
                     name='categoryId'
                     ref={categoryInput}
                     isRequired
                  >
                     {listOfCategory.map((item) => {
                        return (
                           <option
                              key={item.id}
                              value={item.id}
                           >
                              {item.name}
                           </option>
                        );
                     })}
                  </Select>
                  {formik.errors.categoryId ? (
                     <Text
                        fontSize='sm'
                        className='mt-1 text-danger'
                     >
                        {formik.errors.categoryId}
                     </Text>
                  ) : null}
               </div>

               <div className='w-100 d-flex justify-content-end'>
                  {unexpried ? (
                     <Button
                        style={{ width: 'fit-content' }}
                        className={post ? 'mt-4 button-post' : 'mt-3'}
                        colorScheme='facebook'
                        variant='outline'
                        onClick={handleOnClick}
                     >
                        <Icon
                           content='fa-solid fa-paper-plane'
                           fontSize='20px'
                        />
                     </Button>
                  ) : (
                     <Text
                        fontSize={17}
                        className='mt-4 alert alert-danger'
                     >
                        Idea deadline is overdue
                     </Text>
                  )}
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
                  disabled={unexpried ? false : true}
                  onChange={handleUploadImage}
                  accept='image/png,image/jpg,image/jpeg'
                  className='disappear'
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
                  disabled={unexpried ? false : true}
                  name='isAnonymos'
                  size='sm'
                  className='p-0 mt-1 mr-3'
                  onChange={(e) => {
                     handleOnSwitch(e);
                  }}
                  isChecked={switchInput}
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
