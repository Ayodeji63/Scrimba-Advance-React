import React from 'react'

const Example2 = () => {
    function Page(props) {
        const user = props.user;
        const userLink = (
          <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize} />
          </Link>
        );
        return <PageLayout userLink={userLink} />;
      }
  return (
    <>
  // Now, we have:
  <Page user={user} avatarSize={avatarSize} />
  // ... which renders ...
  <PageLayout userLink={...} />
  // ... which renders ...
  <NavigationBar userLink={...} />
  // ... which renders ...
  {props.userLink}
    </>
  )
}


  
export default Example2