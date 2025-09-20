import { useState } from 'react';
import { BoldText, TabsButton, TabsList, TabsPanel, TabsPrice, TabsText } from './styles';

function Tabs({ description, specifications, properties }) {
  const [activeTab, setActiveTab] = useState('description'); // Начальный активный таб

  return (
    <>
      <TabsList>
        <TabsButton onClick={() => setActiveTab('description')}>
          {description.title}
        </TabsButton>
        {specifications &&
          <TabsButton onClick={() => setActiveTab('specifications')}>
            {specifications.title}
          </TabsButton>
        }
        {properties &&
          <TabsButton onClick={() => setActiveTab('properties')}>
            {properties.title}
          </TabsButton>
        }
      </TabsList>

      {activeTab === 'description' && (
        <TabsPanel>
          <TabsText>{description.text}</TabsText>
          <TabsPrice>Цена: {description.price}</TabsPrice>
        </TabsPanel>
      )}
      {activeTab === 'specifications' && (
        <TabsPanel>
          <TabsText>
            <BoldText>{specifications.weight.key}</BoldText>{specifications.weight.value}
          </TabsText>
          <TabsText>
            <BoldText>{specifications.breed.key}</BoldText>{specifications.breed.value}
          </TabsText>
          <TabsText>
            <BoldText>{specifications.placeOfOrigin.key}</BoldText>{specifications.placeOfOrigin.value}
          </TabsText>
          <TabsText>
            <BoldText>{specifications.shelfLife.key}</BoldText>{specifications.shelfLife.value}
          </TabsText>
        </TabsPanel>
      )}
      {activeTab === 'properties' && (
        <TabsPanel>
          <TabsText>
            <BoldText>{properties.energyValue.key}</BoldText>{properties.energyValue.value}
          </TabsText>
          <TabsText>
            <BoldText>{properties.nutritionalValue.key}</BoldText>{properties.nutritionalValue.value}
          </TabsText>
        </TabsPanel>
      )}
    </>
  );
}

export { Tabs };