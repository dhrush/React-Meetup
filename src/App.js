import {Route, Switch} from 'react-router-dom';

import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import FavoriteMeetup from './pages/FavoriteMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}><AllMeetup /></Route>
        <Route path='/new-meetup' exact={true}><NewMeetup /></Route>
        <Route path='/favorites' exact={true}><FavoriteMeetup /></Route>
      </Switch>
    </Layout>
  );
}

export default App;