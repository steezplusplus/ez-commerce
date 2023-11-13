type IconButtonProps = {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function IconButton(props: IconButtonProps) {
  const { icon, onClick, className } = props;
  return (
    <button className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800" onClick={onClick}>
      {icon}
    </button>
  );
}
