import { FC, useContext, useEffect } from "react";
import { TabsContext } from "../TabsContext/TabsContext";

interface TabProps {
  tab: string;
  children?: React.ReactNode;
  className?: string;
}

export const Tab: FC<TabProps> = ({ children, tab, className }) => {
  const { selectedTab, selectTab, tabsPrefix } = useContext(TabsContext);

  return (
    <button
      role="tab"
      className={className}
      aria-selected={selectedTab === tab}
      aria-controls={`tab-${tabsPrefix}-tabpanel-${tab}`}
      onClick={() => {
        selectTab(tab);
      }}
      tabIndex={selectedTab === tab ? 0 : -1}
    >
      {children}
    </button>
  );
};
