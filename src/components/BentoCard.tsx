import React from 'react';

interface BentoCardProps {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  highlight?: boolean; 
  children?: React.ReactNode;
}

export default function BentoCard({ label, title, subtitle, highlight = false, children }: BentoCardProps) {
  return (
    <div className="bento-card" style={{ 
      background: highlight ? 'var(--surface-container)' : 'var(--surface-container-highest)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3 className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '1rem' }}>
        {label}
      </h3>
      <div className={typeof title === 'string' && title.length < 10 ? "display-lg" : "headline-md"} style={{ color: highlight ? 'var(--primary)' : 'var(--on-surface)', marginBottom: subtitle ? '0.5rem' : '0' }}>
        {title}
      </div>
      {subtitle && (
        <div className="title-sm" style={{ color: 'var(--on-surface-variant)' }}>
          {subtitle}
        </div>
      )}
      {children && (
        <div style={{ marginTop: '2rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}
