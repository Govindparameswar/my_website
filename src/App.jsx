import React, { useState, useEffect } from 'react';
import {
    Leaf,
    ChevronRight,
    Menu,
    X,
    CheckCircle,
    Star,
    ArrowRight,
    Instagram,
    Facebook,
    Twitter,
    Mail,
    Sparkles,
    Phone,
    Video,
    Medal,
    Crown,
    Gem,
    Quote,
    Send,
    Play,
    Info,
    Clock,
    BookOpen,
    Award,
    Globe,
    Check,
    Heart,
    Users,
    Activity,
    Zap,
    MapPin,
    ClipboardCheck,
    Target,
    Rocket,
    ShieldCheck,
    GraduationCap,
    FlaskConical,
    Loader2
} from 'lucide-react';

const App = () => {
    // --- GOOGLE FORM CONFIGURATION ---
    const GOOGLE_FORM_ID = "1s2TOOjcWh5d5mYEZTHpXnhl3WVkIHKlZHiyhaHAnbkY";
    const ENTRY_IDS = {
        fullName: "entry.1245126840",
        phone: "entry.2107196167",
        email: "entry.1643567800",
        category: "entry.1209216802",
        goals: "entry.1627780159"
    };
    // ---------------------------------

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProgramId, setSelectedProgramId] = useState(null);
    const [selectedProgramName, setSelectedProgramName] = useState('');

    // Hover states for desktop
    const [isPreRecordedHovered, setIsPreRecordedHovered] = useState(false);
    const [isSilverHovered, setIsSilverHovered] = useState(false);
    const [isGoldHovered, setIsGoldHovered] = useState(false);
    const [isDiamondHovered, setIsDiamondHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Programs', id: 'programs' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (linkId, program = null) => {
        if (linkId === 'home') {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (linkId === 'programs') {
            if (currentPage !== 'home') setCurrentPage('home');
            setTimeout(() => {
                const el = document.getElementById('membership-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (linkId === 'about') {
            if (currentPage !== 'home') setCurrentPage('home');
            setTimeout(() => {
                const el = document.getElementById('about-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (linkId === 'contact') {
            if (currentPage !== 'home') setCurrentPage('home');
            setTimeout(() => {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (linkId === 'enquiry') {
            setSelectedProgramName(program ? (typeof program === 'string' ? program : program.title) : '');
            setCurrentPage('enquiry');
        } else if (linkId === 'details') {
            setSelectedProgramId(program.id);
            setCurrentPage('details');
        }
        setIsMenuOpen(false);
    };

    const membershipTiers = [
        {
            id: 'pre-recorded',
            title: "Pre-recorded Classes",
            fullTitle: "Mastering Ayurveda: Foundational Pre-recorded Classes",
            Icon: Video,
            color: "from-orange-50 to-white",
            borderColor: "border-orange-200",
            accentColor: "bg-orange-500",
            accentText: "text-orange-500",
            accentBg: "bg-orange-50",
            accentBorder: "border-orange-100",
            content: "Access a library of foundational Ayurvedic wisdom whenever inspiration strikes. Learn at your own pace.",
            description: "Gain unlimited access to our digital archive, crafted for the modern soul seeking timeless truths.",
            bullets: ["24/7 Access to Recorded Modules", "Dosha Worksheets", "Beginner's Herbal Guide"],
            curriculum: [
                { IconComp: Activity, text: "Advanced constitution analysis (Prakriti vs Vikriti)." },
                { IconComp: Clock, text: "Ritualistic time management (Dinacharya) protocols." },
                { IconComp: Users, text: "Understanding body–mind balance." },
                { IconComp: ClipboardCheck, text: "Practical lifestyle planning." },
                { IconComp: BookOpen, text: "Balancing life through balancing daily routine" },
                { IconComp: Target, text: "Safe and responsible use of traditional knowledge." },
                { IconComp: Award, text: "Simple food and lifestyle guidance." }
            ],
            btnText: "Start Learning",
            tag: ""
        },
        {
            id: 'silver',
            title: "Silver Membership",
            fullTitle: "Sacred Community: The Silver Path Connection",
            Icon: Medal,
            color: "from-slate-50 to-white",
            borderColor: "border-slate-200",
            accentColor: "bg-slate-400",
            accentText: "text-slate-400",
            accentBg: "bg-slate-50",
            accentBorder: "border-slate-100",
            content: "Join a thriving community of seekers and begin your guided spiritual evolution. Perfect for consistency.",
            description: "Elevate your practice within a guided spiritual evolution supported by a global collective of seekers.",
            bullets: ["Live Q&A Sessions once in every two weeks.", "Private Community Access", "Seasonal Detox Protocols"],
            curriculum: [
                { IconComp: Video, text: "Live group sessions and Q&A." },
                { IconComp: Users, text: "Guided meditation and self-care practices." },
                { IconComp: Target, text: "Community discussion forum" },
                { IconComp: MapPin, text: "Seasonal detox and lifestyle guidance." },
                { IconComp: GraduationCap, text: "Learning challenges and group activities." },
                { IconComp: ShieldCheck, text: "Access period:12 months(from the date of joining)." },
                { IconComp: Heart, text: "A supportive environment for holistic personal growth." }
            ],
            btnText: "Join Silver",
            tag: ""
        },
        {
            id: 'gold',
            title: "Gold Membership",
            fullTitle: "Advanced self-care path: The Gold Masterclass",
            Icon: Crown,
            color: "from-amber-50 to-white",
            borderColor: "border-amber-200",
            accentColor: "bg-amber-500",
            accentText: "text-amber-500",
            accentBg: "bg-amber-50",
            accentBorder: "border-amber-100",
            content: "Deepen your understanding of Ayurveda through guided learning and practical discussions designed to support your personal health and daily self-care.",
            description: "Created for dedicated learners who wish to build a clear and confident understanding of classical principles of ayurveda.",
            bullets: ["2-year validity", "Access to all recordings", "Weekly Q&A sessions"],
            curriculum: [
                { IconComp: Activity, text: "Full access to all recorded classes and learning sessions." },
                { IconComp: FlaskConical, text: "Weekly live Q&A and guidance sessions." },
                { IconComp: ClipboardCheck, text: "Advanced concept modules." },
                { IconComp: Award, text: "Two-year membership access" },
                { IconComp: Rocket, text: "Guided daily and seasonal routine practices for healthy living." },
                { IconComp: ShieldCheck, text: "Simple food, lifestyle and self-care guidance based on Ayurvedic principles." },
                { IconComp: BookOpen, text: "Supportive peer community for motivation, reflection and healthy habit building." }
            ],
            btnText: "Upgrade to Gold",
            tag: ""
        },
        {
            id: 'diamond',
            title: "Diamond Membership",
            fullTitle: "The Inner Circle: Diamond Mastery Elite",
            Icon: Gem,
            color: "from-cyan-50 to-white",
            borderColor: "border-cyan-200",
            accentColor: "bg-cyan-500",
            accentText: "text-cyan-500",
            accentBg: "bg-cyan-50",
            accentBorder: "border-cyan-100",
            content: "For individuals who wish to apply Ayurveda deeply and consciously in their personal life.",
            description: "The ultimate direct transmission path through ayurveda in everyday life.",
            bullets: ["3-year validity", "Special guided group sessions", "deeper interaction and support"],
            curriculum: [
                { IconComp: Zap, text: "Priority access to special small-group learning sessions and workshops." },
                { IconComp: Target, text: "Exclusive Diamond community group for deeper interaction and support." },
                { IconComp: MapPin, text: "Direct guidance for implementing daily and seasonal routines." },
                { IconComp: Crown, text: "Access to all recorded learning content during the membership period." },
                { IconComp: Sparkles, text: "Three-year membership access." },
                { IconComp: Rocket, text: "Personal wellbeing workshops focused on lifestyle, food and self-care practices." },
                { IconComp: Globe, text: "Special guided group sessions for reflection, habit building and long-term healthy living." }
            ],
            btnText: "Apply for Diamond",
            tag: ""
        }
    ];

    const SharedInquiryForm = ({ buttonText = "Submit Application" }) => {
        const [status, setStatus] = useState('idle');
        const [localCategory, setLocalCategory] = useState(selectedProgramName || '');

        const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus('loading');
            const formData = new FormData(e.target);
            const googleFormUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`;
            const searchParams = new URLSearchParams();
            searchParams.append(ENTRY_IDS.fullName, formData.get('fullName'));
            searchParams.append(ENTRY_IDS.phone, formData.get('phone'));
            searchParams.append(ENTRY_IDS.email, formData.get('email'));
            searchParams.append(ENTRY_IDS.category, localCategory);
            searchParams.append(ENTRY_IDS.goals, formData.get('goals'));

            try {
                await fetch(googleFormUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: searchParams.toString()
                });
                setStatus('success');
                setTimeout(() => { handleNavClick('home'); setStatus('idle'); }, 3000);
            } catch (error) {
                console.error(error);
                setStatus('idle');
            }
        };

        if (status === 'success') {
            return (
                <div className="py-12 md:py-20 text-center space-y-6 animate-fade-in">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-[#8EAC50] rounded-full flex items-center justify-center mx-auto text-white shadow-lg"><CheckCircle size={40} /></div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#1A231F] serif">Application Sent!</h3>
                    <p className="text-sm text-gray-500 font-sans max-w-xs mx-auto">We will contact you within 24 hours.</p>
                </div>
            );
        }

        return (
            <form className="space-y-4 md:space-y-6 text-left" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <input required name="fullName" type="text" placeholder="Full Name" className="w-full px-5 md:px-8 py-4 md:py-5 bg-white/50 border border-black/5 rounded-2xl lg:rounded-[2.5rem] outline-none font-sans text-sm md:text-base focus:ring-2 focus:ring-[#8EAC50]/30 transition-all shadow-sm placeholder:text-gray-400 backdrop-blur-sm" />
                    <input required name="phone" type="tel" placeholder="Phone Number" className="w-full px-5 md:px-8 py-4 md:py-5 bg-white/50 border border-black/5 rounded-2xl lg:rounded-[2.5rem] outline-none font-sans text-sm md:text-base focus:ring-2 focus:ring-[#8EAC50]/30 transition-all shadow-sm placeholder:text-gray-400 backdrop-blur-sm" />
                </div>
                <input required name="email" type="email" placeholder="Email Address" className="w-full px-5 md:px-8 py-4 md:py-5 bg-white/50 border border-black/5 rounded-2xl lg:rounded-[2.5rem] outline-none font-sans text-sm md:text-base focus:ring-2 focus:ring-[#8EAC50]/30 transition-all shadow-sm placeholder:text-gray-400 backdrop-blur-sm" />
                <div className="relative">
                    <select required value={localCategory} onChange={(e) => setLocalCategory(e.target.value)} className={`w-full px-5 md:px-8 py-4 md:py-5 bg-white/50 border border-black/5 rounded-2xl lg:rounded-[2.5rem] outline-none font-sans text-sm md:text-base focus:ring-2 focus:ring-[#8EAC50]/30 transition-all shadow-sm appearance-none cursor-pointer backdrop-blur-sm ${localCategory === '' ? 'text-gray-400' : 'text-inherit'}`}>
                        <option value="" disabled hidden>Category</option>
                        {membershipTiers.map(t => <option key={t.id} value={t.title}>{t.title}</option>)}
                    </select>
                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" size={20} />
                </div>
                <textarea required name="goals" rows="4" placeholder="Your health or learning goals..." className="w-full px-5 md:px-8 py-4 md:py-5 bg-white/50 border border-black/5 rounded-2xl lg:rounded-[2.5rem] outline-none font-sans text-sm md:text-base focus:ring-2 focus:ring-[#8EAC50]/30 transition-all shadow-sm resize-none placeholder:text-gray-400 backdrop-blur-sm"></textarea>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-[#1A231F] text-white py-4 md:py-6 rounded-2xl lg:rounded-[2.5rem] font-bold font-sans tracking-[0.2em] hover:bg-[#8EAC50] transition-all shadow-lg flex items-center justify-center gap-3 group/btn uppercase text-[11px] md:text-xs disabled:opacity-50">
                    {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <>{buttonText} <Send size={18} /></>}
                </button>
            </form>
        );
    };

    const HomePage = () => (
        <>
            {/* SECTION 1: Responsive Hero */}
            <section id="home-section" className="relative min-h-screen flex items-center pt-24 md:pt-28 lg:pt-20 overflow-hidden bg-[#F1F5ED]">
                <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#E4EBE0] opacity-40 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 lg:w-96 lg:h-96 bg-[#8EAC50] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
                        <div className="flex flex-col text-center xl:text-left">
                            {/* Badge - Order 1 */}
                            <div className="order-1 mb-6 md:mb-8 lg:mb-10">
                                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-[#8EAC50]/30 text-[#2D4636] px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] lg:text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-sm uppercase">
                                    <Sparkles size={14} className="text-[#8EAC50]" /> ANCIENT WISDOM FOR A BALANCED MODERN LIFE
                                </div>
                            </div>

                            {/* Heading - Order 2 */}
                            <h1 className="order-2 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] text-[#1A231F] mb-6 md:mb-8 lg:mb-10">
                                Nature's <span className="text-[#2D4636] italic font-normal serif">Wisdom</span>,<br className="hidden sm:block" />
                                Your <span className="text-[#8EAC50] serif font-light">Vitality.</span>
                            </h1>

                            {/* Content - Order 3 */}
                            <p className="order-3 text-sm md:text-base xl:text-xl text-gray-600 max-w-lg mx-auto xl:mx-0 font-sans leading-relaxed mb-6 md:mb-8 xl:mb-10">A gentle online learning space created by an experienced Ayurvedic doctor to help you understand Ayurveda and apply it safely in your daily life.</p>

                            {/* Video Button - Order 5 on mobile, Order 4 on desktop */}
                            <div className="order-5 xl:order-4 flex justify-center xl:justify-start mb-6 xl:mb-10">
                                <button onClick={() => window.open('https://youtube.com/shorts/93u7sW5ynmw?si=YB5K4rdoyUJRxiqi', '_blank')} className="bg-gradient-to-r from-[#4466FF] to-[#A055FF] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-sans font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 group">
                                    <div className="bg-white/20 p-2 rounded-full"><Play size={18} fill="currentColor" className="ml-0.5 text-white" /></div> Watch Video
                                </button>
                            </div>

                            {/* Rating - Order 6 on mobile, Order 5 on desktop */}
                            <div className="order-6 xl:order-5 flex justify-center xl:justify-start">
                                <div className="inline-flex items-center gap-3 md:gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl md:text-2xl font-bold text-[#1A231F] font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>5.0</span>
                                        <Star size={20} fill="#FFC700" className="text-[#FFC700]" />
                                    </div>
                                    <div className="w-px h-6 bg-gray-400"></div>
                                    <span className="text-xs md:text-sm font-medium text-gray-600">9,100+ Reviews</span>
                                    <div className="w-px h-6 bg-gray-400"></div>
                                    <div className="flex items-center gap-1.5">
                                        <Star size={16} fill="#00B67A" className="text-[#00B67A]" />
                                        <span className="text-xs md:text-sm font-bold text-[#1A231F]">Trustpilot</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-4 h-4 md:w-5 md:h-5 bg-[#00B67A] flex items-center justify-center">
                                                    <Star size={10} fill="white" className="text-white" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Order 4 on mobile (appears after content), hidden on desktop */}
                            <div className="order-4 xl:hidden relative mt-8 px-4 sm:px-0 max-w-lg mx-auto mb-8">
                                <div className="absolute -inset-2 md:-inset-4 border border-[#8EAC50]/40 rounded-[2rem] md:rounded-[3rem] -rotate-3 pointer-events-none"></div>
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white group">
                                    <img src="/image_2.jpg" alt="Ayurvedic Ritual" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D4636] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white text-center">
                                        <div className="bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/30">
                                            <p className="text-lg md:text-xl lg:text-2xl italic serif mb-2">"A person is truly healthy when
                                                the body systems are in balance."</p>
                                            <p className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold text-[#CEDEBD]">Ashtanga Hridayam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Image - hidden on mobile */}
                        <div className="hidden xl:block relative px-4 sm:px-0 max-w-lg mx-auto xl:max-w-none">
                            <div className="absolute -inset-2 md:-inset-4 border border-[#8EAC50]/40 rounded-[2rem] md:rounded-[3rem] -rotate-3 pointer-events-none"></div>
                            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white group">
                                <img src="/image_2.jpg" alt="Ayurvedic Ritual" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4636] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white text-center">
                                    <div className="bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/30">
                                        <p className="text-lg md:text-xl lg:text-2xl italic serif mb-2">"A person is truly healthy when
                                            the body systems are in balance."</p>
                                        <p className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold text-[#CEDEBD]">Ashtanga Hridayam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Responsive Timeline */}
            <section id="membership-section" className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="relative pt-8 lg:pt-0">
                        {/* Divider Line - Desktop Only */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8EAC50]/10 via-[#8EAC50]/40 to-[#8EAC50]/10 hidden lg:block -translate-x-1/2 rounded-full"></div>

                        <div className="space-y-12 md:space-y-16 lg:space-y-24">
                            {membershipTiers.map((tier, idx) => (
                                <div key={tier.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Card Side */}
                                    <div
                                        className="w-full lg:w-1/2 flex justify-center lg:justify-end px-0 lg:px-12 group cursor-pointer lg:cursor-default"
                                        onClick={() => { if (window.innerWidth < 1024) handleNavClick('details', tier); }}
                                        onMouseEnter={() => {
                                            if (tier.id === 'pre-recorded') setIsPreRecordedHovered(true);
                                            if (tier.id === 'silver') setIsSilverHovered(true);
                                            if (tier.id === 'gold') setIsGoldHovered(true);
                                            if (tier.id === 'diamond') setIsDiamondHovered(true);
                                        }}
                                        onMouseLeave={() => {
                                            if (tier.id === 'pre-recorded') setIsPreRecordedHovered(false);
                                            if (tier.id === 'silver') setIsSilverHovered(false);
                                            if (tier.id === 'gold') setIsGoldHovered(false);
                                            if (tier.id === 'diamond') setIsDiamondHovered(false);
                                        }}
                                    >
                                        <div className={`w-full max-w-md bg-white border ${tier.borderColor} p-6 md:p-8 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col`}>
                                            <div className={`absolute inset-0 opacity-[0.05] bg-gradient-to-br ${tier.color}`}></div>
                                            <div className="relative z-10 text-left">
                                                {tier.tag && <div className="absolute -top-1 -right-1"><span className={`px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white ${tier.accentColor}`}>{tier.tag}</span></div>}
                                                <div className="mb-4 md:mb-6 flex items-center justify-between">
                                                    <h3 className="text-xl md:text-2xl font-bold text-[#1A231F] serif">{tier.title}</h3>
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-inner"><tier.Icon size={24} className={tier.accentText} /></div>
                                                </div>
                                                <p className="text-xs md:text-sm lg:text-base text-gray-600 font-sans leading-relaxed mb-6 border-l-4 border-[#8EAC50]/20 pl-4 italic">{tier.content}</p>
                                                <ul className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8 text-left">
                                                    {tier.bullets.map((bullet, i) => (<li key={i} className="flex items-center gap-3 text-[11px] md:text-xs lg:text-sm font-sans text-gray-700"><div className={`w-2 h-2 rounded-full flex-shrink-0 ${tier.accentColor}`}></div>{bullet}</li>))}
                                                </ul>
                                                <button onClick={(e) => { e.stopPropagation(); handleNavClick('enquiry', tier.title); }} className={`w-full py-4 md:py-5 rounded-xl lg:rounded-2xl font-bold font-sans text-[10px] md:text-xs lg:text-sm text-white ${tier.accentColor} hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 group/btn`}>{tier.btnText} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" /></button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Bullet Point */}
                                    <div className="relative z-20 hidden lg:block">
                                        <div className={`w-14 h-14 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all duration-700 scale-90 group-hover:scale-110 ${tier.accentColor}`}><div className="text-white"><tier.Icon size={24} /></div></div>
                                    </div>

                                    {/* Desktop Pop-up Area */}
                                    <div className="hidden lg:block lg:w-1/2 relative min-h-[500px]">
                                        <div
                                            className={`absolute ${idx % 2 === 0 ? 'left-12' : 'right-12'} top-1/2 -translate-y-1/2 w-full max-w-md bg-white border ${tier.accentBorder} rounded-xl p-8 lg:p-10 shadow-2xl transition-all duration-300 transform pointer-events-none z-[60] text-left min-h-[520px] flex flex-col 
                      ${(tier.id === 'pre-recorded' && isPreRecordedHovered) || (tier.id === 'silver' && isSilverHovered) || (tier.id === 'gold' && isGoldHovered) || (tier.id === 'diamond' && isDiamondHovered) ? 'opacity-100 translate-x-0' : 'opacity-0'}`}
                                        >
                                            <div className={`absolute ${idx % 2 === 0 ? '-left-2' : '-right-2'} top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-gray-100 transform ${idx % 2 === 0 ? 'border-l -rotate-45' : 'border-r rotate-45'}`}></div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#1A231F] mb-4 font-serif leading-tight">{tier.fullTitle}</h4>
                                                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6 italic border-b border-gray-50 pb-4">{tier.description}</p>
                                                <div className="space-y-5">
                                                    {tier.curriculum.map((item, i) => (<div key={i} className="flex gap-4 items-start group"><div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${tier.accentColor}`}></div><span className="text-[12px] text-gray-700 font-sans leading-snug">{item.text}</span></div>))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Responsive About */}
            <section id="about-section" className="py-16 md:py-20 lg:py-24 bg-[#F1F5ED] overflow-hidden px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Title */}
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#8EAC50] font-sans font-semibold mb-8 md:mb-12">
                        Meet Your Lead Educator
                    </p>

                    {/* Circular Profile Photo with Border */}
                    <div className="relative inline-block mb-6 md:mb-8">
                        <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full p-1 bg-gradient-to-br from-[#2D4636] via-[#436454] to-[#D4A574]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                                <img
                                    src="/image_1.jpeg"
                                    alt="Dr. Hema Savithri"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Orange Dot */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#D4A574] rounded-full shadow-md"></div>
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#3C1A0F] serif italic mb-4 md:mb-6 tracking-wide">
                        Dr. Hema Savithri, BAMS, MD (Ayurveda)
                    </h2>

                    {/* Quote */}
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 font-sans italic max-w-2xl mx-auto leading-relaxed px-4">
                        "Dr. Hema Savithri is a senior Ayurvedic physician and educator with over 30 years of experience, dedicated to simplifying classical Ayurveda for everyday life. Through Kshemyayur, she empowers a growing community to achieve better health and balance using authentic, time-tested wisdom."
                    </p>
                </div>
            </section>

            {/* SECTION 4: Responsive Contact */}
            <section id="contact-section" className="py-16 md:py-20 lg:py-24 bg-white px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16 space-y-4"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A231F] serif tracking-tight">Get in Touch</h2><p className="text-sm md:text-lg text-gray-500 font-sans">Our guides are here to support your journey.</p></div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-gray-50 p-6 md:p-10 rounded-[2.5rem] shadow-xl"><SharedInquiryForm buttonText="Submit" /></div>
                    </div>
                </div>
            </section>
        </>
    );

    const ProgramDetailsPage = () => {
        const program = membershipTiers.find(t => t.id === selectedProgramId);
        if (!program) return <HomePage />;
        return (
            <div className={`min-h-screen pt-28 pb-20 relative overflow-hidden bg-white px-6 animate-fade-in`}>
                <div className={`absolute top-0 right-0 w-full lg:w-1/2 h-full ${program.accentBg} opacity-30 -skew-x-12 translate-x-1/4 pointer-events-none`}></div>
                <div className="max-w-4xl mx-auto relative z-10 text-left">
                    <button onClick={() => setCurrentPage('home')} className={`inline-flex items-center gap-2 ${program.accentText} font-sans font-bold uppercase tracking-widest text-[11px] mb-8`}><ArrowRight size={14} className="rotate-180" /> Back to Programs</button>
                    <div className="space-y-6">
                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${program.accentColor}`}>{program.tag}</span>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1A231F] serif leading-tight">{program.fullTitle}</h1>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed italic">{program.description}</p>
                        <div className="pt-8 space-y-8">
                            <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-[#1A231F] border-b border-gray-100 pb-4">Full Path Curriculum</h3>
                            <div className="space-y-8">{program.curriculum.map((item, i) => (<div key={i} className="flex gap-5 items-start"><div className={`xl:hidden mt-2 w-2 h-2 rounded-full flex-shrink-0 ${program.accentColor}`}></div><div className={`hidden xl:flex p-3 rounded-xl ${program.accentBg} ${program.accentText} shrink-0`}><item.IconComp size={22} /></div><p className="text-sm md:text-base text-gray-700 font-sans leading-relaxed pt-1">{item.text}</p></div>))}</div>
                        </div>
                        <div className={`mt-12 p-8 rounded-[2.5rem] ${program.color} border ${program.borderColor} shadow-xl xl:block`}><h4 className="hidden xl:block text-2xl font-bold serif mb-4">Begin Your Journey</h4><p className="hidden xl:block text-sm text-gray-600 mb-8">Ready to step into the sacred path of Ayurveda? Our academic guides are waiting to assist your registration.</p><button onClick={() => handleNavClick('enquiry', program)} className={`w-full py-5 rounded-2xl text-white font-bold uppercase tracking-widest text-xs ${program.accentColor} shadow-lg`}>Enquire for {program.title}</button></div>
                    </div>
                </div>
            </div>
        );
    };

    const EnquiryPage = () => (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-[#F1F5ED] relative overflow-hidden flex items-center justify-center px-4">
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#E4EBE0] opacity-40 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
                <div className="mb-8 md:mb-12">
                    <button onClick={() => handleNavClick('home')} className="inline-flex items-center gap-2 text-[#8EAC50] font-sans font-bold uppercase tracking-widest text-[11px] mb-6 hover:text-[#2D4636]"><ArrowRight size={14} className="rotate-180" /> Back to Home</button>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1A231F] serif mb-4">Registration Form</h1>
                    <p className="text-xs md:text-lg text-gray-500 font-sans max-w-xl mx-auto">Fill in the details below and our guides will reach out.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] lg:rounded-[3.5rem] p-6 md:p-12 lg:p-16 shadow-2xl border border-white/40"><SharedInquiryForm buttonText="Submit Application" /></div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#2D3436] font-serif selection:bg-[#8EAC50] selection:text-white overflow-x-hidden">
            <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-6'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}><div className="bg-[#2D4636] p-1.5 md:p-2 rounded-lg md:rounded-xl shrink-0"><Leaf className="text-[#CEDEBD] h-5 md:h-6" /></div><span className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-[#1A231F]">Kshemy<span className="text-[#8EAC50] serif font-light italic">ayur</span></span></div>
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navLinks.map((link) => (<button key={link.id} onClick={() => handleNavClick(link.id)} className={`text-[11px] lg:text-[13px] uppercase tracking-[0.3em] font-sans font-bold transition-all hover:text-[#8EAC50] ${currentPage === 'home' && link.id === 'home' ? 'text-[#8EAC50]' : (currentPage === 'home' && link.id === 'programs' && window.location.hash === '#membership-section') ? 'text-[#8EAC50]' : 'text-[#1A231F]/60'}`}>{link.name}</button>))}
                        <button onClick={() => handleNavClick('enquiry')} className="bg-[#1A231F] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-[11px] lg:text-[13px] font-sans font-bold hover:bg-[#8EAC50] transition-all uppercase tracking-widest">ENQUIRY</button>
                    </div>
                    <button className="md:hidden text-[#1A231F] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 p-8 absolute w-full shadow-2xl animate-fade-in flex flex-col gap-6 text-left z-50">
                        {navLinks.map((link) => (<button key={link.id} onClick={() => handleNavClick(link.id)} className="text-left py-2 text-2xl font-bold serif border-b border-gray-50 last:border-0">{link.name}</button>))}
                        <button onClick={() => handleNavClick('enquiry')} className="mt-4 bg-[#1A231F] text-white py-5 rounded-xl font-bold text-lg uppercase tracking-widest text-center">ENQUIRY</button>
                    </div>
                )}
            </nav>
            <main className="animate-fade-in">{currentPage === 'home' && <HomePage />}{currentPage === 'enquiry' && <EnquiryPage />}{currentPage === 'details' && <ProgramDetailsPage />}</main>
            <footer className="bg-[#1A231F] text-white py-12 md:py-16 relative border-t border-[#8EAC50]/20"><div className="max-w-7xl mx-auto px-4 lg:px-8 text-center md:text-left"><div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12"><div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}><div className="bg-[#CEDEBD] p-1.5 rounded-lg shrink-0"><Leaf className="text-[#2D4636] h-5" /></div><span className="text-2xl font-bold">Kshemy<span className="text-[#8EAC50] serif italic font-light">ayur</span></span></div><div className="flex gap-6 md:gap-8">{[Instagram, Facebook, Twitter, Mail].map((IconComp, i) => (<div key={i} className="bg-white/5 p-2 rounded-full cursor-pointer hover:bg-[#8EAC50] transition-all"><IconComp size={20} className="text-[#8EAC50] hover:text-white" /></div>))}</div></div></div></footer>
            <style dangerouslySetInnerHTML={{ __html: `.animate-fade-in { animation: fade-in 0.8s ease-out forwards; } @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }` }} />
        </div>
    );
};

export default App;
