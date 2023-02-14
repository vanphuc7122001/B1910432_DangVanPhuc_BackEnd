const app = require('./app');

const config = require('./app/config');


// start sever 

const port =config.app.port; 

app.listen(port, () => console.log(`Server is running on port ${port}`));

