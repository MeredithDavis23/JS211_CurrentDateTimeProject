// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
  document.appendChild("dateTime").innerHTML = dateTime
  dateTime.createTextNode()
}
 

// Write a JavaScript program to convert a number to a string.

function numberConvert () {
  let num = 15;
  const  n = num.toString();
  console.log(n)
}

// Write a JavaScript program to convert a string to the number.
function stringNum () {
  const a = parseInt ("10")
  console.log()
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function dataTypes () {
    if (typeof = Boolean) {
      document.write("Boolean")
    }
    if (typeof = null) {
      document.write("Null")
    }
    if (typeof = undefined) {
      document.write("Undefined")
    }
    if (typeof = Number) {
      document.write("Number")
    }
    if (typeof = NaN) {
      document.write("NaN")
    }
    if (typeof = String) {
      document.write("String")
    }
  }

  
// Write a JavaScript program that adds 2 numbers together.

const add = (x,y) => {
  return (x + y);
}
console.log()

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (a,b) => {
  if (a && b = true) {
    return true
  }
  else {
    return false
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (c,d) => {
  if (c||d = true)  {
    return true
  }
  else {
    return false
  }
}


// Write a JavaScript program that runs when both things are not true.  

const notTrue = (e,f) => {
  if (e && f = false) {
    return false
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
