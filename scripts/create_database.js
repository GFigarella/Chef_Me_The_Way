/**
 * user database
 */

// var mysql = require('mysql');
// var dbconfig = require('../config/database');

// var connection = mysql.createConnection(dbconfig.connection);

// connection.query('CREATE DATABASE ' + dbconfig.database);

// connection.query('\
// CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
//     `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
//     `username` VARCHAR(20) NOT NULL, \
//     `password` CHAR(60) NOT NULL, \
//         PRIMARY KEY (`id`), \
//     UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
//     UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
// )');



// console.log('Success: Database Created!')

// connection.end();


//TESTING SEQUELIZE

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {

        name: DataTypes.STRING
    });

    User.associate = function(models) {

        User.hasMany(models.Post, {

            onDelete: "cascade"
        });
    };

    return User;

};