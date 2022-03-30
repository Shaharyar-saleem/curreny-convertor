import React from 'react'

export default function Result(props) {
  return (
    <div className="mt-5 pt-5">
        <p style={{color: 'white'}}>{props.amount} {props.from} =</p>
        <h2 style={{color: 'white'}}>{props.result} {props.to}</h2>
    </div>
  )
}
