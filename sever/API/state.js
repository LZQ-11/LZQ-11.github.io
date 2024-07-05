import db from '../db/index.js';

export function statePost(req, res) {
  const { name } = req.body;

  var sql = `INSERT INTO state (username) VALUES ('${name}')`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message);
    } else {
      res.send(data);
    }
  });
}
