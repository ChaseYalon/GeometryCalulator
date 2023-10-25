console.log('script loaded');

function csc(theta) {
    return 1 / Math.sin(theta);
}

function cot(theta) {
    return Math.cos(theta) / Math.sin(theta);
}

function sec(theta) {
    return 1 / Math.cos(theta);
}

const pi = Math.PI;
const square = Math.pow(2, 2);
const random = Math.random();
const math = Math;

var length = 0;
var width = 0;
var Height_2D = 0;
var adjacent = 0;
var opposite = 0;
var hypotenuse = 0;
var ThetaInDegrees = 0;
var height = 0;
var base = 0;
var radius = 0;
var slantHeight = 0;
var Perimeter = 0;
var base1 = 0;
var base2 = 0;
var theta = 0;
var circle = "circle";
var area = "area";
var perimeter = "perimeter";
var quadrilateral = "quadrilateral";
var triangle = "triangle";
var trapezoid = "trapezoid";
var pythagoreanTheorem = "pythagorean theorem";
var formula = "formula";
var prisim = "prisim";
var volume = "volume";
var surfaceArea = "surface area";
var sphere = "sphere";
var cone = "cone";
var pyramid = "pyramid";
var solveForAdjacent = "solve for adjacent";
var trigonometry = "trigonometry";

function solve(shape, command) {
    if (shape === "circle" && command === "area") {
        radius = prompt("radius=");
        return alert(pi * (radius * radius));
    }
    if (shape === "circle" && command === "perimeter") {
        radius = prompt("radius=");
        return alert(2 * pi * radius);
    }
    if (shape === "quadrilateral" && command === "area") {
        length = prompt("length=");
        width = prompt("width=");
        return alert(length * width);
    }
    if (shape === "quadrilateral" && command === "perimeter") {
        length = prompt("length=");
        width = prompt("width=");
        return alert(2 * length + 2 * width);
    }
    if (shape === "triangle" && command === "area") {
        length = prompt("length=");
        width = prompt("width=");
        return alert((length * width) / 2);
    }
    if (shape === "triangle" && command === "perimeter") {
        alert("cannot be computed please just add the 3 sides");
    }

   if(shape==="trapezoid"&command==="area"){
       base1=prompt("base1=")
       base2=prompt("base2=")
       height=prompt("height=")
       return alert(0.5*(base1+base2)*height)
   };
   if(shape==="trapezoid"&command==="perimeter"){
       return alert("cannot be computed please just add the 5 sides");
   };
   if(shape==="pythagorean theorem"&command==="formula"){
       alert("please make the side you want to find as ")

       adjacent=prompt("adjacent=")
       opposite=prompt("opposite=")
       hypotenuse=prompt("hypotenuse=")
            if(adjacent="x"){
            return alert(Math.sqrt(hypotenuse*hypotenuse-(opposite*opposite)))
            }
            if(opposite="x"){
            return alert(Math.sqrt(hypotenuse*hypotenuse-(adjacent*adjacent)))
            }
            if(hypotenuse="x"){
            return alert(math.sqrt(adjacent * adjacent + opposite * opposite))    
            }
  
   };
   if(shape==="prisim"&command==="volume")  {
       base=prompt("base=")
       height=prompt("height=")
        return alert(base*height)
    };
   if(shape==="prisim"&command==="surface area"){
       base=prompt("base=")
       height=prompt("height=")
       perimeter=prompt("perimeter=")
        return alert((2*base)+(perimeter*height))
        //doesnt work fix later
    };
   if(shape==="sphere"&command==="volume") {
       radius=prompt("radius=")
        return alert((4/3)*pi*(radius*radius*radius))
    };
   if(shape==="sphere"&command==="surface area") {
       radius=prompt("radius=")
        return alert(4*pi*(radius*radius))
    };
   if(shape==="cone"&command==="volume"){
       radius=prompt("radius=")
       height=prompt("height=")
       return alert(pi*(radius*radius)*(height/3))
   }
   if(shape==="cone"&command==="surface area"){
       radius=prompt("radius=")
       slantHeight=prompt("slant height=")
   return alert(pi*(radius*radius)+pi*radius*slantHeight)
};
   if(shape==="pyrmid"&command==="volume"){
   return alert(length*width*height/3)
   }
   if(shape==="pyrmid"&command==="surface area") {
       perimeter=prompt("perimeter=")
       slantHeight=prompt("slant height=")
   return alert(base+(perimeter/2)*slantHeight)
   }
  if(shape==="trigonometry"&command==="formula"){
       alert("please put x in the side you want to calculate and y in the side that is irrelavent")
       theta=prompt("theta=")
       adjacent=prompt("adjacent=")
       opposite=prompt("opposite=")
       hypotenuse=prompt("hypotenuse=")
       if(adjacent==="x"&opposite==="y"){
           return alert(hypotenuse*Math.cos(theta))
       }
       if(adjacent==="x"&opposite==="y"){
           return alert(opposite*cot(theta))
       }
       if(opposite==="x"&adjacent==="y"){
           return alert(hypotenuse*Math.sin(theta))
       }
       if(opposite==="x"&hypotenuse==="y"){
           return alert(adjacent*Math.tan(theta))  
       }
       if(hypotenuse==="x"&adjacent==="y"){
           return alert(opposite*csc(theta))
       }
       if(hypotenuse==="x"&adjacent==="y"){
           return alert(opposite*sec(theta))
       }
   }

    return alert("Invalid shape or command");
}

function uiSolve() {
    var shape =''
    var command =''
    shape=prompt('shape=')
    command=prompt('command=')
    solve(shape,command)
}



// Add an event listener to call uiSolve when the page loads
    uiSolve();





