//Variables

// Repeating Variables
const events = ["mouseleave", "mouseup", "touchend"];
let intervalID = null;

//Player One Life Buttons
const p1LBtnM = document.getElementById("p1LBtnM");
const p1LBtnR = document.getElementById("p1LBtnR");
const p1LBtnP = document.getElementById("p1LBtnP");

//Player One Plains Btns
const p1pm = document.getElementById("p1pmBtn");
const p1pr = document.getElementById("p1prBtn");
const p1pp = document.getElementById("p1ppBtn");

// Player One Total Variables

let p1Life = 40;
let p1Plains = 0;
let p1Swamp = 0;
let p1Mountain = 0;
let p1Island = 0;
let p1Forest = 0;
let p1Colorless = 0;

//Player One Elements For Variables
const p1L = document.getElementById("p1L");
const p1P = document.getElementById("p1P");
const p1S = document.getElementById("p1S");
const p1M = document.getElementById("p1M");
const p1I = document.getElementById("p1I");
const p1C = document.getElementById("p1C");
const p1F = document.getElementById("p1F");

// Player Two Total Variables
let p2Life = 40
let p2Plains = 0
let p2Swamp = 0;
let p2Mountain = 0;
let p2Island = 0;
let p2Forest = 0;
let p2Colorless = 0;

//Player Two Elements For Variables
const p2L = document.getElementById("p2L");
const p2P = document.getElementById("p2P");
const p2S = document.getElementById("p2S");
const p2M = document.getElementById("p2M");
const p2I = document.getElementById("p2I");
const p2C = document.getElementById("p2C");
const p2F = document.getElementById("p2F");

// Player Three Total Variables
let p3Life = 40
let p3Plains = 0
let p3Swamp = 0;
let p3Mountain = 0;
let p3Island = 0;
let p3Forest = 0;
let p3Colorless = 0;

//Player Three Elements For Variables
const p3L = document.getElementById("p3L");
const p3P = document.getElementById("p3P");
const p3S = document.getElementById("p3S");
const p3M = document.getElementById("p3M");
const p3I = document.getElementById("p3I");
const p3C = document.getElementById("p3C");
const p3F = document.getElementById("p3F");

// Player Four Total Variables
let p4Life = 40
let p4Plains = 0
let p4Swamp = 0;
let p4Mountain = 0;
let p4Island = 0;
let p4Forest = 0;
let p4Colorless = 0;

//Player Four Elements For Variables
const p4L = document.getElementById("p4L");
const p4P = document.getElementById("p4P");
const p4S = document.getElementById("p4S");
const p4M = document.getElementById("p4M");
const p4I = document.getElementById("p4I");
const p4C = document.getElementById("p4C");
const p4F = document.getElementById("p4F");

//Player containers
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");


//Functions that take turns.
function playerOneTurn(){
    //Opacity
    player1.style.opacity = "1";
    player2.style.opacity = "0.5";
    player3.style.opacity = "0.5";
    player4.style.opacity = "0.5";
    //Border
    player1.style.border = "1px white solid";
    player2.style.border = "none";
    player3.style.border = "none";
    player4.style.border = "none";
}
function playerTwoTurn(){
    //Opacity
    player1.style.opacity = "0.5";
    player2.style.opacity = "1";
    player3.style.opacity = "0.5";
    player4.style.opacity = "0.5";
    //border
    player1.style.border = "none";
    player2.style.border = "1px white solid";
    player3.style.border = "none";
    player4.style.border = "none";
}
function playerThreeTurn(){
    //Opacity
    player1.style.opacity = "0.5";
    player2.style.opacity = "0.5";
    player3.style.opacity = "1";
    player4.style.opacity = "0.5";
    //border
    player1.style.border = "none";
    player2.style.border = "none";
    player3.style.border = "1px solid white";
    player4.style.border = "none";
}
function playerFourTurn(){
    //Opacity
    player1.style.opacity = "0.5";
    player2.style.opacity = "0.5";
    player3.style.opacity = "0.5";
    player4.style.opacity = "1";
    //border
    player1.style.border = "none";
    player2.style.border = "none";
    player3.style.border = "none";
    player4.style.border = "1px solid white";
}

