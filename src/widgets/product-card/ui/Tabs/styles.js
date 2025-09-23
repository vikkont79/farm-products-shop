import styled from 'styled-components';
import { Button } from '@/shared/ui'

const TabsList = styled.div`
  display: flex;
  gap: 8px;
  margin-block-end: 16px
`;

const TabsButton = styled.button`
  display: inline-block;
  padding-inline: 12px;
  padding-block: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$active ? "#88aa4d" : "#e1edce")};
  color: ${(props) => (props.$active ? "#ffffff" : "var(--color-text-primary)")};
  line-height: var(--line-height);

  &:hover,
  &:focus-visible {
    
    scale: 1.1;
  }

  &:focus-visible {
    outline: none;
  }
`;

const TabsPanel = styled.div`
  display: grid;
  gap: 8px;
`;



export {
  TabsList,
  TabsButton,
  TabsPanel,  
};

