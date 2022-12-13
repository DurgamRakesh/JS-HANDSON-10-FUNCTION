//functions:

function myfun(){
    console.log('function with zero parameter');
}
myfun()

//<------------------------------------------------>

function sum(num1,num2){
    let total = num1 + num2
    console.log(`sum of ${num1},${num2} is ${total}`);
}
sum(3,4);

//<------------------------------------------------>

const arrow = () => {
    console.log('this is arrow funtion');
}
arrow()

//<------------------------------------------------>


// Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;

};
girl ();

// op: undefined

//<------------------------------------------------>

// Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//op: undefiend 21

//<------------------------------------------------>

// "Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//op: 20 40

//<------------------------------------------------>

const myfac = (n) => {
    
    if(n == 0){
        return 1;
    }
    else{
        return n * myfac(n-1);
    }
    
}
const factorial = myfac(5);
console.log(factorial);