player1.addEventListener("click", playerOneTurn);
player2.addEventListener("click", playerTwoTurn);
player3.addEventListener("click", playerThreeTurn);
player4.addEventListener("click", playerFourTurn);
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// All Players Life Meaning when reaches zero or below.
function playerLose(){
    if(p1Life<=0||p2Life<=0||p3Life<=0||p4Life<=0){
        
    }
}

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//player One Life functions
function p1LMinus(){
    --p1Life;
    p1L.textContent = p1Life;
}
function p1LReset(){
    p1Life = 40;
    p1L.textContent = p1Life;
}
function p1LPlus(){
    ++p1Life;
    p1L.textContent = p1Life;
}

//Player One EventListeners Life Btns

//Minus Life Btn

p1LBtnM.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1LMinus();
    intervalID = setInterval(p1LMinus, 150);
});

events.forEach(e =>{
    p1LBtnM.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Player One Reset Life Btn 
p1LBtnR.addEventListener("click", p1LReset);

//Player One Plus Life Btn
p1LBtnP.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1LPlus();
    intervalID = setInterval(p1LPlus, 150);
});

events.forEach(e=>{
    p1LBtnP.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Plains

//Player One Plains Functions
function p1PMinus(){
    p1Plains--;
    p1P.textContent = p1Plains;
}
function p1PReset(){
    p1Plains = 0;
    p1P.textContent = p1Plains;
}
function p1PPlus(){
    p1Plains++;
    p1P.textContent = p1Plains;
}

//Player One Plains EventListeners

// Player One minus
p1pm.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1PMinus();
    intervalID = setInterval(p1PMinus, 150);
});

events.forEach(e =>{
    p1pm.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Reset Plains
p1pr.addEventListener("click", p1PReset);

// Player One Plus Plains
p1pp.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1PPlus();
    intervalID = setInterval(p1PPlus, 150);
});

events.forEach(e =>{
    p1pp.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Swamp function

function p1SMinus(){
    --p1Swamp;
    p1S.textContent = p1Swamp;
}
function p1SReset(){
    p1Swamp = 0;
    p1S.textContent = p1Swamp;
}
function p1SPlus(){
    ++p1Swamp;
    p1S.textContent = p1Swamp;
}

// Player One Swamp Btns
const p1smBtn = document.getElementById("p1smBtn");
const p1srBtn = document.getElementById("p1srBtn");
const p1spBtn = document.getElementById("p1spBtn");

// Player One Swamp EventListener

// Player Minus Swamp
p1smBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1SMinus();
    intervalID = setInterval(p1SMinus, 150);
});

events.forEach(e =>{
    p1smBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Reset Swamp
p1srBtn.addEventListener("click", p1SReset);

// Player One Plus Swamp

p1spBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1SPlus()
    intervalID = setInterval(p1SPlus, 150);
});

events.forEach(e =>{
    p1spBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});


// Player One Forest Mana

// Player One Fores Functions 

function p1FMinus(){
    --p1Forest;
    p1F.textContent = p1Forest;
}
function p1FReset(){
    p1Forest = 0;
    p1F.textContent = p1Forest;
}
function p1FPlus(){
    ++p1Forest;
    p1F.textContent = p1Forest;
}
// Player One Btns
const p1fmBtn = document.getElementById("p1fmBtn");
const p1frBtn = document.getElementById("p1frBtn");
const p1fpBtn = document.getElementById("p1fpBtn");

// Player One EventListeners Forest

p1fmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1FMinus()
    intervalID = setInterval(p1FMinus, 150);
});

events.forEach(e =>{
    p1fmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

p1frBtn.addEventListener("click", p1FReset);

p1fpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1FPlus();
    intervalID = setInterval(p1FPlus, 150);
});

