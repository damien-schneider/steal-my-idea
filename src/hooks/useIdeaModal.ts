import { useContext } from 'react';
import { IdeaModalContext } from '@/contexts/IdeaModalContext';

export const useIdeaModal = () => {
    const context = useContext(IdeaModalContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};