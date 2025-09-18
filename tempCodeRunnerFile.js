while(true)
    if (lives === 0){
    console.log(`5 barred fn. Your score is ${score} while getting ${correctAnswers} correct answers.`);   
    }
    else if (correctAnswers === 20){
        console.log(`You are a goat twain.`);
    }
    else if (correctAnswers === 0){
        console.log(`https://dragonball.fandom.com/wiki/Special_Beam_Cannon`);
    }
    else if (correctAnswers < 5){
        console.log(`*Shakes head and walks away*`);
    }
    else if (correctAnswers < 10){
        console.log(`you need to brush up on your math twin`);
    }
    else if (correctAnswers < 15){
        console.log(`not bad i guess i could do better tho *aura farms*`);
    break;
    }