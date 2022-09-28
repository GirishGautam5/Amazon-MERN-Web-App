import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'

export default function Cart() {
    const [{basket}] = useStateValue();
  return (
    <div>Total items in Cart are {basket.length}</div>
  )
}
