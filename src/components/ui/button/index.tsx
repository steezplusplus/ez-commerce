type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`
          disabled:cursor-opacity-50
          w-auto
          bg-neutral-100
          px-2
          py-1
          disabled:cursor-not-allowed
          dark:bg-neutral-800
          ${props.className}
        `}
    >
      {props.children}
    </button>
  );
}
