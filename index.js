import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// use our routes function and then pass app, which is the Express library
routes(app);

app.get('/', (request, response) =>
    response.send(`Node and express server are running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
