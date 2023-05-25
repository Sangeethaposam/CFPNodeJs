// //LexicalScope : It refers to the ability of a function scope to access variables from the parent scope.
    
// function a(){//outer function
//     var b = 10;
//     c();
//     function c(){//inner function
//         console.log(b);
//     }
// }
// a();
//Closure: * It is a combination of a function bundled together with reference to its surrounding state(Lexical Environment).
//         * Closure is created everytime a function is created, at function creation time.
function a(){//outer function
    var b = 10;
   function c(){//inner function
        console.log(b);
    }
    return c;
}
 var c = a();
 console.log(c);
 c();