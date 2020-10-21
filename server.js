const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const sqlite3 = require('sqlite3');
const cors = require('cors');
const db = new sqlite3.Database('./database.sqlite');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());



app.get('/api', (req, res, next) => {
    const sqlQuery = "SELECT * FROM Messages";
    db.all(sqlQuery, (error, rows) => {
        if (error)
            next(error);
        else    
            res.status(200).json({messages: rows});
    });
});

app.post('/api', (req, res, next) => {
    const reqbody = req.body.messagetxt;
    console.log(reqbody);
    const sqlQuery = "INSERT INTO Messages (messagetext) VALUES ($msg)";
    const params = {
        $msg: reqbody,
    }
    db.run(sqlQuery, params, function(error) {
        if (error)
            next(error);
        else {
            const sqlQuery = `SELECT * FROM Messages WHERE id = ${this.lastID}`;
            db.get(sqlQuery, (error, row) => {
                if (error)
                    next(error);
                else
                    res.status(201).json({messagetext: row});
            })
        }
    })
});

app.listen(PORT, () => {
    console.log(`Now the fun begins on ${PORT}`);
});