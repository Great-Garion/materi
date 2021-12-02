const express = require("express");
const allRoutes = require("./routes");
const { mwAllRoutes } = require("./utils/middleware");

const app = express();
const PORT = 3000;

// middleware
// sistem yg ada di tengah (sistem yg disinggahi terlebih dahulu)
// middleware adalah sebuah fucntion
app.use(express.json());
app.use(mwAllRoutes)
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

// buat express baru
// npm init -y
// npm install express
// npm install --save-dev nodemon
// setting script di packege.json
