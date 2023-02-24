import React from 'react';
import PostIdea from '../../components/PostIdea/PostIdea';
import StaffComment from '../../components/StaffComment/StaffComment';
import IdeaPost from '../../components/IdeaPost/IdeaPost';
import YourIdeaPost from '../../components/IdeaPost/YourIdeaPost';

const NewsFeed = () => {
   const commentExample = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium reprehenderit totam voluptatibus, quasi provident blanditiis corrupti quae reiciendis aut minima ex, voluptatum sequi sunt molestiae mollitia explicabo deleniti cupiditate magnam? Voluptate consectetur nemo porro atque corporis accusantium vitae tempore amet minus officia. Vero mollitia dolor quaerat at nostrum, neque soluta ad dolore suscipit fugit veniam eos officiis nemo, nihil numquam? Doloremque corporis rerum, cum amet fuga at quos aliquid expedita ab! Quam maiores qui fuga vero hic alias beatae expedita pariatur officia, tempora necessitatibus. Veritatis, quibusdam beatae. Quisquam, et soluta. Ad exercitationem magni doloribus deserunt a nemo provident cumque? Consequuntur quaerat distinctio corporis placeat quae, possimus nisi maiores aspernatur ex, quia, non rerum quas! Repudiandae quis ea exercitationem? Praesentium, facere.`;

   return (
      <>
         <div className='staff-newsfeed pt-5'>
            <div style={{ width: '80%', margin: '0 auto' }}>
               <IdeaPost />
               <div className='mb-5'></div>
               <YourIdeaPost />
               <div className='mb-5'></div>
               {/* <PostIdea /> */}
               <div className='mb-5'></div>
               {/* <StaffComment
                  comment={commentExample}
                  name='Peter Parker'
               /> */}
            </div>
         </div>
      </>
   );
};

export default NewsFeed;
