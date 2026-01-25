'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export function ClientImage(props: ImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData | StaticImport>(props.src);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setImageSrc(props.src);
    setImageError(false);
  }, [props.src]);

  // Helper function to determine if image should be unoptimized
  const shouldUnoptimize = (src: string | StaticImageData | StaticImport): boolean => {
    if (typeof src === 'string') {
      // External URLs (http/https) should be unoptimized
      return src.startsWith('http://') || src.startsWith('https://');
    }
    return false;
  };

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

  // Error fallback
  if (imageError) {
    return (
      <div 
        className="bg-muted flex items-center justify-center" 
        style={{ 
          width: props.width || '100%', 
          height: props.height || '100%',
          position: props.fill ? 'absolute' : 'relative',
          inset: props.fill ? 0 : undefined
        }}
      >
        <span className="text-muted-foreground text-sm">Image not found</span>
      </div>
    );
  }

  return (
    <Image 
      {...props} 
      src={imageSrc}
      unoptimized={shouldUnoptimize(imageSrc)}
      onError={() => setImageError(true)}
    />
  );
}
