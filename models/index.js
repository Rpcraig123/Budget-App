const mongoose = require('mongoose')
const PaymentSchema = require('./payment')
const ExpenseSchema = require('./expense')

const Payment = mongoose.model('payments', PaymentSchema)
const Expense = mongoose.model('expenses', ExpenseSchema)

module.exports = {
  Payment,
  Expense
}