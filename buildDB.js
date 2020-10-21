const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize( () => {
    db.run("DROP TABLE IF EXISTS Messages");
    db.run("CREATE TABLE Messages (id INTEGER NOT NULL PRIMARY KEY, messagetext TEXT NOT NULL)");
});


module.exports = db;