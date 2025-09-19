const prompt = require(`prompt-sync`)();

//so originally i thought i wanted this to be inside of the first breacket but then realized i needed it for both game modes so it could define total questions
let score = 0;
let questionsAsked = 0;
let totalQuestions = 20;

function randomQs(mode){
    let operations;
    let num1, num2;

    switch (mode){
        case `easy`:
            operations = [`+`, `-`]
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
            let op = operations[Math.floor(Math.random() * operations.length)];
            return { q: `${num1} ${op} ${num2}`, a: eval(`${num1} ${op} ${num2}`) };
            break;

    
        case `medium`:
            operations = [`+`, `-`, `*`, `/`, `%`]
            let Med = operations[Math.floor(Math.random() * operations.length)];
            if (Med === `+` || Med === `-`){
            num1 = Math.floor(Math.random() * 90) + 10;
            num2 = Math.floor(Math.random() * 90) + 10;
            
    } else {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
}
 return {q: `${num1} ${Med} ${num2}`, a: eval(`${num1} ${Med} ${num2}`)};


 case `hard`:
     operations = [`+`, `-`, `*`, `/`, `%`]
     let hard = operations[Math.floor(Math.random() * operations.length)];
     if (hard === `+` || hard == `-`){
        num1 = Math.floor(Math.random() * 900) + 100; 
        num2 = Math.floor(Math.random() * 900) + 100;
        return { q: `${num1} ${hard} ${num2}`, a: eval(`${num1} ${hard} ${num2}`) };

            } 
            else {
                num1 = Math.floor(Math.random() * 90) + 10; 
                num2 = Math.floor(Math.random() * 9) + 1;   
            return { q: `${num1} ${hard} ${num2}`, a: eval(`${num1} ${hard} ${num2}`) };
            }
    }
}



let choice = prompt(`Welcome to the quiz of doom, Please choose either 1 for Max or 2 for three point game.`)

//this is saying if they choose something other than 1,2 make them restart the program.
if(choice !== `1` && choice !== `2` ) {
   console.log(`Bro you had 1 job..?`);
   //since im not inna loop we had to use the process.exit() node to make user restart
   process.exit();
}

let mode = prompt(`Choose your game mode twin. easy,medium,or hard.`)
if (!['easy', 'medium', 'hard'].includes(mode)) {
    console.log(`twain that ain't a valid mode.`);
    process.exit();
}


    else if (choice === `2`){
   console.log(` yo andddd u choose 2... lets hope it works`)

   let lives = 3;
   let correctAnswers = 0;
    
    for (let y = 0; y < totalQuestions; y++){
        const {q, a} = randomQs(mode);
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
    } else{
        console.log(`Wow, you actually made it to the end.. Score: ${score} ${correctAnswers}`)}
}

     
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
        if(choice === `1`) {
            console.log(`Nice, you choose the max questions game`); 
        }
    


let questionsRight = 0

for (let x = 0; x < totalQuestions; x++) {
        const { q, a } = randomQs(mode);
        let uA = prompt(`Question ${x + 1}: What is ${q}? `);
        let answer = Number(uA);
        
    if (isNaN(answer)){
        console.log(`cant reconize that one twain. score:${score} + 0`)
        continue;
    }
        if (Math.abs(answer - a) < 0.01){
            console.log('You got it right.. cool man.')
            questionsRight++;
            score+=5;
        }   else {
            console.log(`...you might be wrong...somehow. Answer is ${a}... you got it next time forsho. ig.`);

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
     

    
    