events.forEach(e=>{
    p1fpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Mountain

// Player One Mountain Btn
const p1mmBtn = document.getElementById("p1mmBtn");
const p1mrBtn = document.getElementById("p1mrBtn");
const p1mpBtn = document.getElementById("p1mpBtn");

// Player One Mountain Functions
function p1MMinus(){
    p1Mountain--;
    p1M.textContent = p1Mountain;
}
function p1MReset(){
    p1Mountain = 0;
    p1M.textContent = p1Mountain;
}
function p1MPlus(){
    p1Mountain++;
    p1M.textContent = p1Mountain;
}

// Player One EventListeners Mountians

// Player One Minus Event Mountain
p1mmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1MMinus();
    intervalID = setInterval(p1MMinus, 150);
});
events.forEach(e=>{
    p1mmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Mountain Reset
p1mrBtn.addEventListener("click", p1MReset);

// Player One Mountain Plus

p1mpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1MPlus();
    intervalID = setInterval(p1MPlus, 150);
});
events.forEach(e =>{
    p1mpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Island Btns
const p1imBtn = document.getElementById("p1imBtn");
const p1irBtn = document.getElementById("p1irBtn");
const p1ipBtn = document.getElementById("p1ipBtn");

// Player One Island Functions 
function p1iMinus(){
    p1Island--;
    p1I.textContent = p1Island;
}
function p1iReset(){
    p1Island = 0;
    p1I.textContent = p1Island;
}
function p1iPlus(){
    p1Island++;
    p1I.textContent = p1Island;
}

// Player One Island EventListener

// Player One Island Minus
p1imBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1iMinus();
    intervalID = setInterval(p1iMinus, 150);
});
events.forEach(e =>{
    p1imBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Island Reset
p1irBtn.addEventListener("click", p1iReset);

// Player One Island Plus
p1ipBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1iPlus();
    intervalID = setInterval(p1iPlus, 150);
});
events.forEach(e=>{
    p1ipBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Colorless Btns
const p1cmBtn = document.getElementById("p1cmBtn");
const p1crBtn = document.getElementById("p1crBtn");
const p1cpBtn = document.getElementById("p1cpBtn");

// Player One Colorless Functions 
function p1cMinus(){
    p1Colorless--;
    p1C.textContent = p1Colorless;
}
function p1cReset(){
    p1Colorless = 0;
    p1C.textContent = p1Colorless;
}
function p1cPlus(){
    p1Colorless++;
    p1C.textContent = p1Colorless;
}

// Player One Colorless EventListener

// Player One Colorless EventListener Minus
p1cmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1cMinus();
    intervalID = setInterval(p1cMinus, 150);
});
events.forEach(e=>{
    p1cmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player One Colorless Reset
p1crBtn.addEventListener("click", p1cReset);

p1cpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p1cPlus();
    intervalID = setInterval(p1cPlus, 150);
});
events.forEach(e=>{
    p1cpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//player Two Life functions
function p2LMinus(){
    --p2Life;
    p2L.textContent = p2Life;
}
function p2LReset(){
    p2Life = 40;
    p2L.textContent = p2Life;
}
function p2LPlus(){
    ++p2Life;
    p2L.textContent = p2Life;
}

//Player Two EventListeners Life Btns

//Minus Life Btn

p2LBtnM.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2LMinus();
    intervalID = setInterval(p2LMinus, 150);
});

events.forEach(e =>{
    p2LBtnM.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Player Two Reset Life Btn 
p2LBtnR.addEventListener("click", p2LReset);

//Player Two Plus Life Btn
p2LBtnP.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2LPlus();
    intervalID = setInterval(p2LPlus, 150);
});

events.forEach(e=>{
    p2LBtnP.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Plains

//Player Two Plains Functions
function p2PMinus(){
    p2Plains--;
    p2P.textContent = p2Plains;
}
function p2PReset(){
    p2Plains = 0;
    p2P.textContent = p2Plains;
}
function p2PPlus(){
    p2Plains++;
    p2P.textContent = p2Plains;
}

//Player Two Plains EventListeners

// Player Two minus
p2pm.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2PMinus();
    intervalID = setInterval(p2PMinus, 150);
});

events.forEach(e =>{
    p2pm.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Reset Plains
p2pr.addEventListener("click", p2PReset);

// Player Two Plus Plains
p2pp.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2PPlus();
    intervalID = setInterval(p2PPlus, 150);
});

events.forEach(e =>{
    p2pp.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Swamp function

function p2SMinus(){
    --p2Swamp;
    p2S.textContent = p2Swamp;
}
function p2SReset(){
    p2Swamp = 0;
    p2S.textContent = p2Swamp;
}
function p2SPlus(){
    ++p2Swamp;
    p2S.textContent = p2Swamp;
}

// Player Two Swamp Btns
const p2smBtn = document.getElementById("p2smBtn");
const p2srBtn = document.getElementById("p2srBtn");
const p2spBtn = document.getElementById("p2spBtn");

// Player Two Swamp EventListener

// Player Minus Swamp
p2smBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2SMinus();
    intervalID = setInterval(p2SMinus, 150);
});

events.forEach(e =>{
    p2smBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Reset Swamp
p2srBtn.addEventListener("click", p2SReset);

// Player Two Plus Swamp

p2spBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2SPlus()
    intervalID = setInterval(p2SPlus, 150);
});

