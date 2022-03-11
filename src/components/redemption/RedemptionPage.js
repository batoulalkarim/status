import {React, useState, useEffect} from 'react';
import ExpressionCard from './ExpressionCard';
import timeout from './timeout';
import laugh from "./expressions/laugh.png";
import smile from "./expressions/smile.png";
import flirt from "./expressions/flirt.png";
import sympathize from "./expressions/sympathize.png";

function RedemptionPage({user, reloadProfiles}) {

  const expressionList = [smile, laugh, flirt, sympathize];
  const [isOn, setIsOn] = useState(false);

  const initPlay = {
    isDisplay: false,
    expressions: [],
    score: 0,
    userPlay: false,
    userExpressions: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashExpression, setFlashExpression] = useState('');
  const [bigExpression, setBigExpression] = useState('')

  function startGame() {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      setPlay({...initPlay, isDisplay: true});
    }
    else {
      setPlay(initPlay);
    }
  },[isOn])

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newExpression = expressionList[Math.floor(Math.random()*4)];
      const newExpressions = [...play.expressions, newExpression];
      setPlay({...play, expressions: newExpressions});
    }
  }, [isOn, play.isDisplay])

  useEffect(() => {
    if (isOn && play.isDisplay && play.expressions.length) {
      displayExpressions();
    }
  }, [isOn, play.isDisplay, play.expressions.length])

  async function displayExpressions() {
    for (let i = 0; i < play.expressions.length; i++) {
      await timeout(300);
      setBigExpression(play.expressions[i]);
      await timeout(800);
      setBigExpression('');
      await timeout(300);

      if (i === play.expressions.length-1) {
        const copyExpressions = [...play.expressions];
        setPlay({...play, isDisplay: false, userPlay: true, userExpressions: copyExpressions});
      }
    }
  }

  async function handleCardClick(expression) {
    if(!play.isDisplay && play.userPlay && !bigExpression) {

      const copyUserExpressions = [...play.userExpressions];
      const correctExpression = copyUserExpressions.shift();
      setFlashExpression(expression);

      if (expression === correctExpression) {
        if(copyUserExpressions.length) {
          await timeout(400);
           setPlay({...play, userExpressions: copyUserExpressions});
        }
        else {
          await timeout(400);
          setPlay({...play, isDisplay: true, userPlay: false, score: play.expressions.length, userExpressions: []});
        }
       
      }
      else {
        await timeout(500);
        setPlay({...initPlay, score:play.expressions.length});
        updateRating();
      }
      setFlashExpression('');

    }
  }

  function updateRating() {

    const newRating = Math.round((Math.min(Math.max((user.rating+((play.score-5)*.2)), 0), 5))*10)/10;
    fetch('http://localhost:8002/profiles/1',{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...user, rating: newRating})
        })
        .then(response => response.json())
        .then(() => reloadProfiles());
  }

  function closeHandle() {
    setIsOn(false);
  }

  return (
    <div className="game-container">
      <div className="expressions">
       {
         expressionList.map(expression => {
           return <ExpressionCard key={expressionList.indexOf(expression)} flash={flashExpression===expression}
           expression={expression} onExpressionClick={handleCardClick} />
         })
       }
      </div>
          <div className="big-expression">
            <ExpressionCard expression={bigExpression} />
          </div>
      {isOn && !play.isDisplay && !play.userPlay && play.score && (
          <div className="lost">
            <div className="finalScore">Final score: {play.score-1}</div>
            <button onClick={closeHandle}>Close</button>
          </div>
      )}
      <div className="directions">
        <h1>~ Directions ~</h1>
        <p>Up your people skills. You need help gaining social status in your society, match the expressions seen on the left to the ones in your expression deck. Get 10 correct in a row and gain an entire star. get five or less and you lose more social status.. so pay attention! Press the 'Play Now' button for your chance to be an elite! Remember, mirroring peoples expressions is how they start to like you, and rate you five stars! </p>
      </div>
      {!isOn && !play.score && (
        <button className="center score" onClick={startGame}>Play Now</button>
      )}
      {isOn && (play.isDisplay || play.userPlay) && (
        <div className="center score" >{play.score}</div>
      )}
    </div>
  )
}

export default RedemptionPage