"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, prettyPrint } = winston_1.format;
exports.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.simple(),
    transports: [
        //Output to generated log file & Write to all logs with level `info` and above to `logs.log    
        new winston_1.transports.File({
            filename: './Log/logs.log',
            //filename: 'combined.log',
            maxsize: 5242880,
            maxFiles: 5,
            handleExceptions: true,
        }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console({
            //levels: winston.config.npm,
            handleExceptions: true,
        })
    ],
});
