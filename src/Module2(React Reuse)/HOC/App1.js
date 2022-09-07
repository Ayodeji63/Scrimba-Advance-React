import React from 'react'
import { withPointlessHOC } from './Module2(React Reuse)/HOC/withPointlessHOC'
import ExtraAddedProps from './Module2(React Reuse)/HOC/ExtraAddedProps'
import withFavoriteNumber from './Module2(React Reuse)/HOC/withFavoriteNumber'

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1> {props.favoriteNum} </h1>
    </div>

  )
}

const favoriteNum = withFavoriteNumber(App)



export default favoriteNum