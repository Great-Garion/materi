const db = require("../config/db");

module.exports = {
  getAllUser: (req, res) => {
    db.query("select id, name, email from user", (err, results, field) => {
      if (err) {
        console.log(err);
      }

      res.json(results);
    });
  },

  getUserByID: (req, res) => {
    const { id } = req.params;

    db.query(`select * from user where id = ?`, [id], (err, results, field) => {
      if (err) {
        console.log(err);
      }

      res.json(results);
    });
  },

  postUser: (req, res) => {
    let user = req.body;

    db.query(
      `insert into user 
          (name, email, password) values 
          (?, ?, ?)`,
      [user.name, user.email, user.password],
      (err, results, field) => {
        if (err) {
          console.log(err);
        }

        res.json("berhasil ditambahkan");
      }
    );
  },
};
