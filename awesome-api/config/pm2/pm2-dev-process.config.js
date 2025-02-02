module.exports = {
    apps: [
        {
            ...require('./pm2.config'),
            env: {
                "PORT": 3000,
                "NODE_ENV": "development",
                "DB_NAME": "awesomeDB",
                "DB_PORT": 27017,
                "JWT_KEY": "mySecretKey"
            }
        }
    ]
}

