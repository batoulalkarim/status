import React from 'react';

function ExpressionCard({expression, onExpressionClick, flash}) {
  return (
    <div className={`expressionCard ${flash ? 'flash' : ''} ${expression ? '' : 'hidden'}`} onClick={() => onExpressionClick(expression)}>
      <img src={expression} alt="laugh" />
    </div>
  )
}

export default ExpressionCard;