import React from "react"

const MyContext = React.createContext("Bob Joe")
const {Provider, Consumer} = MyContext

export  {Provider, Consumer}