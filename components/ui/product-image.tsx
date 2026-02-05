"use client";

import { useState, useCallback, useEffect } from "react";
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

  // Update image source when src prop changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

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
