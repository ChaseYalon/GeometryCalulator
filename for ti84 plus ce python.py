import tkinter as tk
import math

def uiSelect():
    uiSolve()

def getOptions():
    shape = shape_var.get()
    command = command_var.get()
    return shape, command

def solve(shape, command):
    pi = math.pi
    result = ""

    if shape == "Please Select a Shape":
        if command == "Please Select a Command":
            result = "Please select a shape and command"
    
    elif shape == "circle":
        if command == "area":
            radius = float(input("Enter the radius: "))
            result = pi * radius ** 2
        elif command == "perimeter":
            radius = float(input("Enter the radius: "))
            result = 2 * pi * radius

    elif shape == "quadrilateral":
        if command == "area":
            length = float(input("Enter the length: "))
            width = float(input("Enter the width: "))
            result = length * width
        elif command == "perimeter":
            length = float(input("Enter the length: "))
            width = float(input("Enter the width: "))
            result = 2 * (length + width)

    elif shape == "triangle":
        if command == "area":
            base = float(input("Enter the base: "))
            height = float(input("Enter the height: "))
            result = (base * height) / 2
        elif command == "perimeter":
            result = "Cannot be computed. Please add the 3 sides."

    elif shape == "trapezoid":
        if command == "area":
            base1 = float(input("Enter the first base: "))
            base2 = float(input("Enter the second base: "))
            height = float(input("Enter the height: "))
            result = 0.5 * (base1 + base2) * height
        elif command == "perimeter":
            result = "Cannot be computed. Please add the 5 sides."

    elif shape == "pythagorean theorem":
        if command == "formula":
            print("Please choose the side you want to find as 'x' and enter the other two sides.")
            adjacent = float(input("Enter the adjacent side: "))
            opposite = float(input("Enter the opposite side: "))
            hypotenuse = float(input("Enter the hypotenuse: "))

            if math.isnan(adjacent):
                result = math.sqrt(hypotenuse ** 2 - (opposite ** 2))
            elif math.isnan(opposite):
                result = math.sqrt(hypotenuse ** 2 - (adjacent ** 2))
            elif math.isnan(hypotenuse):
                result = math.sqrt(adjacent ** 2 + opposite ** 2)

    elif shape == "prism":
        if command == "volume":
            base = float(input("Enter the base area: "))
            height = float(input("Enter the height: "))
            result = base * height
        elif command == "surface area":
            base = float(input("Enter the base area: "))
            perimeter = float(input("Enter the perimeter: "))
            height = float(input("Enter the height: "))
            result = 2 * base + perimeter * height

    elif shape == "sphere":
        if command == "volume":
            radius = float(input("Enter the radius: "))
            result = (4 / 3) * pi * radius ** 3
        elif command == "surface area":
            radius = float(input("Enter the radius: "))
            result = 4 * pi * radius ** 2

    elif shape == "cone":
        if command == "volume":
            radius = float(input("Enter the base radius: "))
            height = float(input("Enter the height: "))
            result = (1 / 3) * pi * radius ** 2 * height
        elif command == "surface area":
            radius = float(input("Enter the base radius: "))
            slantHeight = float(input("Enter the slant height: "))
            result = pi * radius ** 2 + pi * radius * slantHeight

    elif shape == "pyramid":
        if command == "volume":
            base = float(input("Enter the base area: "))
            height = float(input("Enter the height: "))
            result = (1 / 3) * base * height
        elif command == "surface area":
            base = float(input("Enter the base area: "))
            perimeter = float(input("Enter the perimeter: "))
            slantHeight = float(input("Enter the slant height: "))
            result = base + (perimeter / 2) * slantHeight

    elif shape == "trigonometry":
        if command == "formula":
            Itheta = float(input("Enter the value for Theta in degrees"))
            print("Please put x for the side you are solving for and y in the side that is useless")
            adjacent = input("Enter the value for adjacent")
            opposite = input("Enter the value for opposite")
            hypotenuse = float(input("Enter the value for hypotenuse"))
            theta = Itheta * (math.pi / 180)

            if opposite == 'x' and adjacent == 'y':
                result = hypotenuse * math.sin(theta)
            elif adjacent == 'x' and opposite == 'y':
                result = hypotenuse * math.cos(theta)
            elif opposite == 'x' and hypotenuse == 0:
                result = adjacent / math.tan(theta)
            elif hypotenuse == 'x' and opposite == 'y':
                result = adjacent / (1 / math.sin(theta))
            elif hypotenuse == 'x' and adjacent == 'y':
                result = opposite / math.cos(theta)
            elif adjacent == 'x' and hypotenuse == 'y':
                result = opposite / math.tan(theta)

    else:
        result = "Invalid shape or command."

    result_label.config(text=result)

def isValidShape(shape):
    validShapes = ["circle", "triangle", "quadrilateral", "trapezoid", "pythagorean theorem", "sphere", "pyramid", "cone", "prism", "trigonometry", "Please Select a Shape"]
    return shape in validShapes

def isValidCommand(command):
    validCommands = ["area", "perimeter", "volume", "surface area", "formula", "Please Select a Command"]
    return command in validCommands

def uiSolve():
    shape, command = getOptions()

    # Validate the shape and command
    if not isValidShape(shape) or not isValidCommand(command):
        result_label.config(text="Invalid shape or command.")
    else:
        solve(shape, command)

# Create the main window
root = tk.Tk()
root.title("Geometry Calculator")

# Create shape and command selection variables
shape_var = tk.StringVar(root)
shape_var.set("Please Select a Shape")
command_var = tk.StringVar(root)
command_var.set("Please Select a Command")
shape_menu = tk.OptionMenu(root, shape_var, "Please Select a Shape", "circle", "quadrilateral", "triangle", "trapezoid", "pythagorean theorem", "sphere", "pyramid", "cone", "prism", "trigonometry")
shape_menu.grid(row=0, column=1)

command_menu = tk.OptionMenu(root, command_var, "Please Select a Command", "area", "perimeter", "volume", "surface area", "formula")
command_menu.grid(row=1, column=1)

# Create a Solve button
solve_button = tk.Button(root, text="Solve", command=uiSolve)
solve_button.grid(row=2, column=0, columnspan=2)

# Create a label to display the result
result_label = tk.Label(root, text="", wraplength=200)
result_label.grid(row=3, column=0, columnspan=2)

# Start the main loop
root.mainloop()
