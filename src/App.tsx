/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Star, Heart, Share2, ShoppingCart, X, Maximize2, Sparkles, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

// Particle component for ambient background
const Particles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // --- إعدادات الرواية (يمكنك تغييرها من هنا) ---
  
  // 1. رابط صورة غلاف الكتاب (ضع رابط صورتك هنا)
  const BOOK_COVER_IMAGE = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop";
  
  // 2. رابط صفحة الشراء على باي هيب (Payhip)
  const PAYHIP_URL = "https://payhip.com/FadwaDigital";

  // ------------------------------------------

  return (
    <div className="min-h-screen font-sans bg-[#fdfcfb] selection:bg-emerald-100 selection:text-emerald-900">
      <Particles />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ع
            </div>
            <span className="text-xl font-bold tracking-tight">عائشة</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">الرئيسية</a>
            <a href="#summary" className="hover:text-emerald-600 transition-colors">ملخص الكتاب</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">المميزات</a>
            <a href="#author" className="hover:text-emerald-600 transition-colors">عن المؤلفة</a>
            <div className="flex items-center gap-4">
              <a href="mailto:sahalaouiyahia063@gmail.com" className="hover:text-emerald-600 transition-colors" title="البريد الإلكتروني">تواصل معنا</a>
              <a href="https://wa.me/213669281055" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:scale-110 transition-transform" title="واتساب">
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
          <a 
            href={PAYHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            شراء الآن
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5" />
              رواية العام الأكثر إلهاماً
            </div>
            <h1 className="text-7xl lg:text-8xl font-display font-black leading-[1] mb-10 text-slate-900 tracking-tight text-balance">
              حلم تحدى <span className="text-emerald-600 italic">الصعاب</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed mb-12 max-w-xl font-light">
              رحلة ملهمة تأخذك من عتمة اليأس إلى نور النجاح. اكتشف كيف يمكن للإرادة أن تصنع المستحيل في رواية عائشة الجديدة.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href={PAYHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/30 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                اطلب نسختك الآن
              </a>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5" />
                {isOpen ? "أغلق الكتاب" : "تصفح الكتاب"}
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/reader${i}/100/100`}
                    className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                    alt="Reader"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-500 font-medium text-lg">+10,000 قارئ ملهم</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="glow-effect"></div>
            
            <div className="book-container relative">
              <div className={`book ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="book-spine"></div>
                
                {/* Front Cover */}
                <div className="book-cover overflow-hidden">
                  <div className="relative h-full w-full bg-slate-200">
                    <img 
                      src={BOOK_COVER_IMAGE} 
                      className="absolute inset-0 w-full h-full object-cover"
                      alt="رواية حلم تحدى الصعاب"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                      <h2 className="text-white text-4xl font-display font-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] leading-tight mb-4">
                        حلم تحدى الصعاب
                      </h2>
                      <div className="w-12 h-0.5 bg-emerald-500 mb-4"></div>
                      <p className="text-white/90 font-serif text-xl drop-shadow-lg tracking-widest">
                        عائشة
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back of Front Cover */}
                <div className="book-cover-back">
                  <div className="text-center">
                    <h3 className="text-emerald-700 font-display font-bold text-2xl mb-6">مقدمة الرواية</h3>
                    <p className="text-slate-600 text-lg leading-relaxed italic font-serif">
                      "في كل عثرة تكمن فرصة للنهوض، وفي كل دمعة يختبئ بريق أمل لا ينطفئ... هذه ليست مجرد قصة، بل هي مرآة لكل روح تحلم بالتحليق."
                    </p>
                  </div>
                </div>

                {/* Internal Pages Stack */}
                <div className="book-pages-stack">
                  <div className="book-internal-page">
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-inner">
                        <Star className="w-10 h-10 fill-current" />
                      </div>
                      <h4 className="font-display font-bold text-slate-800 text-2xl mb-4">الفصل الأول</h4>
                      <p className="text-slate-500 text-base leading-relaxed font-serif max-w-[200px]">
                        بدأت الحكاية في ليلة باردة، حيث كانت الأحلام هي الدفء الوحيد المتبقي في زوايا الغرفة المظلمة...
                      </p>
                    </div>
                    <div className="mt-auto flex justify-between text-xs text-slate-400 font-serif border-t border-slate-100 pt-4">
                      <span>صفحة 1</span>
                      <span>عائشة</span>
                    </div>
                  </div>
                </div>

                {/* Pop-up Element */}
                <div className="popup-element">
                  <div className="w-28 h-28 bg-amber-400 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white transform rotate-12 hover:rotate-0 transition-transform duration-500">
                    <Star className="w-14 h-14 fill-current" />
                  </div>
                </div>
              </div>

              {/* Zoom Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
                className="absolute -bottom-16 right-0 bg-white p-4 rounded-full shadow-2xl border border-slate-100 hover:text-emerald-600 hover:scale-110 transition-all group"
              >
                <Maximize2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop" 
                className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover"
                alt="Book Summary"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 right-10 glass-card p-8 rounded-3xl max-w-xs">
                <p className="text-emerald-700 font-bold text-xl mb-2 italic">"اقتباس ملهم"</p>
                <p className="text-slate-600 font-serif">"النجاح ليس وجهة، بل هو الشجاعة لمواصلة الرحلة رغم كل العواصف."</p>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-display font-black mb-10 text-slate-900">ملخص <span className="text-emerald-600">الرواية</span></h2>
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light">
                <p>
                  تدور أحداث الرواية حول "ليلى"، فتاة طموحة تجد نفسها في مواجهة سلسلة من التحديات التي تكاد تكسر إرادتها. من فقدان الوظيفة إلى الصعوبات العائلية، تبدو الحياة وكأنها تتآمر ضد أحلامها.
                </p>
                <p>
                  لكن في قلب المعاناة، تكتشف ليلى قوة لم تكن تعلم بوجودها. تبدأ رحلة البحث عن الذات، محولةً كل عثرة إلى درجة في سلم النجاح.
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <Heart className="w-6 h-6 fill-current" />
                    </div>
                    <span className="font-bold text-slate-900">قصة إنسانية مؤثرة</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <span className="font-bold text-slate-900">دروس في المثابرة والنجاح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-display font-black mb-6">لماذا تقتني هذه <span className="text-emerald-600">النسخة؟</span></h2>
            <p className="text-xl text-slate-600 font-light">تجربة شراء فريدة تضمن لك الحصول على المحتوى بأفضل جودة وأسرع وقت</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "تحميل فوري", desc: "احصل على نسختك الرقمية (PDF/ePub) فور إتمام عملية الدفع عبر باي هيب.", icon: ShoppingCart },
              { title: "محتوى حصري", desc: "تتضمن هذه النسخة فصلاً إضافياً ورسومات توضيحية لم تنشر من قبل.", icon: Star },
              { title: "دعم مباشر", desc: "تواصل مباشر مع المؤلفة لمناقشة أحداث الرواية في جلسات حصرية.", icon: Share2 }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[60px] p-16 lg:p-24 text-white flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl -z-0"></div>
            <div className="lg:w-1/3 relative z-10">
              <img 
                src="https://picsum.photos/seed/author/600/800" 
                className="rounded-[40px] shadow-2xl w-full aspect-[3/4] object-cover border-8 border-white/10"
                alt="Author"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-2/3 relative z-10">
              <h2 className="text-5xl font-display font-black mb-8 italic">عن المؤلفة <span className="text-emerald-400">عائشة</span></h2>
              <p className="text-2xl text-slate-300 leading-relaxed mb-10 font-light">
                كاتبة وروائية شغوفة بسبر أغوار النفس البشرية. تؤمن عائشة بأن الكلمة هي أقوى سلاح للتغيير، ومن خلال روايتها "حلم تحدى الصعاب"، تسعى لنشر الأمل والإيجابية في نفوس القراء حول العالم.
              </p>
              <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-400 mb-2">15+</p>
                    <p className="text-slate-400 uppercase tracking-widest text-xs">رواية منشورة</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-400 mb-2">50K</p>
                    <p className="text-slate-400 uppercase tracking-widest text-xs">قارئ مخلص</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:sahalaouiyahia063@gmail.com"
                    className="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border border-emerald-600/30 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    البريد الإلكتروني
                  </a>
                  <a 
                    href="https://wa.me/213669281055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border border-emerald-500/30 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
                    واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl font-display font-black mb-10">هل أنت مستعد <span className="text-emerald-600">للتغيير؟</span></h2>
          <p className="text-2xl text-slate-600 mb-12 font-light">انضم إلى آلاف القراء الذين وجدوا إلهامهم في هذه الصفحات.</p>
          <a 
            href={PAYHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-emerald-600 text-white px-12 py-6 rounded-3xl font-bold text-2xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 hover:scale-105"
          >
            اطلب نسختك الآن من Payhip
          </a>
        </motion.div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-10 left-10 text-white hover:text-emerald-400 transition-colors bg-white/10 p-4 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full bg-white rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 bg-slate-100 relative overflow-hidden">
                <img 
                  src={BOOK_COVER_IMAGE} 
                  className="w-full h-full object-cover"
                  alt="Book Detail"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                  <p className="text-white text-xl font-serif italic">"كل صفحة هي خطوة نحو النور"</p>
                </div>
              </div>
              <div className="lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-6">
                  <Sparkles className="w-4 h-4" />
                  تفاصيل الإصدار الفاخر
                </div>
                <h2 className="text-5xl font-display font-black mb-10 leading-tight">حلم تحدى الصعاب</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                  تتميز هذه النسخة بتصميم غلاف حصري، ورسومات توضيحية ملونة تعكس الحالة النفسية للأبطال. تم اختيار الورق والخطوط بعناية لتوفير أقصى درجات الراحة أثناء القراءة.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="flex items-center gap-4 text-slate-900 font-bold">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span>رسومات أصلية</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-900 font-bold">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span>ورق فاخر</span>
                  </div>
                </div>
                <a 
                  href={PAYHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white py-6 rounded-3xl font-bold text-2xl text-center hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
                >
                  اطلب نسختك الآن
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                ع
              </div>
              <span className="text-2xl font-display font-black">عائشة</span>
            </div>
            <div className="flex gap-12 text-slate-500 font-medium">
              <a href="#hero" className="hover:text-emerald-600 transition-colors">الرئيسية</a>
              <a href="#summary" className="hover:text-emerald-600 transition-colors">الملخص</a>
              <a href="#features" className="hover:text-emerald-600 transition-colors">المميزات</a>
              <a href="#author" className="hover:text-emerald-600 transition-colors">المؤلفة</a>
              <div className="flex items-center gap-6">
                <a href="mailto:sahalaouiyahia063@gmail.com" className="hover:text-emerald-600 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  البريد
                </a>
                <a href="https://wa.me/213669281055" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  واتساب
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all"><Heart className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-slate-200">
            <p className="text-slate-400 text-sm">© 2026 جميع الحقوق محفوظة للكاتبة عائشة | متاح حصرياً على منصة باي هيب</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
