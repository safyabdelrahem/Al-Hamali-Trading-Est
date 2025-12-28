export const categories = [
    {
        id: 'cat-cars',
        slug: 'cars',
        name: { en: 'Cars', ar: 'السيارات' },
        description: { en: 'Premium vehicles and automotive solutions.', ar: 'مركبات فاخرة وحلول سيارات متكاملة.' },
        icon: 'Car'
    },
    {
        id: 'cat-cameras',
        slug: 'cameras',
        name: { en: 'Cameras', ar: 'الكاميرات' },
        description: { en: 'Professional photography and surveillance systems.', ar: 'أنظمة تصوير فوتوغرافي ومراقبة احترافية.' },
        icon: 'Camera'
    },
    {
        id: 'cat-computers',
        slug: 'computers',
        name: { en: 'Computers', ar: 'الكمبيوترات' },
        description: { en: 'High-performance computing and hardware.', ar: 'أجهزة كمبيوتر وحلول تقنية عالية الأداء.' },
        icon: 'Monitor'
    }
];

export const products = [
    {
        id: 'prod-1',
        categorySlug: 'office-furniture',
        name: { en: 'Ergonomic Executive Chair', ar: 'كرسي مكتب فاخر مريح' },
        price: '$299',
        description: { en: 'High-back mesh office chair with lumbar support.', ar: 'كرسي مكتب شبكي بظهر مرتفع ودعم للظهر.' },
        image: 'https://images.unsplash.com/photo-1505797149-35ebcb05a6fd?auto=format&fit=crop&q=80&w=1000',
        details: {
            en: 'This executive chair is designed for maximum comfort during long working hours. It features a breathable mesh back, syncro-tilt mechanism, and premium upholstery.',
            ar: 'تم تصميم هذا الكرسي التنفيذي لتوفير أقصى قدر من الراحة خلال ساعات العمل الطويلة. يتميز بظهر شبكي يسمح بمرور الهواء، وآلية إمالة متزامنة، وتنجيد فاخر.'
        }
    },
    {
        id: 'prod-2',
        categorySlug: 'office-furniture',
        name: { en: 'Minimalist Desk', ar: 'مكتب عصري بسيط' },
        price: '$199',
        description: { en: 'Clean lines and sturdy construction for a focused workspace.', ar: 'خطوط نظيفة وبناء قوي لمساحة عمل مركزة.' },
        image: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a20a?auto=format&fit=crop&q=80&w=1000',
        details: {
            en: 'A sleek, solid wood desk with a steel frame. Perfect for home offices and modern workspaces.',
            ar: 'مكتب أنيق من الخشب الصلب مع إطار فولاذي. مثالي للمكاتب المنزلية ومساحات العمل الحديثة.'
        }
    },
    {
        id: 'prod-3',
        categorySlug: 'home-decor',
        name: { en: 'Ceramic Vase Set', ar: 'طقم فازات سيراميك' },
        price: '$45',
        description: { en: 'Handcrafted ceramic vases in neutral tones.', ar: 'فازات سيراميك مصنوعة يدوياً بألوان محايدة.' },
        image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=1000',
        details: {
            en: 'Three different sizes of matte-finish ceramic vases. Ideal for shelf styling or floral arrangements.',
            ar: 'ثلاثة أحجام مختلفة من الفازات الخزفية غير اللامعة. مثالية لتنسيق الرفوف أو ترتيبات الزهور.'
        }
    },
    {
        id: 'prod-4',
        categorySlug: 'cars',
        name: { en: 'Sedan Excellence', ar: 'سيارة سيدان الفاخرة' },
        price: '$45,000',
        description: { en: 'A perfect blend of performance and comfort.', ar: 'مزيج مثالي بين الأداء والراحة.' },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
        details: {
            en: 'This sedan offers a premium driving experience with advanced safety features and a luxurious interior.',
            ar: 'تقدم هذه السيدان تجربة قيادة ممتازة مع ميزات أمان متقدمة وتصميم داخلي فاخر.'
        }
    },
    {
        id: 'prod-5',
        categorySlug: 'tech',
        name: { en: 'Wireless Headphones', ar: 'سماعات وايرلس متطورة' },
        price: '$350',
        description: { en: 'Noise-canceling headphones with crystal clear sound.', ar: 'سماعات بخاصية إلغاء الضوضاء وصوت نقي جداً.' },
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
        details: {
            en: 'Professional-grade audio quality with long battery life and ergonomic design.',
            ar: 'جودة صوت احترافية مع عمر بطارية طويل وتصميم مريح للارتداء.'
        }
    }
];

export const COMPANY_INFO = {
    name: { en: 'Al-Hamali Commercial Est.', ar: 'مؤسسة الحمالي التجارية' },
    whatsapp: '+966575372157',
    email: 'h.4.ksa@hotmail.com',
    address: { en: 'Al Qatif, Saudi Arabia', ar: 'القطيف، المملكة العربية السعودية' }
};
