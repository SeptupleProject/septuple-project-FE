import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
export const HomeTemplate = (props) => {
   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return (
               <>
                  <Header />
                  <props.component {...propsRoute} />
                  <Footer />
               </>
            );
         }}
      />
   );
};
