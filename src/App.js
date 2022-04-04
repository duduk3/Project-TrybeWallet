import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditExpense from './pages/EditExpense';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
          <Route path="/edit-expense" component={ EditExpense } />
        </Switch>
      </div>
    );
  }
}

export default App;
