module.exports = {
    USER: 'root',
    HOST: 'localhost',
    PASSWORD: 'danny2412',
    DB: 'SIGTcobaej',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};