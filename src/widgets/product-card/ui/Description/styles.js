import styled from 'styled-components';
import { LabeledText } from '@/shared/ui';

const MoreButton = styled.button`
  display: inline-block;
  inline-size: fit-content;
  padding-inline: 12px;
  padding-block: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #e1edce;
  color: var(--color-text-primary);
`;

const TabsPrice = styled(LabeledText)`
  inline-size: fit-content;
  margin-block-start: 6px;
  padding-inline: 8px;
  padding-block: 4px;
  background-color: #D8ECFE;  
`;

export {  
  MoreButton,
  TabsPrice,  
}