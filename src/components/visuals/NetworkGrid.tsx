export const NetworkGrid = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="150" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="200" cy="200" r="100" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="200" y1="0" x2="200" y2="400" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="0" y1="200" x2="400" y2="200" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="4" className="fill-accent-500" />
      <circle cx="250" cy="150" r="3" className="fill-primary-900" />
      <line x1="200" y1="200" x2="250" y2="150" stroke="#CBD5E1" strokeWidth="1" />
    </svg>
  );
};