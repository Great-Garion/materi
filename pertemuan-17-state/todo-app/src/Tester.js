import { useState } from "react";
import "./App.css";
import Fruits from "./components/Fruits";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";

function App() {
  const handleClick = () => {
    console.log("hallo");
  };

  const clickHallo = (nama) => {
    console.log("hallo 2", nama);
    console.log(buah);
  };

  let buah = ["pepaya", "mangga", "jeruk"];
  let peserta = ["Auzan", "Yeyen", "Inayat", "Delilla", "Yhido"];

  return (
    <div>
      {/* <Navbar /> */}

      {/* Cara loop */}
      {peserta.map((item, index) => (
        <Greeting orang={item} />
      ))}

      {/* Cara manual */}
      {/* <Greeting orang="Auzan" />
      <Greeting orang="Yeyen" />
      <Greeting orang="Yhido" />
      <Greeting orang="Inayat" /> */}

      <h1 onClick={handleClick}>Hallo</h1>

      <h1 onClick={() => clickHallo("auzan")}>Hallo 2</h1>

      <footer>
        <span>by Auzan</span>
      </footer>
    </div>
  );
}

export default App;
