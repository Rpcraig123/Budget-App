import React, { useState, useEffect } from 'react'
import PaymentHistory from "./Payment_History";
import axios from 'axios'
import { BASE_URL } from './globals'

function PaymentSection() {

  const [posts, setPosts] = useState([])
  const [request, changeIt] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res.data.payments)
    setPosts(res.data.payments)
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='pay_sect'>
      Payment Section
      <PaymentHistory />
    </div>
  )
}

export default PaymentSection;