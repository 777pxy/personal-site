export function BigText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`text-8xl tracking-tighter ${className}`}>{text}</span>
  );
}
