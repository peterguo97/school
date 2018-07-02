import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Message from './components/Message';
import Forum from './components/talk/Forum';
import Search from './components/search/mySearch';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <IndexPage>
        <Switch>
          <Route path="/notice" component={Message} />
          <Route path="/" exact component={Forum} />
          <Route path="/search" component = {Search} />
        </Switch>
      </IndexPage>
    </Router>
  );
}

export default RouterConfig;
