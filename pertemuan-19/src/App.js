import Navbar from "./NavBar";
import { useState } from "react";

function App() {
  const [navbar, setNavbar] = useState({
    navbar1: "Beasiswa",
    navbar2: "Challenge",
    navbar3: "webinar",
  });
  const [nama, setNama] = useState("skilvul");
  const [muridKelas, setmuridKelas] = useState([
    "yeyen",
    "delilla",
    "yhido",
    "inayat",
  ]);

  return (
    <div className="App">
      <Navbar
        namaProps={nama}
        navbarProps={navbar}
        muridKelasProps={muridKelas}
      />
      <h1>Review React</h1>

      <h1>{nama}</h1>
      {muridKelas.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <h3>{navbar.navbar1}</h3>
    </div>
  );
}

export default App;
