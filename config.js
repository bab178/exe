var config = {
    //Server config
    host : "localhost",
    port : "8080",
    secret : "supersecretsessionkey",
    //SQL Config
    sql : {
        enabled: false,
        host : "localhost",
        user : "your-username",
        password : "",
        dbname : "txstexe"
    },
    //The following should absouletely be turned on in production, and is only if your computer doesn't support bcrypt.
    bcrypt: false
};

module.exports = config;
