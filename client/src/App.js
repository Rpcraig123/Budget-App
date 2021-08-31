import { Route, Switch } from 'react-router-dom';
import ExpenseForm from './pages/ExpenseForm';
import Home from './pages/Home';
import PaymentForm from './pages/PaymentForm';
import MainNavigation from './components/layout/MainNavigation';
import React, { useState } from 'react'
import { BASE_URL } from './components/globals'
import axios from 'axios'

function App() {

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [desc, setDesc] = useState('')
  const [ammount, setAmmount] = useState('')
  let newPost = {
    year: ``,
    month: ``,
    description: ``,
    ammount: 0
  }

  const createNewPost = async (e) => {
    e.preventDefault()
    newPost = {
      year: `${year}`,
      month: `${month}`,
      description: `${desc}`,
      ammount: `${ammount}`
    }
    const res = await axios.post(`${BASE_URL}/new-expense`, newPost)
    return res
    
  }

  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/add-expense' exact>
        <ExpenseForm
          createNewPost={createNewPost}
          setYear={setYear}
          setMonth={setMonth}
          setDesc={setDesc}
          setAmmount={setAmmount}
        />
      </Route>
      <Route path='/add-payment' exact>
        <PaymentForm />
      </Route>
    </Switch>
  </div>
}

export default App;