events.forEach(e =>{
    p2spBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});


// Player Two Forest Mana

// Player Two Fores Functions 

function p2FMinus(){
    --p2Forest;
    p2F.textContent = p2Forest;
}
function p2FReset(){
    p2Forest = 0;
    p2F.textContent = p2Forest;
}
function p2FPlus(){
    ++p2Forest;
    p2F.textContent = p2Forest;
}
// Player Two Btns
const p2fmBtn = document.getElementById("p2fmBtn");
const p2frBtn = document.getElementById("p2frBtn");
const p2fpBtn = document.getElementById("p2fpBtn");

// Player Two EventListeners Forest

p2fmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2FMinus()
    intervalID = setInterval(p2FMinus, 150);
});

events.forEach(e =>{
    p2fmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

p2frBtn.addEventListener("click", p2FReset);

p2fpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2FPlus();
    intervalID = setInterval(p2FPlus, 150);
});

events.forEach(e=>{
    p2fpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Mountain

// Player Two Mountain Btn
const p2mmBtn = document.getElementById("p2mmBtn");
const p2mrBtn = document.getElementById("p2mrBtn");
const p2mpBtn = document.getElementById("p2mpBtn");

// Player Two Mountain Functions
function p2MMinus(){
    p2Mountain--;
    p2M.textContent = p2Mountain;
}
function p2MReset(){
    p2Mountain = 0;
    p2M.textContent = p2Mountain;
}
function p2MPlus(){
    p2Mountain++;
    p2M.textContent = p2Mountain;
}

// Player Two EventListeners Mountians

// Player Two Minus Event Mountain
p2mmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2MMinus();
    intervalID = setInterval(p2MMinus, 150);
});
events.forEach(e=>{
    p2mmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Mountain Reset
p2mrBtn.addEventListener("click", p2MReset);

// Player Two Mountain Plus

p2mpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2MPlus();
    intervalID = setInterval(p2MPlus, 150);
});
events.forEach(e =>{
    p2mpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Island Btns
const p2imBtn = document.getElementById("p2imBtn");
const p2irBtn = document.getElementById("p2irBtn");
const p2ipBtn = document.getElementById("p2ipBtn");

// Player Two Island Functions 
function p2iMinus(){
    p2Island--;
    p2I.textContent = p2Island;
}
function p2iReset(){
    p2Island = 0;
    p2I.textContent = p2Island;
}
function p2iPlus(){
    p2Island++;
    p2I.textContent = p2Island;
}

// Player Two Island EventListener

// Player Two Island Minus
p2imBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2iMinus();
    intervalID = setInterval(p2iMinus, 150);
});
events.forEach(e =>{
    p2imBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Island Reset
p2irBtn.addEventListener("click", p2iReset);

// Player Two Island Plus
p2ipBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2iPlus();
    intervalID = setInterval(p2iPlus, 150);
});
events.forEach(e=>{
    p2ipBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Colorless Btns
const p2cmBtn = document.getElementById("p2cmBtn");
const p2crBtn = document.getElementById("p2crBtn");
const p2cpBtn = document.getElementById("p2cpBtn");

// Player Two Colorless Functions 
function p2cMinus(){
    p2Colorless--;
    p2C.textContent = p2Colorless;
}
function p2cReset(){
    p2Colorless = 0;
    p2C.textContent = p2Colorless;
}
function p2cPlus(){
    p2Colorless++;
    p2C.textContent = p2Colorless;
}

// Player Two Colorless EventListener

// Player Two Colorless EventListener Minus
p2cmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2cMinus();
    intervalID = setInterval(p2cMinus, 150);
});
events.forEach(e=>{
    p2cmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Two Colorless Reset
p2crBtn.addEventListener("click", p2cReset);

p2cpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p2cPlus();
    intervalID = setInterval(p2cPlus, 150);
});
events.forEach(e=>{
    p2cpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//player Three Life functions
function p3LMinus(){
    --p3Life;
    p3L.textContent = p3Life;
}
function p3LReset(){
    p3Life = 40;
    p3L.textContent = p3Life;
}
function p3LPlus(){
    ++p3Life;
    p3L.textContent = p3Life;
}

//Player Three EventListeners Life Btns

// Player Three Life Btn Variables
const p3LBtnM = document.getElementById("p3lmBtn");
const p3LBtnR = document.getElementById("p3lrBtn");
const p3LBtnP = document.getElementById("p3lpBtn");


//Minus Life Btn

p3LBtnM.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3LMinus();
    intervalID = setInterval(p3LMinus, 150);
});

