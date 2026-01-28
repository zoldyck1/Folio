'use client';

import { useEffect, useState, memo } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const NoSSR = memo(function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
});

export default NoSSR; 