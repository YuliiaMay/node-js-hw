const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// const nodemailer = require('nodemailer');
// require("dotenv").config();


// const { META_PASSWORD } = process.env;

const {contactsRouter, authRouter} = require("./routes/api");
const app = express();

// const nodemailerConfig = {
//     host: "smtp.meta.ua",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "may-devmail@meta.ua",
//         pass: META_PASSWORD
//     }
// };

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/users', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
