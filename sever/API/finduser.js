import db from '../db/index.js'
 
export function find(req, res) {

  var sql= 'select * from state';
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    } 
    res.send(data)
  })
}