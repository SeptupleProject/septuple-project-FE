import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeTemplate } from './templates/HomeTemplate';
import { Router } from 'react-router-dom';
import { FormTemplate } from './templates/FormTemplate';
import LogIn from './pages/LogIn/LogIn';
import AdminTemplate from './templates/AdminTemplate';
import CreateUser from './pages/Admin/User/CreateUser';
import UserDashboard from './pages/Admin/User/UserDashboard';
import UpdateUser from './pages/Admin/User/UpdateUser';
import AcademicDashboard from './pages/Admin/AcademicYear/AcademicDashboard';
import CreateAcademic from './pages/Admin/AcademicYear/CreateAcademic';
import UpdateAcademic from './pages/Admin/AcademicYear/UpdateAcademic';
import NewsFeed from './pages/Staff/NewsFeed';
import QACoorDashboard from './pages/QaCoordinator/QACoorDashboard';
import StaffManagement from './pages/QaCoordinator/StaffManagement';
import DepartmentsDashboard from './pages/QaManager/Departments/DepartmentsDashboard';
import CategoriesDashboard from './pages/QaManager/Categories/CategoriesDashboard';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

export const history = createBrowserHistory();
function App() {
   const [loading, setLoading] = useState(false);

   // useEffect(() => {
   //    setTimeout(() => {
   //       setLoading(false);
   //    }, 1500);
   // }, []);

   return (
      <>
         {!loading ? (
            <Router history={history}>
               <Switch>
                  {/* common route  */}
                  <FormTemplate
                     path='/login'
                     component={LogIn}
                  />

                  {/* staff routes */}

                  <HomeTemplate
                     exact
                     path='/newsfeed'
                     component={NewsFeed}
                  />

                  {/* QA Coordinator routes */}
                  <AdminTemplate
                     exact
                     path='/qacoordinator-dashboard'
                     component={QACoorDashboard}
                  />
                  <AdminTemplate
                     exact
                     path='/staff-management'
                     component={StaffManagement}
                  />
                  {/* QA Manager routes */}
                  <AdminTemplate
                     exact
                     path='/department-dashboard'
                     component={DepartmentsDashboard}
                  />
                  <AdminTemplate
                     exact
                     path='/categories-dashboard'
                     component={CategoriesDashboard}
                  />
                  {/* Administrator routes */}
                  <AdminTemplate
                     exact
                     path='/user-dashboard'
                     component={UserDashboard}
                  />
                  <AdminTemplate
                     exact
                     path='/user-dashboard/create-user'
                     component={CreateUser}
                  />
                  <AdminTemplate
                     exact
                     path='/user-dashboard/update-user'
                     component={UpdateUser}
                  />
                  <AdminTemplate
                     exact
                     path='/academic-dashboard'
                     component={AcademicDashboard}
                  />
                  <AdminTemplate
                     exact
                     path='/academic-dashboard/create-academic'
                     component={CreateAcademic}
                  />
                  <AdminTemplate
                     exact
                     path='/academic-dashboard/update-academic'
                     component={UpdateAcademic}
                  />
                  <HomeTemplate
                     path='/'
                     component={NewsFeed}
                  />
               </Switch>
            </Router>
         ) : (
            <LoadingSpinner />
         )}
      </>
   );
}

export default App;
