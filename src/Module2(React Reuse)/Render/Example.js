import React from 'react'

const Example = (props) => {
  return (
    <div>
        {props.render(["people", "egg", "places", "elephant", "man", 20])}
    </div>
  )
}

export default Example