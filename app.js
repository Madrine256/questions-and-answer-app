import {myQuestionBox} from "./qns_store/qns.js";
const qsnTitle = document.querySelector('#qsn-title');
const qsnABout = document.querySelector('#about');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('label');
const btns = document.querySelectorAll('button');
const questionSpanCounter = document.querySelector('#qns-counter');
let counter = 0;
window.addEventListener('DOMContentLoaded', ()=>{
    dataLoading(counter);
    questionSpanCounter.innerHTML = counter;
    btnClick();
    radioInputs.forEach(inputs=>{
        inputs.checked = "";
        inputs.onchange = (e)=>{
            const selectedAns = e.currentTarget.value;
        console.log(typeof selectedAns);
        btnClick();
        const myCurrentIncr = myQuestionBox[counter];
       
        if(selectedAns === myCurrentIncr.correctAns){
            alert('u got it right');
        }else{
            alert('The Answer is wrong , Try Again!');
            location.reload();
        }
        }
    });
    
});
// finction for our data from the array object
let dataLoading = (ourData)=>{
    btnClick();
    const question = myQuestionBox[ourData];
    qsnTitle.innerHTML = question.Myqsn;
    qsnABout.innerHTML = `This question is about ${question.qsnAbout}`;;
    const answers = question.answers;
    //loop through answers 
    answers.forEach(ans=>{
        // console.log(ans);
       labels[0].lastElementChild.innerHTML = `${Object.keys(ans)[0]} : ${ans.A}`;
       labels[1].lastElementChild.innerHTML = `${Object.keys(ans)[1]} : ${ans.B}`;
       labels[2].lastElementChild.innerHTML = `${Object.keys(ans)[2]} : ${ans.C}`;
       labels[3].lastElementChild.innerHTML = `${Object.keys(ans)[3]} : ${ans.D}`;
       
    });
}
//set function for the button clicks
function btnClick(){
    btns.forEach(btn=>{
        btn.onclick = (e)=>{
            const btnClass = e.currentTarget.classList;
            // console.log(btnClass)
            if(btnClass.contains("prev")){
                counter--;
                if(counter < 0){
                    counter = myQuestionBox.length - 1;
                }
                questionSpanCounter.innerHTML = counter;
                dataLoading(counter);
            }else if(btnClass.contains("next")){
                counter++;
                if(counter > myQuestionBox.length-1){
                    counter  = 0;
                    // questionSpanCounter.innerHTML = myQuestionBox.length;
                    // this.disabled= true;
                }
                questionSpanCounter.innerHTML = counter;
               
                dataLoading(counter);
            }
        }
    })
} 

const myDate = new Date();
const date1 = myDate.toDateString();
const copyrightDate = document.querySelector('#date');
copyrightDate.innerHTML = date1;
