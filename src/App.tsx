import { useState } from 'react';

import AddIdea from '@/AddIdea';
import Map from './Map';
import './index.css';
import { Button } from '@components/ui/button';
import { Toaster } from '@components/ui/toaster';


export interface Idea {
  category: string[];
  created_at: string | null;
  description: string;
  estimated_time: string;
  id: number;
  title: string;
  user_id: number | null;
}
function App() {
  const [isAddIdeaOpen, setIsAddIdeaOpen] = useState(false);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  //TODO Add 'escape' key to close addIdea
  return (
    <>
      <Toaster />
      <div className="relative w-full h-screen overflow-hidden bg-stone-300">
        <Button
          className="absolute z-50 text-lg -translate-x-1/2 bottom-8 left-1/2"
          onClick={() => setIsAddIdeaOpen(!isAddIdeaOpen)}
        >
          Ajouter une idée
        </Button>
        <AddIdea
          setIdeas={setIdeas}
          setIsAddIdeaOpen={setIsAddIdeaOpen}
          isAddIdeaOpen={isAddIdeaOpen}
        />
        <Map setIdeas={setIdeas} ideas={ideas} />
        <button>Go to random note</button>
      </div>
    </>
  );
}

export default App;
