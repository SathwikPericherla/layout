interface ToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export default function ToggleButton({ isExpanded, onClick }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
    >
      {isExpanded ? 'Collapse' : 'Expand'}
    </button>
  );
}

