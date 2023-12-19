import { Color } from '@prisma/client';

export function Marquee({ frames }: { frames: Color[] }) {
  const manyFrames = [...frames, ...frames, ...frames];

  return (
    <section className="flex">
      <ul className="animate-marquee">
        {manyFrames.map((frame) => (
          <MarqueFrame frame={frame} key={frame.id} />
        ))}
      </ul>

      <ul className="animate-marquee2">
        {manyFrames.map((frame) => (
          <MarqueFrame frame={frame} key={frame.id} />
        ))}
      </ul>
    </section>
  );
}

function MarqueFrame({ frame }: { frame: Color }) {
  return (
    <li className="border">
      <MarqueeImage src={frame.image} alt={frame.altText} />
    </li>
  );
}

function MarqueeImage({ src, alt }: { src: string; alt: string }) {
  return <p>{alt}</p>;
}
