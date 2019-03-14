import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import HomePage from 'components/Layout';
import BorrowList from './routes/BorrowList';
import WrappedRegistrationForm from './routes/BorrowForm';
import ArticleEditor from './routes/ArticleEditor';
import ChangeImg from './routes/ChangeImg';

function App() {
  return (
    <Router>
        <Switch>
          <HomePage>
            <Route path="/" exact component={BorrowList} />
            <Route path="/detailrequest/:id" component={WrappedRegistrationForm} />
            <Route path="/article" component={ArticleEditor} />
            <Route path="/changeImg" component={ChangeImg} />
          </HomePage>
        </Switch>
    </Router>
  );
}

export default App;
