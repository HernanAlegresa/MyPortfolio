"use client";

import { useState, useCallback } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const PLACEHOLDER_SRC = "/placeholders/product.svg";

interface ProductImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function ProductImage({
  src,
  alt,
  fallbackSrc = PLACEHOLDER_SRC,
  className,
  ...props
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  }, [hasError, fallbackSrc]);

  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      className={cn(className, hasError && "opacity-60")}
      onError={handleError}
    />
  );
}
