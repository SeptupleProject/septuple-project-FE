import alert from './alert';
import moment from 'moment';
import { QAC, QAM, Staff } from './setting';

export const renderUserRole = (role) => {
   if (role === QAC) {
      return 'Quality Assurance Coordinator';
   } else if (role === QAM) {
      return 'Quality Assurance Manager';
   } else if (role === Staff) {
      return 'Staff';
   }
};
export const checkMatchedPassword = (pwd1, pwd2) => {
   return pwd1 === pwd2;
};

export const validateEmptyDate = (values) => {
   let valid = true;
   let object = {
      name: 'Name',
      startDate: 'Start date',
      endDate: 'End date',
   };
   for (const value in values) {
      if (values[value] === '') {
         for (const item in object) {
            if (item === value) {
               alert.error(`${object[item]} is empty`, 'top-right');
            }
         }
         valid = false;
      }
   }
   return valid;
};
export const validateDateInThePast = (values) => {
   let valid = false;
   const today = moment().format('YYYY-MM-DD');
   valid =
      values.startDate < values.endDate &&
      values.startDate >= today &&
      values.endDate >= today;
   if (valid === false) {
      alert.error(`Academic year is invalid`, 'top-right');
   }
   return valid;
};
export const validateDateToUpdate = (values, initialValues) => {
   let valid = false;
   if (
      values.startDate !== initialValues.startDate &&
      values.endDate == initialValues.endDate
   ) {
      alert.warning(
         'Please change both start date & end date',
         'top-right',
         null,
         'dark'
      );
   } else if (
      values.startDate === initialValues.startDate &&
      values.endDate !== initialValues.endDate
   ) {
      alert.warning(
         'Please change both start date & end date',
         'top-right',
         null,
         'dark'
      );
   } else {
      valid = values.startDate < values.endDate;
      if (valid === false) {
         alert.error(`Academic year is invalid`, 'top-right');
      }
   }
   return valid;
};
export const validateIdeaDeadline = (ideaDeadline, startDate, endDate) => {
   let valid = false;
   ideaDeadline = moment(ideaDeadline).toISOString();
   startDate = moment(startDate, 'DD.MM.YYYY HH:mm').toISOString();
   endDate = moment(endDate, 'DD.MM.YYYY HH:mm').toISOString();
   valid = startDate < ideaDeadline && ideaDeadline < endDate;
   if (!valid) {
      alert.warning('Idea deadline is invalid', 'top-right', null, 'dark');
   }
   return valid;
};
export const createObjectDateToUpdate = (id, startDate, endDate, values) => {
   let dateToUpdate = {};
   if (values.startDate == startDate && values.endDate == endDate) {
      dateToUpdate = {
         id: id,
         name: values.name,
         startDate: moment(values.startDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
         endDate: moment(values.endDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
      };
   } else if (values.startDate !== startDate && values.endDate !== endDate) {
      dateToUpdate = {
         id: id,
         name: values.name,
         startDate: moment(values.startDate).add(1, 'day').toISOString(),
         endDate: moment(values.endDate).add(1, 'day').toISOString(),
      };
   } else if (values.startDate == startDate && values.endDate !== endDate) {
      dateToUpdate = {
         id: id,
         name: values.name,
         startDate: moment(values.startDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
         endDate: moment(values.endDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
      };
   } else {
      dateToUpdate = {
         id: id,
         name: values.name,
         startDate: moment(values.startDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
         endDate: moment(values.endDate, 'DD.MM.YYYY HH:mm')
            .add(1, 'day')
            .toISOString(),
      };
   }
   return dateToUpdate;
};
export const renderOptionDepartment = (array) => {
   let arrayStaff = [];
   array.map((item) => {
      if (item.departmentName === '') {
         let newStaff = {
            label: item.email,
            value: item.id,
         };
         arrayStaff.push(newStaff);
      }
   });
   return arrayStaff;
};
export const renderOptionDepartmentUpdate = (array, departmentName) => {
   let arrayStaff = [];
   array.map((item) => {
      if (
         item.departmentName === '' ||
         item.departmentName === departmentName
      ) {
         let newStaff = {
            label: item.email,
            value: item.id,
         };
         arrayStaff.push(newStaff);
      }
   });
   return arrayStaff;
};
export const renderDefaultOptionDepartment = (array, role) => {
   let arrayToRender = [];
   if (array !== undefined) {
      array.map((item) => {
         if (item.role === role) {
            let newObject = {
               label: item.email,
               value: item.id,
            };
            arrayToRender.push(newObject);
         }
      });
   }
   return arrayToRender;
};
export const validateDepartmentInput = (
   coordinatorToAdd,
   staffToAdd,
   formik
) => {
   if (coordinatorToAdd === undefined && formik.errors.name) {
      alert.error('Please choose coordinator');
      alert.error(formik.errors.name);
   } else if (coordinatorToAdd === undefined) {
      alert.error('Please choose coordinator');
   } else if (formik.errors.name) {
      alert.error(formik.errors.name);
   } else {
      let coordinator = {
         id: coordinatorToAdd.value,
      };
      formik.initialValues.users.push(coordinator);
      let staff = {};
      if (staffToAdd.length > 0) {
         staffToAdd.map((item) => {
            staff = {
               id: item.value,
            };
            formik.initialValues.users.push(staff);
         });
      }
      formik.handleSubmit();
   }
};
export const validateDepartmentInputUpdate = (
   coordinatorToAdd,
   staffToAdd,
   formik
) => {
   let initialCoordinator = formik.initialValues.users.filter((item) => {
      return item.role !== Staff;
   });
   if (initialCoordinator !== coordinatorToAdd) {
      formik.initialValues.users = [...staffToAdd].concat(coordinatorToAdd);
   } else {
      formik.initialValues.users = [...staffToAdd].concat(initialCoordinator);
   }
};
export const convertUserToIdArray = (array) => {
   let arrayAfter = [];
   for (const item in array) {
      let newObject = {
         id: array[item].value,
      };
      arrayAfter.push(newObject);
   }
   return arrayAfter;
};


export const convertObjectToFormData = (values) => {
   let ideaUpdate = new FormData();
   if (values.File === null) {
      for (const key in values) {
         if (key !== 'File') {
            ideaUpdate.append(key, values[key]);
         }
      }
   } else {
      for (const key in values) {
         if (key !== 'image') {
            if (key !== 'File') {
               ideaUpdate.append(key, values[key]);
            } else {
               ideaUpdate.append('File', values.File, values.File.name);
            }
         }
      }
   }
   return ideaUpdate;
};

export const convertContentToArray = (value) => {
   let convertToString = null;
   if (typeof value == 'string') {
      convertToString = value;
   } else {
      convertToString = JSON.stringify(value);
   }
   return (convertToString = convertToString.split(' '));
};