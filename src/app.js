import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['My sister', 'My dad', 'My mom'];
  let action = ['stole', 'broke', 'lost'];
  let what = ['my laptop', 'my coffee machine', 'my guitar'];
  let when = ['yesterday', 'earlier today', 'now'];

  function generateExcuse() {
    let whoItem = who[Math.floor(Math.random() * who.length)];
    let actionItem = action[Math.floor(Math.random() * action.length)];
    let whatItem = what[Math.floor(Math.random() * what.length)];
    let whenItem = when[Math.floor(Math.random() * when.length)];
  
    let excuse = `${whoItem} ${actionItem} ${whatItem} ${whenItem}.`;
    document.getElementById("Exc").innerHTML = excuse;
  }

  generateExcuse();
  console.log("Hello Rigo from the console!");
}

