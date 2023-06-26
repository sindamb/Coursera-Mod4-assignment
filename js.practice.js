<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Module 4 Solution Starter</title>
    <script>
      var names = []; // DO NOT REMOVE
    </script>
    <script src="SpeakHello.js"></script>
    <script src="SpeakGoodBye.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Module 4 Solution Starter</h1>

    <table style="width: 736px" border="1">
      <tbody>
        <tr>
          <td style="width: 30px"></td>
          <td style="width: 700px">
            <p>
              // *******************************<br />
              // START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR
              THIS ASSIGNMENT<br />
              // *******************************<br />
              //<br />
              // Module 4 Assignment Instructions.<br />
              //<br />
              // The idea of this assignment is to take an existing array of
              names<br />
              // and then output either Hello 'Name' or Good Bye 'Name' to the
              console.<br />
              // The program should say "Hello" to any name except names that
              start with a "J"<br />
              // or "j", otherwise, the program should say "Good Bye". So, the
              final output<br />
              // on the console should look like this:
              <br /><br />
              Hello Yaakov<br />
              Good Bye John<br />
              Good Bye Jen<br />
              Good Bye Jason<br />
              Hello Paul<br />
              Hello Frank<br />
              Hello Larry<br />
              Hello Paula<br />
              Hello Laura<br />
              Good Bye Jim
            </p>

            <p>
              WARNING!!! WARNING!!!<br />
              The code does NOT currently work! It is YOUR job to make it
              work<br />
              as described in the requirements and the steps in order to
              complete this<br />
              assignment.<br />
              WARNING!!! WARNING!!!
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">script.js</td>
          <td style="width: 700px">
            // STEP 1:<br />// Wrap the entire contents of script.js inside of
            an IIFE<br />
            // See Lecture 52, part 2<br />
            // (Note, Step 2 will be done in the SpeakHello.js file.)
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakHello.js</td>
          <td style="width: 700px">
            <p>
              // STEP 2: Wrap the entire contents of SpeakHello.js inside of an
              IIFE<br />// See Lecture 52, part 2
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakHello.js</td>
          <td style="width: 700px">
            // STEP 3: Create an object, called 'helloSpeaker' to which you will
            attach
            <p>
              // the "speak" method and which you will expose to the global
              context<br />// See Lecture 52, part 1<br />// var helloSpeaker =
            </p>
            <p>
              // DO NOT attach the speakWord variable to the 'helloSpeaker'
              object.<br />
              <span style="color: blue">var speakWord = "Hello";</span>
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakHello.js</td>
          <td style="width: 700px">
            // STEP 4: Rewrite the 'speak' function such that it is attached to
            the
            <p>
              // helloSpeaker object instead of being a standalone function.<br />//
              See Lecture 52, part 2
            </p>
            <p style="color: blue">
              function speak(name) {<br />
              console.log(speakWord + " " + name);<br />
              }
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakHello.js</td>
          <td style="width: 700px">
            // STEP 5: Expose the 'helloSpeaker' object to the global scope.
            Name it<br />
            // 'helloSpeaker' on the global scope as well.<br />// See Lecture
            52, part 2<br />
            // (Note, Step 6 will be done in the SpeakGoodBye.js file.)<br />//
            xxxx.xxxx = helloSpeaker;
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakGoodBye.js</td>
          <td style="width: 700px">
            <p>
              // NOTE! The steps in this file are basically identical to the
              ones you<br />// performed in the SpeakHello.js file.
            </p>
            <p>
              // STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of
              an IIFE<br />// See Lecture 52, part 2
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakGoodBye.js</td>
          <td style="width: 700px">
            // STEP 7: Create an object, called 'byeSpeaker' to which you will
            attach
            <p>
              // the "speak" method and which you will expose to the global
              context<br />// See Lecture 52, part 1<br />
              // var byeSpeaker =
            </p>
            <p>
              // DO NOT attach the speakWord variable to the 'byeSpeaker'
              object.<br />
              <span style="color: blue">var speakWord = "Good Bye"; </span>
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakGoodBye.js</td>
          <td style="width: 700px">
            // STEP 8: Rewrite the 'speak' function such that it is attached to
            the<br />
            // byeSpeaker object instead of being a standalone function.<br />
            // See Lecture 52, part 2<br />
            <p style="color: blue">
              function speak(name) {<br />
              console.log(speakWord + " " + name);<br />
              }
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">SpeakGoodBye.js</td>
          <td style="width: 700px">
            // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name
            it<br />// 'byeSpeaker' on the global scope as well.<br />//
            xxxx.xxxx = byeSpeaker;
          </td>
        </tr>

        <tr>
          <td style="width: 30px">script.js</td>
          <td style="width: 700px">
            // STEP 10:<br />// Loop over the names array and say either 'Hello'
            or "Good Bye"<br />
            // using the 'speak' method or either helloSpeaker's or
            byeSpeaker's<br />// 'speak' method.<br />
            // See Lecture 50, part 1<br />
            // for (/* fill in parts of the 'for' loop to loop over names array
            */) {
          </td>
        </tr>

        <tr>
          <td style="width: 30px">script.js</td>
          <td style="width: 700px">
            <p>
              // STEP 11:<br />
              // Retrieve the first letter of the current name in the loop.<br />
              // Use the string object's 'charAt' function. Since we are looking
              for<br />
              // names that start with either upper case or lower case 'J'/'j',
              call<br />
              // string object's 'toLowerCase' method on the result so we can
              compare<br />
              // to lower case character 'j' afterwards.<br />
              // Look up these methods on Mozilla Developer Network web site if
              needed.<br />
              // var firstLetter =
            </p>
          </td>
        </tr>

        <tr>
          <td style="width: 30px">script.js</td>
          <td style="width: 700px">
            // STEP 12:<br />
            // Compare the 'firstLetter' retrieved in STEP 11 to lower case<br />
            // 'j'. If the same, call byeSpeaker's 'speak' method with the
            current name<br />
            // in the loop. Otherwise, call helloSpeaker's 'speak' method with
            the current<br />
            // name in the loop.<br />
            if (/* fill in condition here */) {<br />
            // byeSpeaker.xxxx<br />
            } else {<br />
            // helloSpeaker.xxxx<br />
            }
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
