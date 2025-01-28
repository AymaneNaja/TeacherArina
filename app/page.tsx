"use client";
import japaneseArinaRose from "../public/9x16_as_a_Japanese_woman_in_kimono_ad (2).png";
import teacherArina from "../public/9x16_me_as_an_teacher_ - Copy.png";
import posingArina from "../public/9x16_im_a_teacher_i_want_images_for_m.png";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Book,
  Globe2,
  MessageCircle,
  Award,
  Mail,
  Languages,
  Instagram,
  Send,
  Phone,
  Menu,
  X,
  User,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LuSparkles } from "react-icons/lu";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangingLang, setIsChangingLang] = useState(false);

  const toggleLanguage = () => {
    setIsChangingLang(true);
    setLang(lang === "en" ? "ru" : "en");
    setTimeout(() => setIsChangingLang(false), 500);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const translations = {
    en: {
      nav: {
        about: "About Me",
        services: "Services",
        testimonials: "Testimonials",
        contact: "Contact",
      },
      hero: {
        title: "Transform Your English Journey.",
        subtitle:
          "From Astrakhan to the world, helping students master English through personalized education.",
        cta: "Book a Lesson",
      },
      about: {
        title: "About Me",
        p1: "Hailing from the historic city of Astrakhan, where the Volga River meets the Caspian Sea, I bring a unique perspective to English language education.",
        p2: "With five years of experience as a dedicated English tutor, I've mastered the art of transforming language learning into an engaging and personalized journey for each student.",
        p3: "My teaching approach combines traditional methodology with modern, interactive techniques, ensuring students not only grasp the technical aspects of English but gain the confidence to use it naturally in real-world situations.",
        languages: "Languages",
        certifications: "Certifications",
      },
      services: {
        title: "My Services",
        subtitle:
          "Comprehensive English learning programs tailored to your needs and goals",
        items: [
          {
            title: "General English",
            description:
              "Improve your overall English proficiency with a focus on speaking, listening, reading, and writing.",
            features: [
              "Personalized lesson plans",
              "Interactive speaking practice",
              "Real-life conversation scenarios",
            ],
          },
          {
            title: "Exam Preparation",
            description:
              "Prepare for English proficiency exams like IELTS, TOEFL, or Cambridge with targeted strategies.",
            features: [
              "Mock exams and feedback",
              "Time management techniques",
              "Focus on weak areas",
            ],
          },
          {
            title: "Business English",
            description:
              "Enhance your professional communication skills for meetings, presentations, and emails.",
            features: [
              "Industry-specific vocabulary",
              "Role-playing business scenarios",
              "Polishing professional writing",
            ],
          },
        ],
      },
      testimonials: {
        title: "Student Success Stories",
        subtitle: "Hear from parents and students about their learning journey",
      },
      contact: {
        title: "Let's Connect",
        subtitle:
          "Ready to start your English learning journey? Reach out through any of these channels:",
        cta: "Book a Trial Lesson",
        ctaSubtitle:
          "Experience a personalized lesson and discover how I can help you achieve your English language goals.",
        schedule: "Schedule Now",
      },
    },
    ru: {
      nav: {
        about: "Обо мне",
        services: "Услуги",
        testimonials: "Отзывы",
        contact: "Контакты",
      },
      hero: {
        title: "Начните свой путь изучения английского.",
        subtitle:
          "Из Астрахани в мир, помогая студентам овладеть английским через персонализированное обучение.",
        cta: "Забронировать урок",
      },
      about: {
        title: "Обо мне",
        p1: "Родом из исторического города Астрахань, где Волга встречается с Каспийским морем, я привношу уникальный подход в обучение английскому языку.",
        p2: "С пятилетним опытом работы в качестве преданного репетитора по английскому языку, я овладела искусством превращения изучения языка в увлекательное и персонализированное путешествие для каждого студента.",
        p3: "Мой подход к обучению сочетает традиционную методологию с современными, интерактивными техниками, обеспечивая студентам не только понимание технических аспектов английского языка, но и уверенность в его естественном использовании в реальных ситуациях.",
        languages: "Языки",
        certifications: "Сертификаты",
      },
      services: {
        title: "Мои услуги",
        subtitle:
          "Комплексные программы обучения английскому языку, адаптированные под ваши потребности и цели",
        items: [
          {
            title: "Общий английский",
            description:
              "Улучшите общее знание английского языка с акцентом на говорение, аудирование, чтение и письмо.",
            features: [
              "Индивидуальные планы уроков",
              "Интерактивная практика разговорной речи",
              "Реальные сценарии общения",
            ],
          },
          {
            title: "Подготовка к экзаменам",
            description:
              "Подготовьтесь к экзаменам по английскому языку, таким как IELTS, TOEFL или Cambridge, с целевыми стратегиями.",
            features: [
              "Пробные экзамены и обратная связь",
              "Техники управления временем",
              "Фокус на слабых местах",
            ],
          },
          {
            title: "Деловой английский",
            description:
              "Улучшите свои навыки профессионального общения для встреч, презентаций и электронной переписки.",
            features: [
              "Отраслевая лексика",
              "Ролевые игры в бизнес-сценариях",
              "Улучшение профессионального письма",
            ],
          },
        ],
      },
      testimonials: {
        title: "Истории успеха студентов",
        subtitle: "Отзывы родителей и студентов об их пути обучения",
      },
      contact: {
        title: "Давайте свяжемся",
        subtitle:
          "Готовы начать свой путь изучения английского? Свяжитесь со мной через любой из этих каналов:",
        cta: "Забронировать пробный урок",
        ctaSubtitle:
          "Испытайте персонализированный урок и узнайте, как я могу помочь вам достичь ваших целей в изучении английского языка.",
        schedule: "Запланировать сейчас",
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.main
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 ${isChangingLang ? "pointer-events-none" : ""}`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/80 backdrop-blur-lg  md:w-full">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo with Gradient Typography */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Gradient Text */}
              <motion.span
                className="text-xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite',
                }}
              >
                Arina Mak
              </motion.span>

              {/* Sparkle Icon with Spin Animation */}
              <motion.div
                className="text-purple-500"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <LuSparkles className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation Links with Gradient Hover */}
            <div className="hidden md:flex space-x-8 items-center">
              {Object.entries(translations[lang].nav).map(([key, value]) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-600 hover:text-transparent transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {value}
                  </span>
                  {/* Gradient Underline Effect */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}

              {/* Language Toggle Button with Magic UI */}
              <motion.button
                onClick={toggleLanguage}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang === "en" ? "РУ" : "EN"}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="text-gray-800 w-6 h-6" />
                ) : (
                  <Menu className="text-gray-800 w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Dropdown with Gradient Links */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 space-y-4 bg-white/80 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full max-w-screen"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {Object.entries(translations[lang].nav).map(([key, value]) => (
                  <motion.a
                    key={key}
                    href={`#${key}`}
                    className="block text-gray-600 hover:text-transparent transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                      {value}
                    </span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleLanguage}
                  className="block w-full text-left text-gray-600 hover:text-transparent transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {lang === "en" ? "РУ" : "EN"}
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute  top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>

          <div className="  grid md:grid-cols-2 gap-12 max-w-7xl mx-auto relative z-10  ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mt-8"
            >
              <p className={` md:text-7xl sm:text-6xl text-5xl  font-bold leading-tight`}>{translations[lang].hero.title}</p>
              <p className="text-lg md:text-xl text-gray-600 max-w-md">{translations[lang].hero.subtitle}</p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8"
                  onClick={() => {
                    const contactsSection = document.getElementById('contact');
                    if (contactsSection) {
                      contactsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {translations[lang].hero.cta}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }} // Start slightly smaller and to the right
              animate={{ opacity: 1, x: 0, scale: 1 }} // Animate to full size and position
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
              className="relative"
            >
              {/* Blurred circle (left) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="absolute -top-20 -left-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-lg opacity-70"
              ></motion.div>

              {/* Image */}
              <motion.img
                src={japaneseArinaRose.src}
                alt="Arina Mak - English Teacher"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-2xl "
              />

              {/* Blurred circle (right) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-lg opacity-70 hidden md:block"
              ></motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">About Me</span>
                </div>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {translations[lang].about.title}
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{translations[lang].about.p1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{translations[lang].about.p2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{translations[lang].about.p3}</span>
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <Languages className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold">{translations[lang].about.languages}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        English (Native-like)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Russian (Native)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Spanish (intermediate)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold">{translations[lang].about.certifications}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        CELTA Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        TEFL Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        MA in Linguistics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src={posingArina.src}
                  alt="Teaching English"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={teacherArina.src}
                  alt="English Lesson"
                  className="rounded-2xl shadow-lg mt-8 transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-4 bg-gradient-to-br from-blue-50 to-pink-50 relative overflow-hidden">
          {/* Floating background elements */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -left-20 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"
          ></motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">
                {translations[lang].services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {translations[lang].services.subtitle}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {translations[lang].services.items.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="p-8 bg-white/50 backdrop-blur-lg border border-white/20 hover:shadow-2xl hover:border-white/40 transition-all relative overflow-hidden">
                    {/* Floating icon background */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                      className="absolute -top-10 -right-10 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-lg opacity-30"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                      className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-lg opacity-30"
                    ></motion.div>

                    {/* Service Content */}
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div id="testimonials" className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                {translations[lang].testimonials.title}
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {translations[lang].testimonials.subtitle}
              </p>
            </div>
            <div className="mt-10">
              {/* Top Row - Infinite Scroll to the Right */}
              <motion.div
                className="flex space-x-8"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-96 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Decorative Comma Inside the Card */}
                    <div className="text-6xl text-indigo-200 font-serif -mt-4 -ml-2">“</div>
                    <div className="flex items-center mt-2">
                      {/* Avatar with Gradient */}
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role[lang]}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-600 italic">
                      {testimonial.text[lang]}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              {/* Bottom Row - Infinite Scroll to the Left */}
              <motion.div
                className="flex space-x-8 mt-8"
                animate={{ x: ['-100%', '0%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-96 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Decorative Comma Inside the Card */}
                    <div className="text-6xl text-purple-200 font-serif -mt-4 -ml-2">“</div>
                    <div className="flex items-center mt-2">
                      {/* Avatar with Gradient */}
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mr-4"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role[lang]}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-600 italic">
                      {testimonial.text[lang]}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-4 bg-gradient-to-br from-purple-600 to-pink-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold mb-8 text-white">{translations[lang].contact.title}</h2>
                <p className="text-xl text-gray-200 mb-12">{translations[lang].contact.subtitle}</p>
                <div className="grid grid-cols-2 gap-8">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-lg text-white hover:text-yellow-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              <div className="relative">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-lg"></div>
                <Card className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-white">{translations[lang].contact.cta}</h3>
                  <p className="text-gray-200 mb-8">{translations[lang].contact.ctaSubtitle}</p>
                  <Button size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                    {translations[lang].contact.schedule}
                  </Button>
                </Card>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}

const services = [
  {
    title: "Private Tutoring",
    description: "One-on-one personalized lessons tailored to your needs and goals",
    icon: <Book className="w-6 h-6 text-blue-600" />,
    features: ["Personalized curriculum", "Flexible scheduling", "Progress tracking", "Regular feedback"],
  },
  {
    title: "Business English",
    description: "Specialized courses for professional communication and presentations",
    icon: <Globe2 className="w-6 h-6 text-blue-600" />,
    features: ["Email writing", "Presentation skills", "Meeting vocabulary", "Negotiation practice"],
  },
  {
    title: "Test Preparation",
    description: "Comprehensive preparation for international English exams",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    features: ["IELTS preparation", "TOEFL strategies", "Practice tests", "Score improvement tips"],
  },
];

const testimonials = [
  {
    id: 1,
    text: {
      en: "Arina has been a wonderful teacher for my son. Her lessons are engaging, and he has improved his English significantly in just a few months.",
      ru: "Арина была замечательным учителем для моего сына. Ее уроки увлекательные, и он значительно улучшил свой английский всего за несколько месяцев.",
    },
    author: "Elena Ivanova",
    role: {
      en: "Parent of a 10-year-old student",
      ru: "Родитель 10-летнего ученика",
    },
  },
  {
    id: 2,
    text: {
      en: "My daughter used to hate English, but now she looks forward to every lesson with Arina. Her teaching style is amazing!",
      ru: "Моя дочь раньше ненавидела английский, но теперь с нетерпением ждет каждого урока с Ариной. Ее стиль преподавания потрясающий!",
    },
    author: "Olga Petrova",
    role: {
      en: "Parent of a 12-year-old student",
      ru: "Родитель 12-летнего ученика",
    },
  },
  {
    id: 3,
    text: {
      en: "Arina is patient, kind, and very professional. My son has gained so much confidence in speaking English thanks to her.",
      ru: "Арина терпеливая, добрая и очень профессиональная. Мой сын стал гораздо увереннее говорить по-английски благодаря ей.",
    },
    author: "Anna Smirnova",
    role: {
      en: "Parent of an 8-year-old student",
      ru: "Родитель 8-летнего ученика",
    },
  },
  {
    id: 4,
    text: {
      en: "We are so grateful to Arina for helping our daughter improve her grades in English. She is an excellent teacher!",
      ru: "Мы очень благодарны Арине за то, что она помогла нашей дочери улучшить оценки по английскому. Она прекрасный учитель!",
    },
    author: "Maria Kuznetsova",
    role: {
      en: "Parent of a 14-year-old student",
      ru: "Родитель 14-летнего ученика",
    },
  },
  {
    id: 5,
    text: {
      en: "Arina makes learning English fun and easy. My son has made incredible progress, and we are very happy with her lessons.",
      ru: "Арина делает изучение английского веселым и легким. Мой сын добился невероятного прогресса, и мы очень довольны ее уроками.",
    },
    author: "Tatiana Sokolova",
    role: {
      en: "Parent of a 9-year-old student",
      ru: "Родитель 9-летнего ученика",
    },
  },
  {
    id: 6,
    text: {
      en: "Arina is a fantastic teacher. She understands each child's needs and tailors her lessons accordingly. Highly recommend her!",
      ru: "Арина - замечательный учитель. Она понимает потребности каждого ребенка и адаптирует уроки соответственно. Очень рекомендую ее!",
    },
    author: "Natalia Voronova",
    role: {
      en: "Parent of an 11-year-old student",
      ru: "Родитель 11-летнего ученика",
    },
  },
];
// const testimonials = [
//   {
//     text: "Благодаря Арине, мой сын значительно улучшил свой английский всего за несколько месяцев. Её методика преподавания очень эффективна и увлекательна для детей.",
//     name: "Елена Петрова",
//     relation: "Мама ученика, 12 лет",
//   },
//   {
//     text: "Мы очень довольны результатами нашей дочери. Арина не только учит языку, но и мотивирует детей к самостоятельному изучению английского.",
//     name: "Михаил Иванов",
//     relation: "Папа ученицы, 15 лет",
//   },
//   {
//     text: "После занятий с Ариной моя дочь поступила в международную школу. Её английский теперь на таком уровне, что она свободно общается с носителями языка.",
//     name: "Анна Соколова",
//     relation: "Мама ученицы, 14 лет",
//   },
//   {
//     text: "Арина помогла моему сыну подготовиться к IELTS. Результат превзошел все наши ожидания - 7.5 баллов! Очень благодарны за профессионализм.",
//     name: "Сергей Волков",
//     relation: "Папа ученика, 17 лет",
//   },
// ]

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    href: "https://ig.me/m/mrs.arina-m", // Ensure this matches the actual username
  },
  {
    icon: <Send className="w-6 h-6" />,
    label: "@ArinaMakEnglish",
    href: "https://t.me/ArinaMakEnglish",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "+79616525359",
    href: "https://wa.me/89616525359",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "arina17m@mail.ru",
    href: "arina17m@mail.ru",
  },
]

