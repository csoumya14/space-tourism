interface DestinationLayoutProps {
  children: React.ReactNode;
}

export default function DestinationLayout({
  children,
}: DestinationLayoutProps) {
  return <div style={{ border: "10px solid blue" }}>{children}</div>;
}
