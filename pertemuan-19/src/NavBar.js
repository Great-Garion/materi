function Navbar(props) {
  console.log(props.navbarProps.length);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Logo</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {/* <h1>{props.navbarProps.navbar1}</h1>
        <h1>{props.navbarProps.navbar2}</h1>
        <h1>{props.navbarProps.navbar3}</h1> */}

        {props.muridKelasProps.map((item, key) => (
          <h1 key={key}>{item}</h1>
        ))}
        <h1>Selamat datang, {props.namaProps}</h1>
      </div>
    </div>
  );
}

export default Navbar;
