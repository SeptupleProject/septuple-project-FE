import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { today } from '../../settings/setting';
const initialState = {
   listAcademicYear: [],
   academicYearDetail: {},
   currentAcademicYear: {},
   daysLeft: 0,
};

const academicYearReducer = createSlice({
   name: 'academicYearReducer',
   initialState,
   reducers: {
      getAllAcademicYearReducer: (state, action) => {
         state.listAcademicYear = action.payload;
      },
      getAcademicYearDetailReducer: (state, action) => {
         let { id, name, endDate, startDate, ideaDeadline } = action.payload;
         let academicYearDetail = {
            id: id,
            name: name,
            endDate: moment(endDate).format('DD-MM-YYYY'),
            startDate: moment(startDate).format('DD-MM-YYYY'),
            ideaDeadline: moment(ideaDeadline).format('DD-MM-YYYY'),
         };
         state.academicYearDetail = academicYearDetail;
      },
      getCurrentAcademicYearReducer: (state, action) => {
         let { id, name, endDate, startDate, ideaDeadline } = action.payload;
         let currentAcademicYear = {
            id: id,
            name: name,
            endDate: moment(endDate).format('DD-MM-YYYY'),
            startDate: moment(startDate).format('DD-MM-YYYY'),
            ideaDeadline: moment(ideaDeadline).format('DD-MM-YYYY'),
         };
         state.currentAcademicYear = currentAcademicYear;
         var academicEndDate = moment(
            `${moment(ideaDeadline)?.format('DD-MM-YYYY')}`,
            'DD-MM-YYYY'
         );
         var today = moment(
            `${moment(today).format('DD-MM-YYYY')}`,
            'DD-MM-YYYY'
         );
         var daysLeft = academicEndDate.diff(today, 'days');
         state.daysLeft = daysLeft;
      },
   },
});

export const {
   getAllAcademicYearReducer,
   getAcademicYearDetailReducer,
   getCurrentAcademicYearReducer,
} = academicYearReducer.actions;

export default academicYearReducer.reducer;
