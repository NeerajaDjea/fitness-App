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
        "username": "lvg3t2wj9a3s0jrg",
        "password": process.env.JAWSDB_PASSWORD,
        "database": "p1mi70ykglr6twgv",
        "host": "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql",
        "port": 3306
    }
}

module.exports = config;