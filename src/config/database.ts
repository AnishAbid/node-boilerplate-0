//require mongoose module
import { Schema, model, connect, connection } from 'mongoose';
var chalk = require("chalk");
import config from './index'

//require database URL from properties file
var dbURL = config.DB;
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js

(async function(){
    try {
        console.log("Hi i am hit")
        new Promise((resolve) => {
            connect(dbURL);
            connection.on("connected", function () {
                console.log(connected("Mongoose default connection is open to ", dbURL));
                resolve(true);
            });

            connection.on("error", function (err:any) {
                console.log(
                    error("Mongoose default connection has occured " + err + " error")
                );
                resolve(false);
            });

            connection.on("disconnected", function () {
                console.log(disconnected("Mongoose default connection is disconnected"));
                resolve(false);
            });

            process.on("SIGINT", function () {
                connection.close(function () {
                    console.log(
                        termination(
                            "Mongoose default connection is disconnected due to application termination"
                        )
                    );
                    process.exit(0);
                });
                resolve(false);
            });
        });
    }catch (e) {
        console.log('e',e)
        process.exit(0)
    }
})()
