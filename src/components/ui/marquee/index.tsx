type MarqueeProps = {};

export function Marquee(props: MarqueeProps) {
  return (
    <div className="flex select-none gap-x-4 overflow-hidden">
      <ul className="animate-marquee flex min-w-full shrink-0 justify-around gap-x-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <ul
        className="animate-marquee flex min-w-full shrink-0 justify-around gap-x-4"
        aria-hidden="true"
      >
        <li>display only 1</li>
        <li>display only 2</li>
        <li>display only 3</li>
        <li>display only 4</li>
      </ul>
    </div>
  );
}
