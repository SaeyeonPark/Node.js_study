const mysql = require('mysql');

module.exports = function () {
    return  {
        init: function () {
            return mysql.createConnection ({
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: '',
                database: 'TEST_DB'
            })
        },

        db_open: function(con) {
            con.cconnect(function (err) {
                if (err) {
                    console.error('mysql connection error: ' + err);
                } else if ()
                else {
                    console.info('mysql is connected successfully');
                }
            })
        }
    }
}