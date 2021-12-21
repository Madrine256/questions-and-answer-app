import {myQuestionBox} from "./qns_store/qns.js";

const myQuerry = myQuestionBox.map(questionDisplay=>{
    // return questionDisplay;
    console.log(questionDisplay);
    const answer = questionDisplay.answers;
    // loop through the array answer objects 
    answer.forEach(ans=>{
        console.log(ans)
    })
});
console.log(myQuerry);