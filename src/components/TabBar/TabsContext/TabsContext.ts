import { createContext } from "react";

export const TabsContext = createContext<{
  selectedTab: string | null;
  selectTab: (tab: string) => void;
  tabsPrefix: string;
}>({
  tabsPrefix: "",
  selectedTab: null,
  selectTab: (tab: string) => {
    throw new Error("should not be used without TabsContext.Provider");
  },
});
