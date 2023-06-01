import { useContext } from 'react';
import { ItemsContext, ActionsContext } from './context';

export const useItems = () => {
  const items = useContext(ItemsContext);
  return items;
};

export const useActions = () => {
  const dispatch = useContext(ActionsContext);
  return dispatch;
};
