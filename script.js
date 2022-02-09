let btn = document.getElementById("btn2")
let btn2 = document.getElementById("btn3")
let health = document.getElementById("hp1")
let health2 = document.getElementById("hp2")
let player = document.getElementById("p1")
let player2 = document.getElementById("p2")
let rounds = document.getElementById("rounds")
let win = document.getElementById("win")
let power = document.getElementById("po1")
let power2 = document.getElementById("po2")
let count = 0
let count2  = 0
let max=5
let min=0
let hp = 100
let round=1
let death =document.getElementById("d")
let death2 =document.getElementById("d2")
  
function shoot(){
    value=Math.floor(Math.random() * (max - min + 1)) + min;
    power.innerHTML=`Power:${value}`
    if(value===0){
        hp=hp-0
        health2.innerHTML=`Health:${hp}`
        power.innerHTML=`Power:${value}(No Damage Done)`
    }
    else if(value===1){
        hp=hp-20
        health2.innerHTML=`Health:${hp}`
    }
    else if(value===2){
        hp=hp-40
        health2.innerHTML=`Health:${hp}`
    }
    else if(value===3){
        hp=hp-60
        health2.innerHTML=`Health:${hp}`
    }
    else if(value===4){
        hp=hp-80
        health2.innerHTML=`Health:${hp}`
    }
    else if(value===5){
        hp=hp-100
        health2.innerHTML=`Health:${hp}`
    }
    if(hp===0||hp<0){
        hp=0
        count++
        health2.innerHTML = `Player 2 Died`;
        player.innerHTML=`Player 1-Won:${count}`;
        hp=100  
    }
    if(count===3||count>3){
        count=0
        win.innerHTML=`Player 1 Won`
        setTimeout(location.reload.bind(location), 1200);
    }
}
function shoot2(){
    value2=Math.floor(Math.random() * (max - min + 1)) + min;
    power2.innerHTML=`Power:${value2}`
    if(value2===0){
        hp=hp-0
        health.innerHTML=`Health:${hp}`
        power2.innerHTML=`Power:${value2}(No Damage Done)`
    }
    else if(value2===1){
        hp=hp-20
        health.innerHTML=`Health:${hp}`
    }
    else if(value2===2){
        hp=hp-40
        health.innerHTML=`Health:${hp}`
    }
    else if(value2===3){
        hp=hp-60
        health.innerHTML=`Health:${hp}`
    }
    else if(value2===4){
        hp=hp-80
        health.innerHTML=`Health:${hp}`
    }
    else if(value2===5){
        hp=hp-100
        health.innerHTML=`Health:${hp}`
    }
    if(hp===0||hp<0){
        hp=0
        count2++
        health.innerHTML = `Player 1 Died`;
        player2.innerHTML=`Player 2-Won:${count2}`;
        hp=100
    }
    if(count2===3|| count2>3){
        count2=0
        win.innerHTML=`Player 2 Won`
        setTimeout(location.reload.bind(location), 1200); 
    }
}
function isDisabledT(){
    btn.disabled=true;
    btn2.disabled=false;
}
function isDisabledF(){
        btn.disabled=false;
        btn2.disabled=true;
}
  























// let btn = document.getElementById("btn2")
// let btn2 = document.getElementById("btn3")
// let health = document.getElementById("hp1")
// let health2 = document.getElementById("hp2")
// let player1 = document.getElementById("p1")
// let player2 = document.getElementById("p2")

// let count1 = 0;
// let count2 = 0;
// let hp1 = 100;
// let hp2 = 100;
// let max=5;
// let min=0;

// function getPower() {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function shoot(){
    
//     let power = getPower();
//     hpChange(health, power, hp1)
//     if(hp1===0||hp1<0){
//         btn.disabled=true;
//         health.innerHTML=`Player 1 Died`;
//         count1++
//         player1.innerHTML=`Player 1-Won:${count1}`;
//     }
//     }

// function shoot2(){
//     let power = getPower();
//     hpChange(health2, power, hp2)
  
//     if(hp2===0||hp2<0){
//         btn2.disabled=true;
//         health.innerHTML=`Player 2 Died`;
//         count2++
//         player2.innerHTML=`Player 1-Won:${count2}`;
//     }
// }

// function winner(){
//     if(count1===3){
//         alert('Player 1 won')
//     }
//     else if(count2===3){
//         alert('Player 2 won')
//     }
// }
// function hpChange(player1, power, hp) {
  
//     if(power===0) hp=hp-0;
//     else if(power===1) hp=hp-20;
//     else if(power===2) hp=hp-40;
//     else if(power===3) hp=hp-60;
//     else if(power===4) hp=hp-80;
//     else if(power===5) hp=hp-100;

//     player1.innerHTML=`Health:${hp}`; 
// }
