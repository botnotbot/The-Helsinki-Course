import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <>
      <button onClick={handleClick}> {text} </button> 
    </> 
)

const Feedback = (props) => ( 
  <> 
    Total: {props.total}
  </>
)

const Display = ({text, evaluation}) => ( 
  <>
    {text}: {evaluation} 
  </> 
)

const Statistics = (props) => (
  <>
    <button onClick={props.do}> </button> 
  </>
  )


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [stats, setStats] = useState(0)


  const setToGood = (evaluation) => { 
    setGood(evaluation)
    totalFeedback(1)
    setStatistics()
  }

  const setToNeutral = (evaluation) => { 
    setNeutral(evaluation)
    totalFeedback(1)
    setStatistics()
  }

  const setToBad = (evaluation) => { 
    setBad(evaluation)
    totalFeedback(1)
    setStatistics()
  }

  const totalFeedback = (score) => { 
    setTotal(total + score)
  }

  const setStatistics = () => {
      const newScore = (good-bad)/(total)
      setStats(newScore)
    }

  return (
    <div>
      <h1>
      Statistics 
      </h1> 

      <h2>
      How was your experience?
      </h2> 


      <Button handleClick={()=>setToGood(good + 1)} text='Good'
      /> 
      
      <Button handleClick={()=>setToNeutral(neutral + 1)} text='Neutral'
      />
     
      <Button handleClick={()=>setToBad(bad + 1)} text='Bad'
      /> 

      <p> 
      <Display text="Good" evaluation= {good} 
      /> 
      </p> 

      <p> 
      <Display text="Neutral" evaluation= {neutral} 
      />
      </p> 

      <p> 
      <Display text="Bad" evaluation= {bad} 
      /> 
      </p> 

      <p> 
      <Feedback total= {total}
      /> 
      </p> 

      <p>
      <Statistics onClick={()=>setStatistics()} 
      />
      </p> 

      <p> 
      {stats}
      </p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)