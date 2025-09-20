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
  background-color: #88aa4d;
  color: #ffffff;  
  line-height: var(--line-height);

  &:hover,
  &:focus-visible {
    background-color: #e1edce;
    color: var(--color-text-primary);
  }

  &:focus-visible {
    outline: none;
  }
`;

const TabsPanel = styled.div`
  display: grid;
  gap: 8px;
`;

const TabsText = styled.p`
  margin: 0;
`;

const TabsPrice = styled(TabsText)`
  inline-size: fit-content;
  margin-block-start: 6px;
  padding-inline: 8px;
  padding-block: 4px;
  background-color: #D8ECFE;
  font-weight: 700;
`;

const BoldText = styled.span`
  font-weight: 700;  
`;

export {
  TabsList,
  TabsButton,
  TabsPanel,
  TabsText,
  TabsPrice,
  BoldText,
}

