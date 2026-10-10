'use client';
import { useState } from 'react';
import { site } from '@/lib/site';
import { ContactLink } from './contact-link';
const links = [['#about','私たちについて'],['#services','サービス'],['#flow','ご利用の流れ'],['#pricing','料金'],['#faq','よくある質問']];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="header-inner"><a className="brand" href="/" aria-label={`${site.name} ホーム`}><span className="brand-symbol" aria-hidden="true">a.</span><span>{site.name}<small>DOG REHABILITATION</small></span></a><nav className="desktop-nav" aria-label="メインナビゲーション">{links.map(([url,label])=><a key={url} href={url}>{label}</a>)}</nav><ContactLink className="header-contact">LINE相談</ContactLink><button className="menu-button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'メニューを閉じる' : 'メニューを開く'} onClick={()=>setOpen(!open)}>{open?'閉じる ✕':'メニュー ☰'}</button></div>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="モバイルナビゲーション">{links.map(([url,label])=><a key={url} href={url} onClick={()=>setOpen(false)}>{label}<span>↗</span></a>)}<a href="#contact" onClick={()=>setOpen(false)}>お問い合わせ ↗</a></nav>}</header>;
}
