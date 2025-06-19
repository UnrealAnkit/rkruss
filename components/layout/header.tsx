'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';

const navigation = [
 { name: 'Home', href: '/' },
 { name: 'Immigration', href: '/immigration' },
 { name: 'Work Visa', href: '/immigration/work-visa' },
 { name: 'Student Visa', href: '/immigration/student-visa' },
 { name: 'Business Visa', href: '/immigration/business-visa' },
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
 setIsScrolled(window.scrollY > 10);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
 <header className={cn(
 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
 isScrolled
 ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-gray-200/50'
 : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-white/20'
 )}>
 <div className="container">
 <nav className="flex h-20 items-center justify-between">
 {/* Logo */}
 <Link href="/">
 <Image
 src="/images/russia visa solutions.png"
 alt="RK Visa Solutions Logo"
 width={120}
 height={120}
 className="w-32 h-32 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-20 lg:h-20"
 />
 </Link>

 {/* Desktop Navigation */}
 <div className="hidden lg:flex items-center space-x-1">
 {navigation.map((item) => (
 <Button
 key={item.name}
 variant="ghost"
 asChild
 className={cn(
 "text-base font-medium transition-colors",
 pathname === item.href
 ? "bg-primary/10 text-primary"
 : "text-gray-700 dark:text-gray-200 hover:text-primary"
 )}
 >
 <Link href={item.href}>{item.name}</Link>
 </Button>
 ))}
 <SignedOut>
 <SignUpButton mode="modal">
 <Button variant="default" size="sm" className="ml-4">
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
 <Button variant="ghost" size="icon" className="lg:hidden bg-white shadow-sm hover:bg-gray-50 relative group">
 <div className="flex flex-col justify-center items-center w-6 h-6">
 {/* Top line */}
 <div
 className={cn(
 "w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary",
 isOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
 )}
 />
 {/* Middle line */}
 <div
 className={cn(
 "w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out my-1 group-hover:bg-primary",
 isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
 )}
 />
 {/* Bottom line */}
 <div
 className={cn(
 "w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary",
 isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
 )}
 />
 </div>
 </Button>
 </SheetTrigger>
 <SheetContent side="right" className="w-80">
 <div className="flex flex-col h-full">
 {/* Header with close button */}
 <div className="flex items-center justify-between pb-4 mb-4 border-b">
 <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
 <Button
 variant="ghost"
 size="icon"
 onClick={() => setIsOpen(false)}
 className="h-8 w-8 hover:bg-gray-100"
 >
 <X className="h-4 w-4" />
 </Button>
 </div>

 {/* Navigation items */}
 <div className="flex flex-col flex-1">
 {navigation.map((item, index) => (
 <div key={item.name}>
 <Button
 variant="ghost"
 asChild
 className={cn(
 "text-base font-medium justify-start h-14 px-4 rounded-none w-full transition-all duration-200",
 pathname === item.href
 ? "bg-primary/10 text-primary"
 : "text-gray-700 hover:text-primary hover:bg-gray-50"
 )}
 onClick={() => setIsOpen(false)}
 >
 <Link href={item.href}>{item.name}</Link>
 </Button>
 {index < navigation.length - 1 && (
 <div className="border-b border-gray-400" />
 )}
 </div>
 ))}
 </div>

 {/* Auth section */}
 <div className="pt-4 border-t mt-auto">
 <SignedOut>
 <SignUpButton mode="modal">
 <Button variant="default" size="lg" className="w-full">
 Get Started
 </Button>
 </SignUpButton>
 </SignedOut>
 <SignedIn>
 <div className="flex justify-center">
 <UserButton afterSignOutUrl="/" />
 </div>
 </SignedIn>
 </div>
 </div>
 </SheetContent>
 </Sheet>
 </nav>
 </div>
 </header>
 );
}
