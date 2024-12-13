import React from "react";
import "../css/Tabs.css";

interface TabsComponentProps {
  activeTabIndex: number;
  onTabClick: (index: number) => void;
}

const TabsComponent:React.FC<TabsComponentProps> = ({ activeTabIndex, onTabClick }) => {
  const tabs = [
    { text: "Todos" },
    { text: "Próximas" },
    { text: "Atrasadas" },
  ];

  return (
    <ul className="container">
      {tabs.map((tab, index) => (
        <li
          key={tab.text}
          className={`text ${activeTabIndex === index ? 'tabSelected' : 'tabNormal'}`}
          onClick={() => onTabClick(index)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  );
}

export default TabsComponent;