'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/auth/auth-modal';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Immigration', href: '/visa-solutions' },
  { name: 'Visa Solutions', href: '/immigration' },
  { name: 'Colleges', href: '/colleges' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    )}>
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="RK Visa Solutions Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-primary">RK Visa Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-base font-medium"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="text-base font-medium"
              onClick={() => setAuthModalOpen(true)}
            >
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="RK Visa Solutions Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-bold">RK Visa Solutions</span>
                </div>
                
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    className="justify-start text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start text-base font-medium"
                  onClick={() => {
                    setIsOpen(false);
                    setAuthModalOpen(true);
                  }}
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Auth Modal */}
          <AuthModal 
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
}