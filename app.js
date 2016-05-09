



function CountdownTimer(obnm){
 // http://coursesweb.net/javascript/
  var endct =0;  // it is set to 1 when script starts
  var ctmnts =0;  // minutes
  var ctsecs =0;  // seconds
  var startchr =0;  // used to control when to read data from form, and script finished
  var ctpause =-1;  //if -1, pause the script

  //get html elms.
  var el_showmns = document.getElementById('showmns');
  var el_showscs = document.getElementById('showscs');
  var el_mns = document.getElementById('mns');
  var el_scs = document.getElementById('scs');
  var el_btnct = document.getElementById('btnct');
  var el_btnct_res = document.getElementById('btnct_res');
  var el_btnct_end = document.getElementById('btnct_end');

  //to start/pause/resume Countdown Timer
  function startPauseCT(){
    if(parseInt(el_mns.value) >0 || parseInt(el_scs.value)>0 || endct ==1){
      ctpause *=-1;
      if(ctpause ==1){ //Start and set next click as Pause
        el_btnct.value ='PAUSE';
        window[obnm].countdownTimer();
      }
      else el_btnct.value ='RESUME';
    }
  }

  // HERE YOU CAN ADD TO EXECUTE JavaScript instructions WHEN COUNTDOWN TIMER REACHES TO 0
  function endCT(){
    // HERE ADD YOUR CODE

    return false;
  }

  this.countdownTimer = function(){
    // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
    if(startchr == 0 && el_mns && el_scs) {
      // makes sure the script uses integer numbers
      ctmnts = parseInt(el_mns.value);
      ctsecs = parseInt(el_scs.value);

      // if data not a number, sets the value to 0
      if(isNaN(ctmnts)) ctmnts = 0;
      if(isNaN(ctsecs)) ctsecs = 0;

      // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
      el_mns.value = ctmnts;
      el_scs.value = ctsecs;
      startchr = 1;
    }

    if(ctmnts >0 || ctsecs >0) endct =1;  //to can call endCT() at the ending

    // if minutes and seconds are 0, call endCT()
    if(ctmnts==0 && ctsecs==0 && endct ==1){
      startchr =0;
      ctpause =-1;
      endct =0;
      el_btnct.value ='START';
      endCT();
    }
    else if(startchr ==1 && ctpause ==1){
      // decrease seconds, and decrease minutes if seconds reach to 0
      ctsecs--;
      if(ctsecs < 0){
        if(ctmnts > 0) {
          ctsecs = 59;
          ctmnts--;
        }
        else {
          ctsecs = 0;
          ctmnts = 0;
        }
      }
      setTimeout(obnm +'.countdownTimer()', 1000); //auto-calls this function after 1 seccond
    }

    // display the time in page
    el_showmns.innerHTML = ctmnts;
    el_showscs.innerHTML = ctsecs;
  }

  //set event to button that starts the Countdown Timer
  if(el_btnct) el_btnct.addEventListener('click', startPauseCT);

  //restart Countdown Timer from the initial values
  if(el_btnct_res) el_btnct_res.addEventListener('click', function(){ startchr =0; if(ctpause ==-1) startPauseCT(); });

  //ending Countdown Timer, sets 0 form data
  if(el_btnct_end) el_btnct_end.addEventListener('click', function(){ el_mns.value =0; el_scs.value =0; startchr =0; startPauseCT(); });
}

//set object of CountdownTimer class
var obCT = new CountdownTimer('obCT');



////rock paper scissors /////////////////

