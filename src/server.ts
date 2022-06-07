import express from 'express';

const app = express();

import {Sequelize}  from 'sequelize';

app.get("/users", (req, res) => {
   return res.send("hello world")
});

app.listen(3333, () => {
    console.log("Server is running")
});

const sequelize = new Sequelize('sysconsultdb', 'postgres', 'admin', {
host: 'localhost',
dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}
).catch(err => {
    console.error('Unable to connect to the database:', err);
})