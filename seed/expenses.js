const db = require('../db')
const { Expense } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const expenses = [
    {
      year: '2021',
      month: 'June',
      description: 'Bougt Shoes',
      amount: 115.15
    },
    {
      year: '2021',
      month: 'July',
      description: 'Groceries',
      amount: 38.75
    },
    {
      year: '2021',
      month: 'July',
      description: 'Gym Membership',
      amount: 30.00
    },
    {
      year: '2021',
      month: 'August',
      description: 'Boardgame',
      amount: 45.00
    },
    {
      year: '2021',
      month: 'August',
      description: 'McDonalds',
      amount: 10.81
    },
    {
      year: '2021',
      month: 'August',
      description: 'Gas',
      amount: 25.52
    }
  ]

  await Expense.insertMany(expenses)
  console.log('Created expenses!')
}

const run = async () => {
  await main()
  db.close()
}

run()