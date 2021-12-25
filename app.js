import {myQuestionBox} from "./qns_store/qns.js";
const qsnTitle = document.querySelector('#qsn-title');
const qsnABout = document.querySelector('#about');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('label');
const btns = document.querySelectorAll('button');
const questionSpanCounter = document.querySelector('#qns-counter');
const questionContentDiv = document.querySelector('.question-content')
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
    qsnABout.innerHTML = `This question is about ${question.qsnAbout}`;
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
                    const heading = document.querySelector('#h1Question');
                    heading.innerHTML  = "Well Done, wish you the best in Your new  career!";
                    qsnABout.textContent = "";
                    questionContentDiv.innerHTML = `End of the exerrcise\n\t <div class="refresh"> Try Again?</div>`;
                    //get the try again button
                    const tryAgainBtn = document.querySelector('.refresh');
                    tryAgainBtn.onclick = ()=>{
                        window.location.reload();
                    }
                  
                    btns[0].style.display = "none";
                    btns[1].style.display = "none";
                    
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
