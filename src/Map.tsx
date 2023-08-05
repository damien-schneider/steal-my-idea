import { useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import supabase from '@hooks/useSupabase';
import type { Idea } from './App';

interface MapProps {
  setIdeas: (ideas: Idea[]) => void;
  ideas: Idea[];
}

export default function Map({ setIdeas, ideas }: MapProps) {
  useEffect(() => {
    async function getAllIdeas() {
      const { data, error } = await supabase.from('ideas').select('*');
      if (error) {
        console.error(error);
        return;
      }
      setIdeas(data);
    }
    getAllIdeas();
  }, [setIdeas]);

  return (
    <div className="w-full h-full background-map">
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
        limitToBounds={false}
        disablePadding={true}
        minScale={0.1}
      >
        <TransformComponent wrapperClass="w-full h-full">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 m-12 bg-orange-300 border shadow-xl rounded-xl"
            >
              <h2 className="">{idea.title}</h2>
              <div>
                <h4>Description :</h4>
                <p>{idea.description}</p>
              </div>
              <p>{idea.estimated_time}</p>
              <div className="flex gap-2">
                {idea.category.map((category, index) => (
                  <p
                    className="inline-flex gap-2 px-4 py-1 bg-white rounded-full"
                    key={index}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
