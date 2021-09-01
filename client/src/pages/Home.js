import ExpenseSection from '../components/Expense_Section';
import PaymentSection from '../components/Payment_Section';
// import axios from 'axios'
import React from 'react'
// import { BASE_URL } from './globals'

function HomePage() {

  return (
    <div className='home'>
      <ExpenseSection />
      <PaymentSection />
    </div>
  )
}

export default HomePage;