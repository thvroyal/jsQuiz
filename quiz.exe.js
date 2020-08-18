var questionBank = [
    {
        id: 1,
        question: "What will the code below output to the console and why?",
        listAnswer: ["Answer A","Answer B","Answer C","Answer D"],
        rightAnswer: 1
    }
]
var mapQuestion = []; // status question, user choose true or false ?
var curQuestion = 0; // current question
var totalQuestion = 20;

//Render question
function render(curr) {
   document.getElementById('question-number').textContent = "Question #"+curr+1+"/"+totalQuestion; // render question number
   var contentQues = document.getElementById('question');
   contentQues.textContent = questionBank[curr].question; // render content question
   
   //Render list answer
   var ansHTML = document.getElementById('answer-list');
    var contentAns = questionBank[curr].listAnswer.map((choice,id) => {
        return `<div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
              <label for="answer-`+id+`"></label>
            <input type="radio" name="answer" value="`+choice+`"/>
          </div>
        </div>
        <input type="text" class="form-control" value="`+choice+`" disabled>
      </div>`
    });
    ansHTML.innerHTML = contentAns.join(''); //rendering
}

//Render button
function renderButton(curr) {
    if (curr === 0) {
        document.getElementById('previous-button').setAttribute("class","hidden");
    }
    if (curr === totalQuestion) {
        var changeButton = document.getElementById('next-button');
        changeButton.innerHTML = `Submit <i class=" ml-1 fa fa-paper-plane"></i>`;
        changeButton.setAttribute("class","btn-lg btn btn-primary");
    }
}
render(curQuestion);
renderButton(curQuestion);
