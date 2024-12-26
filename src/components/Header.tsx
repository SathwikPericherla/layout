import { Maximize2, Minimize2 } from 'lucide-react'

interface HeaderProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Header({ isExpanded, onToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary flex items-center justify-between px-4 z-10">
      <h1 className="text-2xl font-bold text-primary-foreground">Acolyte</h1>
      <button
        onClick={onToggle}
        className="p-2 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-colors"
        aria-label={isExpanded ? "Collapse" : "Expand"}
      >
        {isExpanded ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
      </button>
    </header>
  );
}

