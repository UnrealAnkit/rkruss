'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Globe, ChevronDown, Briefcase, GraduationCap, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Immigration', href: '/immigration' },
  { 
    name: 'Visa Solutions', 
    href: '/immigration',
    dropdown: [
      { name: 'Work Visa', href: '/immigration/work-visa', icon: Briefcase },
      { name: 'Student Visa', href: '/immigration/student-visa', icon: GraduationCap },
      { name: 'Business Visa', href: '/immigration/business-visa', icon: Building },
    ]
  },
  { name: 'Colleges', href: '/colleges' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-base font-medium flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="flex items-center gap-2">
                          <subItem.icon className="h-4 w-4" />
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="text-base font-medium"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            ))}
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <div className="text-base font-medium text-slate-700 px-3 py-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Button
                            key={subItem.name}
                            variant="ghost"
                            asChild
                            className="w-full justify-start text-sm"
                          >
                            <Link href={subItem.href} className="flex items-center gap-2">
                              <subItem.icon className="h-4 w-4" />
                              {subItem.name}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Button
                      key={item.name}
                      variant="ghost"
                      asChild
                      className="text-base font-medium justify-start"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  )
                ))}
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button variant="default" size="sm">
                      Get Started
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}