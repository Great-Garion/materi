import { useState } from "react";
import "./App.css";

function App() {
  // membuat sebuah state
  const [name, setName] = useState("skilvul");
  const [number, setNumber] = useState(0);

  // membuat variable
  const nickName = "thoriq";

  // handlePlus
  const handlePlus = () => {
    // if (number < 10) {
    //   setNumber(number + 1);
    // }
    // number < 10 ? setNumber(number + 1) : null;
  };

  return (
    <div className="App">
      <h1>Belajar react hooks bersama great garion</h1>
      <h1>{nickName}</h1>
      <h1>{name}</h1>
      <button onClick={() => setName("auzan")}>Ubah Nama menjadi Auzan</button>
      <button onClick={() => setName("skilvul")}>
        Reset nama menjadi skilvul
      </button>

      {/* buat onclick button + dan minus untuk merubah state number */}
      {/* buat button + dan - tidak bisa melewati 0 dan 10 */}
      <div>
        <button onClick={handlePlus}>+</button>
        <h1>{number}</h1>
        <button onClick={() => (number > 0 ? setNumber(number - 1) : null)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
