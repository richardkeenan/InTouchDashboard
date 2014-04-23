/*
var initialData = require('./users.json');

$fh.db({
    "act": "create",
    "type": "users",
    "fields": initialData
}, function(err, data) {
    if (err) {
        console.log('error: ',err);
    } else {
        console.log(JSON.stringify(data));
    }
});
*/

function checkUser(username, password, callback) {
    $fh.db({
        "act": "list",
        "type": "users",
        "eq": {
            "username": username,
            "password": password
        }
    }, function (err, data) {
        if (err) {
            console.log('error');
            return callback(err, { result: 'failure' });
        } else {
            if (data &&
                data.count > 0) {
                console.log('success');
                return callback(null, { result: 'success' });
            }
            else {
                console.log('failure');
                return callback(null, { result: 'failure' });
            }
        }
    });
}



exports.login = function(params, callback) {

    var username = params.username;
    var password = params.password;

    checkUser(username, password, function(err, result) {
        if (err) {
            return callback(err, null);
        }
        else {
            console.log('im here', result);
            return callback(null, result);
        }
    });
};
