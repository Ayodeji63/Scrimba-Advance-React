import React, { Component } from 'react'

const ExtraAddedProps = (component) => {
    const Component = component
  return function (props) {
    return  (
        <Component strange = "This is an higher order function" {...props} />
      )
  }
}

export default ExtraAddedProps