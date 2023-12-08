type ButtonProps = {
  className: string;
  children: React.ReactNode;
  disabled: boolean;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`
          disabled:cursor-opacity-50
          w-auto
          rounded-full
          border-transparent
          bg-black
          px-4
          py-2
          font-semibold
          transition
          hover:opacity-75
          disabled:cursor-not-allowed
          ${props.className}
        `}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
