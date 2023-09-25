import { FC, useContext } from "react";
import { TabsContext } from "../TabsContext/TabsContext";

interface TabPanelProps {
  tab: string;
  className?: string;
  children: React.ReactNode;
}
export const TabPanel: FC<TabPanelProps> = ({ children, tab, className }) => {
  const { selectedTab, tabsPrefix } = useContext(TabsContext);

  if (selectedTab !== tab) return null;

  return (
    <div
      role="tabpanel"
      className={className}
      tabIndex={0}
      id={`tab-${tabsPrefix}-tabpanel-${tab}`}
    >
      {children}
    </div>
  );
};
