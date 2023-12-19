type CarouselProps = {
  frames: any[];
};

export function Carousel(props: CarouselProps) {
  const { frames } = props;

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex h-full gap-4 pl-2">
        {frames.map((frame, i) => {
          return (
            <li className="relative aspect-square w-1/5 flex-none snap-center md:w-1/4" key={i}>
              <div className="relative inline-block h-full w-full bg-gray-100 dark:bg-gray-700">
                <div className="relative h-full w-full object-contain">{frame}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
