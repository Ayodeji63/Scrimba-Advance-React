import React from 'react'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
  return (
    <div style={styles}></div>
  )
}

Card.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue"])
    .isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
}

Card.defaultProps = {
    cardColor: "red",
    width: 200,
    height: 200
}

