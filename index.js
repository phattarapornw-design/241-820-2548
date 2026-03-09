const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let conn = null;

const initMySQL = async () => {

    conn = await mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "root",
        database: "webdb",
        port: 8820

    });

};

app.get("/users", async (req, res) => {

    const results = await conn.query("SELECT * FROM users");
    res.json(results[0]);

});

app.post("/users", async (req, res) => {

    try {

        let user = req.body;

        const results = await conn.query(

            "INSERT INTO users SET ?",
            user

        );

        res.json({

            message: "User created successfully",
            data: results[0]

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Error creating user",
            error: error.message

        });

    }

});

app.listen(port, async () => {

    await initMySQL();
    console.log("Server running on port " + port);

});