const config = {
    "development": {
        "username": "root",
        "password": process.env.DB_PASS,
        "database": "fitness_db",
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": process.env.DB_PASS,
        "database": "database_test",
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": "c51l8an7uz4txw57",
        "password": process.env.JAWSDB_PASSWORD,
        "database": "lydufmhig279n4ck",
        "host": "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql",
        "port": 3306
    }
}

module.exports = config;