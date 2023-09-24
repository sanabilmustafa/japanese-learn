'use client'
import React, { useState } from 'react';
import {quizData} from '../../../data/hiragana.json'
import {hiragana} from '../../../data/hiragana.json'

// const quizData = {
//   exercise1: [
//     {
//       index: '1',
//       question: 'Car',
//       options: ['hiragana', 'kanji', 'kuruma', 'katana'],
//       correct: 'kuruma',
//     },
//     // Add more questions here...
//   ],
//   // Add more exercises if needed...
// };

function App() {
  const [character, setChar] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  const handleOptionClick = (selectedOption) => {
    const correctAnswer = quizData.exercise1[currentQuestion].correct;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    setUserResponses([
      ...userResponses,
      {
        questionIndex: currentQuestion,
        response: selectedOption,
        correctAnswer: correctAnswer,
      },
    ]);

    if (currentQuestion < quizData.exercise1.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserResponses([]);
  };

  return (
    <div className='section'>
   <div className=''>
    <input type="text" value={character} placeholder='Enter...' className='h-12 rounded-full p-5 text-xl font-bold m-10' />
         <div className='grid grid-cols-12 w-full gap-2'>
         {hiragana.map((char)=> {
              return (
                  <button className='w-12 h-12 bg-green-200 flex justify-center items-center hover:bg-green-300'  onClick={()=>setChar(char.Japanese)}>{char.Japanese}</button>
              )
          })}
        </div>
   </div>
   <hr className='mt-10'/>
    <div className="bg-gray-100 min-h-screen p-4 mt-10">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Japanese Quiz</h1>
        {showResult ? (
          <div>
            <h2 className="text-xl font-semibold">Quiz Completed!</h2>
            <p>Your Score: {score} out of {quizData.exercise1.length}</p>
            <div className="mt-4">
              <h3 className="font-semibold">All Questions:</h3>
              <ul>
                {quizData.exercise1.map((question, index) => (
                  <li
                    key={index}
                    className={`p-2 border rounded-lg mb-2 ${
                      userResponses[index] &&
                      userResponses[index].response ===
                        userResponses[index].correctAnswer
                        ? 'bg-green-100' // Correct response
                        : 'bg-red-100' // Incorrect response
                    }`}
                  >
                    <div>
                      <p>{question.question}</p>
                      <p className="text-green-500">
                        Correct Answer: {userResponses[index].correctAnswer}
                      </p>
                      <p className="text-red-500">
                        Your Answer: {userResponses[index].response}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-4 bg-green-300 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-full"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1}
            </h2>
            <p className="mb-4 font-bold text-xl">
              {quizData.exercise1[currentQuestion].question}
            </p>
            <ul>
              {quizData.exercise1[currentQuestion].options_jp.map(
                (option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer py-2 bg-green-200 rounded-full px-5 mb-2 hover:bg-green-300"
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
