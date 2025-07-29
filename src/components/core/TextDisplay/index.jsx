const TextDisplay = ({
  value,
  className,
  isMultiline = false,
  rows = 4,
}) => {
  return (
    <div className="relative w-full">
      {isMultiline ? (
        <div
          className={`pl-8 pt-6 whitespace-pre-wrap ${className}`}
          style={{ minHeight: `${rows * 1.5}rem` }}
        >
          {value}
        </div>
      ) : (
        <div className={`pl-8 py-2 ${className}`}>{value}</div>
      )}
    </div>
  );
};

export default TextDisplay;
