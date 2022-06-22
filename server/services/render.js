const axios = require('axios');

exports.homeRoutes = (req, res) => {
    //create a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}
//create a get request to add user
exports.add_user = (req, res) => {
    res.render('add_user');

}
//create a get request to update user
exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })

}