export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DestinationLayout>{children}</DestinationLayout>
    </section>
  );
}
