import db from '../db/index.js'
 
export function purchasesuser(req, res) {
  var sql1 = 'select * from state';

  db.query(sql1, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    }
    let username = data[0].username;

    var sql2 = `select * from purchases where username = '${username}'`;
    db.query(sql2, (err, data) => {
      if (err) {
        return res.send('error: ' + err.message)
      }
      res.send(data)
    })
  })
}