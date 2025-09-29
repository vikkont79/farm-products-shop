import { useContext } from 'react';
import { PageContext } from './PageContext';

const usePageContext = () => useContext(PageContext);

export { usePageContext };