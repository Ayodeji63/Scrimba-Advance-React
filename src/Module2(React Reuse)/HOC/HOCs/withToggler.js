import React, { Component, useState } from 'react'



const Toggler = (props) => {
  const [on, setOn] = useState(props.defaultValue)
  const toggle = () => {
    setOn(prevState => !prevState)
  }
  const Component = props.component 
  return (
    <Component on = {on} toggle = {toggle} {...props} />
  )
}

export const withToggler = (component, optionObj) => {
  return function (props) {
    return (
      <Toggler component = {component} 
      defaultValue = {optionObj.defaultOnValue} {...props} />
    )
  }
}