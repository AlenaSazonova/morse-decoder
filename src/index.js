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
    '     ': ' ',
};


const addNew = {
    '**': ' ',
    '00': '',
    '10': '.',
    '11': '-',
}

function decode(expr) {
    let array = []
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10))
    }

    array = array.map(el => {
        let arrayNext = []
        for (let i = 0; i < el.length; i += 2) {
            arrayNext.push(el.slice(i, i + 2))
        }
        return arrayNext
        })
        .map(elem => elem.map(item => addNew[item]))
        .map(item => item.join(''))
        .map(item => MORSE_TABLE[item]).join('')
        return array
}

module.exports = {
    decode
}
