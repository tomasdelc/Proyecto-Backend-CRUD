const mongoose = require('mongoose');
require ("dotenv").config()

const connect = async () =>{
    try{
        await mongoose.connect (process.env.MONGO_CONNECT)
        console.log('Base de datos conectada');
    }
    catch (error) {
        console.log('Error a la hora de iniciar la base de datos');
        console.error(error.message);
    }
}

module.exports = { connect };