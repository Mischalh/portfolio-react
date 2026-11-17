import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Scrollt naar een sectie als de URL een #anker heeft, bijv. /over-mij#certificaten.
// Waarom nodig: React Router scrollt zelf alleen naar boven, niet naar een anker.
// De certificaat-banner op Home linkt zo direct naar de juiste sectie.
export function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash, pathname]);
}
