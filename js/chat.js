const chatWidget = {
    state: {
        isOpen: false,
        messages: [],
        isTyping: false
    },

    // Knowledge Base containing all specific information
    knowledgeBase: {
        en: {
            greetings: ["hello", "hi", "hey", "good morning", "good evening"],
            farewells: ["bye", "goodbye", "see you"],
            services: {
                keywords: ["service", "offer", "do", "work", "motion", "graphic", "design", "video"],
                response: "We offer a wide range of digital services including:\n\u2022 **Motion Graphics**: Promotional and explainer videos.\n\u2022 **Graphic Design**: Logos, Branding, and Marketing materials.\n\u2022 **Brand Identity**: Complete visual systems for your business.\n\u2022 **Web Solutions**: Modern and responsive websites."
            },
            contact: {
                keywords: ["contact", "email", "phone", "number", "address", "call", "reach", "location"],
                response: "You can reach us via:\n\u2022 **Phone/WhatsApp**: +249 922225399\n\u2022 **Email**: bekosoft149@gmail.com\n\u2022 **Location**: Sudan - Khartoum North\nOr use the form in the 'Contact' section!"
            },
            price: {
                keywords: ["price", "cost", "how much", "rate", "quote"],
                response: "Pricing depends on the project scope and complexity. We offer competitive rates for top-quality work. Please send us your project details for a custom quote!"
            },
            about: {
                keywords: ["who", "about", "bakri", "studio", "agency", "team"],
                response: "BAKRI Studio is a Digital Creative Agency founded by Bakri Ali. We blend creativity with smart technology to bring ideas to life, specializing in design and digital experiences."
            },
            fallback: "I'm not sure I understood that. You can ask me about our **Services**, **Contact Info**, or **Pricing**."
        },
        ar: {
            greetings: ["مرحبا", "هلا", "السلام عليكم", "اهلين", "هااي", "هاي"],
            farewells: ["مع السلامة", "باي", "إلى اللقاء", "وداعا"],
            services: {
                keywords: ["خدمة", "خدمات", "عمل", "موشن", "جرافيك", "تصميم", "فيديو", "شعار", "لوجو"],
                response: "نقدم مجموعة واسعة من الخدمات الرقمية تشمل:\n\u2022 **موشن جرافيك**: فيديوهات دعائية وتوضيحية احترافية.\n\u2022 **تصميم جرافيك**: شعارات، هويات بصرية، ومواد تسويقية.\n\u2022 **هوية بصرية**: بناء أنظمة بصرية متكاملة لعلامتك التجارية.\n\u2022 **حلول الويب**: مواقع عصرية ومتجاوبة."
            },
            contact: {
                keywords: ["تواصل", "اتصال", "ايميل", "بريد", "هاتف", "تلفون", "رقيم", "عنوان", "موقع", "مكان"],
                response: "يمكنك التواصل معنا عبر:\n\u2022 **الهاتف/واتساب**: 922225399 249+\n\u2022 **البريد الإلكتروني**: bekosoft149@gmail.com\n\u2022 **العنوان**: السودان - الخرطوم بحري\nأو استخدم النموذج في قسم 'تواصل معنا'!"
            },
            price: {
                keywords: ["سعر", "تكلفة", "كم", "اسعار", "بكام", "عرض"],
                response: "التكلفة تعتمد على حجم وتعقيد المشروع. نحن نقدم أسعاراً تنافسية مقابل جودة عالية. يرجى إرسال تفاصيل مشروعك للحصول على عرض سعر مخصص!"
            },
            about: {
                keywords: ["من انتم", "من أنتم", "عنكم", "بكري", "استوديو", "وكالة", "فريق"],
                response: "استوديو بكري هو وكالة إبداعية رقمية أسسها بكري علي. نحن نمزج بين الإبداع والتقنية الذكية لتحويل الأفكار إلى واقع، متخصصون في التصميم والتجارب الرقمية."
            },
            fallback: "عذراً، لم أفهم تماماً. يمكنك سؤالي عن **الخدمات**، **طرق التواصل**، أو **الأسعار**."
        }
    },

    init() {
        this.renderButton();
        this.renderWindow();
        this.attachEventListeners();
    },

    toggle() {
        this.state.isOpen = !this.state.isOpen;
        const window = document.getElementById('chat-window');
        const button = document.getElementById('chat-btn');
        const currentLang = document.documentElement.lang || 'en';

        if (this.state.isOpen) {
            window.classList.remove('hidden', 'scale-0', 'opacity-0');
            window.classList.add('scale-100', 'opacity-100');
            // Update button icon to 'X'
            button.innerHTML = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;

            // Send welcome message if empty
            if (this.state.messages.length === 0) {
                const welcomeMsg = currentLang === 'ar'
                    ? 'مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك في مشروعك القادم؟'
                    : 'Hello! I\'m your AI assistant. How can I help you with your next project?';
                this.receiveMessage(welcomeMsg);
            }
        } else {
            window.classList.add('hidden', 'scale-0', 'opacity-0');
            window.classList.remove('scale-100', 'opacity-100');
            // Update button icon to 'Chat'
            button.innerHTML = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>`;
        }
    },

    renderButton() {
        // Button is defined in HTML
    },

    renderWindow() {
        // Window is defined in HTML
    },

    attachEventListeners() {
        // Toggle Button
        const btn = document.getElementById('chat-btn');
        if (btn) btn.addEventListener('click', () => this.toggle());

        // Input & Send
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send');

        const sendMessage = () => {
            if (!input) return;
            const text = input.value.trim();
            if (text) {
                this.addMessage(text, 'user');
                input.value = '';
                this.generateResponse(text);
            }
        };

        if (sendBtn) sendBtn.addEventListener('click', sendMessage);
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }
    },

    addMessage(text, sender) {
        this.state.messages.push({ text, sender });
        const container = document.getElementById('chat-messages');
        if (!container) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in-up`;

        const bubble = document.createElement('div');
        // Check if text implies Arabic (very basic check) to adjust text alignment if needed
        const isArabic = /[\u0600-\u06FF]/.test(text);

        bubble.className = `max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${sender === 'user'
            ? 'bg-brand-blue text-white rounded-br-none'
            : 'bg-white dark:bg-gray-700 dark:text-gray-200 text-gray-800 rounded-bl-none border border-gray-100 dark:border-gray-600'
            }`;

        // Preserve line breaks
        bubble.innerHTML = text.replace(/\n/g, '<br>');
        if (isArabic) bubble.dir = 'rtl';

        msgDiv.appendChild(bubble);
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
    },

    receiveMessage(text) {
        this.setIsTyping(true);
        // Simulate thinking delay
        setTimeout(() => {
            this.setIsTyping(false);
            this.addMessage(text, 'bot');
        }, 1000);
    },

    setIsTyping(isTyping) {
        const container = document.getElementById('chat-messages');
        const typingIndicator = document.getElementById('typing-indicator');

        if (isTyping) {
            if (!typingIndicator) {
                const div = document.createElement('div');
                div.id = 'typing-indicator';
                div.className = 'flex justify-start mb-4';
                div.innerHTML = `
          <div class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-1">
            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        `;
                container.appendChild(div);
                container.scrollTop = container.scrollHeight;
            }
        } else {
            if (typingIndicator) typingIndicator.remove();
        }
    },

    // --- Smart Logic ---

    detectLanguage(text) {
        const arabicPattern = /[\u0600-\u06FF]/;
        return arabicPattern.test(text) ? 'ar' : 'en';
    },

    generateResponse(userText) {
        const lang = this.detectLanguage(userText);
        const data = this.knowledgeBase[lang];
        const lowerText = userText.toLowerCase();

        // 1. Check Greetings
        if (data.greetings.some(g => lowerText.includes(g))) {
            const reply = lang === 'ar'
                ? 'أهلاً بك! كيف يمكنني مساعدتك؟'
                : 'Hello! How can I help you?';
            this.receiveMessage(reply);
            return;
        }

        // 2. Check Farewells
        if (data.farewells.some(f => lowerText.includes(f))) {
            const reply = lang === 'ar'
                ? 'مع السلامة! نتطلع للعمل معك قريباً.'
                : 'Goodbye! looking forward to working with you.';
            this.receiveMessage(reply);
            return;
        }

        // 3. Check Specific Topics
        let bestMatch = null;

        // Check Services
        if (data.services.keywords.some(k => lowerText.includes(k))) {
            bestMatch = data.services.response;
        }
        // Check Contact (Higher priority if explicitly asked)
        else if (data.contact.keywords.some(k => lowerText.includes(k))) {
            bestMatch = data.contact.response;
        }
        // Check Price
        else if (data.price.keywords.some(k => lowerText.includes(k))) {
            bestMatch = data.price.response;
        }
        // Check About
        else if (data.about.keywords.some(k => lowerText.includes(k))) {
            bestMatch = data.about.response;
        }

        // 4. Return Response or Fallback
        if (bestMatch) {
            this.receiveMessage(bestMatch);
        } else {
            this.receiveMessage(data.fallback);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    chatWidget.init();
});
