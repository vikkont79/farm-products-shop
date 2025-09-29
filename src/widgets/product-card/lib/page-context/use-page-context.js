import { useContext } from 'react';
import { PageContext } from './page-context';

const usePageContext = () => useContext(PageContext);

export { usePageContext };