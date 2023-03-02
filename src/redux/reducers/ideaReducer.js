import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
   listOfIdeas: [
      {
         id: '0',
         email: 'khadoan@gmail.com',
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
               email: 'khadoan@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '2',
               email: 'baodinh@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '3',
               email: 'namnguyen@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
               Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
         ],
         isAnonymous: 'true',
         academicYear: '2022',
         views: '260',
      },
      {
         id: '1',
         email: 'khanhho@gmail.com',
         category: 'Working Environment',
         title: 'Provide professional development opportunities',
         content:
            'Offer workshops, seminars, and training sessions to help faculty and staff improve their skills and knowledge. This will not only enhance their job performance but also increase their job satisfaction.',
         image: 'https://coworkingmag.com/wp-content/uploads/sites/76/2018/12/wework-university-maryland-image-e1544932394567.jpg',
         like: '2',
         dislike: '0',
         comments: [
            {
               id: '1',
               email: 'khadoan@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '2',
               email: 'namnguyen@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
            Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
            {
               id: '3',
               email: 'thanhho@gmail.com',
               content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae fuga voluptatum ad? Sequi repellat voluptate autem iure rem odit laborum, vitae aut eaque cupiditate nemo aliquid placeat temporibus quas!
               Dignissimos ratione impedit eius omnis obcaecati voluptatum. Accusamus tenetur eligendi ipsum totam debitis, soluta perferendis possimus architecto incidunt ullam repellendus corporis mollitia explicabo dolorum ad minus iure necessitatibus expedita illum. Sed quas in quae, maiores ipsa nulla perspiciatis. Laboriosam quam a eos? Aut animi accusamus eaque, officiis necessitatibus laborum. Consequatur optio repudiandae laborum sunt temporibus? Iste minima hic vero eaque!`,
            },
         ],
         isAnonymous: 'false',
         academicYear: '2022',
         views: '260',
      },
   ],
};

const ideaReducer = createSlice({
   name: 'ideaReducer',
   initialState,
   reducers: {
      createNewIdeaReducer: (state, action) => {
         let { type, payload } = action;
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
         state.listOfIdeas = state.listOfIdeas.filter((item) => {
            return item.id !== action.payload;
         });
      },
      addCommentReducer: (state, action) => {
         let { type, payload } = action;
         console.log(payload);
         state.listOfIdeas.map((item) => {
            if (item.id === payload.ideaId) {
               let newComment = {
                  id: item.comments.length + 1,
                  email: payload.email,
                  content: payload.content,
               };
               item.comments.unshift(newComment);
            }
         });
      },
   },
});

export const { createNewIdeaReducer, deleteIdeaReducer, addCommentReducer } =
   ideaReducer.actions;

export default ideaReducer.reducer;
