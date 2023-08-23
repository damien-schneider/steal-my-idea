import { createContext, useState } from 'react';

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
