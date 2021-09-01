import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div className="Title">Budget App</div>
      <nav className="Links">
        <Link to='/'>
          <button>
            <p>Home</p>
          </button>
        </Link>
        <Link to='/add-expense'>
          <button>
            <p>Add Expense</p>
          </button>
        </Link>
        <Link to='/add-payment'>
          <button>
            <p>Add Payment</p>
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default MainNavigation;