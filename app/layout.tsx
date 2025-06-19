import './globals.css';
import { type Metadata } from 'next';
import {
 ClerkProvider,
 SignInButton,
 SignUpButton,
 SignedIn,
 SignedOut,
 UserButton,
} from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
 subsets: ['latin'],
 variable: '--font-sans',
});

export const metadata: Metadata = {
 title: 'RK Visa Solutions - Your Trusted Immigration Partner',
 description: 'Expert guidance for international education and immigration. Specializing in student visas, university admissions, and immigration services for Russia, Singapore, Dubai, Armenia, and Mauritius.',
 keywords: 'immigration, visa, study abroad, consultation, russia, singapore, dubai, armenia, mauritius',
 authors: [{ name: 'RK Visa Solutions' }],
 openGraph: {
 title: 'RK Visa Solutions - Your Trusted Immigration Partner',
 description: 'Expert guidance for international education and immigration. Specializing in student visas, university admissions, and immigration services.',
 url: 'https://rkvisasolutions.com',
 siteName: 'RK Visa Solutions - Your Trusted Immigration Partner',
 type: 'website',
 locale: 'en_US',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'RK Visa Solutions - Your Trusted Immigration Partner',
 description: 'Expert guidance for international education and immigration. Specializing in student visas, university admissions, and immigration services with 98% success rate.',
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
 <ClerkProvider>
 <html lang="en" suppressHydrationWarning>
 <body className={`${inter.variable} antialiased`}>
 {/* Removed duplicate auth header here. Use only the Header component for navigation and auth UI. */}
 {children}
 <Toaster position="top-right" />
 </body>
 </html>
 </ClerkProvider>
 );
}
