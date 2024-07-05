import db from '../db/index.js';

export function getProduct(req, res) {
  const { id } = req.body;

  var sql = `SELECT id, product_name, price FROM products WHERE id = ?`;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.status(500).send('Database error: ' + err.message);
    }
    if (data.length > 0) {
      const product = {
        id: data[0].id,
        product_name: data[0].product_name,
        price: data[0].price,
      };
      res.send(product);
    } else {
      res.status(404).send('Product not found');
    }
  });
}

export function getAllProduct(req, res) {
  var sql = `SELECT * FROM products`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send('Database error: ' + err.message);
    }
    res.send(data);
  });
}
