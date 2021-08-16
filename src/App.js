import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Menu from './pages/Menu';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="dashboard/home" />
          </Route>

          <Route path="/dashboard/:menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
