import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  quizApp: {
    padding: theme.spacing(3),
  },
  questionCount: {
    marginBottom: theme.spacing(2),
  },
  questionText: {
    marginBottom: theme.spacing(2),
  },
  answerOption: {
    marginBottom: theme.spacing(1),
  },
  scoreSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  scoreText: {
    marginBottom: theme.spacing(2),
  },
}));

const questions = [
  {
    question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
    options: ['object', 'null', 'undefined', 'string'],
    answer: 'object'
  },
  {
    question: 'What is the result of the following expression?\n\n"20" - 5',
    options: ['25', '15', 'NaN', 'TypeError'],
    answer: '15'
  },
  {
    question: 'What is the scope of a variable declared with the "let" keyword?',
    options: ['Global scope', 'Function scope', 'Block scope', 'Object scope'],
    answer: 'Block scope'
  },
  {
    question: 'Which method is used to add elements to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()'
  },
  {
    question: 'What is the output of the following code?\n\nconsole.log(2 + "2");',
    options: ['4', '22', 'NaN', 'TypeError'],
    answer: '22'
  },
  {
    question: 'Which operator can be used to combine two or more strings?',
    options: ['+', '-', '*', '/'],
    answer: '+'
  },
  {
    question: 'Which method is used to remove the last element from an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'pop()'
  },
  {
    question: 'What does the "this" keyword refer to in JavaScript?',
    options: ['Current function', 'Global object', 'Parent object', 'Current object'],
    answer: 'Current object'
  },
  {
    question: 'What is the result of the following expression?\n\ntypeof NaN',
    options: ['number', 'NaN', 'undefined', 'string'],
    answer: 'number'
  },
  {
    question: 'Which keyword is used to declare a constant variable?',
    options: ['let', 'var', 'const', 'set'],
    answer: 'const'
  }
];

const QuizApp = () => {
  const classes = useStyles();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Paper className={classes.quizApp}>
      {showScore ? (
        <div className={classes.scoreSection}>
          <Typography variant="h6" className={classes.scoreText}>
            You scored {score} out of {questions.length}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
            Restart Quiz
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="subtitle1" className={classes.questionCount}>
            Question {currentQuestion + 1} / {questions.length}
          </Typography>
          <Typography variant="h6" className={classes.questionText}>
            {questions[currentQuestion].question}
          </Typography>
          <Grid container spacing={2} direction="column">
            {questions[currentQuestion].options.map((option) => (
              <Grid item key={option}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.answerOption}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Paper>
  );
};

export default QuizApp;