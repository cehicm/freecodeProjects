// traversing the dom -- moving up and down the DOM tree
// const btns= document.querySelectorAll('.question-btn'); //bc there are multiple buttons

// btns.forEach(function (btn){
//     btn.addEventListener('click', function(e){
//        const question = e.currentTarget.parentElement.parentElement;// climbing up the DOM TREE
//        question.classList.toggle("show-text"); 
    
//     });
// });

// ctrl + k + c -- comment multiple lines
//ctr + k + u -- uncomment them


//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){ // this question accesses the entire article (title, text and button)
const btn = question.querySelector(".question-btn");// to look for the exact button that was clicked, and not all of them
btn.addEventListener('click', function(){
    // functioanlity to close otheyr articles when one is opened:
    questions.forEach(function(item){ //forEach is a loop
        if(item !== question){
            item.classList.remove('show-text');
        }
    });


    question.classList.toggle("show-text");
})
});
