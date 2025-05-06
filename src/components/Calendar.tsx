import React, { useEffect } from 'react';

interface CalendarProps {
  url?: string;
  styles?: React.CSSProperties;
}

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Calendar: React.FC<CalendarProps> = ({ 
  url = "https://calendly.com/daberelevi/30min",
  styles = { minWidth: '320px', height: '700px' }
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="calendar-container w-full max-w-4xl mx-auto p-4">
      <div 
        className="calendly-inline-widget rounded-lg shadow-lg overflow-hidden"
        data-url={url}
        style={styles}
      />
    </div>
  );
};

export default Calendar;