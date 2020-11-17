let mysql = require("mysql");

let options = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Yx147258",
  database: "db_test",
};

let connection = mysql.createConnection(options);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("数据库连接成功");
  }
});

connection.query("select * from people", (err, result, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log("查询结果：" + JSON.stringify(result));
    console.log(fields);
  }
});
