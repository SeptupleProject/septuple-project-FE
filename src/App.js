import { createBrowserHistory } from 'history';
import { Switch } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate';
import { Router } from 'react-router-dom';
import { FormTemplate } from './templates/FormTemplate';
import LogIn from './pages/LogIn/LogIn';
import AdminTemplate from './templates/AdminTemplate';
import CreateUser from './pages/Admin/User/CreateUser';
import UserDashboard from './pages/Admin/User/UserDashboard';
import UpdateUser from './pages/Admin/User/UpdateUser';
import AcademicDashboard from './pages/Admin/AcademicYear/AcademicDashboard';
import NewsFeed from './pages/Staff/NewsFeed';

export const history = createBrowserHistory();
function App() {
   return (
      <Router history={history}>
         <Switch>
            {/* staff routes */}
            <HomeTemplate
               path='/home'
               component={NewsFeed}
            />

            <HomeTemplate
               exact
               path='/staff-newsfeed'
               component={NewsFeed}
            />
            {/* common route  */}
            <FormTemplate
               path='/login'
               component={LogIn}
            />

            {/* administrator routes */}
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
            <HomeTemplate
               path='/'
               component={NewsFeed}
            />
         </Switch>
      </Router>
   );
}

export default App;
