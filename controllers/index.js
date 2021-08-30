const { Payment, Expense } = require('../models')

const getAllTransactions = async (req, res) => {
  try {
    const shoes = await Shoe.find()
    return res.status(201).json({
      shoes
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createExpense = async (req, res) => {
  try {
    const shoe = await new Shoe(req.body)
    await shoe.save()
    return res.status(201).json({
      shoe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createPayment = async (req, res) => {
  try {
    const shoe = await new Shoe(req.body)
    await shoe.save()
    return res.status(201).json({
      shoe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const removeTransaction = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Plant.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Plant deleted");
      }
      throw new Error("Plant not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateTransaction = async (req, res) => {
  try {
      const { id } = req.params;
      await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
          if (err) {
              res.status(500).send(err);
          }
          if (!plant) {
              res.status(500).send('Plant not found!');
          }
          return res.status(200).json(plant);
      })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllTransactions,
  createExpense,
  createPayment,
  removeTransaction,
  updateTransaction
}