import { useState } from 'react';
import { TabsButton, TabsList, TabsPanel } from './styles';
import { Description } from '../Description/Description';
import { Specifications } from '../Specifications/Specifications';
import { Properties } from '../Properties/Properties';

function Tabs({ description, specifications, properties }) {
  const [activeTab, setActiveTab] = useState('description'); // Начальный активный таб
  const handleTabClick = (key) => setActiveTab(key);
  
  const tabs = [
    {
      key: 'description',
      title: description.title,
    },
    {
      key: 'specifications',
      title: specifications.title,
    },
    {
      key: 'properties',
      title: properties.title,
    },
  ].filter(Boolean);

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

      {activeTab === 'description' && (
        <TabsPanel>
          <Description description={description} />
        </TabsPanel>
      )}

      {activeTab === 'specifications' && (
        <TabsPanel>
          <Specifications specifications={specifications} />
        </TabsPanel>
      )}

      {activeTab === 'properties' && (
        <TabsPanel>
          <Properties properties={properties} />
        </TabsPanel>
      )}
    </>
  )
};

export { Tabs };