events.forEach(e =>{
    p3LBtnM.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Player Three Reset Life Btn 
p3LBtnR.addEventListener("click", p3LReset);

//Player Three Plus Life Btn
p3LBtnP.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3LPlus();
    intervalID = setInterval(p3LPlus, 150);
});

events.forEach(e=>{
    p3LBtnP.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Plains

//Player Three Plains Functions
function p3PMinus(){
    p3Plains--;
    p3P.textContent = p3Plains;
}
function p3PReset(){
    p3Plains = 0;
    p3P.textContent = p3Plains;
}
function p3PPlus(){
    p3Plains++;
    p3P.textContent = p3Plains;
}

// Player 3 Plains Variables
const p3pm = document.getElementById("p3pmBtn");
const p3pr = document.getElementById("p3prBtn");
const p3pp = document.getElementById("p3ppBtn");

//Player Three Plains EventListeners

// Player Three minus
p3pm.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3PMinus();
    intervalID = setInterval(p3PMinus, 150);
});

events.forEach(e =>{
    p3pm.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Reset Plains
p3pr.addEventListener("click", p3PReset);

// Player Three Plus Plains
p3pp.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3PPlus();
    intervalID = setInterval(p3PPlus, 150);
});

events.forEach(e =>{
    p3pp.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Swamp function

function p3SMinus(){
    --p3Swamp;
    p3S.textContent = p3Swamp;
}
function p3SReset(){
    p3Swamp = 0;
    p3S.textContent = p3Swamp;
}
function p3SPlus(){
    ++p3Swamp;
    p3S.textContent = p3Swamp;
}

// Player Three Swamp Btns
const p3smBtn = document.getElementById("p3smBtn");
const p3srBtn = document.getElementById("p3srBtn");
const p3spBtn = document.getElementById("p3spBtn");

// Player Three Swamp EventListener

// Player Minus Swamp
p3smBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3SMinus();
    intervalID = setInterval(p3SMinus, 150);
});

events.forEach(e =>{
    p3smBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Reset Swamp
p3srBtn.addEventListener("click", p3SReset);

// Player Three Plus Swamp

p3spBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3SPlus()
    intervalID = setInterval(p3SPlus, 150);
});

events.forEach(e =>{
    p3spBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});


// Player Three Forest Mana

// Player Three Fores Functions 

function p3FMinus(){
    --p3Forest;
    p3F.textContent = p3Forest;
}
function p3FReset(){
    p3Forest = 0;
    p3F.textContent = p3Forest;
}
function p3FPlus(){
    ++p3Forest;
    p3F.textContent = p3Forest;
}
// Player Three Btns
const p3fmBtn = document.getElementById("p3fmBtn");
const p3frBtn = document.getElementById("p3frBtn");
const p3fpBtn = document.getElementById("p3fpBtn");

// Player Three EventListeners Forest

p3fmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3FMinus()
    intervalID = setInterval(p3FMinus, 150);
});

events.forEach(e =>{
    p3fmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

p3frBtn.addEventListener("click", p3FReset);

p3fpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3FPlus();
    intervalID = setInterval(p3FPlus, 150);
});

