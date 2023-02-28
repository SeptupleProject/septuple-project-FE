import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
   listOfIdeas: [
      {
         id: '0',
         name: 'Kha Doan',
         category: 'Teaching Program',
         title: 'Encourage communication and collaboration',
         content:
            'Encourage faculty and staff to communicate regularly, share ideas, and collaborate on projects. Create spaces that facilitate communication, such as break rooms or online discussion forums.',
         image: 'https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_379589_workspace.hero.jpg',
         like: '2',
         dislike: '0',
         comments: [
            {
               id: '1',
               name: 'Kha Doan',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '2',
               name: 'Bao Dinh',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '3',
               name: 'Nam Nguyen',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
               Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
         ],
         isAnonymous: 'true',
         academicYear: '2022',
         createdBy: 'doanvinhkha@gmail.com',
         createdAt: '',
         views: '260',
      },
   ],
   comment: [],
};

const ideaReducer = createSlice({
   name: 'ideaReducer',
   initialState,
   reducers: {
      createNewIdeaReducer: (state, action) => {
         let { type, payload } = action;
         console.log(payload);
         let count = state.listOfIdeas.length;
         let idea = {
            id: count++,
            title: payload.title,
            content: payload.content,
            category: payload.category,
            image: payload.image,
            like: 0,
            dislike: 0,
            comment: state.comment,
            isAnonymous: payload.isAnonymous,
            views: 0,
         };
         state.listOfIdeas.push(idea);
         localStorage.setItem('listOfIdeas', JSON.stringify(state.listOfIdeas));
      },
      deleteIdeaReducer: (state, action) => {
         console.log(current(state.listOfIdeas));
         state.listOfIdeas = state.listOfIdeas.filter((item) => {
            return item.id !== action.payload;
         });
      },
   },
});

export const { createNewIdeaReducer, deleteIdeaReducer } = ideaReducer.actions;

export default ideaReducer.reducer;
