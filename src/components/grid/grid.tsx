export function Grid(props: { children: React.ReactNode }) {
  return (
    <ul className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.children}
    </ul>
  );
}

export function GridItem(props: { children: React.ReactNode }) {
  return (
    <li className="aspect-square rounded-sm border px-2 py-1 text-sm font-extralight hover:border-blue-500">
      {props.children}
    </li>
  );
}
