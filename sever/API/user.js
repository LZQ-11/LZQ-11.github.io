import db from '../db/index.js'
 
export function userGet(req, res) {
  var sql = 'select * from users'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    }
    res.send(data)
  })
}




