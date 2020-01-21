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
        "password": null,
        "database": "database_test",
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    }
}

module.exports = config;