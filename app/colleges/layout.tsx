import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Top Universities & Educational Consultancy | RK Visa Solutions',
 description: 'Discover top universities worldwide and get expert guidance for admissions. We help students find and apply to the best educational institutions globally.',
};

export default function CollegesLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <div className="min-h-screen">
 <Header />
 {children}
 <Footer />
 </div>
 );
}
