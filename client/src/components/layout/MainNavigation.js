import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>Budget App</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Overview</Link>
          </li>
          <li>
            <Link to='/add-expense'>Add Expense</Link>
          </li>
          <li>
            <Link to='/add-payment'>Add Payment</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;