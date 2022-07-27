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
    let result = '';
    let morse = '';
    let letter = '';

    while(expr.length !== 0){
        letter = expr.slice(0, 10);
        if(letter == '**********'){
            result += ' ';
            expr = expr.slice(10);
            continue;
        }
        expr = expr.slice(10);

        let i = 0;
        for( ; i < letter.length; i++){
            if(letter[i] == '1'){
                break;
            }
        }
        letter = letter.slice(i);
        for(let i = 1; i < letter.length; i += 2){
            if(letter[i] == '0'){
                morse += '.';
            }else{
                morse += '-';
            }
        }
        result += MORSE_TABLE[morse];
        morse = '';
    }

    return result;
}

module.exports = {
    decode
}