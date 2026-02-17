'use client';

import { useTranslations } from 'next-intl';
import { company } from '@/constants/company';

export default function Footer() {
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt={company.name}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">{company.name}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('values')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {t('footer.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {company.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}