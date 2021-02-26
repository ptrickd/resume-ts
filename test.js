//test
function checkEmail(email) {
    const regex = /\w+[@][a-z]+[.][a-z]+/;
    const check = email.search(regex);
    return check
}
console.log(checkEmail('my_namegmail.com'))