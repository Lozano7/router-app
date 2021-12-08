import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import CategoriesPage from '../pages/CategoriesPage';
import CategoriesTerrorRouter from './CategoriesTerrorRouter';
import PrivateRoutes from './PrivateRoutes';
const CategoriesRouter = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <ul>
        <NavLink exact to={`${url}`} activeClassName='activeLink'>
          All
        </NavLink>
        <NavLink to={`${url}/terror`} activeClassName='activeLink'>
          Terror
        </NavLink>
        <NavLink to={`${url}/anime`} activeClassName='activeLink'>
          Anime
        </NavLink>
        <NavLink to={`${url}/ficcion`} activeClassName='activeLink'>
          ficcion
        </NavLink>
      </ul>
      <Switch>
        <Route path='/categories' component={CategoriesPage} exact />
        <PrivateRoutes
          path='/categories/terror'
          component={CategoriesTerrorRouter}
        ></PrivateRoutes>
        <Route path='/categories/anime' exact>
          <h1>Anime</h1>
        </Route>
        <Route path='/categories/ficcion' exact>
          <h1>Ficcion</h1>
        </Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoriesRouter;
