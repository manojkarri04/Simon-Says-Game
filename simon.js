    let gameSeq = [];
    let userSeq = [];

    let started = false;
    let level = 0;
    let h2 = document.querySelector("h2");
    let btns = ["yellow","red","purple","green"];
    function action()
    {
         if(started == false)
        {
            console.log("game started");
            started = true;

            levelup()
        }
    }
    document.addEventListener("keypress", action)
    document.addEventListener("click", action)
    function gameFlash(btn)
    {
       btn.classList.add("flash");
       setTimeout(function() {
         btn.classList.remove("flash");
       }, 250);
    }
    
    function userFlash(btn)
    {
       btn.classList.add("userFlash");
       setTimeout(function() {
         btn.classList.remove("userFlash");
       }, 250);
    }

    function levelup()
    { 
       userSeq = [];
       level++;
       h2.innerText = `Level ${level}`;

       let randIndx = Math.floor(Math.random() * 4);
       let randColor = btns[randIndx];
       let randBtn = document.querySelector(`.${randColor}`);
    //    console.log(randIndx);
    //    console.log(randColor);
    //    console.log(randBtn);
       gameFlash(randBtn);
       
       gameSeq.push(randColor);
       console.log("game seq");
       console.log(gameSeq);
    }

    function check_ans(idx)
    {
      //idx = level - 1;
    //  console.log("Current level: " + level);
      if(userSeq[idx] == gameSeq[idx])
      {
         if(userSeq.length == gameSeq.length)
         {
            setTimeout(levelup ,1000);
          }
       h2.innerText ="Correct answer";
      }
      else
      {
        h2.innerHTML = `Game Over! your score is <b>${level*100}</b> <br> click any key to start.`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red"; 
        setTimeout(function() {
               body.style.backgroundColor = "white"; 
        },1000)
        setTimeout(reset , 1000);
      }
    } 

     function btnpress()   //call back
    { 
        let btn = this;
        userFlash(btn);
      //  console.log(this);
        let userColor = btn.getAttribute('id');
        userSeq.push(userColor);
        // console.log("user seq");
        // console.log(userSeq);
        check_ans(userSeq.length-1);
    }

    let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns)
    {
        btn.addEventListener("click", btnpress);
    }

    function reset()
    {
        userSeq = [];
        gameSeq = [];
        started = false;
        level = 0;
    }
