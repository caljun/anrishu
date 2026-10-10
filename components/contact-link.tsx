import { site } from '@/lib/site';
export function ContactLink({ className = '', children = 'LINEで相談する' }: { className?: string; children?: React.ReactNode }) {
  return <a className={`button ${className}`} href={site.lineUrl || '#contact'} {...(site.lineUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><span className="line-icon" aria-hidden="true">LINE</span>{children}<span aria-hidden="true">↗</span></a>;
}
