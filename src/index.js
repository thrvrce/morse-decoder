const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var arr = expr.match(/.{1,10}/g);
  var decodedMessage = '';
  arr.forEach(function(value, index){
   switch (value.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-")){
      case '.-'     : decodedMessage = decodedMessage + 'a'; break;
      case '-...'   : decodedMessage = decodedMessage + 'b'; break;
      case '-.-.'   : decodedMessage = decodedMessage + 'c'; break;
      case '-..'    : decodedMessage = decodedMessage + 'd'; break;
      case '.'      : decodedMessage = decodedMessage + 'e'; break;
      case '..-.'   : decodedMessage = decodedMessage + 'f'; break;
      case '--.'    : decodedMessage = decodedMessage + 'g'; break;
      case '....'   : decodedMessage = decodedMessage + 'h'; break;
      case '..'     : decodedMessage = decodedMessage + 'i'; break;
      case '.---'   : decodedMessage = decodedMessage + 'j'; break;
      case '-.-'    : decodedMessage = decodedMessage + 'k'; break;
      case '.-..'   : decodedMessage = decodedMessage + 'l'; break;
      case '--'     : decodedMessage = decodedMessage + 'm'; break;
      case '-.'     : decodedMessage = decodedMessage + 'n'; break;
      case '---'    : decodedMessage = decodedMessage + 'o'; break;
      case '.--.'   : decodedMessage = decodedMessage + 'p'; break;
      case '--.-'   : decodedMessage = decodedMessage + 'q'; break;
      case '.-.'    : decodedMessage = decodedMessage + 'r'; break;
      case '...'    : decodedMessage = decodedMessage + 's'; break;
      case '-'      : decodedMessage = decodedMessage + 't'; break;
      case '..-'    : decodedMessage = decodedMessage + 'u'; break;
      case '...-'   : decodedMessage = decodedMessage + 'v'; break;
      case '.--'    : decodedMessage = decodedMessage + 'w'; break;
      case '-..-'   : decodedMessage = decodedMessage + 'x'; break;
      case '-.--'   : decodedMessage = decodedMessage + 'y'; break;
      case '--..'   : decodedMessage = decodedMessage + 'z'; break;
      case '.----'  : decodedMessage = decodedMessage + '1'; break;
      case '..---'  : decodedMessage = decodedMessage + '2'; break;
      case '...--'  : decodedMessage = decodedMessage + '3'; break;
      case '....-'  : decodedMessage = decodedMessage + '4'; break;
      case '.....'  : decodedMessage = decodedMessage + '5'; break;
      case '-....'  : decodedMessage = decodedMessage + '6'; break;
      case '--...'  : decodedMessage = decodedMessage + '7'; break;
      case '---..'  : decodedMessage = decodedMessage + '8'; break;
      case '----.'  : decodedMessage = decodedMessage + '9'; break;
      case '-----'  : decodedMessage = decodedMessage + '0'; break;
      default       : decodedMessage = decodedMessage + ' '; break;
   }
 }
);
return decodedMessage;
}

module.exports = {
    decode
}