import { AccordionItem, AccordionList, ContentWrapper, ItemButton, ItemContent, ItemTitle } from './styles';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function Accordion({ items }) {
  const [activeItem, setActiveItem] = useState('description');
  const [height, setBlockSize] = useState(0);
  const openContent = useRef(null);
  const handleItemClick = (key) => setActiveItem(key);

  useEffect(() => {
    setBlockSize(openContent.current.offsetHeight);
  }, [height, activeItem]);

  return (
    <AccordionList>
      {items.map((item) =>
        item.key === activeItem ? (
          <AccordionItem key={item.key}>
            <ItemButton $active>
              {item.title}
            </ItemButton>
            <ContentWrapper style={{ height }}>
              <ItemContent ref={openContent}>{item.content}</ItemContent>
            </ContentWrapper>
          </AccordionItem>
        ) : (
          <AccordionItem key={item.key}>
            <ItemButton onClick={() => handleItemClick(item.key)}>
              {item.title}
            </ItemButton>
            <ContentWrapper>
              <ItemContent>{item.content}</ItemContent>
            </ContentWrapper>
          </AccordionItem>          
        )
      )}
    </AccordionList>
  );
};

export { Accordion };