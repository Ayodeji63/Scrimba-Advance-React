import React from 'react'
import Avatar from './Avatar'
const NavigationBar = (props) => {
  return (
  <Avatar user={props.user} size={props.avatarSize} />
  )
}

export default NavigationBar