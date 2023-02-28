// abstract class : the same as interface but with a chance to mark methods
abstract class Logger {
  abstract log(message: string) : void

  table(data: object) {
    console.table(data);
  }
}

class MessageLogger extends Logger {
  log(message: string) {
    console.log(message);
  }
}

const logger = new MessageLogger();
logger.log('output');
logger.table({a: 1, b: 2});