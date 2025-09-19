const prompt = require(`prompt-sync`)();

let score = 0;
let questionsAsked = 0;
let totalQuestions = 20;

function randomQs(){
   const operations = ['+', '-', '*', '/'];
   const randoIndex = Math.floor(Math.random() * operations.length);
   const randoOp = operations[randoIndex];

    const num1 = Math.floor(Math.random() * 11);
    const num2 = randoOp === `/` ? Math.floor(Math.random() * 10)+1 : Math.floor(Math.random() * 11)

    const question = `${num1} ${randoOp} ${num2}`;
    let answer = eval(question);
    return {q:`${num1} ${randoOp} ${num2}`, a: answer};
    }

let choice = prompt(`Welcome to the quiz of doom, Please choose either 1 for Max or 2 for three point game.`)

if(choice !== `1` && choice !== `2` ) {
   console.log(`Bro you had 1 job..?`);
   process.exit();
}

    else if (choice === `2`){
   console.log(` yo andddd u choose 2... lets hope it works`)

   let lives = 3;
   let correctAnswers = 0;


     

    
    for (let y = 0; y < totalQuestions; y++){
        const {q, a} = randomQs();
        let uA = prompt(`Question ${y+1}: What is ${q}?`);
    let answer = Number(uA);

    if (isNaN(answer)){
        console.log(`ummm not valid twain. Score:${score} + 0`);
        continue;
    }
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
   
}


    

        if(choice === `1`){
            console.log(`Nice, you choose the max questions game`); 
    
         
    
    for (let x = 0; x < totalQuestions; x++){
        const {q, a} = randomQs();
        let uA = prompt(`Question ${x+1}: What is ${q}?`);
    let answer = Number(uA);

    
    if (isNaN(answer)){
        console.log(`ummm not valid twain. Score:${score} + 0`);
        continue;
    }
    
    else if (answer === a){
        console.log(`cool beans man u got it right ${score} + 10`);
        score+=10;
        questionsAsked++;
    }


let questionsRight = 0


    for (let x = 0; x < totalQuestions; x++){
        questions.push(randomQs());
        let uA = prompt(`Question ${x+1}: What is ${questions[x].q}.`);
        let answer = Number(uA);
        

    if (isNaN(answer)){
        console.log(`cant reconize that one twain. score:${score} + 0`)
        continue;
    }
        if (answer === questions[x].a){
            console.log('You got it right.. cool man.');
            score+=5;
            questionsRight++;
        } 
        
        else {
            console.log(`...you might be wrong...somehow. Answer is ${questions[x].a}... you got it next time forsho. ig.`);
            questionsRight++;
        }
       
    }
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


        
