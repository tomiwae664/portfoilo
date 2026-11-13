import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'drag' | 'play'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (cursorEl) {
          const type = cursorEl.getAttribute('data-cursor') as any;
          const text = cursorEl.getAttribute('data-cursor-text') || '';
          setCursorType(type || 'hover');
          setCursorText(text);
        } else if (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a')
        ) {
          setCursorType('hover');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animId: number;
    const loop = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  const isView = cursorType === 'view';
  const isDrag = cursorType === 'drag';
  const isPlay = cursorType === 'play';
  const isHover = cursorType === 'hover' || isView || isDrag || isPlay;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF7A00] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHover ? 0.6 : 1})`
        }}
      />

      {/* Outer Spring Accent Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out flex items-center justify-center font-bold text-[10px] font-mono tracking-widest uppercase hidden md:flex ${
          isView
            ? 'w-20 h-20 bg-[#FF7A00] text-[#0E1015] border-[#FF7A00] shadow-[0_0_30px_rgba(255,122,0,0.4)] scale-105'
            : isDrag
            ? 'w-16 h-16 bg-[#FF7A00] text-[#0E1015] border-[#FF7A00]'
            : isHover
            ? 'w-12 h-12 bg-[#FF7A00]/15 border-[#FF7A00]/60 shadow-[0_0_20px_rgba(255,122,0,0.25)] backdrop-blur-[2px]'
            : 'w-8 h-8 bg-transparent border-[#FF7A00]/40'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {isView && (cursorText || 'VIEW')}
        {isDrag && (cursorText || 'DRAG')}
        {isPlay && (cursorText || 'PLAY')}
      </div>
    </>
  );
};
