import React from 'react';

const Footer = () => {
   return (
      <div
         style={{ backgroundColor: 'white' }}
         className='container-fluid '
      >
         <footer className='text-center'>
            <div className='container'>
               <section className='mt-5'>
                  <div className='row text-center d-flex justify-content-center'>
                     <div className='col-md-2'>
                        <h6 className='text-uppercase font-weight-bold'>
                           <a className='text-blue'>About us</a>
                        </h6>
                     </div>
                     <div className='col-md-2'>
                        <h6 className='text-uppercase font-weight-bold'>
                           <a className='text-blue'>Products</a>
                        </h6>
                     </div>
                     <div className='col-md-2'>
                        <h6 className='text-uppercase font-weight-bold'>
                           <a className='text-blue'>Awards</a>
                        </h6>
                     </div>
                     <div className='col-md-2'>
                        <h6 className='text-uppercase font-weight-bold'>
                           <a className='text-blue'>Help</a>
                        </h6>
                     </div>
                     <div className='col-md-2'>
                        <h6 className='text-uppercase font-weight-bold'>
                           <a className='text-blue'>Contact</a>
                        </h6>
                     </div>
                  </div>
               </section>
               <hr className='mb-2 my-5' />

               <section className='text-center mb-5'>
                  <a className='text-blue mx-1'>
                     <i className='fab fa-facebook-f' />
                  </a>
                  <a className='text-blue mx-3'>
                     <i className='fab fa-twitter' />
                  </a>
                  <a className='text-blue mx-3'>
                     <i className='fab fa-google' />
                  </a>
                  <a className='text-blue mx-3'>
                     <i className='fab fa-instagram' />
                  </a>
                  <a className='text-blue mx-3'>
                     <i className='fab fa-linkedin' />
                  </a>
                  <a className='text-blue mx-3'>
                     <i className='fab fa-github' />
                  </a>
               </section>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
