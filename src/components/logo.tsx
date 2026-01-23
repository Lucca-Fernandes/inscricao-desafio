import Image from 'next/image';
import logo from '../public/logo.png';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 font-headline select-none',
        className
      )}
      {...props}
    >
      {/* Substitua "/logo.png" pelo nome EXATO do arquivo que está na sua pasta public */}
      <Image 
        src={logo}
        alt="Logo Projeto Desenvolve" 
        width={40} 
        height={40}
        className="object-contain"
        priority // Carrega a logo com prioridade
      />

      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tighter text-primary  ml-5">{'<'}</span>
        <span className="text-xl font-bold tracking-tight px-1" >Projeto Desenvolve</span>
        <span className="text-2xl font-bold tracking-tighter text-primary">{' />'}</span>
      </div>
    </div>
  );
}