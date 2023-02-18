import { createBrowserHistory } from 'history';
import { Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';
import { Router } from 'react-router-dom';
import DashBoard from './pages/Staff/DashBoard';
import { FormTemplate } from './templates/FormTemplate';
import LogIn from './pages/LogIn/LogIn';
import AdminTemplate from './templates/AdminTemplate';
import AdminDashboard from './pages/Admin/User/UserDashboard';
import CreateUser from './pages/Admin/User/CreateUser';
import UserDashboard from './pages/Admin/User/UserDashboard';
import UpdateUser from './pages/Admin/User/UpdateUser';
import AcademicDashboard from './pages/Admin/AcademicYear/AcademicDashboard';

export const history = createBrowserHistory();
function App() {
   return (
      <Router history={history}>
         <Switch>
            <HomeTemplate
               path='/home'
               component={Home}
            />
            <HomeTemplate
               path='/staff-dash-board'
               component={DashBoard}
            />
            <FormTemplate
               path='/login'
               component={LogIn}
            />

            <AdminTemplate
               exact
               path='/user-dashboard'
               component={UserDashboard}
            />
            <AdminTemplate
               path='/user-update'
               component={UpdateUser}
            />
            <AdminTemplate
               path='/academic-dashboard'
               component={AcademicDashboard}
            />
            <AdminTemplate
               exact
               path='/user-dashboard/create-user'
               component={CreateUser}
            />
            <HomeTemplate
               path='/'
               component={Home}
            />
         </Switch>
      </Router>
   );
}

export default App;
