interface StatusDotProps {
    color: 'green' | 'red';
  }
  
  export function StatusDot({ color }: StatusDotProps) {
    const colorClass = color === 'green' ? 'text-green-500' : 'text-red-500';
  
    return (
      <span className={`text-lg ${colorClass} mx-2`}>●</span>
    );
  }
  