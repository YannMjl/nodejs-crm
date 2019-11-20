// Now what we're going to do is create specific routes for specific endpoints and 
// then test them in Postman.

// let create the routes function which takes an app as an argument
const routes = (app) => {

    //main route for getting all of our contacts for posting new contact
    app.route('/contact')

        .get((request, response) =>
            response.send('GET request was done successfully'))

        .post((request, response) =>
            response.send('POST request was done successfully'));

    // for updating a single contact which we need to pass an id and 
    // then delete a single contact, which we also need to pass an id.
    app.route('/contact/:contactID')

        .put((request, response) =>
            response.send('PUT request was done successfully'))

        .delete((request, response) =>
            response.send('DELETE request was done successfully'));

}

// let export our function that we'll use in the index
export default routes;
