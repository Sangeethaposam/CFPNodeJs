function hello(){
console.log("Hello World");
}
hello();
//PRIMITIVE DATATYPE: * It is a data that is not an object and has no methods and properties.
//                    * Primitives are immutable.
//                    * Immutable values are those which cannot be modified after creation.
//var
var a = 5;   //Global scope
function abc(){
     var a = 8;//local variable
     var a =10;
    console.log("inside the function " + a);
    {
        var a = 7;
        console.log("inside the block " + a);
    }
}
console.log("outside the function " + a);
abc();
//Let
let b = 5;//global scope
function xyz(){
    let b = 8;//local scope
    //let b =10;
    console.log("inside the function " + b);
    {
        let b = 7;
        console.log("inside the block " + b);
    }
}
console.log("outside the function " + b);
xyz();
//const
const c = 6; //global scope
function def(){
    const c = 8;//local scope
    c = 10;
    console.log("inside the function " + c);
        {
            const c = 7;
            console.log("inside the block " + c);
        }
    }
    console.log("outside the function " + c);
    def();
//NON PRIMITIVE DATATYPE : * It has methods and properties.
//                         * Non Primitives are mutable.
//                         * Mutable values are those which can be modified after creation.
     let arr =[1];
     arr.push(2);
     console.log(arr);

    