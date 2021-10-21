function Greeting(props) {
  // console.log(props)
  let {orang} = props

  return (
    <div>
      <h2>Selamat datang {orang}</h2>
    </div>
  )
}

export default Greeting
