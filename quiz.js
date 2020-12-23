const questions = [
  ['What is the day of the week?', 'WEDNESDAY'],
  ['What month is it?', 'DECEMBER'],
  ['A chicken makes a what?', 'EGG'],
  ['My age?', '29'],
  ['What year will it be next year?', '2021'],
];

let score = 0;

let rightAnswers = [];
let wrongAnswers = [];


function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++){
    items += `<li>${arr[i]}</li>`
}
return items;
}


function createQuestions(arr) {
  let userQuestions ='';
  for (let i = 0; i < arr.length; i+=1){
  questionOne = prompt(questions[i][0]).toUpperCase();
  if (questionOne === questions[i][1]) {
    score++;
    console.log(score);
    rightAnswers.push(questions[i][0]);
  } else {
    wrongAnswers.push(questions[i][0]);
  }
}
return userQuestions;
}

// 4. Display the number of correct answers to the user

let html = `
  <h1>${createQuestions(questions)}You got ${score} question(s) right!</h1>
  <h2>You got these items correct:</h2>
  <ol>${createListItems(rightAnswers)}</ol>

  <h2>You got these items wrong:</h2>
  <ol>${createListItems(wrongAnswers)}</ol>
`;

document.querySelector('main').innerHTML =`${html}`;
document.querySelector('#rightanswers').innerHTML = rightAnswersHTML;
document.querySelector('#wronganswers').innerHTML = wrongAnswersHTML;

