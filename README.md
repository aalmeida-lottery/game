# Lottery Quiz Game

A fun and educational quiz game that tests users' knowledge of the different lottery games. The game is designed with multiple-choice, true/false, offers instant feedback, and provides the final result along with a pass/fail statement. To win the game, the user needs a score of 80% or higher!

## Features

- Random selection of questions from a pool of questions
- Interactive multiple-choice, true/false questions
- Instant feedback on your answers
- Score calculation and pass/fail result
- Confetti animation for passing the quiz

## File Descriptions

- **index.html**: This file contains the HTML structure of the quiz game. It includes the main game container, question container, buttons, and result display elements.
- **style.css**: This file defines the visual appearance of the game, ensuring it looks appealing and is user-friendly.
- **script.js**: This file contains all the JavaScript code for the game logic, including functions for handling questions, displaying feedback, calculating scores, and restarting the game.
- **questions.json**: This file contains an array of quiz questions in JSON format. Each question includes the question text, options, the correct answer, and optional explanations.

## Customization

### Changing the number of questions

To change the number of questions presented in the quiz, you need to modify the JavaScript code in `script.js`.

1. Open the repository on GitHub and navigate to the `script.js` file.
2. Click in the pencil icon (edit button) to edit the file.
3. Locate the `startGame` function. You will find a line that selects the number of questions:
   ```javascript
   questions = selectRandomQuestions(data, 12); //select 12 random questions
   ```
4. Change the number `12` to the desired number of questions. For example, to select 7 questions:
   ```javascript
   questions = selectRandomQuestions(data, 7); //select 7 random questions
   ```
5. Click the "Commit changes" button to save your changes.

### Other Common Changes
#### Changing the Pass Percentage

1. Open the repository on GitHub and navigate to the `script.js` file.
2. Click the pencil icon (edit button) to edit the file.
3. Locate the `showResult` function. You will find a line that checks the pass percentage:
   ```javascript
   if (percentage >= 80) {  // 80% is the passing percentage
   ```
4. Change the number `80` to the desired passing percentage. For example, to set the passing percentage to 70%:
   ```javascript
   if (percentage >= 70) {  // 70% is the passing percentage
   ```

5. Additionally, update the result message to reflect the new passing percentage. Find and update the following lines:
   ```javascript
   if (percentage >= 80) {
       resultMessage.innerText = 'Congratulations, you passed!';
   } else {
       resultMessage.innerText = 'Sorry, you did not pass. \nYou need a score of 80% or higher to pass. \nBetter luck next time!';
   }
   ```

   Change them to:
   ```javascript
   if (percentage >= 70) { //70% is the passing percentage
       resultMessage.innerText = 'Congratulations, you passed!';
   } else {
       resultMessage.innerText = 'Sorry, you did not pass. \nYou need a score of 70% or higher to pass. \nBetter luck next time! ';
   }
   ```


5. Click the "Commit changes" button to save your changes.

#### Adjusting Feedback Messages

1. Open the repository on GitHub and navigate to the `script.js` file.
2. Click the pencil icon (edit button) to edit the file.
3. Locate the `showAnswerFeedback` function. You will find the feedback messages:
   ```javascript
   if (selectedOption === correctAnswer) {
        button.classList.add('correct');
        score++;
        if (currentQuestion.correct_explanation) {
            feedbackElement.innerText = currentQuestion.correct_explanation;
        } else {
            feedbackElement.innerText = 'Correct!';
        }
    } else {
        button.classList.add('incorrect');
        if (currentQuestion.incorrect_explanation) {
            feedbackElement.innerText = currentQuestion.incorrect_explanation;
        } else {
            feedbackElement.innerText = `Answer: ${correctAnswer}`;
        }
    }
    ```
4. Modify the feedback messages as needed. For example, to change the correct feedback message to "Well done!":
   ```javascript
   if (selectedOption === correctAnswer) {
        button.classList.add('correct');
        score++;
        if (currentQuestion.correct_explanation) {
            feedbackElement.innerText = currentQuestion.correct_explanation;
        } else {
            feedbackElement.innerText = 'Well done!';
        }
    } 
    ```
5. Click the "Commit changes" button to save your changes.

#### Adding questions to the JSON file

To add new questions to the quiz, follow these steps:

1. Open the repository on GitHub and navigate to the `questions.json` file.
2. Click the pencil icon (edit button) to edit the file.
3. Add a new question object to the array. Ensure that the new question follows the same format as the existing questions. For example:
   ```json
   [
     {
        "question": "Keno drawings take place approximately every three minutes from 5:04am to 1:01am",
        "type": "true-false",
        "options": ["True", "False"],
        "answer": "True"
    },
    {
        "question": "Keno Bonus is available on the 10-Spot, 11-Spot, and 12-Spot games.",
        "type": "true-false",
        "options": ["True", "False"],
        "answer": "False",
        "incorrect_explanation": "The answer is False: Not available in those spots",
        "correct_explanation": "Correct! Keno Bonus is not available in those spots"
    },
   // Add new questions below this line
    {
        "question": "How many ways are there to play The Wheel of Luck?",
        "type": "multiple-choice",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
    }
   ]
   ```
4. Ensure that each question includes the following keys:
   - `question`: the question text.
   - `type`: if it's true or false, write "true-false", if it's not then write "multiple-choice".
   - `options`: an array of the options.
   - `answer`: the correct answer (must match one of the options).
   - `correct_explanation` (optional): an explanation for the correct answer.
   - `incorrect_explanation` (optional): an explanation for the incorrect answer.

5. For multiple-choice:
   ```json
   {
      "question": "Your question text here?",
      "type": "multiple-choice",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "answer": "Correct answer here"
   }
   ```

6. For true/false:
   ```json
   {
      "question": "Your question text here?",
      "type": "true-false",
      "options": ["True", "False"],
      "answer": "Correct answer here"
      "correct_explanation": "Explain why this is the correct answer (optional)",
      "incorrect_explanation": "Explain why this is the incorrect answer  (optional)"
   }
   ```   

7. Click the "Commit changes" button to save your changes.
