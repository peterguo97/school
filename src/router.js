import { Router, Route, Switch } from 'dva/router';
import MyMessage from './routes/Message';
import MyForum from './routes/Forum';
import MySearch from './routes/Search';
import Person from './routes/Person/myperson';
import ChangeMessage from "./routes/Person/changeMessage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/notice" component={MyMessage} />
        <Route path="/" exact component={MyForum} />
        <Route path="/search" component = {MySearch} />
        <Route path="/me" component = {Person} />
        <Route path="/change" component = {ChangeMessage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
