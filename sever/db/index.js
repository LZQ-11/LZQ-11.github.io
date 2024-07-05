import { createPool } from 'mysql'
 
let db = createPool({
  host: 'localhost', //数据库IP地址
  user: 'root', //数据库登录账号，
  password: '1Le15zhi8qi07', //数据库登录密码
  database: 'login_database' //要操作的数据库
})

 
export default db
