import AddIdea from './AddIdea';
import IdeaMap from './IdeaMap';
import Map from './Map';
import './index.css';
import { Button } from '@components/ui/button';
import { useState } from 'react';
function App() {
  const [isAddIdeaOpen, setIsAddIdeaOpen] = useState(false);
  //TODO Add 'escape' key to close addIdea
  return (
    <>
      <div className="relative w-screen h-screen bg-stone-300">
        <Button
          className="absolute z-50 -translate-x-1/2 bottom-6 left-1/2"
          onClick={() => setIsAddIdeaOpen(!isAddIdeaOpen)}
        >
          Ajouter une idée
        </Button>
        <h1>Steal my Idea</h1>
        <AddIdea
          setIsAddIdeaOpen={setIsAddIdeaOpen}
          isAddIdeaOpen={isAddIdeaOpen}
        />
        <IdeaMap />
        <Map />
        <button>Go to random note</button>
      </div>
    </>
  );
}

export default App;
