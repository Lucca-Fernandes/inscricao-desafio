import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/frontend', label: 'Frontend' },
  { href: '/backend', label: 'Backend' },
  { href: '/fullstack', label: 'Fullstack' },
  { href: '/data', label: 'Dados' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
