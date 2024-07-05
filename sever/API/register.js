import db from '../db/index.js'

export function postRegister(req, res) {
    const { name, password, address, email, phone } = req.body;

    var sql1 = `select * from users where username = '${name}'`;
    db.query(sql1, (err, data) => {
      if (err) {
        return res.json(0);
      }
      if (data.length > 0) {
        return res.json(1);
      } else {
        var sql2 = `select * from users where password = '${password}'`;
        db.query(sql2, (err, data) => {
          if (err) {
            return res.json(0);
          }
            if (data.length > 0) {
              return res.json(2);
            } else {
              var sql3 = `select * from users where address = '${address}'`; 
              db.query(sql3, (err, data) => {
                if (err) {
                  return res.json(0);
                }
                if (data.length > 0) {
                  return res.json(3);
                } else {
                  var sql4 = `select * from users where email = '${email}'`;  
                  db.query(sql4, (err, data) => {
                    if (err) {
                      return res.json(0);
                    }
                    if (data.length > 0) {
                      return res.json(4);
                    } else {
                      var sql5 = `select * from users where phone_number = '${phone}'`;  
                      db.query(sql5, (err, data) => {
                        if (err) {
                          return res.json(0);
                        }
                        if (data.length > 0) {
                          return res.json(5);
                        } else {
                          var sql6 = `INSERT INTO users (username, password, address, email, phone_number) VALUES ('${name}', '${password}', '${address}', '${email}', '${phone}')`;
                          db.query(sql6, (err, data) => {
                            if (err) {
                              return res.json(0);
                            }
                            return res.json(6);
                          })
                        }
                      })
                    }
                  })
                } 
              })
            } 
        }) 
      }
    })
}
