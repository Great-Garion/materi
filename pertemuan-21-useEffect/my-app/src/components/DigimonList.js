import axios from 'axios'
import { useEffect, useState } from "react";

function DigimonList() {
  const [digimons, setDigimons] = useState([]);

  console.log(digimons);

  // jalan setiap ada perubahan pada data
  useEffect(() => {
    console.log("efek samping");
    axios("https://digimon-api.vercel.app/api/digimon")
      .then((result) => setDigimons(result.data));
  }, []); // kalau ada kurung kotak, jalan sekali aja

  return (
    <div>
      <h1>Data Digimon</h1>

      {digimons.map((item) => (
        <div>
          <img src={item.img} alt="" width={50} />
          <h3>{item.name}</h3>
        </div>
      ))}

    </div>
  );
}

export default DigimonList;

{
  /* <input
        placeholder="nama"
        type="text"
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      /> */
}
