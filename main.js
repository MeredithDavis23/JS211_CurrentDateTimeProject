// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date();
  document.getElementById("dateShow").innerHTML = currentDate
}


// Write a JavaScript program to convert a number to a string.

const numberConvert = () => {
  let num = document.getElementById("numberConvert").value
  let n = num.toString()
  document.getElementById("stringShow").innerHTML = n
  return n
  }

 

// Write a JavaScript program to convert a string to the number.
const stringNum = () => {
  let string = document.getElementById("stringConvert").value;
  let x = parseInt (string)
  document.getElementById("numberShow").innerHTML = x
  return x
}
// console.log(string)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const dataTypes = () => {
    const data = document.getElementById("dataType").value
      if (data == 'null') {
        document.getElementById("showData").innerHTML = "null";
      }
      else if (data === 'true') {
        document.getElementById("showData").innerHTML = "Boolean";
      }
      else if (data === 'false') {
        document.getElementById("showData").innerHTML = "Boolean";
      }
      else if (data === "") {
        document.getElementById("showData").innerHTML = "undefined";
      }
      else if (data <= Number.MAX_VALUE) {
        document.getElementById("showData").innerHTML = "number";
      }
      else {
        document.getElementById("showData").innerHTML = "NaN" + typeof data
      }
    }
  
  
// Write a JavaScript program that adds 2 numbers together.

const addNumbers = () => {
  let x = document.getElementById("x").value
  let y = document.getElementById("y").value
  let sum = parseInt(x) + parseInt(y)
  document.getElementById("showSum").innerHTML = sum;
  return (sum);
}

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = () => {
  let firstBool = document.getElementById("firstBool").value
  let secondBool = document.getElementById("secondBool").value
  if(firstBool == "true" && secondBool == "true") {
    document.getElementById("both").innerHTML = "Both these values are true."
  }
  else if(firstBool || secondBool == "true") {
    document.getElementById("both").innerHTML = "Only one of these values is true."
  }
   else if(firstBool && secondBool == "false") {
    document.getElementById("both").innerHTML = "Both these values are false."
  }
  else{
    document.getElementById("both").innerHTML = "Not found, please enter a boolean value."
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.



const oneTrue = (c,d) => {
  if (c || d === true) {
    return true
  }
  else {
    return false
  }
}


// Write a JavaScript program that runs when both things are not true.  

const notTrue = (e,f) => {
  if (e && f === false) {
    return true
  } 
  else {
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
