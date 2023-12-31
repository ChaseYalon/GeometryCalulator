    	function uiSelect(){
        uisolve()
        }
        function getOptions() {
            const shape = document.getElementById('select1').value;
            const command = document.getElementById('select2').value;

            return { shape, command };
        }

      function solve(shape, command) {
    const pi = Math.PI;
    let result = "";

    switch (shape) {
            case "Please Select a Shape":
            if (command === "Please Select a Command") {
                
                result ="Please select a shape and command"
          
            }
            break;
        case "circle":
            if (command === "area") {
                const radius = parseFloat(prompt("Enter the radius:"));
                result = pi * Math.pow(radius, 2);
            } else if (command === "perimeter") {
                const radius = parseFloat(prompt("Enter the radius:"));
                result = 2 * pi * radius;
            }
            break;

        case "quadrilateral":
            if (command === "area") {
                const length = parseFloat(prompt("Enter the length:"));
                const width = parseFloat(prompt("Enter the width:"));
                result = length * width;
            } else if (command === "perimeter") {
                const length = parseFloat(prompt("Enter the length:"));
                const width = parseFloat(prompt("Enter the width:"));
                result = 2 * (length + width);
            }
            break;

        case "triangle":
            if (command === "area") {
                const base = parseFloat(prompt("Enter the base:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = (base * height) / 2;
            } else if (command === "perimeter") {
                result = "Cannot be computed. Please add the 3 sides.";
            }
            break;

        case "trapezoid":
            if (command === "area") {
                const base1 = parseFloat(prompt("Enter the first base:"));
                const base2 = parseFloat(prompt("Enter the second base:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = 0.5 * (base1 + base2) * height;
            } else if (command === "perimeter") {
                result = "Cannot be computed. Please add the 5 sides.";
            }
            break;

        case "pythagorean theorem":
            if (command === "formula") {
                alert("Please choose the side you want to find as 'x' and enter the other two sides.");
                const adjacent = parseFloat(prompt("Enter the adjacent side:"));
                const opposite = parseFloat(prompt("Enter the opposite side:"));
                const hypotenuse = parseFloat(prompt("Enter the hypotenuse:"));

                if (isNaN(adjacent)) {
                    result = Math.sqrt(hypotenuse * hypotenuse - (opposite * opposite));
                } else if (isNaN(opposite)) {
                    result = Math.sqrt(hypotenuse * hypotenuse - (adjacent * adjacent));
                } else if (isNaN(hypotenuse)) {
                    result = Math.sqrt(adjacent * adjacent + opposite * opposite);
                }
            }
            break;

        case "prism":
            if (command === "volume") {
                const base = parseFloat(prompt("Enter the base area:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = base * height;
            } else if (command === "surface area") {
                const base = parseFloat(prompt("Enter the base area:"));
                const perimeter = parseFloat(prompt("Enter the perimeter:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = 2 * base + perimeter * height;
            }
            break;

        case "sphere":
            if (command === "volume") {
                const radius = parseFloat(prompt("Enter the radius:"));
                result = (4 / 3) * pi * Math.pow(radius, 3);
            } else if (command === "surface area") {
                const radius = parseFloat(prompt("Enter the radius:"));
                result = 4 * pi * Math.pow(radius, 2);
            }
            break;

        case "cone":
            if (command === "volume") {
                const radius = parseFloat(prompt("Enter the base radius:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = (1 / 3) * pi * Math.pow(radius, 2) * height;
            } else if (command === "surface area") {
                const radius = parseFloat(prompt("Enter the base radius:"));
                const slantHeight = parseFloat(prompt("Enter the slant height:"));
                result = pi * Math.pow(radius, 2) + pi * radius * slantHeight;
            }
            break;

        case "pyramid":
            if (command === "volume") {
                const base = parseFloat(prompt("Enter the base area:"));
                const height = parseFloat(prompt("Enter the height:"));
                result = (1 / 3) * base * height;
            } else if (command === "surface area") {
                const base = parseFloat(prompt("Enter the base area:"));
                const perimeter = parseFloat(prompt("Enter the perimeter:"));
                const slantHeight = parseFloat(prompt("Enter the slant height:"));
                result = base + (perimeter / 2) * slantHeight;
            }
            break;

        case "trigonometry":
            if (command === "formula") {
const Itheta = parseFloat(prompt("Enter the value for Theta in degrees"));
alert("Please put x for the side you are solving for and y in the side that is useless");
const adjacent = prompt("Enter the value for adjacent");
const opposite = prompt('Enter the value for opposite');
const hypotenuse = parseFloat(prompt("Enter the value for hypotenuse"));
const theta = Itheta * (Math.PI / 180);

if (opposite === 'x' && adjacent === 'y') {
    result = hypotenuse * Math.sin(theta);
} else if (adjacent === 'x' && opposite === 'y') {
    result = hypotenuse * Math.cos(theta);
} else if (opposite === 'x' && hypotenuse === 0) {
    result = adjacent / Math.tan(theta);
} else if (hypotenuse === 'x' && opposite === 'y') {
    result = adjacent / (1 / Math.sin(theta));
} else if (hypotenuse === 'x' && adjacent === 'y') {
    result = opposite / Math.cos(theta);
} else if (adjacent === 'x' && hypotenuse === 'y') {
    result = opposite / Math.tan(theta);
}
            }
            break;

        default:
            result = "Invalid shape or command.";
            break;
    }

    document.querySelector(".result").textContent = result;
}
function isValidShape(shape) {
  const validShapes = ["circle", "triangle", "quadrilateral", "trapezoid", "pythagorean theorem", "sphere", "pyramid", "cone", "prism","trigonometry","Please Select a Shape"];
  return validShapes.includes(shape);
}

function isValidCommand(command) {
  const validCommands = ["area", "perimeter", "volume", "surface area", "formula","Please Select a Command"];
  return validCommands.includes(command);
}



function uiSolve() {
  const options = getOptions();

  // Validate the shape and command
  if (!isValidShape(options.shape) || !isValidCommand(options.command)) {
    alert("Invalid shape or command.");
    return;
  }

  // Call the solve function
  solve(options.shape, options.command);
}


        window.onload = function() {
            // Initialize the UI
            uiSolve();
        };
