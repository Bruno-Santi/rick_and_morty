import React from 'react'
import SearchBar from '../SearchBar'
import style from './Nav.module.css'
export default function Nav(props) {
  return (
    <div>
     
      <div className = {style.navBar}>
      <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  )
}
