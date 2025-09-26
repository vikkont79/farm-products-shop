import { useState } from 'react';
import { TabsButton, TabsList, TabsPanel } from './styles';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState('description'); // Начальный активный таб
  const handleTabClick = (key) => setActiveTab(key);

  return (
    <>
      <TabsList>
        {tabs.map(tab => (
          <TabsButton
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            $active={activeTab === tab.key}
          >
            {tab.title}
          </TabsButton>
        ))}
      </TabsList>
      <TabsPanel>{tabs.find(tab => tab.key === activeTab)?.content}</TabsPanel>
    </>
  )
};

export { Tabs };