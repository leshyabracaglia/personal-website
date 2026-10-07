"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ImageGallery({
  images,
  title,
  sizes,
  imageClassName,
}: {
  images: string[];
  title: string;
  sizes: string;
  imageClassName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const hasMultiple = images.length > 1;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const alt = (i: number) => `${title} screenshot ${i + 1}`;

  return (
    <>
      <div className="flex gap-3 overflow-x-auto mb-4 pb-1 mt-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Enlarge ${alt(i)}`}
            className="flex-shrink-0 max-w-full cursor-zoom-in hover:opacity-80 transition-opacity"
          >
            <Image
              src={src}
              alt={alt(i)}
              width={0}
              height={0}
              sizes={sizes}
              className={imageClassName}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt(openIndex)}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/90 p-4 font-ibm-plex-mono text-terminal"
        >
          <Image
            src={images[openIndex]}
            alt={alt(openIndex)}
            width={0}
            height={0}
            sizes="100vw"
            onClick={(e) => e.stopPropagation()}
            className="h-auto w-auto max-h-[80vh] max-w-full border border-[#1a4a1a] cursor-default"
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-4 text-sm"
          >
            {hasMultiple && (
              <button
                type="button"
                onClick={() => step(-1)}
                className="text-terminal/70 hover:text-terminal"
              >
                [← prev]
              </button>
            )}
            {hasMultiple && (
              <span className="text-terminal/50">
                {openIndex + 1}/{images.length}
              </span>
            )}
            {hasMultiple && (
              <button
                type="button"
                onClick={() => step(1)}
                className="text-terminal/70 hover:text-terminal"
              >
                [next →]
              </button>
            )}
            <button
              type="button"
              onClick={close}
              autoFocus
              className="text-terminal/70 hover:text-terminal"
            >
              [x close]
            </button>
          </div>
        </div>
      )}
    </>
  );
}
