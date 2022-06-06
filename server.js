const express = require('express');
const cors = require('cors');
const app = express();
const wordsPt = require('words-pt');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const PORT = 5000;
  
app.listen(PORT, function() {
    console.log(`Server running on Port ${PORT}!`)
});


app.get('/', function(req, res) {
    const word = wordsPt.randomWord();
    res.send(word);    
});






// { removeNames: true } removes names such as 'Lisboa' or 'António'
wordsPt.init({ removeNames: true }, err => {
    if (err) {
      // handle the error
      return
    }
    wordsPt.isWord('ser') // true
    wordsPt.isWord('serei') // true
    wordsPt.isWord('abafar-nos-ão') // true
    wordsPt.isWord('hello') // false
   
    wordsPt.randomWord() // grafonolas (any random word)
    wordsPt.randomWord('a') // amealhará (starting with 'a')
    wordsPt.randomWord('abc') // abcissa (starting with 'abc')
    // words.Pt.randomWord('abc') is equivalent to words.Pt.randomWord('abc', '*', '*')  
   
    // words.Pt.randomWord(beginningPart, middlePart, endPart)
    wordsPt.randomWord('ab', '*', '*') // 'abcesso'
    wordsPt.randomWord('a', 'e', '*') // 'abcesso' but not 'abade'
    wordsPt.randomWord('*', 's', '*') // 'espesso' but not 'sapato' nor 'mamas'
    wordsPt.randomWord('*', '*', 's') // 'mamas'
    wordsPt.randomWord('t', '*', 's') // 'tetas'
    wordsPt.randomWord('t', 'et', 'as') // 'tetanizarias'
    wordsPt.randomWord('se', 'o', 's') // 'seios'
    wordsPt.randomWord('sa', 'a', 'to') // 'salteamento'
   
    // exactly the same as randomWord, but gets all the words
    wordsPt.getArray() // array with all the words
    wordsPt.getArray('abc') // ['abcesso', 'abcessos', 'abcissa', 'abcissas']
    wordsPt.getArray('t', 'et', 'as') // ['tabuletas', 'tchetchenas', 'telefotometrias', 'telemetrias', ... ]
    wordsPt.getArray('tet', 'a', 's') // ['tetanizadas', 'tetanizados', 'tetanizais' , 'tetanizamos', ... ]
   
    wordsPt.biggestWord() // constitucionalizar-lhes-íamos
    // do something more
  })