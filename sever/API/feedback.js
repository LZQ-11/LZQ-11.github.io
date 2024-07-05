import db from '../db/index.js'

export function feedback(req, res) {
    const {message}  = req.body;

    var sql1 = `select * from state`;
    db.query(sql1, (err, data1) => {
      if (err) {
        return res.send('error1: ' + err.message);
      }
      let username = data1[0].username;

      var sql2 = `select * from users where username = '${username}'`;
      db.query(sql2, (err, data2) => {
        if (err) {
          return res.send('error1: ' + err.message);
        }
        let id = data2[0].id

        var sql3 = `INSERT INTO feedback (id, username, message) VALUES ('${id}', '${username}', '${message}')`;
        db.query(sql3, (err, result) => {
          if (err) {
            console.error('Error inserting feedback into database:', err);
            return res.status(500).send('Feedback Error!');
          }
          return res.status(200).send('The feedback is already received!'); 
        });
      });
    });
}