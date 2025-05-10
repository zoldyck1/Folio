'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export function ClientImage(props: ImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData | StaticImport>(props.src);

  useEffect(() => {
    setIsMounted(true);
    // Make sure to use the current props.src
    setImageSrc(props.src);
  }, [props.src]);

  if (!isMounted) {
    return (
      <div 
        className="bg-muted animate-pulse" 
        style={{ 
          width: props.width || '100%', 
          height: props.height || '100%',
          position: props.fill ? 'absolute' : 'relative',
          inset: props.fill ? 0 : undefined
        }}
      />
    );
  }

  return (
    <Image 
      {...props} 
      src={imageSrc}
      unoptimized={typeof imageSrc === 'string' && imageSrc.startsWith('/')}
    />
  );
} 