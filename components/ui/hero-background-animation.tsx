"use client";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useReducer, useState } from "react";

type State = {
  curX: number;
  curY: number;
  tgX: number;
  tgY: number;
};

type Action =
  | { type: 'SET_TARGET'; payload: { x: number; y: number } }
  | { type: 'MOVE' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TARGET':
      return { ...state, tgX: action.payload.x, tgY: action.payload.y };
    case 'MOVE':
      return {
        ...state,
        curX: state.curX + (state.tgX - state.curX) / 20,
        curY: state.curY + (state.tgY - state.curY) / 20,
      };
    default:
      return state;
  }
};

export const HeroBackgroundAnimation = ({
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "255, 102, 0",    // Orange
  secondColor = "255, 153, 0",   // Darker Orange
  thirdColor = "255, 204, 0",    // Light Orange
  fourthColor = "255, 102, 0",   // Orange (same as first for consistency)
  fifthColor = "255, 153, 0",    // Darker Orange (same as second for consistency)
  pointerColor = "255, 102, 0",  // Orange (same as firstColor for consistency)
  size = "100%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, {
    curX: 0,
    curY: 0,
    tgX: 0,
    tgY: 0,
  });

  useEffect(() => {
    document.body.style.setProperty(
      "--hero-gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--hero-gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--hero-first-color", firstColor);
    document.body.style.setProperty("--hero-second-color", secondColor);
    document.body.style.setProperty("--hero-third-color", thirdColor);
    document.body.style.setProperty("--hero-fourth-color", fourthColor);
    document.body.style.setProperty("--hero-fifth-color", fifthColor);
    document.body.style.setProperty("--hero-pointer-color", pointerColor);
    document.body.style.setProperty("--hero-size", size);
    document.body.style.setProperty("--hero-blending-value", blendingValue);
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      dispatch({ type: 'MOVE' });
      interactiveRef.current.style.transform = `translate(${Math.round(state.curX)}px, ${Math.round(state.curY)}px)`;
    }

    const intervalId = setInterval(move, 1000 / 60); // 60 FPS
    return () => clearInterval(intervalId);
  }, [state.curX, state.curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      dispatch({
        type: 'SET_TARGET',
        payload: {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        },
      });
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--hero-gradient-background-start),var(--hero-gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="heroBlurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg z-0",
          isSafari ? "blur-2xl" : "[filter:url(#heroBlurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--hero-first-color)_0,_var(--hero-first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--hero-blending-value)] w-[var(--hero-size)] h-[var(--hero-size)] top-[calc(50%-var(--hero-size)/2)] left-[calc(50%-var(--hero-size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-hero-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--hero-second-color),_0.8)_0,_rgba(var(--hero-second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--hero-blending-value)] w-[var(--hero-size)] h-[var(--hero-size)] top-[calc(50%-var(--hero-size)/2)] left-[calc(50%-var(--hero-size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-hero-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--hero-third-color),_0.8)_0,_rgba(var(--hero-third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--hero-blending-value)] w-[var(--hero-size)] h-[var(--hero-size)] top-[calc(50%-var(--hero-size)/2)] left-[calc(50%-var(--hero-size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-hero-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--hero-fourth-color),_0.8)_0,_rgba(var(--hero-fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--hero-blending-value)] w-[var(--hero-size)] h-[var(--hero-size)] top-[calc(50%-var(--hero-size)/2)] left-[calc(50%-var(--hero-size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-hero-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--hero-fifth-color),_0.8)_0,_rgba(var(--hero-fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--hero-blending-value)] w-[var(--hero-size)] h-[var(--hero-size)] top-[calc(75%-var(--hero-size)/2)] left-[calc(50%-var(--hero-size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-hero-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--hero-pointer-color),_0.8)_0,_rgba(var(--hero-pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--hero-blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

