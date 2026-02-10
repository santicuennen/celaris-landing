'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { company } from '@/constants/company';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const t = useTranslations();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const changeLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt={company.name}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {company.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('values')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={changeLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={t('language.toggle')}
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title={t('theme.toggle')}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('values')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}