var questionBank = [
    {
        yourAnswer: -1,
        question: "What will the code below output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    },
    {
        yourAnswer: -1,
        question: "Day la cau hoi so 2 output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    },
    {
        yourAnswer: -1,
        question: "Day la cau hoi so 3 will the code below output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    },
    {
        yourAnswer: -1,
        question: "Day la cau hoi so 4 will the code below output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    },
    {
        yourAnswer: -1,
        question: "Day la cau hoi so 5 will the code below output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    }
]
var mapQuestion = []; // status question, user choose true or false ?
var curQuestion = 0; // current question
var totalQuestion = 5;


var nextP = document.getElementById('next-button');
var prevP = document.getElementById('previous-button');

nextP.addEventListener('click',nextAns);
prevP.addEventListener('click',prevAns);
//Render question
function render(curr) {
   document.getElementById('question-number').textContent = "Question #"+(curr+1)+"/"+totalQuestion; // render question number
   var contentQues = document.getElementById('question');
   contentQues.textContent = questionBank[curr].question; // render content question
   
   //Render list answer
   var ansHTML = document.getElementById('answer-list');
    var contentAns = questionBank[curr].listAnswer.map((choice,id) => {
        return `<div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
              <label for="answer-`+id+`"></label>
            <input id="ans-`+id+`" type="radio" name="answer" value="`+choice+`"/>
          </div>
        </div>
        <input type="text" class="form-control" value="`+choice+`" disabled>
      </div>`
    });
    ansHTML.innerHTML = contentAns.join(''); //rendering
}
//function check correct answer then push status to mapQuestion
function checkAns(curr){
    for (let i = 0; i<questionBank[curr].listAnswer.length; i++){
        var ansId = 'ans-'+i;
        var getId = document.getElementById(ansId);
        //Check radio is checked or not
        if (getId.checked) {
            questionBank[curr].yourAnswer = i;
            if (questionBank[curr].rightAnswer === i) mapQuestion[curr]= true; // answer is right
            else mapQuestion[curr] = false;
        }
    }
}
//Function click on Next button
function nextAns(){
    if (curQuestion < totalQuestion-1){
        checkAns(curQuestion);
        curQuestion++; //next question
        render(curQuestion);
        renderButton(curQuestion);
    }
    else {
        checkAns(curQuestion);
        finishQuiz();
    }
    
}
function prevAns(){
    --curQuestion; //prev question
    render(curQuestion);
    renderButton(curQuestion);
}
function finishQuiz(){
    var score = mapQuestion.reduce((score,ans)=>{
        if (ans) score++;
        return score;
    },0); // calculate score
    var result = document.getElementById('body-question');
    //render
    var content = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Congratulation!</h4><hr/>
    <p>Your score is <h4>`+score+`/`+totalQuestion+`</h4></p>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  </div>`;
    result.innerHTML = content;
}
//Render button
function renderButton(curr) {
    if (curr === 0) {
        document.getElementById('previous-button').setAttribute("class","hidden");
    } else {
        document.getElementById('previous-button').setAttribute("class","btn btn-dark");
    }
    if (curr === totalQuestion-1) {
        var changeButton = document.getElementById('next-button');
        changeButton.innerHTML = `Submit <i class=" ml-1 fa fa-paper-plane"></i>`;
        changeButton.setAttribute("class","btn-lg btn btn-primary");
        changeButton.id = "submit"; // change new Id
    }
}
render(curQuestion);
renderButton(curQuestion);
