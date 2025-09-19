const prompt = require(`prompt-sync`)();

//so originally i thought i wanted this to be inside of the first breacket but then realized i needed it for both game modes so it could define total questions
let score = 0;
let questionsAsked = 0;
let totalQuestions = 20;

let choice = prompt(`Welcome to the quiz of doom, Please choose either 1 for Max or 2 for three point game.`)

//this is saying if they choose something other than 1,2 make them restart the program.
if(choice !== `1` && choice !== `2` ) {
   console.log(`Bro you had 1 job..?`);
   //since im not inna loop we had to use the process.exit() node to make user restart
   process.exit();
}

    else if (choice === `2`){
   console.log(` yo andddd u choose 2... lets hope it works`)

   let lives = 3;
   let correctAnswers = 0;

function randomQs(){
   const operations = ['+', '-', '*', '/'];
   const randoIndex = Math.floor(Math.random() * operations.length);
   const randoOp = operations[randoIndex];

    const num1 = Math.floor(Math.random() * 11);
    //So this is saying to skip 0's but only going from 1 - 10 while using division 
    const num2 = randoOp === `/` ? Math.floor(Math.random() * 10)+1 : Math.floor(Math.random() * 11)

    const question = `${num1} ${randoOp} ${num2}`;
//remember to call ur function
    let answer = eval(question);
    return {q:`${num1} ${randoOp} ${num2}`, a: answer};

    }
    
    for (let y = 0; y < totalQuestions; y++){
        const {q, a} = randomQs();
        let uA = prompt(`Question ${y+1}: What is ${q}?`);
    let answer = Number(uA);

    //needed to use isNaN instead of === NaN because it wasnt in a string
    if (isNaN(answer)){
        console.log(`ummm not valid twain. Score:${score} + 0`);
        continue;
    }
    //make sure you use question[y].a and not .q like i did.
    else if (answer === a){
        console.log(`cool beans man u got it right ${score} + 10`);
        score+=10;
        correctAnswers++;

    } else {
    console.log(`SPECIAL BEAM CANON ${lives - 1} lives left. Score: ${score} + 0`)
    lives--;
    }
        questionsAsked++;
    if (lives === 0) {
    console.log(`5 barred fn. Your score is ${score} while getting ${correctAnswers} correct answers`);
    break;
    } else {`Wow, you actually made it to the end.. Score: ${score} ${correctAnswers}`}
     
 if (correctAnswers === 20){
        console.log(`You are a goat twain.`);
    } 

}
 if (correctAnswers === 0){
        console.log(`https://static.wikia.nocookie.net/dragonball/images/8/85/PiccoloSpecialBeamCannonK.png/revision/latest/scale-to-width-down/1200?cb=20250327065301`);
    }
    else if (correctAnswers < 5){
        console.log(`*Shakes head and walks away*`);
    }
    else if (correctAnswers < 10){
        console.log(`you need to brush up on your math twin`);
    }
    else if (correctAnswers < 15){
        console.log(`not bad i guess i could do better tho *aura farms*`);
    } 
   
 


    

        //this is saying if choosen 1 say that they choose the first game and list questions
        if(choice === `1`){
            console.log(`Nice, you choose the max questions game`); 
    
         //array of doom
            const questions = [
        { q: `2+2`, a: 4 },
        { q: `8-2`, a: 6 },
        { q: `5*5`, a: 25 },
        { q: `24/3`, a: 8 },
        { q: `9+8`, a: 17 },
        { q: `8-7`, a: 1 },
        { q: `10*11`, a: 110 },
        { q: `32/8`, a: 4 },
        { q: `6+7`, a: 13 },
        { q: `9-2`, a: 7 },
        { q: `13*3`, a: 39 },
        { q: `6/2`, a: 3 },
        { q: `5+5`, a: 10 },
        { q: `0-0`, a: 0 },
        { q: `8*8`, a: 64 },
        { q: `100/20`, a: 5 },
        { q: `25+12`, a: 37 },
        { q: `96-92`, a: 4 },
        { q: `125/5`, a: 25 },
        { q: `4+3`, a: 7 },
        { q: `1-1`, a: 0 },
    ];


let questionsRight = 0

    for (let x = 0; x < totalQuestions; x++){
    //So this will allow the question number to keep counting till 20 and also asks the question by looping the array
    let uA = prompt(`Question ${x+1}: What is ${questions[x]. q}.`);
    let answer = Number(uA);
        

    if (isNaN(answer)){
        console.log(`cant reconize that one twain. score:${score} + 0`)
        continue;
    }
        if (answer === questions[x].a){
            console.log('You got it right.. cool man.')
            questionsRight++;
            score+=5;
        }   else {
            console.log(`...you might be wrong...somehow. Answer is ${questions[x].a}... you got it next time forsho. ig.`);

        }
        questionsAsked++;
    }
            //i put this outside the loop so it could run lol i lowk took forever to realize why it wasnt working.
            console.log(`Well ur score is ${questionsRight}... thats out of ${questionsAsked} and your total score is a %${score}`);
            if (questionsRight === 20){
            console.log(`megaknight best card in CR`);
         }
         else if (questionsRight < 15){
            console.log(`ok but you coulda done better fr`);
             }
            else if (questionsRight < 10){
            console.log(`ngl you gotta restart.`);
                }
                else if (questionsRight < 5){
            console.log(`... are we fr rn...`);
    }   
     }  

    }
    
