//===========START REQUIRES==============
const chalk = require('chalk') 
const ninjadb = require('ninjadb')
const users=ninjadb.create('users')
//===========END REQUIRES==============

//=======================START  FRUITS ARRAY WITH FOREACH LOOP AND FOR LOOP=============
console.log(chalk.green('******* fruits array with (FOREACH LOOP) *******'));
let fruits=['apple','panana','orange']
fruits.forEach(function(frut,fruits){
console.log(chalk.red(frut))
})


console.log(chalk.green('******* fruits array with (FOR LOOP)     *******'));
for (var x = 0; x <=fruits.length-1;x++) {
    console.log(chalk.red(fruits[x]));

}
console.log(chalk.green('******* fruits array with (WHILE LOOP)     *******'));
var y=0
while (y !=fruits.length) {
    console.log(chalk.red(fruits[y]));
    y++;
}
//========================END  FRUITS ARRAY WITH FOREACH LOOP AND FOR LOOP ===============




//========================START IF STATMENT ===============


//========================END IF STATMENT ===============








//========================START DATA BASE NINJADB ADD , UPDATE ===============
users.push({first_name:'ibrahim',last_name:'alam'})
users.update({
    first_name:'ggg'
},{
    first_name:'ibrahim'.toUpperCase()
})    
//========================END DATA BASE NINJADB ADD , UPDATE ===================



//========================START OLD FUNCTION WITH 2 PARAMETAR ==================
function addwitholdfunction(num1,num2)
{
let total=num1+num2;  //=========CREAT VARIABLE  CONTAINS NUMBER=========/
console.log(chalk.green('with old function adding 2 numbers total is :'.toUpperCase()+total));
}
//========================END OLD FUNCTION WITH 2 PARAMETAR ==================








//========================START NEW FUNCTION WITH 2 PARAMETAR ==================
const addwithnewfunction=(txt1,txt2)=>{
var alltext=( 'with new function i am studing  :'.toUpperCase()+txt1+txt2);  //=========CREAT VARIABLE  CONTAINS STRING=========/
console.log(chalk.green(alltext));
}
//========================END NEW FUNCTION WITH 2 PARAMETAR ==================


//========================START CALL NEW AND OLD FUNCTIONS WITH 2 PARAMETAR ==================
addwitholdfunction(1,2);
addwithnewfunction('web','utveklare');
//========================END CALL NEW AND OLD FUNCTIONS WITH 2 PARAMETAR ====================


//========================START CREAT STRING AND INTEGER OUTPUT (LITERAL) AND (NOLITERAL) ==================
let name="alex"
let age=38
let iamliteral='LITERAL'
let noliteral='NO LITERAL'
const stringLiteral = chalk.green(`hi my name is ${name}! and i am ${age} years old ! and this is  ${iamliteral} text output }`);
console.log( stringLiteral);
const stringadding = chalk.green("hi my name is "+name+ "! and i am " + age + " years old ! and this is "+noliteral+"text output" );
console.log(stringadding);
 //========================END CREAT STRING AND INTEGER OUTPUT (LITERAL) AND (NOLITERAL) ==================



//***************************START TERNARY OPERATION  **************************************

//======================== START NORMAL TERNARY OPERATION  IF ELSE ==================
var underage=false 
if (underage) {
    console.log("You have discount  ");
}
else {
    console.log("soory  discount for older then 18  ".toUpperCase() );
}
//======================== END NORMAL TERNARY OPERATION  IF ELSE ==================
//======================== START SHORT TERNARY OPERATION  IF ELSE ==================
var underage2=false
underage2 ? "You have discount" : "soory  discount for older then 18 ";
console.log(underage2)
//======================== END SHORT TERNARY OPERATION  IF ELSE ==================

//***************************END TERNARY OPERATION**************************************  









 


 

 


 

 


 

 




 
