import React from 'react'
import style from './buttons.module.scss'

export default function Button () {
  return (
    <div>
        <input type="button" value='add item' className={style.addButton} />
    </div>
  )
}
