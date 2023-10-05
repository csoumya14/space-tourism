import { FC, useCallback, useRef } from "react";
import { Wrapper } from "./TabList.style";

interface TabListProps {
  children: React.ReactNode;
  "aria-label": string;
  className?: string;
}

export const TabList: FC<TabListProps> = ({
  children,
  className,
  "aria-label": ariaLabel,
}) => {
  const refList = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const list = refList.current;
    if (!list) return;
    const tabs = Array.from<HTMLElement>(
      list.querySelectorAll('[role="tab"]:not([diabled])')
    );
    const index = tabs.indexOf(document.activeElement as HTMLElement);
    if (index < 0) return;

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft": {
        const next = (index - 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        const next = (index + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
    }
  }, []);
  return (
    <Wrapper
      ref={refList}
      role="tablist"
      className={className}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {children}
    </Wrapper>
  );
};
