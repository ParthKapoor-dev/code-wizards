const question1 = document.querySelector(".question1");
const result1 = document.querySelector(".results1");
// question - 1
// A radio active has a decay constant k = ${}, find half life of element. (Radio active element undergoes 1st order decay)
const k =Math.floor(Math.random()*10);
const t = Math.log(2) / k;
// console.log(t);
question1.innerHTML = `Q1: A radio active has a decay constant k = ${k}, type the value of 100 x half time. (Radio active element undergoes 1st order decay`

const questionTab = document.querySelector(".question-tab");
const question1Input = document.querySelector("#answer1");
var count=0;
console.log(`Ans 1 is ${Math.floor(100*t)}`);
questionTab.addEventListener("submit",function(e)
{
    e.preventDefault();
    if(question1Input.value == Math.floor(100*t))
    {
        count++;
    }
})

const question2 = document.querySelector(".question2");
const result2 = document.querySelector(".results2");
const question2Input = document.querySelector("#answer2");

const a = Math.floor(Math.random()*100);
const r = Math.random();
const sum = Math.floor(a/(1-r));
question2.innerHTML = `Q2: find sum of infinite gp if first term is ${a}, & common ratio is ${r}`
console.log(`ans 2 is ${sum}`);
questionTab.addEventListener("submit", function(e)
{
    e.preventDefault;
    if(question2Input == sum){
        console.log(2);
        count++;
    }
})

const question3 = document.querySelector(".question3");
const result3 = document.querySelector(".results3");
const question3Input = document.querySelector("#answer3");

const cel = Math.floor(Math.random()*100);
const fer  = (9*cel/5) + 32;
question3.innerHTML = `Q3: Convert degree celsius to Feherenheit, if Temp is ${cel} degree`

console.log(`Ans 3 is ${fer}`);
questionTab.addEventListener("submit", function(e)
{
    e.preventDefault;
    if(question3Input.value == fer)
    { count++;
    console.log(3);}
})
// console.log(count);
const finalResults = document.querySelector(".final-results");
const videoBox = document.querySelector(".youtube-video")
console.log(videoBox);
questionTab.addEventListener("submit",function(e)
{
    if(count >=2)
{
    finalResults.innerHTML=`<h2> You have passed today's quest</h2>`
    videoBox.style.display = 'block';
}else{
    finalResults.innerHTML=`<h2> Your answers are Incorrect, try again to pass the Quest</h2>`

}
})
