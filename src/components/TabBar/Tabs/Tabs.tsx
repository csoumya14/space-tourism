import { FC, useMemo, useState } from "react";
import { TabsContext } from "../TabsContext/TabsContext";
import { StyledTabs } from "./Tabs.style";

interface TabsProps {
  children: React.ReactNode;
  defaultSelectedTab: string;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({
  children,
  defaultSelectedTab,
  className,
}) => {
  const tabsPrefix = useMemo(() => {
    return "tabxxx";
  }, []);
  const [selectedTab, selectTab] = useState(defaultSelectedTab);

  const contextValue = useMemo(
    () => ({
      selectTab,
      selectedTab,
      tabsPrefix,
    }),
    [selectedTab, tabsPrefix]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <StyledTabs className={className}>{children}</StyledTabs>
    </TabsContext.Provider>
  );
};
