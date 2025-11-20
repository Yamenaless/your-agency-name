import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

export function scrollToElement(elementId: string, options?: { offset?: number; duration?: number }) {
  if (typeof window === "undefined") return;
  
  const element = document.getElementById(elementId);
  if (!element) return;

  if (lenisInstance) {
    const offset = options?.offset ?? 0;
    const targetY = element.offsetTop - offset;
    lenisInstance.scrollTo(targetY, {
      duration: options?.duration ?? 1.2,
    });
  } else {
    // Fallback to native scroll if Lenis isn't ready
    element.scrollIntoView({ behavior: "smooth" });
  }
}

