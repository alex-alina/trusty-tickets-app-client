import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import EventsListContainer from './components/events/EventsListContainer';
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import CreateEventPage from './components/events/CreateEventPage'
import EventDetailsContainer from './components/events/EventDetailsContainer'
import CreateTicketPage from './components/tickets/CreateTicketPage';

class App extends Component {
  render() {
    return (
<Router>
        <div>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/events" component={EventsListContainer} />
            <Route exact path="/events-add" component={CreateEventPage} />
            <Route exact path="/tickets-add" component={CreateTicketPage} />
            <Route path="/events/:id" component={EventDetailsContainer} />
            {/* <Route path="/events/:id/tickets/:ticketId" component={TicketDetailsContainer} /> */}

            <Route exact path="/" render={ () => <Redirect to="/events" /> } />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
