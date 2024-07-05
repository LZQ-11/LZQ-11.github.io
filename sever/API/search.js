import db from '../db/index.js'
 
export function search(req, res) {
  const { product } = req.body;

  var sql= `select * from products where product_name = '${product}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(0);
    } 
       if (data.length > 0){
        let a = data[0].id;
        if (a===1){
          return res.json(1);
        }
        if (a===2){
          return res.json(2);
        }
        if (a===3){
          return res.json(3);
        }
        if (a===4){
          return res.json(4);
        }
        if (a===5){
          return res.json(5);
        }
        if (a===6){
          return res.json(6);
        }
        if (a===7){
          return res.json(7);
        }
        if (a===8){
          return res.json(8);
        }
        if (a===9){
          return res.json(9);
        }
        if (a===10){
          return res.json(10);
        }
        if (a===11){
          return res.json(11);
        }
        if (a===12){
          return res.json(12);
        }
       } else {
        res.json({ error: 'Product not found' });
       }
  })
}