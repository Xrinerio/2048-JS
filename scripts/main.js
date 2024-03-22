var allitems = document.getElementsByClassName("el");
var allposition = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function consallpos(allposition){
    allposition.forEach(element => {
        console.log(element);
    });
}



/*
if(allposition[y][x] === allposition[y][x+1] && allposition[y][x] != 0){
    allposition[y][x+1] = allposition[y][x]+allposition[y][x+1];
    allposition[y][x] = 0;
}else if(x<2 && allposition[y][x] === allposition[y][x+2] && allposition[y][x] != 0 && allposition[y][x+1] === 0){
    allposition[y][x+2] = allposition[y][x]+allposition[y][x+2];
    allposition[y][x] = 0;
}else if(x === 0 && allposition[y][x] === allposition[y][x+3] && allposition[y][x] != 0 && allposition[y][x+1] === 0 && allposition[y][x+2] === 0){
    allposition[y][x+3] = allposition[y][x]+allposition[y][x+3];
    allposition[y][x] = 0;
};
*/

function Right(){
    let Flag = false;
    for(var y = 0; y<4; y++){
        for(var x = 3; x>=0; x--){
            let soed = 0;
            while (allposition[y][x] != 0 && (allposition[y][x+1] === 0 || (allposition[y][x+1] === allposition[y][x] && soed == 0))){
                Flag = true;
                if(allposition[y][x+1] === 0){
                    allposition[y][x+1] = allposition[y][x];
                    allposition[y][x] = 0;
                    x++;
                }else if(allposition[y][x+1] === allposition[y][x] && soed == 0){
                    soed = 1;
                    allposition[y][x+1] = allposition[y][x+1]+allposition[y][x];
                    allposition[y][x] = 0;
                    x++;
                }
            }
        }
    }
    if(Flag){spawning()}
}

function Left(){
    let Flag = false;
    for(var y = 0; y<4; y++){
        for(var x = 1; x<4; x++){
            let soed = 0;
            while (allposition[y][x] != 0 && (allposition[y][x-1] === 0 || (allposition[y][x-1] === allposition[y][x] && soed == 0))){
                Flag = true;
                if(allposition[y][x-1] === 0){
                    allposition[y][x-1] = allposition[y][x];
                    allposition[y][x] = 0;
                    x--;
                }else if(allposition[y][x-1] === allposition[y][x]){
                    soed = 1;
                    allposition[y][x-1] = allposition[y][x-1]+allposition[y][x];
                    allposition[y][x] = 0;
                    x--;
                }
            }
        }
    }
    if(Flag){spawning()}
}

function Up(){
    let Flag = false;
    for(let x = 0; x<4; x++){//0 1 2 3
        for(let y = 1; y<4; y++){
            let soed = 0;
            while(allposition[y][x] != 0 && (allposition[y-1][x] == 0 || (allposition[y-1][x] == allposition[y][x] && soed == 0))){
                Flag = true;
                if(allposition[y-1][x] == 0){
                    allposition[y-1][x] = allposition[y][x];
                    allposition[y][x] = 0;
                }else if(allposition[y-1][x] == allposition[y][x]){
                    soed = 1;
                    allposition[y-1][x] = allposition[y][x]+allposition[y-1][x];
                    allposition[y][x] = 0;
                };
                if(y > 1){y--;};
            }
        }
    }
    if(Flag){spawning()}
}

function Down(){
    let Flag = false;
    for(let x = 0; x<4; x++){//0 1 2 3
        for(let y = 2; y>=0; y--){//2 1 0
            let soed = 0;
            while(allposition[y][x] != 0 && (allposition[y+1][x] == 0 || (allposition[y+1][x] == allposition[y][x] && soed == 0))){
                Flag = true;
                if(allposition[y+1][x] == 0){
                    allposition[y+1][x] = allposition[y][x];
                    allposition[y][x] = 0;
                }else if(allposition[y+1][x] == allposition[y][x]){
                    soed = 1;
                    allposition[y+1][x] = allposition[y][x]+allposition[y+1][x];
                    allposition[y][x] = 0;
                };
                if(y < 2){y++;};
            }
        }
    }
    
    if(Flag){spawning()}
}



function RandomInt(max){
    return Math.floor(Math.random() * max)
}


function toDispley(table){
    for(var y = 0; y<4; y++){
        for(var x = 0; x<4; x++){
            
            if (table[y][x] != 0){
                switch(table[y][x]){
                    case 2:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#eee4da";
                        break
                    case 4:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#ede0c8";
                        break
                    case 8:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#f2b179";
                        break
                    case 16:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#f59563";
                        break
                    case 32:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#f67c5f";
                        break
                    case 64:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#f6673f";
                        break
                    case 128:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#eed072";
                        break
                    case 256:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#eecd62";
                        break
                    case 512:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#eeca54";
                        break
                    case 1024:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#efc847";
                        break
                    case 2048:
                        document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#efc847";
                        break

                }
                document.getElementById(String(y)+" "+String(x)).textContent = String(table[y][x]);
            }else{
                document.getElementById(String(y)+" "+String(x)).style.backgroundColor = "#cdc1b4";
                document.getElementById(String(y)+" "+String(x)).textContent = null;
            }
        }
    }
}

function Lose(){
    var Flag = true;
    for(let x = 0; x<3; x++){
        for(let y = 0; y<3; y++){
            if(allposition[y+1][x] == allposition[y][x] || allposition[y][x+1] == allposition[y][x] || allposition[y][x+1] == 0 || allposition[y+1][x] == 0 || allposition == 0){
                Flag = false;
            }
        }
    }
    if(allposition[3][2] == allposition[3][3] || allposition[2][3] == allposition[3][3] || allposition[3][3] == 0){
        Flag = false;
    }

    return Flag;
}


function spawning(){
    var setRandomX = RandomInt(4);
    var setRandomY = RandomInt(4);
    if (allposition[setRandomY][setRandomX] == 0){
        allposition[setRandomY][setRandomX] = 2;
        toDispley(allposition);
    }else{
        spawning();
    }
    
    
}

//functions ^


window.onload = function(){document.querySelector("h3").textContent = "0"; spawning(); spawning(); toDispley(allposition);};

document.onkeydown = function(e){
    switch (e.keyCode){
        case 37:
            document.querySelector("h3").textContent = "<";
            Left();
            break;
        case 38:
            document.querySelector("h3").textContent = "^";
            Up();
            break;
        case 39:
            document.querySelector("h3").textContent = ">";
            Right();
            break;
        case 40:
            document.querySelector("h3").textContent = "v";
            Down();
            break;
        default:
            break;
    };
    
};