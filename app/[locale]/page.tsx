import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Values from '@/components/Values';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <Hero />
      <Services />
      <Values />
      <ContactForm />
      <Footer />
    </main>
  );
}