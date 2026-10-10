import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:'*',allow:site.url?'/':undefined,disallow:site.url?undefined:'/'},...(site.url?{sitemap:`${site.url}/sitemap.xml`}:{})};}
