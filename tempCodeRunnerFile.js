if (Math.abs(answer - questions[x].a)< 0.01){
        console.log(`cool beans man u got it right ${score} + 10`);
        score+=10;
      } else {
      console.log(`Question${questions[x].a}. Score: ${score} + 0`);
    }
