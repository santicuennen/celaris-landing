'use client';

import { useTranslations } from 'next-intl';
import { Users, Clock, TrendingUp } from 'lucide-react';
import { company } from '@/constants/company';

const iconMap = {
  Users,
  Clock,
  TrendingUp,
};

export default function Values() {
  const t = useTranslations();

  return (
    <section id="values" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section font-bold text-gray-900 dark:text-white mb-4">
            {t('values.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('values.subtitle')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {company.values.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            
            return (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon Container */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-primary dark:text-secondary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom border decoration */}
        <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
        </div>
      </div>
    </section>
  );
}