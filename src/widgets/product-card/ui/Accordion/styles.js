import styled from 'styled-components';
import { Title } from '@/shared/ui';

const AccordionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;  
`;

const AccordionItem = styled.li`  
  border: 1px solid rgba(0, 0, 0, 0.1);  
`;

const ItemTitle = styled(Title)`
  margin-block-end: 0;
  padding-inline: 20px;
  padding-block: 16px;
  background-color: #88aa4d;
  text-align: start;
`;

const ItemButton = styled.button`
  display: inline-block;
  inline-size: 100%;
  padding-inline: 20px;
  padding-block: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: #88aa4d;
  color: #ffffff;
  font-size: 24px;
  line-height: var(--line-height);
  font-weight: 700;
  text-align: start;
  cursor: ${(props) => (props.$active ? "auto" : "pointer")};

  &:hover,
  &:focus-visible {    
    scale: 1.01;
  }

  &:focus-visible {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  block-size: 0px;
  overflow: hidden;
  transition: 0.5s;
`;

const ItemContent = styled.div`
  display: grid;
  gap: 8px;
  padding-inline: 20px;
  padding-block: 16px;
`;

export {
  AccordionList,
  AccordionItem,
  ItemButton,
  ItemTitle,
  ContentWrapper,
  ItemContent,
};