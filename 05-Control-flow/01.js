// if 
const temperature = 41;
if(temperature === 41){
   console.log("less than 50")
}
else{
console.log("temperature is greater than 50")
}


//eg2
if(2 == "2"){
   console.log("executed"); //will not execute
}
//comparision operators
//<,>,<=,>=,==,!=,===, !==

const score = 200
if(score>100){
   const power = "fly"
   console.log(`user power: ${power} `);
}
//console.log(`user power: ${power} `); will not execute due to local scope of power


//implicit scope (without {})  dont fallow this
const balance = 1000
if(balance >500) console.log("test"),
console.log("test2");

//nesting if
if(balance < 500){
   console.log("less than 500")
}
else if(balance <750){
   console.log("less than 750")
}
else if(balance<900){
   console.log("less than 900")
}
else{
   console.log("less than 1200")
}

const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

//&& condition all cases must pass
if(userloggedin && debitcard && 2==2){
   console.log("allow to buy course")
}

//or condtion
if(loggedinfromgoogle || loggedinfromemail){
   console.log("user logged in")
}