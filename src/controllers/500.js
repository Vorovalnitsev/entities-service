module.exports.index = function (err, req, res, next) {
    res.status(500);
    res.send('Something wrong. Try it later!');
};