events.forEach(e=>{
    p3fpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Mountain

// Player Three Mountain Btn
const p3mmBtn = document.getElementById("p3mmBtn");
const p3mrBtn = document.getElementById("p3mrBtn");
const p3mpBtn = document.getElementById("p3mpBtn");

// Player Three Mountain Functions
function p3MMinus(){
    p3Mountain--;
    p3M.textContent = p3Mountain;
}
function p3MReset(){
    p3Mountain = 0;
    p3M.textContent = p3Mountain;
}
function p3MPlus(){
    p3Mountain++;
    p3M.textContent = p3Mountain;
}

// Player Three EventListeners Mountians

// Player Three Minus Event Mountain
p3mmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3MMinus();
    intervalID = setInterval(p3MMinus, 150);
});
events.forEach(e=>{
    p3mmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Mountain Reset
p3mrBtn.addEventListener("click", p3MReset);

// Player Three Mountain Plus

p3mpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3MPlus();
    intervalID = setInterval(p3MPlus, 150);
});
events.forEach(e =>{
    p3mpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Island Btns
const p3imBtn = document.getElementById("p3imBtn");
const p3irBtn = document.getElementById("p3irBtn");
const p3ipBtn = document.getElementById("p3ipBtn");

// Player Three Island Functions 
function p3iMinus(){
    p3Island--;
    p3I.textContent = p3Island;
}
function p3iReset(){
    p3Island = 0;
    p3I.textContent = p3Island;
}
function p3iPlus(){
    p3Island++;
    p3I.textContent = p3Island;
}

// Player Three Island EventListener

// Player Three Island Minus
p3imBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3iMinus();
    intervalID = setInterval(p3iMinus, 150);
});
events.forEach(e =>{
    p3imBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Island Reset
p3irBtn.addEventListener("click", p3iReset);

// Player Three Island Plus
p3ipBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3iPlus();
    intervalID = setInterval(p3iPlus, 150);
});
events.forEach(e=>{
    p3ipBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Colorless Btns
const p3cmBtn = document.getElementById("p3cmBtn");
const p3crBtn = document.getElementById("p3crBtn");
const p3cpBtn = document.getElementById("p3cpBtn");

// Player Three Colorless Functions 
function p3cMinus(){
    p3Colorless--;
    p3C.textContent = p3Colorless;
}
function p3cReset(){
    p3Colorless = 0;
    p3C.textContent = p3Colorless;
}
function p3cPlus(){
    p3Colorless++;
    p3C.textContent = p3Colorless;
}

// Player Three Colorless EventListener

// Player Three Colorless EventListener Minus
p3cmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3cMinus();
    intervalID = setInterval(p3cMinus, 150);
});
events.forEach(e=>{
    p3cmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Three Colorless Reset
p3crBtn.addEventListener("click", p3cReset);

p3cpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p3cPlus();
    intervalID = setInterval(p3cPlus, 150);
});
events.forEach(e=>{
    p3cpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//player Four Life functions
function p4LMinus(){
    --p4Life;
    p4L.textContent = p4Life;
}
function p4LReset(){
    p4Life = 40;
    p4L.textContent = p4Life;
}
function p4LPlus(){
    ++p4Life;
    p4L.textContent = p4Life;
}

//Player Four EventListeners Life Btns

// Player Four Life Btn Variables
const p4LBtnM = document.getElementById("p4lmBtn");
const p4LBtnR = document.getElementById("p4lrBtn");
const p4LBtnP = document.getElementById("p4lpBtn");


//Minus Life Btn

p4LBtnM.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4LMinus();
    intervalID = setInterval(p4LMinus, 150);
});

events.forEach(e =>{
    p4LBtnM.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Player Four Reset Life Btn 
p4LBtnR.addEventListener("click", p4LReset);

//Player Four Plus Life Btn
p4LBtnP.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4LPlus();
    intervalID = setInterval(p4LPlus, 150);
});

events.forEach(e=>{
    p4LBtnP.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

//Plains

//Player Four Plains Functions
function p4PMinus(){
    p4Plains--;
    p4P.textContent = p4Plains;
}
function p4PReset(){
    p4Plains = 0;
    p4P.textContent = p4Plains;
}
function p4PPlus(){
    p4Plains++;
    p4P.textContent = p4Plains;
}

// Player 4 Plains Variables
const p4pm = document.getElementById("p4pmBtn");
const p4pr = document.getElementById("p4prBtn");
const p4pp = document.getElementById("p4ppBtn");

//Player Four Plains EventListeners

// Player Four minus
p4pm.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4PMinus();
    intervalID = setInterval(p4PMinus, 150);
});

events.forEach(e =>{
    p4pm.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Reset Plains
p4pr.addEventListener("click", p4PReset);

// Player Four Plus Plains
p4pp.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4PPlus();
    intervalID = setInterval(p4PPlus, 150);
});

events.forEach(e =>{
    p4pp.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Swamp function

function p4SMinus(){
    --p4Swamp;
    p4S.textContent = p4Swamp;
}
function p4SReset(){
    p4Swamp = 0;
    p4S.textContent = p4Swamp;
}
function p4SPlus(){
    ++p4Swamp;
    p4S.textContent = p4Swamp;
}

// Player Four Swamp Btns
const p4smBtn = document.getElementById("p4smBtn");
const p4srBtn = document.getElementById("p4srBtn");
const p4spBtn = document.getElementById("p4spBtn");

// Player Four Swamp EventListener

// Player Minus Swamp
p4smBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4SMinus();
    intervalID = setInterval(p4SMinus, 150);
});

