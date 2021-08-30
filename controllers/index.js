const { Payment, Expense } = require('../models')

const getAllTransactions = async (req, res) => {
  try {
    const payments = await Payment.find()
    const expenses = await Expense.find()
    return res.status(201).json({
      payments, expenses
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createExpense = async (req, res) => {
  try {
    const expense = await new Expense(req.body)
    await expense.save()
    return res.status(201).json({
      expense
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createPayment = async (req, res) => {
  try {
    const payment = await new Payment(req.body)
    await payment.save()
    return res.status(201).json({
      payment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const removeExpense = async (req, res) => {
  try {
      const id = req.params.Id;
      const deleted = await Expense.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Expense deleted");
      }
      throw new Error("Expense not found");
      
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const removePayment = async (req, res) => {
  try {
      const id = req.params.Id;
      const deleted = await Payment.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Payment deleted");
      }
      throw new Error("Payment not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// const updateTransaction = async (req, res) => {
//   try {
//       const { id } = req.params;
//       await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
//           if (err) {
//               res.status(500).send(err);
//           }
//           if (!plant) {
//               res.status(500).send('Plant not found!');
//           }
//           return res.status(200).json(plant);
//       })
//   } catch (error) {
//       return res.status(500).send(error.message);
//   }
// }

module.exports = {
  getAllTransactions,
  createExpense,
  createPayment,
  removeExpense,
  removePayment
  // updateTransaction
}