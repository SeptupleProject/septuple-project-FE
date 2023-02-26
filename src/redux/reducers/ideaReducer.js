import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   listOfIdeas: [
      {
         id: '1',
         name: 'Kha Doan',
         category: 'Teaching Program',
         title: 'Encourage communication and collaboration',
         content:
            'Encourage faculty and staff to communicate regularly, share ideas, and collaborate on projects. Create spaces that facilitate communication, such as break rooms or online discussion forums.',
         img: 'https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_379589_workspace.hero.jpg',
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
      },
   ],
};

const ideaReducer = createSlice({
   name: 'ideaReducer',
   initialState,
   reducers: {},
});

export const {} = ideaReducer.actions;

export default ideaReducer.reducer;
