import React, {Component, Fragment } from 'react';

import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
// import Auth from '../../features/auth/Auth'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import EventForm from'../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testArea/TestComponent'
// import API from '../../adapters/API';
import ModalManager from '../../features/modals/ModalManager';


class App extends Component {

  render(){
    
    
  return (

    <Fragment>
      <ModalManager/>
            <Route exact path='/' component={HomePage}/>
            <Route
             path='/(.+)'
            render ={() => (
              <Fragment>
              <NavBar/>
               
              <Container>
                <Switch >
                <Route exact path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailedPage}/>
                <Route path='/people' component={PeopleDashboard}/>
                <Route path='/profile/:id' component={UserDetailedPage}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route path={['/createEvent', '/manage/:id' ]}component={EventForm}/>
                <Route path='/test' component={TestComponent}/>
          
                </Switch>
              </Container>
              </Fragment>
              )}
              />
              </Fragment>
              
      );
  }
}

export default App;
