import React from 'react'
import DataFecther from "./DataFecther"

const App = () => {
  return (
    <DataFecther url = "https://swapi.dev/api/people/1/">
        {(loading, data, error) => {
           if (data) {
            return <p>{JSON.stringify(data)}</p>
           } else {
            return <h1>Loading..</h1>
           }
        }}

    </DataFecther>
  )
}

export default App