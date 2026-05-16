import React, { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
};

export default function PageLayout({ children, title, subtitle }: PageLayoutProps): JSX.Element {
  return (
    <div className="space-y-20 reveal">
      <header className="space-y-8">
        <div className="space-y-2">
          <h1 className="font-serif text-5xl md:text-6xl text-brand italic leading-none tracking-tighter">
            {title}
          </h1>
          <div className="h-px w-20 bg-gradient-to-r from-brand to-transparent opacity-20"></div>
        </div>
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.4em] text-text-dim/60 italic font-bold">
            {subtitle}
          </p>
        )}
      </header>

      <div className="text-text-main/70 space-y-10 font-light italic text-lg leading-relaxed max-w-xl reveal reveal-delay-1">
        {children}
      </div>
    </div>
  );
}
