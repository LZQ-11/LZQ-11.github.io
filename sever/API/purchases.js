import db from '../db/index.js'
 
export function purchases(req, res) {
  var sql = 'select * from purchases'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    }
    res.send(data)
  })
}