import React, { useEffect, useState } from 'react';
import supabase from '@hooks/useSupabase';

interface Idea {
  category: string[];
  created_at: string | null;
  description: string;
  estimated_time: string;
  id: number;
  title: string;
  user_id: number | null;
}

export default function IdeaMap() {
  const [ideas, setIdeas] = useState<Idea[] | null>([]);
  useEffect(() => {
    const getIdeas = async () => {
      const { data, error } = await supabase.from('ideas').select('*');
      if (error) {
        console.error(error);
        return;
      }
      setIdeas(data);
      console.log(data);
    };
    getIdeas();
  }, []);

  return (
    <div>
      {ideas?.map((idea) => (
        <div key={idea.id}>
          <h2>{idea.title}</h2>
          <p>{idea.description}</p>
          <p>{idea.category}</p>
          <p>{idea.estimated_time}</p>
        </div>
      ))}
    </div>
  );
}
