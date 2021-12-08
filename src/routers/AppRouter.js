import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutPages from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PaymentsPage from '../pages/PaymentsPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import CategoriesRouter from './CategoriesRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={AboutPages} exact />
        <Route path='/contact' component={ContactPage} exact />
        <Route path='/profile/:username' component={ProfilePage} exact />
        <Route path='/categories' component={CategoriesRouter} />
        <PublicRoutes path='/login' component={LoginPage} exact />
        <PublicRoutes path='/register' component={RegisterPage} exact />
        <PrivateRoutes path='/payment' component={PaymentsPage} exact />
        <PrivateRoutes path='/dashboard' component={DashboardPage} exact />
        <Route path='/' component={HomePage} exact />
        <Route path='/404' component={NotFoundPage} />
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </Router>
  );
}
