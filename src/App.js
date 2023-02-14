import { createBrowserHistory } from 'history';
import { Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';
import { Router } from 'react-router-dom';
import DashBoard from './pages/Staff/DashBoard';

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
            <HomeTemplate
               path='/'
               component={Home}
            />
         </Switch>
      </Router>
   );
}

export default App;
