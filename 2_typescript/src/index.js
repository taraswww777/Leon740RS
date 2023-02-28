"use strict";
class Logger {
    table(data) {
        console.table(data);
    }
}
class MessageLogger extends Logger {
    log(message) {
        console.log(message);
    }
}
const logger = new MessageLogger();
logger.log('output');
logger.table({ a: 1, b: 2 });
