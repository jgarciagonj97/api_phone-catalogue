const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb+srv://jgarciagonj:gd1234@phonescluster.r34ok.mongodb.net/phone_bd?retryWrites=true&w=majority';

//Database connection
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Successful connection to database ${DB_URI}`))
    .catch((err) => console.log(`It may has been a problem connecting ${DB_URI}`, err));