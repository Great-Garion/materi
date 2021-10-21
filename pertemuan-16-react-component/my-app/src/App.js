import React from 'react'

function App() {

  let nama = ["auzan", "yhido", "thoriq"]
  
  return (
    <div>
      
      {nama.map(item => (
        <Say nama={item} />
      ))}

      {/* <Say nama="Yhido" />
      <Say nama="Thoriq" /> */}
      
    </div>
  )
}

function Say(props) {
  const {nama} = props

  return (
    <h1>Hallo {nama}</h1>
  )
}

export default App
