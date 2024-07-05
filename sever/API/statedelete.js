import db from '../db/index.js'
 
export function statedelete(req, res) {
  const { data } = req.body;

  var sql= 'delete from state';
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('error: ' + err.message)
    }
  })
}
