"use client";

import dynamic from 'next/dynamic';

export const NoSSR = dynamic(() => import('@/components/providers/NoSSR'), {
  ssr: false
});

export const ScrollToTopButton = dynamic(() => import('@/components/shared/ScrollToTopButton'), {
  loading: () => null,
  ssr: false
});

export const TargetCursor = dynamic(() => import('@/components/shared/TargetCursor'), {
  loading: () => null,
  ssr: false
});