const app = require('./app');

const config = require('./app/config');

const MongoDB = require('./app/utils/mongodb.util');

async function startServer(){
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to Database!");

        app.listen(config.app.port, () => {
            console.log(`Server is running on port ${config.app.port}`);
        });
    }
    catch(error){
        console.log("Can not connect to Database! ", error);
        process.exit();
    }
}

startServer();