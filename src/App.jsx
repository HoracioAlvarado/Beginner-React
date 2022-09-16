import Counter from './components/Counter';
import AddToCounterButton from './components/AddToCounterButton';
import RandomUser from './components/RandomUser';
import { useState, useEffect } from 'react'
import './App.css'


export default function App() {
  const RANDOM_USER_API = 'https://randomuser.me/api/';
  const [count, setCount] = useState(0);
  const [randomUser, setRandomUser] = useState('');

  const getRandomUser = async () => {
    const response = await fetch(RANDOM_USER_API);
    const aRandomUser = await response.json();

    setRandomUser(aRandomUser?.results[0]);
  }

  useEffect(() => {
    console.log('useEffect')
    getRandomUser();
    
  }, [])

  const incrementCounter = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <AddToCounterButton handleClick={incrementCounter} />
      <Counter value={count} />
      <RandomUser user={randomUser} />
    </div>
  )
}
