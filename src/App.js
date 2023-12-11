import React, { useState } from 'react';
import ACCORDIAN_CONFIGURATION from './accordian-configration.js';
import './style.css';

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (itemName) => {
    setActiveAccordion((prev) => (prev === itemName ? '' : itemName));
  };

  return (
    <div>
      <h1>Accordian Component</h1>
      <div className="container">
        {ACCORDIAN_CONFIGURATION?.map((itm) => {
          return (
            <div className="each_accordian" key={itm?.name}>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className="label">{itm?.label}</div>
                <img
                  src="https://img.icons8.com/windows/32/expand-arrow--v1.png"
                  alt="arrow-icon"
                  onClick={() => toggleAccordion(itm?.name)}
                  style={{
                    transform:
                      activeAccordion === itm?.name ? 'rotate(180deg)' : '',
                    transition: '0.5s',
                  }}
                />
              </div>
              {activeAccordion === itm?.name ? (
                <div className="content">{itm?.content}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
