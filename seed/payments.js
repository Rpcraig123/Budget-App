const db = require('../db')
const { Payment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const payments = [
    {
      year: '2021',
      month: 'June',
      description: 'paycheck',
      amount: 115
    },
    {
      year: '2021',
      month: 'July',
      description: 'birthday money',
      amount: 25
    }
  ]

  await Payment.insertMany(payments)
  console.log('Created payments!')
}

const run = async () => {
  await main()
  db.close()
}

run()