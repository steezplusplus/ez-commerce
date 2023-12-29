export function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={`grid grid-flow-row gap-4 ${props.className}`}>
      {props.children}
    </ul>
  );
}

export function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={`aspect-square ${props.className}`}>
      {props.children}
    </li>
  );
}