events.forEach(e =>{
    p4smBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Reset Swamp
p4srBtn.addEventListener("click", p4SReset);

// Player Four Plus Swamp

p4spBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4SPlus()
    intervalID = setInterval(p4SPlus, 150);
});

events.forEach(e =>{
    p4spBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});


// Player Four Forest Mana

// Player Four Fores Functions 

function p4FMinus(){
    --p4Forest;
    p4F.textContent = p4Forest;
}
function p4FReset(){
    p4Forest = 0;
    p4F.textContent = p4Forest;
}
function p4FPlus(){
    ++p4Forest;
    p4F.textContent = p4Forest;
}
// Player Four Btns
const p4fmBtn = document.getElementById("p4fmBtn");
const p4frBtn = document.getElementById("p4frBtn");
const p4fpBtn = document.getElementById("p4fpBtn");

// Player Four EventListeners Forest

p4fmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4FMinus()
    intervalID = setInterval(p4FMinus, 150);
});

events.forEach(e =>{
    p4fmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

p4frBtn.addEventListener("click", p4FReset);

p4fpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4FPlus();
    intervalID = setInterval(p4FPlus, 150);
});

events.forEach(e=>{
    p4fpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Mountain

// Player Four Mountain Btn
const p4mmBtn = document.getElementById("p4mmBtn");
const p4mrBtn = document.getElementById("p4mrBtn");
const p4mpBtn = document.getElementById("p4mpBtn");

// Player Four Mountain Functions
function p4MMinus(){
    p4Mountain--;
    p4M.textContent = p4Mountain;
}
function p4MReset(){
    p4Mountain = 0;
    p4M.textContent = p4Mountain;
}
function p4MPlus(){
    p4Mountain++;
    p4M.textContent = p4Mountain;
}

// Player Four EventListeners Mountians

// Player Four Minus Event Mountain
p4mmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4MMinus();
    intervalID = setInterval(p4MMinus, 150);
});
events.forEach(e=>{
    p4mmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Mountain Reset
p4mrBtn.addEventListener("click", p4MReset);

// Player Four Mountain Plus

p4mpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4MPlus();
    intervalID = setInterval(p4MPlus, 150);
});
events.forEach(e =>{
    p4mpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Island Btns
const p4imBtn = document.getElementById("p4imBtn");
const p4irBtn = document.getElementById("p4irBtn");
const p4ipBtn = document.getElementById("p4ipBtn");

// Player Four Island Functions 
function p4iMinus(){
    p4Island--;
    p4I.textContent = p4Island;
}
function p4iReset(){
    p4Island = 0;
    p4I.textContent = p4Island;
}
function p4iPlus(){
    p4Island++;
    p4I.textContent = p4Island;
}

// Player Four Island EventListener

// Player Four Island Minus
p4imBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4iMinus();
    intervalID = setInterval(p4iMinus, 150);
});
events.forEach(e =>{
    p4imBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Island Reset
p4irBtn.addEventListener("click", p4iReset);

// Player Four Island Plus
p4ipBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4iPlus();
    intervalID = setInterval(p4iPlus, 150);
});
events.forEach(e=>{
    p4ipBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Colorless Btns
const p4cmBtn = document.getElementById("p4cmBtn");
const p4crBtn = document.getElementById("p4crBtn");
const p4cpBtn = document.getElementById("p4cpBtn");

// Player Four Colorless Functions 
function p4cMinus(){
    p4Colorless--;
    p4C.textContent = p4Colorless;
}
function p4cReset(){
    p4Colorless = 0;
    p4C.textContent = p4Colorless;
}
function p4cPlus(){
    p4Colorless++;
    p4C.textContent = p4Colorless;
}

// Player Four Colorless EventListener

// Player Four Colorless EventListener Minus
p4cmBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4cMinus();
    intervalID = setInterval(p4cMinus, 150);
});
events.forEach(e=>{
    p4cmBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});

// Player Four Colorless Reset
p4crBtn.addEventListener("click", p4cReset);

p4cpBtn.addEventListener("mousedown", ()=>{
    if(intervalID!==null){
        return;
    }
    p4cPlus();
    intervalID = setInterval(p4cPlus, 150);
});
events.forEach(e=>{
    p4cpBtn.addEventListener(e, ()=>{
        clearInterval(intervalID);
        intervalID = null;
    });
});