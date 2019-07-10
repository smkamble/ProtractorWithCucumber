import {createLogger, format, transports} from 'winston'
const { combine, timestamp, label, prettyPrint } = format;

 export var logger = createLogger({
        level:'info',     
        format: format.simple(),
        transports: [
          //Output to generated log file & Write to all logs with level `info` and above to `logs.log    
          new transports.File({ 
           
            filename: './Log/logs.log',
            //filename: 'combined.log',
            maxsize:5242880 , //5MB
            maxFiles: 5,
            handleExceptions: true,
            
        }),
				// - Write all logs error (and above) to Console/terminal
        new transports.Console({
          //levels: winston.config.npm,
            handleExceptions: true,
            
        })
        
      ],
     // exitOnError:false,
    });
    
