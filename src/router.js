import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Message from './components/Message';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <IndexPage>
        <Switch>
          <Route path="/notice" component={Message} />
        </Switch>
      </IndexPage>
    </Router>
  );
}

export default RouterConfig;
