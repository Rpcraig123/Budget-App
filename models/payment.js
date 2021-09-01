const { Schema } = require('mongoose')

const Payment = new Schema(
  {
    year: { type: String, required: true },
    month: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Payment