import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './components/CoffeeCard/CoffeCard';
import { useState } from 'react';

function App() {
  const loddedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loddedCoffees)
  return (
    <>
      <nav>
        <Link className='px-2 text-green-500 font-bold' to="addCoffe">AddCoffe</Link>
        <Link className='px-2 text-green-500 font-bold' to="/updateCoffe">UpdateCoffe</Link>
      </nav>
      <h1 className='text-5xl text-purple-600'>Coffe Store House</h1>
      <div className='grid grid-cols-2 gap-3 mt-5'>
        {
          coffees.map(coffee => <CoffeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeCard>)
        }
      </div>
    </>
  )
}

export default App
