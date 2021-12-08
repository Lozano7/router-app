import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutPages from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={AboutPages} exact />
        <Route path='/contact' component={ContactPage} exact />
        <Route path='/' component={HomePage} exact />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
