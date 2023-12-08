type IconButtonProps = {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function IconButton(props: IconButtonProps) {
  const { icon, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="
          flex items-center justify-center
          rounded-full border bg-white p-1 shadow-md
          transition hover:scale-110
        "
    >
      {icon}
    </button>
  );
}
