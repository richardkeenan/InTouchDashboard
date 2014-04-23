exports.login = function(params, callback) {
    var username = params.username;
    var password = params.password;

    // check

    var res = { x: "success" };

    return callback(null, res);
};

