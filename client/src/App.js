import { Route, Switch, withRouter} from 'react-router-dom';
import Home from './pages/Home';
import TransactionForm from './pages/TransactionForm';
import MainNavigation from './components/layout/MainNavigation';
import React, { useState } from 'react'
import { BASE_URL } from './components/globals'
import axios from 'axios'

function App(props) {

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  let newPost = {
    year: ``,
    month: ``,
    description: ``,
    amount: 0
  }

  const createNewPost = async (e, transType) => {
    e.preventDefault()
    newPost = {
      year: `${year}`,
      month: `${month}`,
      description: `${desc}`,
      amount: `${amount}`
    }
    const res = await axios.post(`${BASE_URL}/${transType}`, newPost)
    props.history.push(`/`)
    return res
  }

  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/add-expense' exact>
        <TransactionForm
          createNewPost={createNewPost}
          setYear={setYear}
          setMonth={setMonth}
          setDesc={setDesc}
          setAmount={setAmount}
          transType={'new-expense'}
        />
      </Route>
      <Route path='/add-payment' exact>
        <TransactionForm 
          createNewPost={createNewPost}
          setYear={setYear}
          setMonth={setMonth}
          setDesc={setDesc}
          setAmount={setAmount}
          transType={'new-payment'}
        />
      </Route>
    </Switch>
  </div>
}

export default withRouter(App);
