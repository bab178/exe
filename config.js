var config = {
    //Server config
    host : "0.0.0.0",
    port : "8080",
    secret : "supersecretsessionkey",
    //SQL Config
    sql : {
        enabled: true,
        host : "localhost",
        user : "pokemonmegaman",
        password : "",
        dbname : "txstexe"
    },
    //The following should absouletely be turned on in production, and is only if your computer doesn't support bcrypt.
    bcrypt: true
};

module.exports = config;