$(document).ready(function(){
  var win = 0;//sets value of won to 0
  var lose = 0;//sets value of lost to 0
  var tie = 0;//sets value of ties to 0
  var summ = 0;//sets falue of many games
$("#rock").click(function(){
  var winning =$("#wons").text();
    var losing = $("#loses").text();
    var tying = $("#ties").text();
    var twowinning = winning*1;
    var twolosing = losing/2;
    var tyings = tying/2; 
    $("#scorer").text((twowinning+tyings) + " / " + summ)
var rand =Math.floor(Math.random()*3)+1
    $("#you").text("You chose : rocks"),
      summ++,
      $("#sum").text(summ+" games")
    if(rand==1){
      $("#computer").text("Computer chose : rocks"),
      $("#results").text("it's a tie"),
        tie++,//increases value onclick
        $("#tie").text("tie : "+tie),
        $("#ties").text(tie);
    }//if rand = 1 i.e rock it's a tie
    else if(rand==2){
      $("#computer").text("Computer chose : paper"),
      $("#results").text("you lose"),
        lose++,//increases value onclick
        $("#lose").text("lose : "+lose),
        $("#loses").text(lose);
    }//if rand = 2 i.e paper user loses
    else{
      $("#computer").text("Computer chose : scissors"),
      $("#results").text("you win"),
        win++,//increases value onclick
        $("#win").text("win : "+win),
        $("#wons").text(win);
    }//if rand = 3 i.e scissors user wins
  });//end of rock button click
  $("#paper").click(function(){
    var winning =$("#wons").text();
    var losing = $("#loses").text();
    var tying = $("#ties").text();
    var twowinning = winning*1;
    var twolosing = losing/2;
    var tyings = tying/2; 
    $("#scorer").text((twowinning+tyings) + " / " + summ)
var rand1 =Math.floor(Math.random()*3)+1;
    $("#you").text("You chose : paper"),
      summ++,
      $("#sum").text(summ+" games")
    if(rand1==1){
      $("#computer").text("Computer chose : rocks"),
      $("#results").text("you win"),
        win++,//increases value onclick
        $("#win").text("win : "+win),
        $("#wons").text(win);
    }//if rand = 1 i.e rock user wins
    else if(rand1==2){
      $("#computer").text("Computer chose : paper"),
      $("#results").text("it's a tie"),
        tie++,//increases value onclick
        $("#tie").text("tie : "+tie),
        $("#ties").text(tie);
    }//if rand = 2 i.e paper it's a tie
    else{
      $("#computer").text("Computer chose : scissors"),
      $("#results").text("you lose"),
        lose++,//increases value onclick
        $("#lose").text("lose : "+lose),
        $("#loses").text(lose);
    }//if rand = 3 i.e scissors user loses
  });//end of paper button click
  $("#scisors").click(function(){
    var winning =$("#wons").text();
    var losing = $("#loses").text();
    var tying = $("#ties").text();
    var twowinning = winning*1;
    var twolosing = losing/2;
    var tyings = tying/2; 
    $("#scorer").text((twowinning+tyings) + " / " + summ)
var rand2 =Math.floor(Math.random()*3)+1;
    $("#you").text("You chose : scissors"),
      summ++,
      $("#sum").text(summ+" games")
    if(rand2==1){
      $("#computer").text("Computer chose : rocks"),
      $("#results").text("you lose"),
        lose++,//increases value onclick
        $("#lose").text("lose : "+lose),
        $("#loses").text(lose);
    }//if rand = 1 i.e rock user loses
    else if(rand2==2){
      $("#computer").text("Computer chose : paper"),
      $("#results").text("you win"),
        win++,//increases value onclick
        $("#win").text("win : "+win),
        $("#wons").text(win);
    }//if rand = 2 i.e paper user wins
    else{
      $("#computer").text("Computer chose : scissors"),
      $("#results").text("it's a tie"),
        tie++,//increases value onclick
        $("#tie").text("tie : "+tie),
        $("#ties").text(tie);
    }//if rand = 3 i.e scissors it's a tie
  });//end of scissors button click
  
  $("#scorer").click(function(){
    var winning =$("#wons").text();
    var losing = $("#loses").text();
    var tying = $("#ties").text();
    var twowinning = winning*1;
    var twolosing = losing/2;
    var tyings = tying/2; 
    $("#scorer").text((twowinning+tyings) + " / " + $("#sum").text())//calculates the average 
  });//end of change function
  $("h1").click(function(){
    $(this).text("the game is below not ME !!")
  });
});//end of query

// document.getElementById('goBtn').onclick = function runTheMagic() {  
//   var userInput = document.getElementById('userInput').value,
//       cpuResult = document.getElementById('cpuResult'),
//       msgHeading = document.getElementById('msgHeading'),
//       randomize = Math.random() * 100,
//       cpuChoice;
  
//   if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
//     if (randomize > 0 && randomize < 33) {
//       cpuChoice = "Rock";
//     } else if(randomize >=34 && randomize < 66) {
//       cpuChoice = "Paper";
//     } else {
//       cpuChoice = "Scissors";
//     } 

//     cpuResult.innerHTML = cpuChoice;

//     if (userInput === cpuChoice) {
//       msgHeading.innerHTML = "It's a Tie. Try Again!";
//     }

//     if (userInput === "Rock" && cpuChoice === "Paper") {
//       msgHeading.innerHTML = "Paper covers Rock. You Loose!";
//     } else if (userInput === "Rock" && cpuChoice === "Scissors") {
//       msgHeading.innerHTML = "Rock crushes scissors. You Win!";
//       msgHeading.style.color = "green";
//     }

//     if (userInput === "Paper" && cpuChoice === "Rock") {
//       msgHeading.innerHTML = "Paper covers Rock. You Win!";
//       msgHeading.style.color = "green";
//     } else if (userInput === "Paper" && cpuChoice === "Scissors") {
//       msgHeading.innerHTML = "Scissors cut Paper. You Loose!";
//     }

//     if (userInput === "Scissors" && cpuChoice === "Rock") {
//       msgHeading.innerHTML = "Rock crushes Scissors. You Loose!";
//     } else if (userInput === "Scissors" && cpuChoice === "Paper") {
//       msgHeading.innerHTML = "Scissors cut Paper. You Win!";
//       msgHeading.style.color = "green";
//     }
//   } else {
//     msgHeading.style.color = "red";
//     msgHeading.innerHTML = "Please enter Rock, Paper or Scissors";
//     return false;
//   }
// };




