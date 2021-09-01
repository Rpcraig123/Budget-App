import ExpenseSection from '../components/Expense_Section';
import PaymentSection from '../components/Payment_Section';
import React from 'react'

function HomePage() {

  return (
    <div className='home'>
      <ExpenseSection />
      <PaymentSection />
    </div>
  )
}

export default HomePage;