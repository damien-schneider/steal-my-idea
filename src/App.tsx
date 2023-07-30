import { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import './index.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-6xl font-semibold text-stone-700">Steal my idea</h1>
        <Input type="text" placeholder="Search" />
        <p>{count}</p>
        <div className="flex">
          <Button variant="outline" onClick={() => setCount(count + 1)}>
            Add 1
          </Button>
          <Button variant="outline" onClick={() => setCount(count - 1)}>
            Subtract 1
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
