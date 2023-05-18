React Notes:

- Javascript Library for building user interfaces
- Front end framework
- Can allow our code to be very clean and scaleable 
- Can combine small amounts of HTML, CSS and JS into a component

- CodeSandbox - An online code editor for React

- In body section, must have a div with an id of 'root'.
- Ex: <div id="root"></div>
- Will see in any react app. The root of the react application. Everything created using react will be placed inside this div.

- Inside react is babel, a JS compiler. Can compile JSX down to normal JavaScript.
- JSX combines HTML and JS.
- Can place HTML into a JS file.

- Can place JS inside the HTML that is inside the other JS.
- Can create a constant and then refer to it inside the HTML by placing it inside curly braces.
- Example:
    - const name = "Richard";
    - <h1>Hello {name}</h1>

- Can place any JS expression inside but cannot write JS statements (if statements, etc.)

Course Challenge #1:

- Create app that displays 2 paragraph HTML Elements
- "Created by [YOURNAME]" and "Copyright [CURRENTYEAR]
- Solution:

    import "./styles.css";

    const name = "Richard";
    const date = new Date();
    const currentYear = date.getFullYear();

    export default function App() {
        return (
            <div className="App">
                <p>Created by {name}</p>
                <p>Copyright {currentYear}</p>
            </div>
        );
    };

- Just like in regular HTML/CSS, it is recommended to assign classes to your elements and then editing the style in a seperate CSS folder. But instead of using "class", we use "className".

- Ex:   <h1 className="heading" contentEditable="true" spellCheck="false">
        My Favourite Foods
        </h1>

- For all React attributes with more than one word it has to have the second word capitalised. E.g: className, contentEditable.

- There's only a few certain cases where we need inline styling for react elements such as on the fly styling.

- Instead of font-size in vanilla CSS, it must be written like "fontSize".

- Value of these key value pairs must be a string.

- Functions in React must be pascal case. The first letter of each compound word in a variable is capitalized. 

Creating a new React App:

- Go to terminal and type in 
- To start, use "npm start"

React Dev Tools:
- Shows react DOM tree
- By clicking on components in the dev tools, you can see the props being parsed.
- Get React Dev tools by getting extension on chrome/firefox
- 