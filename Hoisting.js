//HOISTING : * Hoisting in js default behaviour of moving declaration to the top.
    //           * Declaration is hoisted.
    //           * Intialization is not hoisted
    //var
    //Getting undefined
    console.log(a);//output:undefined
    var a = 5;
    //Getting result
    a = 5;
    console.log(a);
    var a ;//output : 5
    //Let
    a = 5;
    console.log(a);//ReasonForError: In let ,the variable must be declared first.
    let a ;//error 
    //output : Uncaught ReferenceError:cannot access a before initialization.
    //Const
    // z = 6;
    // console.log(z);
    // const z;//SyntaxError: Missing initializer in const declaration.
    //Functions Hoisting

    greet();//output : Hi,How Are You.
    function greet(){
        console.log("Hi,How Are You.");
    }
    //AnonymousFunction
    //var
    greet();//TypeError: greet is not a function
    var greet = function(){
        console.log("Hi,How Are You.");
    }
    //Let
    greet();//ReferenceError: Cannot access 'greet' before initialization
    let greet = function(){
        console.log("Hi,How Are You.");
    }
    //ArrowFunction
    //var
    greet();//TypeError: greet is not a function
    var greet = () =>{
        console.log("Hi,How Are You.");
    }
    //Let
    greet();//ReferenceError: Cannot access 'greet' before initialization
    let greet = () =>{
        console.log("Hi,How Are You.");
    }
    //const
    greet();//ReferenceError: Cannot access 'greet' before initialization
    const greet = () =>{
        console.log("Hi,How Are You.");
    }
