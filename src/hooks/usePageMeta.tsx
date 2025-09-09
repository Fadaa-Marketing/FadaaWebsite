'use client'
import { metadata } from '@/constant/meta';
import { usePathname } from 'next/navigation';

export default function usePageMeta() {
    const pathname = usePathname();
    const path = pathname?.slice(1) || 'home'; 
    
    return metadata[path] || metadata.home;
}