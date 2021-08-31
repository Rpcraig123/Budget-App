const db = require('../db')
const { Expense } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const expenses = [
    {
      year: '2021',
      month: 'June',
      description: 'Bougt Shoes',
      ammount: 115.15
    },
    {
      year: '2021',
      month: 'July',
      description: 'Groceries',
      ammount: 38.75
    },
    {
      year: '2021',
      month: 'July',
      description: 'Gym Membership',
      ammount: 30.00
    },
    {
      year: '2021',
      month: 'August',
      description: 'Boardgame',
      ammount: 45.00
    },
    {
      year: '2021',
      month: 'August',
      description: 'McDonalds',
      ammount: 10.81
    },
    {
      year: '2021',
      month: 'August',
      description: 'Gas',
      ammount: 25.52
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