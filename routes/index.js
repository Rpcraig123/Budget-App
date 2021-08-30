const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllTransactions)

router.post('/new-expense', controllers.createExpense)

router.post('/new-payment', controllers.createPayment)

router.delete('/remove-expense/:Id', controllers.removeExpense)

router.delete('/remove-payment/:Id', controllers.removePayment)

// router.put('/update-expense', controllers.updateExpense)

// router.put('/update-payment', controllers.updatePayment)

module.exports = router