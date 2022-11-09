let stein = 0
let sax = 0
let påsa = 0
let number = stein + sax + påsa



let wins = 0
let losses = 0
let ties = 0






   

     rNumber = Math.floor(Math.random() * 3) + 1;

 
    console.log(rNumber)
    


function rock(){
    stein = 1 
    påsa = ""
    sax = ""
    console.log("rock")
    document.getElementById("yp").innerHTML = "Rock"
   
    if(rNumber == 2){
        losses++
        document.getElementById("l").innerHTML = losses
        document.getElementById("cp").innerHTML = "Paper"
    }
    if(rNumber == 3){
        wins++
        document.getElementById("w").innerHTML = wins
        document.getElementById("cp").innerHTML = "Scissors"
    }
    if(rNumber == 1){
        ties++
        document.getElementById("t").innerHTML = ties
        document.getElementById("cp").innerHTML = "Rock"
    }
    rNumber = Math.floor(Math.random() * 3) + 1;
    console.log(rNumber)
}

function paper(){
    påsa = 2
    stein = ""
    sax = ""
    document.getElementById("yp").innerHTML = "Paper"
    console.log("paper")
    
    if (rNumber == 1){
        wins++
        document.getElementById("w").innerHTML = wins
        document.getElementById("cp").innerHTML = "Rock"
        
    }
    if (rNumber == 3){
        losses++
        document.getElementById("l").innerHTML = losses
        document.getElementById("cp").innerHTML = "Scissors"
    }
    if(rNumber == 2){
        ties++
        document.getElementById("t").innerHTML = ties
        document.getElementById("cp").innerHTML = "Paper"
        
    }
    rNumber  = Math.floor(Math.random() * 3) + 1;
    console.log(rNumber)
}

function scissors(){
    rNumber
    sax = 3
    stein = ""
    påsa = ""
    document.getElementById("yp").innerHTML = "Scissors"
    

    console.log("scissors") 
    if (rNumber == 1){
        losses++
        document.getElementById("l").innerHTML = losses
        document.getElementById("cp").innerHTML = "Rock"
    }
    if (rNumber == 2){
        wins++
        document.getElementById("w").innerHTML = wins
        document.getElementById("cp").innerHTML = "Paper"
    }
    if(rNumber == 3){
        ties++
        document.getElementById("t").innerHTML = ties
        document.getElementById("cp").innerHTML = "Scissors"
        
    }
    rNumber = Math.floor(Math.random() * 3) + 1;
    console.log(rNumber)
}

function reset(){
stein = 0
sax = 0
påsa = 0

wins = 0
losses = 0
ties = 0

rNumber = Math.floor(Math.random() * 3) + 1;

document.getElementById("yp").innerHTML = ""
document.getElementById("cp").innerHTML = ""

document.getElementById("w").innerHTML = "0"
document.getElementById("t").innerHTML = "0"
document.getElementById("l").innerHTML = "0"


}







