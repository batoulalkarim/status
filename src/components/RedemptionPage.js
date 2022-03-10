import {React, useState} from 'react'

function RedemptionPage() {

  const divs = ['red', 'blue', 'black', 'white']
  const [isOn, setIsOn] = useState(false);

  function startGame() {
    setIsOn(true);
  }

  return (
    <div>
      <div className="colors">
       {
         divs.map(div => {
           return <div key={divs.indexOf(div)} className={div}></div>
         })
       }
      </div>
      <button className={!isOn ? "center" : "hidden"} onClick={startGame}>play</button>
    </div>
  )
}

export default RedemptionPage