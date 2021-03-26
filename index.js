const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  let arr = tutorials.map(s => s.split(' '))
  arr.map( s => {
    for(let i=0; i < s.length; i++){s[i] = capitalize(s[i])}
          })
  return arr.map(s => s.join(' '))
}

const capitalize = (str) => {
  return str[0].toUpperCase()+str.slice(1);
}
