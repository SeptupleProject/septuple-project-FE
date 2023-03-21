import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getIdeasCommentsByDeptAction } from '../../redux/action/ideaAction';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const QACoorDashboard = () => {
   const labels = ['Comments', 'Ideas'];
   const datasets = [];
   const dispatch = useDispatch();
   const ideaCommentsByDept = useSelector(
      (state) => state.ideaReducer.ideaCommentsByDept
   );
   if (ideaCommentsByDept.length > 0) {
      ideaCommentsByDept.map((item) => {
         let object = {
            label: `${item.name}`,
            data: [item.numOfCmts, item.numOfIdeas],
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
               16
            )}`,
         };
         return datasets.push(object);
      });
   }
   const data = {
      labels,
      datasets: datasets,
   };
   useEffect(() => {
      dispatch(getIdeasCommentsByDeptAction());
   }, []);
   return (
      <div className='w-90 mt-3'>
         <Bar
            className='w-100 h-100'
            data={data}
         />
      </div>
   );
};

export default QACoorDashboard;
