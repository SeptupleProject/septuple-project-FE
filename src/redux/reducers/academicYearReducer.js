import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
const initialState = {
   listAcademicYear: [],
   academicYearDetail: {},
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
   },
});

export const { getAllAcademicYearReducer, getAcademicYearDetailReducer } =
   academicYearReducer.actions;

export default academicYearReducer.reducer;
