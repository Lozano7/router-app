import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const CategoriesTerrorRouter = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <ul>
        <NavLink exact to={`${url}`} activeClassName='activeLink'>
          All
        </NavLink>
        <NavLink to={`${url}/gore`} activeClassName='activeLink'>
          Gore
        </NavLink>
        <NavLink to={`${url}/vanilla`} activeClassName='activeLink'>
          Vanilla
        </NavLink>
      </ul>
      <Switch>
        <Route exact path={url}>
          <h1>Terror</h1>
        </Route>
        <Route path={`${url}/gore`}>
          <h1>Gore</h1>
        </Route>
        <Route path={`${url}/vanilla`}>
          <h1>vanilla</h1>
        </Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoriesTerrorRouter;
