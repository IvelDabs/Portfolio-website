interface CalendlyWidget {
  initInlineWidget: (config: {
    url: string;
    parentElement: HTMLElement | null;
    prefill?: Record<string, any>;
    utm?: Record<string, any>;
  }) => void;
  initPopupWidget: (config: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}