import { useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import supabase from '@hooks/useSupabase';
import { Idea } from '@utils/types';
import { Button } from '@components/ui/button';
import { useIdeaModal } from '@contexts/IdeaModalContext';

interface MapProps {
  setIdeas: (ideas: Idea[]) => void;
  ideas: Idea[];
}

export default function Map({ setIdeas, ideas }: MapProps) {
  const { setIsAddIdeaOpen } = useIdeaModal();

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

  function handleZoomToRandomIdea() {
    console.log('zoom to random idea');
  }

  return (
    <div className="relative w-full h-full background-map">
      <TransformWrapper
        onPanningStart={() => setIsAddIdeaOpen(false)}
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
        limitToBounds={false}
        disablePadding={true}
        minScale={0.1}
      >
        {({ resetTransform }) => (
          <>
            <div className="absolute top-0 left-0 z-50 w-full p-4">
              <div className="flex justify-center gap-4 ">
                <Button onClick={() => resetTransform()}>
                  Recentrer la vue
                </Button>
                <Button onClick={() => handleZoomToRandomIdea()}>
                  Zoom to random Idea (coming soon)
                </Button>
              </div>
            </div>
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '100%' }}
            >
              {ideas.map((idea, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-8 p-16 m-12 border shadow-lg bg-card border-border rounded-3xl"
                >
                  <h3 className="font-bold tracking-tight text-primary">
                    {idea.title}
                  </h3>
                  <div>
                    <p className="">{idea.description}</p>
                  </div>
                  <p className="font-medium text-secondary">
                    {idea.estimated_time} de travail
                  </p>
                  <div className="flex gap-2">
                    {idea.category.map((category, index) => (
                      <p
                        className="inline-flex gap-2 px-6 py-1.5 font-medium bg-blue-100 rounded-full"
                        key={index}
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
