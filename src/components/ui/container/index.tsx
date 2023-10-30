type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Container(props: ContainerProps) {
  return (
    <div
      className={`mx-auto min-h-screen max-w-screen-2xl ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  );
}
