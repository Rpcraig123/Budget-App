function PaymentForm() {

  return (
    <div className='add-pay'>
      Payment Form
      <form>
        <input
          type="text"
          name="Year"
          placeholder="Year"
        />
        <input
          type="text"
          name="Month"
          placeholder="Month"
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
        />
        <input
          type="text"
          name="Amount($)"
          placeholder="Amount in USD"
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  )
}

export default PaymentForm;