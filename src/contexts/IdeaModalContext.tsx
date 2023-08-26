import { createContext, useState } from 'react';
import { useContext } from 'react';


interface IContext {
  isAddIdeaOpen: boolean;
  setIsAddIdeaOpen: (value: boolean) => void;
}

export const IdeaModalContext = createContext({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export const IdeaModalProvider = ({ children }: IProps) => {
  const [isAddIdeaOpen, setIsAddIdeaOpen] = useState<boolean>(false);
  
  return (
    <IdeaModalContext.Provider value={{ isAddIdeaOpen, setIsAddIdeaOpen }}>
      {children}
    </IdeaModalContext.Provider>
  );
};

export const useIdeaModal = () => {
  const context = useContext(IdeaModalContext);
  if (!context) throw new Error('Context must be use inside provider');
  return context;
};
