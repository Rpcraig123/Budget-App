import { Route, Switch } from 'react-router-dom';
import ExpenseForm from './pages/ExpenseForm';
import Home from './pages/Home';
import PaymentForm from './pages/PaymentForm';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/add-expense' exact>
        <ExpenseForm />
      </Route>
      <Route path='/add-payment' exact>
        <PaymentForm />
      </Route>
    </Switch>
  </div>
}

export default App;
