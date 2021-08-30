const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllTransactions)

// router.post('/new-expense', controllers.createExpense)

// router.post('/new-payment', controllers.createPayment)

// router.delete('/remove-transaction', controllers.removeTransaction)

// router.update('/update-transaction', controllers.updateTransaction)

module.exports = router