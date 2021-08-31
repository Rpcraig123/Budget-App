import React, { useState, useEffect } from 'react'
import PaymentHistory from "./Payment_History";
import axios from 'axios'
import { BASE_URL } from './globals'

function PaymentSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setPosts(res.data.payments)
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='pay_sect'>
      Payments
      {posts.map((result) => (
            <PaymentHistory
              key={result._id}
              year={result.year}
              month={result.month}
              description={result.description}
              amount={result.amount}
            />
          )
        )
      }
    </div>
  )
}

export default PaymentSection;