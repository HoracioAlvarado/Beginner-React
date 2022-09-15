import Counter from './components/Counter';
import AddToCounterButton from './components/AddToCounterButton';
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    console.log(count)
    setCount(count + 1);
  }

  return (
    <div>
      <AddToCounterButton handleClick={incrementCounter} />
      <Counter value={count} />
    </div>
  )
}
