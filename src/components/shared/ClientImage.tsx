'use client';

import { useState, useEffect, memo } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData | StaticImport;
  fallback?: string;
}

export const ClientImage = memo(function ClientImage({
  fallback = '/images/placeholder.svg',
  ...props
}: OptimizedImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      loading={props.loading || 'lazy'}
      placeholder={props.placeholder || 'blur'}
      blurDataURL={props.blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='}
      onError={() => setImageError(true)}
    />
  );
});
