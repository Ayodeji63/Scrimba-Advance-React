import React from 'react'
import Example from './Example'
import Favorite from './Favorite'
import Menu from './Menu'
import Toggler from './Toggler'

const App = () => {
  return (
    <div>
          <Toggler defaultOnValue = {true}> 
           {({on, toggle}) => (
            <Menu on = {on} toggle = {toggle}/>
          )}
          </Toggler>
           
           <hr/>

           <Toggler defaultOnValue = {false}>
           { ({on, toggle}) => (
              <Favorite on = {on} toggle = {toggle} />
           )}
           </Toggler>
    </div>
  )
}

export default App