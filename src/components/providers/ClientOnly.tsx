'use client';

import { useEffect, useState, ComponentType } from 'react';

export function ClientOnly<P extends object>(Component: ComponentType<P>) {
  return function ClientOnlyComponent(props: P) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }

    return <Component {...props} />;
  };
} 