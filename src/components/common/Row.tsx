export function Row({
  left,
  right,
  className = "",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex justify-between ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
