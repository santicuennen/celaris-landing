'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Zap, Cloud, Database, Headphones } from 'lucide-react';
import { company } from '@/constants/company';

const iconMap = {
  Zap,
  Cloud,
  Database,
  Headphones,
};

export default function Services() {
  const t = useTranslations();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="group card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="group/btn w-full flex items-center justify-center space-x-2 text-primary dark:text-secondary hover:text-white hover:bg-primary dark:hover:bg-secondary py-2 px-4 rounded-lg border border-primary dark:border-secondary transition-all duration-200"
                >
                  <span className="font-medium">{t('services.cta')}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('services.customSolution')}
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary hover-lift"
          >
            {t('services.customQuote')}
          </button>
        </div>
      </div>
    </section>
  );
}