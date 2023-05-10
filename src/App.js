import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ShowList} />
        <Route path="/summary/:id" component={ShowSummary} />
        <Route path="/booking/:id" component={BookingForm} />
      </Switch>
    </Router>
  );
};

export default App;
