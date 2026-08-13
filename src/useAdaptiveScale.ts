import { useEffect } from 'react';

const FONT_BASE = 16;
const BASE_WIDTH = 1920;
const COEF = 0.6666;

function applyAdaptiveGrid(){
  const w = window.innerWidth;
  if(w <= BASE_WIDTH){ document.documentElement.style.removeProperty('font-size'); return; }
  const widthReduction = ((BASE_WIDTH - w) / BASE_WIDTH) * 100;
  const size = FONT_BASE - (FONT_BASE * (widthReduction * COEF)) / 100;
  document.documentElement.style.fontSize = size + 'px';
}

export default function useAdaptiveScale(){
  useEffect(() => {
    applyAdaptiveGrid();
    window.addEventListener('resize', applyAdaptiveGrid);
    window.addEventListener('load', applyAdaptiveGrid);
    return () => {
      window.removeEventListener('resize', applyAdaptiveGrid);
      window.removeEventListener('load', applyAdaptiveGrid);
      document.documentElement.style.removeProperty('font-size');
    };
  }, []);
}
