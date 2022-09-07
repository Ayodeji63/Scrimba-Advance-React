import React from 'react'
import PageLayout from './PageLayout'

const Page = (props) => {
  return (
    <PageLayout user={props.user} avatarSize={props.avatarSize} />
  )
}

export default Page