import React from 'react'
import style from './items.module.scss'

function Item(props) {
    const [productName,productPrice]=props;
  return (
    <div>
        <p>{productName} <br />{productPrice}</p>
    </div>
  )
}

export default Item