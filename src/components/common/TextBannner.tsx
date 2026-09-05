import { Row } from "./Row";

export function TextBanner({
  left,
  right,
  className = "",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-banner w-screen relative left-1/2 right1/2 mx-[-50vw] text-center ${className}`}
    >
      <Row className={`mx-auto max-w-5xl px-4`} left={left} right={right} />
    </div>
  );
}
