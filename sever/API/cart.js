import db from '../db/index.js';

export function cart(req, res) {
  console.log('Add to cart response4:', req.body);
  let { price, product, name, color, amount } = req.body;
  if (typeof price !== 'number') {
    return res.send('error: Price should be a number');
  }

  var sql1 = `select * from cart where product = '${product}' and color = '${color}'`;
  db.query(sql1, (err, data) => {
    if (err) {
      return res.send('error1: ' + err.message);
    }
    if (data.length > 0) {
      var sql2 = `delete from cart where product = '${product}' and color = '${color}'`;
      db.query(sql2, (err, data) => {
        if (err) {
          return res.send('error2: ' + err.message);
        } else {
          var sql3 = `INSERT INTO cart (username, product, color, amount, price) VALUES ('${name}', '${product}', '${color}', '${amount}', '${price}')`;
          db.query(sql3, (err, data) => {
            if (err) {
              return res.send('error3: ' + err.message);
            }
            res.send(data);
          });
        }
      });
    } else {
      var sql4 = `INSERT INTO cart (username, product, color, amount, price) VALUES ('${name}', '${product}', '${color}', '${amount}', '${price}')`;
      db.query(sql4, (err, data) => {
        if (err) {
          return res.send('error4: ' + err.message);
        }
        res.send(data);
      });
    }
  });
}
export function getCarts(req, res) {
  var sql1 = `select * from state`;
  db.query(sql1, (err, data) => {
    if (err) {
      return res.send('error1: ' + err.message);
    }
    let username = data[0].username;
    var sql2 = `select * from cart where username = '${username}'ORDER BY id DESC`;
    db.query(sql2, (err, data) => {
      if (err) {
        return res.send('error1: ' + err.message);
      }
      res.send(data);
    });
  });
}
export function deleteCart(req, res) {
  let { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.send({
      code: 1,
      msg: 'Invalid input: ids should be a non-empty array',
    });
  }
  let idsString = ids.map((id) => db.escape(id)).join(',');
  var sql1 = `DELETE FROM cart WHERE id IN (${idsString})`;
  db.query(sql1, (err, data) => {
    if (err) {
      return res.send('error1: ' + err.message);
    }
    res.send({
      code: 0,
      msg: 'Delete Successful!',
    });
  });
}

export function deleteCartAndRecord(req, res) {
  let { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.send({
      code: 1,
      msg: 'Invalid input: ids should be a non-empty array',
    });
  }
  let idsString = ids.map((id) => db.escape(id)).join(',');
  var sql1 = `SELECT * FROM cart WHERE id IN (${idsString})`;
  db.query(sql1, (err, data) => {
    if (err) {
      return res.send('error1: ' + err.message);
    }
    let values = data
      .map(
        (item) =>
          `('${item.username}', '${item.product}', '${item.color}', ${item.amount}, ${item.price})`
      )
      .join(',');
    let sql2 = `INSERT INTO purchases (username,product,color,amount,price) VALUES ${values}`;
    db.query(sql2, (err, data) => {
      if (err) {
        return res.send('error1: ' + err.message);
      }
      var sql1 = `DELETE FROM cart WHERE id IN (${idsString})`;
      db.query(sql1, (err, data) => {
        if (err) {
          return res.send('error1: ' + err.message);
        }
        res.send({
          code: 0,
          msg: 'Delete Successful!',
        });
      });
    });
  });
}
