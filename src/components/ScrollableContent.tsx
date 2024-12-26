interface ScrollableContentProps {
  isExpanded: boolean;
}

export default function ScrollableContent({ isExpanded }: ScrollableContentProps) {
  // A4 size: 210mm x 297mm (width x height)
  // We'll use a scale factor to convert mm to pixels
  const scaleFactor = 3.7795275591; // 1mm = 3.7795275591px
  const a4Width = 210 * scaleFactor;
  const a4Height = 297 * scaleFactor;

  return (
    <div className={`mt-16 mx-auto transition-all duration-300 ease-in-out overflow-y-auto scrollbar-hide ${
      isExpanded ? 'w-full' : 'w-full max-w-[800px]'
    }`}>
      <div 
        className="bg-slate-300 border-2 border-gray-400 shadow-lg mx-auto"
        style={{
          width: isExpanded ? '100%' : `${a4Width}px`,
          height: `${a4Height}px`,
          maxWidth: '100%',
          aspectRatio: '210 / 297',
        }}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
}

