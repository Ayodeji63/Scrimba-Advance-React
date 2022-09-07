import React from 'react'
import Page from './Page'
const Example1 = () => {
  let user = "Boy"
  let avatarSize = "Medium"
  return (
    <>
    <Page user={user} avatarSize={avatarSize} />
    </>
  )
}

export default Example1