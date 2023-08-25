const accountId = 122
let emailId = "giridhar@gmail.com"
var pass = "12345" // changes all vars at scopes
/*
    prefer not to use var
    because of issue in block scope and functional scope
*/
city = "Cincinnati"
let state;

// accountId = 123 // not allowed to update const
emailId = "gg@gmail.com"
pass = "3456"
city = "Phx"

console.log(accountId);
console.table([accountId, emailId, pass, city, state]);