import React from 'react'

const withFavoriteNumber = (component) => {
    const Component = component
  return function (props) {
    return(
        <Component favoriteNum = "My favorite number is 18" {...props} />
      )
  } 
}

export default withFavoriteNumber