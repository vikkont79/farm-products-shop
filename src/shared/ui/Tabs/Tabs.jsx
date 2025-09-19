import { useState } from 'react';

function Tabs({ description, specifications, properties }) {
  const [activeTab, setActiveTab] = useState('description'); // Начальный активный таб

  return (
    <div>
      <div className="tab-list">
        <button onClick={() => setActiveTab('description')}>{description.title}</button>
        <button onClick={() => setActiveTab('specifications')}>{specifications.title}</button>
        <button onClick={() => setActiveTab('properties')}>{properties.title}</button>
      </div>

      {activeTab === 'description' && (
        <div className="tab-panel">          
          <p>{description.text}</p>
          <p><b>Цена:</b> {description.price}</p>          
        </div>
      )}
      {activeTab === 'specifications' && (
        <div className="tab-panel">          
          <p>{specifications.weight}</p>
          <p>{specifications.breed}</p>
          <p>{specifications.placeOfOrigin}</p>
          <p>{specifications.shelfLife}</p>
        </div>
      )}
      {activeTab === 'properties' && (
        <div className="tab-panel">          
          <p>{properties.energyValue}</p>
          <p>{properties.nutritionalValue}</p>
        </div>
      )}
    </div>
  );
}

export { Tabs };