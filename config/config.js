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
        "username": "nfukkzc6cgjebud9",
        "password": process.env.JAWSDB_PASSWORD,
        "database": "tsvolxdppyj0y9s2",
        "host": "fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        "dialect": "mysql",
        "port": 3306
    }
}

module.exports = config;