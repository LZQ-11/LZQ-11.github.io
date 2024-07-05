import db from '../db/index.js'
 
export function table1(req, res) {
  var sql = 'select * from feedback'
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    }
    res.send(data)
  })
}