import * as Lucide from 'lucide-react';

export const Icon = ({ name, ...props }) => {
  const Component = Lucide[name];
  if (!Component) return null;
  return <Component {...props} />;
};