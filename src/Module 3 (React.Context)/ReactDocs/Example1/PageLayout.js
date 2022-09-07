import React from 'react'
import NavigationBar from './NavigationBar'
const PageLayout = (props) => {
  return (
    <NavigationBar 
    user={props.user} 
    avatarSize={props.avatarSize} />
  )
}

export default PageLayout