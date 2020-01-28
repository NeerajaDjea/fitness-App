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
        "username": "hk6uorsbmz23egb5",
        "password": process.env.JAWSDB_PASSWORD,
        "database": "bg75zrydaw6g52de",
        "host": "zpj83vpaccjer3ah.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        "dialect": "mysql",
        "port": 3306
    }
}

module.exports = config;