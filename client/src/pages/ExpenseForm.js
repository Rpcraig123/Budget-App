function ExpenseForm(props) {

  const yearOnChange = (e) => {
    props.setYear(e.target.value)
  }
  const monthOnChange = (e) => {
    props.setMonth(e.target.value)
  }
  const descOnChange = (e) => {
    props.setDesc(e.target.value)
  }
  const amountOnChange = (e) => {
    props.setAmount(e.target.value)
  }

  return (
    <div className='add-ex'>
      Expense Form
      <form onSubmit={(e) => props.createNewPost(e)}>
        <input
          type="text"
          name="Year"
          placeholder="Year"
          onChange={(e) => yearOnChange(e)}
        />
        <input
          type="text"
          name="Month"
          placeholder="Month"
          onChange={(e) => monthOnChange(e)}
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          onChange={(e) => descOnChange(e)}
        />
        <input
          type="text"
          name="Amount($)"
          placeholder="Amount in USD"
          onChange={(e) => amountOnChange(e)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  )
}

export default ExpenseForm;