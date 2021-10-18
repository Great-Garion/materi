import './App.css';
import Navbar from './component/smaller-component/Navbar'

function App() {
  const nama = 'RANGGA'
  const murid = {
    nama: 'Inayat',
    kelas: 12
  }
  const muridKelas = ['Thoriq', 'Ardi', 'yeyen']

  const benar = true
  const width = "500px"

  function handleClickImage() {
    alert('gambar kucing diklik handleclick image')
  }

  const lapar = false;
  let messageConditional;
  if(lapar === true){
    messageConditional = 'makan dong'
  } else {
    messageConditional = 'nanti dulu makannya'
  }

  return (
    <>
      <Navbar />
      <p>{messageConditional}</p>
      
      <h1 className="tes">Hello World</h1>
      <h2>Halo nama saya {murid.nama}</h2>
      <img 
        src="https://wallpapershome.com/images/wallpapers/kitten-7680x4320-cat-cute-8k-14575.jpg" 
        alt=""
        width={width}
        height="1000px"
        // onClick={() => alert('gambar kucing diklik')}
        onClick={handleClickImage}
      />
      <h1>{1 * 2}</h1>
      <p>{nama}</p>
      <p>{nama.toLowerCase()}</p>
      
    </>
  );
}

export default App;
