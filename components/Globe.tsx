"use client";
import type { COBEOptions } from "cobe";
import createGlobe from "cobe";
import type { MutableRefObject } from "react";
import React, { useEffect, useRef } from "react";

export default function Globe(): JSX.Element {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

  const size = 700;
  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;

    const globeSettings: COBEOptions = {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // Dark base color (black)
      markerColor: [0.8, 0.2, 0.6], // Purple color
      glowColor: [0.9, 0.2, 0.7], // Light purple for glow
      markers: [],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.001;
      },
    };

    const globe = createGlobe(canvasRef.current, globeSettings);

    return () => {
      if (canvasRef.current && globe) {
        globe.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: size, height: size, aspectRatio: "1" }} />;
}
