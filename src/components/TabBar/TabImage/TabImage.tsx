import { FC, useContext } from "react";
import { TabsContext } from "../TabsContext/TabsContext";
import Image from "next/image";

interface TabImageProps {
  tab: string;
  imageSrc: string;
  altText: string;
  className?: string;
}
export const TabImage: FC<TabImageProps> = ({
  tab,
  imageSrc,
  altText,
  className,
}) => {
  const { selectedTab, tabsPrefix } = useContext(TabsContext);
  if (selectedTab !== tab) return null;
  return (
    <div className={className}>
      <Image
        src={imageSrc}
        fill
        id={`tab-${tabsPrefix}-tabImage-${tab}`}
        alt={altText}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};
