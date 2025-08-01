

let currentStep = 1;
let userName = '';
let userPhoto = '';
let userPassword = '';
let cartItems = [];
let currentProductIndex = 0;
let isLoggedIn = false;
let isMusicPlaying = false;
let isDarkMode = false;
let currentLanguage = 'en';
let products = [];
let filteredProducts = [];
let displayedProducts = 12;
let totalOrders = 0;
let isAdminLoggedIn = false;
let users = []; // Store registered users


const translations = {
    en: {
        welcome: "Welcome to Snap & Shop",
        shopNow: "Shop Now",
        home: "Home",
        products: "Products",
        services: "Services",
        cart: "Cart",
        profile: "Profile",
        contact: "Contact",
        addToCart: "Add to Cart",
        buyNow: "Buy Now",
        heroSubtitle: "Discover amazing products with the best shopping experience",
        ourProducts: "Our Products",
        ourServices: "Our Services",
        shoppingCart: "Shopping Cart",
        creatorProfile: "Creator Profile",
        contactUs: "Contact Us",
        settings: "Settings",
        music: "Music",
        notifications: "Notifications",
        darkMode: "Dark Mode",
        adminPanel: "Admin Panel",
        access: "Access",
        adminLogin: "Admin Login",
        login: "Login",
        adminDashboard: "Admin Dashboard",
        totalProducts: "Total Products",
        totalOrders: "Total Orders",
        totalUsers: "Total Users",
        manageProducts: "Manage Products",
        viewOrders: "View Orders",
        manageUsers: "Manage Users",
        fastDelivery: "Fast Delivery",
        fastDeliveryDesc: "Quick and reliable delivery to your doorstep",
        securePayment: "Secure Payment",
        securePaymentDesc: "100% secure payment processing",
        support: "24/7 Support",
        supportDesc: "Round the clock customer support",
        emptyCart: "Your cart is empty",
        emptyCartDesc: "Start shopping to add items to your cart",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        checkout: "Proceed to Checkout",
        developerTitle: "Developer of Snap & Shop",
        profileDescription: "Welcome to Snap & Shop, where quality meets convenience. With over 10 years of experience in e-commerce, I've dedicated myself to creating the ultimate shopping experience for our customers.",
        sendMessage: "Send Message",
        menu: "Menu",
        language: "Language",
        completeOrder: "Complete Your Order",
        placeOrder: "Place Order",
        showMore: "Show More Products",
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        stockLeft: "left in stock",
         emptyCart: 'Your cart is empty',
        doubleClickCart: 'Double click on cart button',
        emptyCartDesc: 'Start shopping to add items to your cart',
        customer: "Customer",
        orders: "Orders",
        cartItems: "Cart Items"
    },
    ur: {
        welcome: "سناپ اینڈ شاپ میں خوش آمدید",
        shopNow: "ابھی خریداری کریں",
        home: "ہوم",
        products: "پروڈکٹس",
        services: "خدمات",
        cart: "کارٹ",
        profile: "پروفائل",
        contact: "رابطہ",
        addToCart: "کارٹ میں شامل کریں",
        buyNow: "ابھی خریدیں",
        heroSubtitle: "بہترین خریداری کے تجربے کے ساتھ حیرت انگیز مصنوعات دریافت کریں",
        ourProducts: "ہمارے پروڈکٹس",
        ourServices: "ہماری خدمات",
        shoppingCart: "خریداری کی ٹوکری",
        creatorProfile: "تخلیق کار کا پروفائل",
        contactUs: "ہم سے رابطہ کریں",
        settings: "ترتیبات",
        music: "موسیقی",
        notifications: "اطلاعات",
        darkMode: "ڈارک موڈ",
        adminPanel: "ایڈمن پینل",
        access: "رسائی",
        adminLogin: "ایڈمن لاگ ان",
        login: "لاگ ان",
        adminDashboard: "ایڈمن ڈیش بورڈ",
        totalProducts: "کل پروڈکٹس",
        totalOrders: "کل آرڈرز",
        totalUsers: "کل صارفین",
        manageProducts: "پروڈکٹس کا انتظام",
        viewOrders: "آرڈرز دیکھیں",
        manageUsers: "صارفین کا انتظام",
        fastDelivery: "تیز ڈیلیوری",
        fastDeliveryDesc: "آپ کے دروازے تک تیز اور قابل اعتماد ڈیلیوری",
        securePayment: "محفوظ ادائیگی",
        securePaymentDesc: "100% محفوظ ادائیگی کی پروسیسنگ",
        support: "24/7 سپورٹ",
        supportDesc: "چوبیس گھنٹے کسٹمر سپورٹ",
        emptyCart: "آپ کا کارٹ خالی ہے",
        emptyCartDesc: "اپنے کارٹ میں آئٹمز شامل کرنے کے لیے خریداری شروع کریں",
        orderSummary: "آرڈر کا خلاصہ",
        subtotal: "ذیلی کل",
        shipping: "شپنگ",
        total: "کل",
        checkout: "چیک آؤٹ کی طرف بڑھیں",
        developerTitle: "سناپ اینڈ شاپ کا ڈیولپر",
        profileDescription: "سناپ اینڈ شاپ میں خوش آمدید، جہاں معیار سہولت سے ملتا ہے۔ ای کامرس میں 10 سال سے زیادہ کے تجربے کے ساتھ، میں نے اپنے آپ کو اپنے صارفین کے لیے حتمی خریداری کا تجربہ بنانے کے لیے وقف کیا ہے۔",
        sendMessage: "پیغام بھیجیں",
        menu: "مینو",
        language: "زبان",
        completeOrder: "اپنا آرڈر مکمل کریں",
        placeOrder: "آرڈر دیں",
        showMore: "مزید پروڈکٹس دکھائیں",
        inStock: "اسٹاک میں",
        outOfStock: "اسٹاک ختم",
        stockLeft: "اسٹاک میں باقی",
          customer: "گاہک",
        orders: "آرڈرز",
        cartItems: "کارٹ آئٹمز"
    },
    ar: {
        welcome: "مرحباً بكم في سناب أند شوب",
        shopNow: "تسوق الآن",
        home: "الرئيسية",
        products: "المنتجات",
        services: "الخدمات",
        cart: "السلة",
        profile: "الملف الشخصي",
        contact: "الاتصال",
        addToCart: "أضف إلى السلة",
        buyNow: "اشتر الآن",
        heroSubtitle: "اكتشف منتجات مذهلة مع أفضل تجربة تسوق",
        ourProducts: "منتجاتنا",
        ourServices: "خدماتنا",
        shoppingCart: "عربة التسوق",
        creatorProfile: "ملف المنشئ",
        contactUs: "اتصل بنا",
        settings: "الإعدادات",
        music: "الموسيقى",
        notifications: "الإشعارات",
        darkMode: "الوضع المظلم",
        adminPanel: "لوحة الإدارة",
        access: "الوصول",
        adminLogin: "تسجيل دخول المدير",
        login: "تسجيل الدخول",
        adminDashboard: "لوحة تحكم المدير",
        totalProducts: "إجمالي المنتجات",
        totalOrders: "إجمالي الطلبات",
        totalUsers: "إجمالي المستخدمين",
        manageProducts: "إدارة المنتجات",
        viewOrders: "عرض الطلبات",
        manageUsers: "إدارة المستخدمين",
        fastDelivery: "توصيل سريع",
        fastDeliveryDesc: "توصيل سريع وموثوق إلى باب منزلك",
        securePayment: "دفع آمن",
        securePaymentDesc: "معالجة دفع آمنة 100%",
        support: "دعم 24/7",
        supportDesc: "دعم العملاء على مدار الساعة",
        emptyCart: "عربة التسوق فارغة",
        emptyCartDesc: "ابدأ التسوق لإضافة عناصر إلى عربة التسوق",
        orderSummary: "ملخص الطلب",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        total: "المجموع",
        checkout: "المتابعة للدفع",
        developerTitle: "مطور سناب أند شوب",
        profileDescription: "مرحباً بكم في سناب أند شوب، حيث تلتقي الجودة بالراحة. مع أكثر من 10 سنوات من الخبرة في التجارة الإلكترونية، كرست نفسي لإنشاء تجربة التسوق المثلى لعملائنا.",
        sendMessage: "إرسال الرسالة",
        menu: "القائمة",
        language: "اللغة",
        completeOrder: "أكمل طلبك",
        placeOrder: "تقديم الطلب",
        showMore: "عرض المزيد من المنتجات",
        inStock: "متوفر",
        outOfStock: "نفد المخزون",
        stockLeft: "متبقي في المخزون"
    }
};

const generateProducts = () => {
    const productData = [
        {
            name: "Creed Aventus",
            price: 14.6,
            category: "Perfumes",
            description: "Premium fragrance with notes of pineapple, birch, and musk. Long-lasting scent that develops over time.",
            images: ["creed.webp"],

            stock: 50,
            sizes: ["50ml", "100ml", "200ml"],
            details: {
                brand: "Creed",
                scentType: "Woody Aromatic",
                topNotes: "Pineapple, Bergamot, Blackcurrant",
                middleNotes: "Birch, Jasmine, Patchouli",
                baseNotes: "Musk, Oakmoss, Vanilla",
                longevity: "8-12 hours",
                season: "All Seasons",
                occasion: "Daytime, Evening, Special Occasions"
            }
        },
        {
            name: "DOLCE & GABBANA",
            price: 9.12,
            category: "Perfumes",
            description: "Premium fragrance with notes of pineapple, birch, and musk. Long-lasting scent that develops over time.",
            images: ["https://www.fragrancesamplesuk.com/media/catalog/product/cache/0ac0516e26f0560d9a76e8e2dd4b6632/t/h/theoneforher.jpg"],
            stock: 9,
            
            details: {
               brand: "The One",
                scentType: "Fresh Aromatic",
                topNotes: "Pineapple, Bergamot, Blackcurrant",
                middleNotes: " Patchouli",
                baseNotes: "Musk, Oakmoss, Vanilla",
                longevity: "8-12 hours",
                season: "All Seasons",
                occasion: "Daytime, Evening, Special Occasions"
            }
        },
        {
            name: "AQUA ALLEGORIA",
            price: 10.99,
            category: "Perfumes",
            description: "Premium fragrance with notes of pineapple, birch, and musk. Long-lasting scent that develops over time.",
            images: ["https://moodiedavittreport.com/wp-content/uploads/2023/07/Guerlain-Aqua-Allegoria-e1680194626246.jpg"],
            stock: 12,
            
            details: {
               brand: "PERA GRANITA",
                scentType: "Woody Aromatic",
                topNotes: "Pineapple, Bergamot, Blackcurrant",
                middleNotes: "Birch, Jasmine, Patchouli",
                baseNotes: "Musk, Oakmoss, Vanilla",
                longevity: "8-12 hours",
                season: "All Seasons",
                occasion: "Daytime, Evening, Special Occasions"
            }
        },
        {
            name: "Organic Cotton T-Shirt",
            price: 8.99,
            category: "Fashion",
            description: "100% organic cotton t-shirt with comfortable fit and durable construction.",
            images: ["https://ssgarmentss.com/wp-content/uploads/2023/09/deen-1.jpg"],
            stock: 42,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            colors: ["White", "Black", "Navy", "Gray"],
            details: {
                brand: "DEEN over DUNIYA ",
                material: "100% Organic Cotton",
                fit: "Regular Fit",
                care: "Machine wash cold",
                origin: "Made in Pakistan"
            }
        },
        {
            name: "Leather Wallet",
            price: 8.44,
            category: "Fashion",
            description: "Genuine leather wallet with multiple card slots and RFID protection.",
            images: ["https://sialkotleather.pk/cdn/shop/files/WhatsApp_Image_2025-01-24_at_11.44.03_PM_800x.jpg?v=1744876477"],
            stock: 25,
            colors: ["Brown", "Black", "Tan"],
            details: {
                brand: "LeatherCraft",
                material: "Genuine Leather",
                slots: "8 Card Slots + 2 Hidden Pockets",
                features: "RFID Blocking Technology",
                dimensions: "4.5 x 3.5 inches"
            }
        },
        {
            name: "Cricket bat",
            price: 6.45,
            category: "Sports",
            description: "Its a great wooden bat with best looks and performance.",
            images: ["https://nwscdn.com/media/catalog/product/cache/h900xw900/e/n/english-willow-pro-bat-main_1_3.jpg"],
            stock: 16,
            colors: ["Purple", "Blue", "Green, Blue , Red"],
            details: {
                brand: "JD",
                material: "Best Wood",
                thickness: "3cm",
                dimensions: "72 x 24 inches",
                weight: "0.7kg",
            }
        },
        {
            name: "Ceramic Plant Pot",
            price: 12.99,
            category: "Garden",
            description: "Handcrafted ceramic plant pot with drainage hole and saucer included.",
            images: ["https://plantlane.com/cdn/shop/files/DSC09769.jpg?v=1712320908"],
            stock: 40,
            sizes: ["Small (6\")", "Medium (8\")", "Large (10\")"],
            colors: ["Terracotta", "White", "Gray"],
            details: {
                brand: "GreenThumb",
                material: "Ceramic",
                drainage: "Includes drainage hole and saucer",
                care: "Wipe clean with damp cloth",
                origin: "Handmade in Pakistan"
            }
        },
        {
            name: "Cotton Pent Shirt",
            price: 7.24,
            category: "Fashion",
            description: "100% cotton pent Shirt with comfortable fit and durable construction.",
            images: ["https://i.pinimg.com/564x/af/45/b6/af45b698a8e6fcd4e87c09816cb65434.jpg"],
            stock: 42,
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            colors: ["White", "Black", "Navy", "Gray"],
            details: {
                brand: "Ideal",
                material: "100% Organic Cotton",
                fit: "Regular Fit",
                care: "Machine wash cold",
                origin: "Made in Pakistan"
            }
        },
        {
            name: "Blender",
            price: 18.54,
            category: "Home",
            description: "High-speed blender with 1000W motor and BPA-free jug for smoothies and food prep.",
            images: ["https://s.alicdn.com/@sc04/kf/H3e8be275a8af426b9a5d6f48993ef80cd/2023-New-Design-Food-Juice-Blender-Easy-to-Operate-and-Highly-Efficient-7-in-1-Kitchen-Blender.jpg"],
            stock: 20,
            colors: ["Black", "Red", "Silver"],
            details: {
                brand: "BRaUn",
                power: "1000W",
                capacity: "1.5L",
                speedSettings: "5 speeds + pulse",
                features: "BPA-free jug, stainless steel blades",
                warranty: "2 years",
                madeIn: "Chaina"
                
            }
        },
        {
            name: "VINTNER'S DAUGHTER Serum",
            price: 5.47,
            category: "Beauty",
            description: "Anti-aging facial serum with hyaluronic acid and vitamin C for radiant skin.",
            images: ["https://vintnersdaughter.com/cdn/shop/files/2023_VD_ABS_30ml_EcommProduct_Badges_1400x1220_c5c04579-0abc-4d00-b29d-ba1c2cd1c795.jpg?v=1709657286"],
            stock: 55,
            sizes: ["30ml", "50ml"],
            details: {
                brand: "Vintner's Daughter",
                keyIngredients: "Hyaluronic Acid, Vitamin C, Peptides",
                skinType: "All skin types",
                crueltyFree: "Yes",
                madeIn: "France"
            }
        }
    ];

    // Generate additional products with similar structure
    const additionalProducts = [
        // Electronics
        {
            name: "4K Smart TV",
            price: 80.24,
            category: "Electronics",
            description: "55-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
            images: ["https://m.media-amazon.com/images/I/71cZiYhNZLL._AC_SL1500_.jpg"],
            stock: 14,
            details: {
                brand: "TCL",
                screenSize: "55 inches",
                resolution: "3840 x 2160 (4K UHD)",
                smartFeatures: "Built-in WiFi, streaming apps",
                ports: "4 HDMI, 2 USB"
            }
        },
        {
            name: "Wireless AirPods",
            price: 14.78,
            category: "Electronics",
            description: "True wireless earbuds with 24-hour battery life and touch controls.",
            images: ["https://www.shutterstock.com/image-photo/berlin-germany-october-2-2022-600nw-2210019033.jpg"],
            stock: 40,
            colors: ["Black", "White"],
            details: {
                brand: "Apple",
                batteryLife: "24 hours (with case)",
                connectivity: "Bluetooth 5.0",
                waterResistance: "IPX5",
                features: "Touch controls, built-in microphone"
            }
        },
        
        // Fashion
        {
            name: "Wool Jacket",
            price: 25.47,
            category: "Fashion",
            description: "Classic denim jacket with modern fit and distressed details.",
            images: ["https://thestreetstylestore.pk/wp-content/uploads/2023/06/eec89f90-0a45-4153-b3e8-a0281a0d0b84-600x600.jpg"],
            stock: 28,
            sizes: ["S", "M", "L", "XL"],
            colors: ["Light Blue", "Dark Blue", "Black"],
            details: {
                brand: "DenimCo",
                material: "100% Cotton Denim",
                fit: "Regular Fit",
                care: "Machine wash cold",
                features: "Distressed details, button closure"
            }
        },
        
        // Home
        {
            name: "Dior Sauvage Parfum",
            price: 14.6,
            category: "Perfumes",
            description: "Premium fragrance with notes of pineapple, birch, and musk. Long-lasting scent that develops over time.",
            images: ["https://i0.wp.com/perfumedecants.in/wp-content/uploads/2022/04/Dior-Sauvage-Parfum.jpg?fit=1080%2C1080&ssl=1"],

            stock: 50,
            sizes: ["30ml", "50ml", "100ml"],
            details: {
                brand: "Dior",
                scentType: "Woody Aromatic",
                topNotes: "Pineapple, Bergamot, Blackcurrant",
                middleNotes: "Birch, Jasmine, Patchouli",
                baseNotes: "Musk, Oakmoss, Vanilla",
                longevity: "8-12 hours",
                season: "All Seasons",
                occasion: "Daytime, Evening, Special Occasions"
            }
        },
        
        // Sports
        {
             name: "JAGUAR Classic Black",
            price: 14.6,
            category: "Perfumes",
            description: "Premium fragrance with notes of pineapple, birch, and musk. Long-lasting scent that develops over time.",
            images: ["https://technuggets.biz/wp-content/uploads/2018/11/Tech-Nuggets-Jaguar-Classic-Black-Perfume-for-Men-600x600.jpg"],

            stock: 10,
            sizes: ["30ml", "50ml", "100ml"],
            details: {
                brand: "JAGUAR",
                scentType: "Woody Aromatic",
                topNotes: "Pineapple, Bergamot, Blackcurrant",
                middleNotes: "Birch, Jasmine, Patchouli",
                baseNotes: "Musk, Oakmoss, Vanilla",
                longevity: "8-12 hours",
                season: "All Seasons",
                occasion: "Daytime, Evening, Special Occasions"
            }
        }
    ];

    // Combine the detailed products with additional generated products
    const allProducts = [...productData, ...additionalProducts];

    return allProducts.map((product, index) => ({
        id: index + 1,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
                images: product.images,
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3-5
        reviews: Math.floor(Math.random() * 1000 + 10), // Random reviews between 10-1010
        stock: product.stock,
        inStock: product.stock > 0,
        sizes: product.sizes || [],
        colors: product.colors || [],
        details: product.details || {},
        features: product.features || [
            'Premium Quality Materials',
            'Modern Design',
            'Durable Construction',
            'Easy to Use',
            'Excellent Value'
        ],
        specifications: {
            brand: product.details?.brand || product.name.split(' ')[0],
            model: `${product.name.split(' ').join('-')}-${index + 1}`,
            warranty: product.details?.warranty || '1 Year',
            color: product.colors?.[0] || ['Black', 'White', 'Blue', 'Red'][Math.floor(Math.random() * 4)]
        }
    }));
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupEventListeners();
    
    // Generate products first
    products = generateProducts();
    filteredProducts = [...products];
    console.log('Products generated:', products.length);
    
    // Render products
    renderProducts();
    updateCartDisplay();
    
    // Check if user exists
    checkExistingUser();
    
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        console.log('EmailJS is ready');
    } else {
        console.warn('EmailJS not loaded');
    }
});

// Check if user exists and show appropriate login screen
function checkExistingUser() {
    const savedUsers = JSON.parse(localStorage.getItem('snapshop_users') || '[]');
    users = savedUsers;
    
    const lastUser = localStorage.getItem('snapshop_last_user');
    
    if (lastUser && users.length > 0) {
        // Show existing user login
        showExistingUserLogin();
    } else {
        // Show registration process
        showRegistration();
    }
}

function showExistingUserLogin() {
    document.querySelectorAll('.login-step').forEach(step => step.classList.remove('active'));
    document.getElementById('existing-login').classList.add('active');
}

function showRegistration() {
    document.querySelectorAll('.login-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
    currentStep = 1;
}

function switchToRegistration() {
    showRegistration();
}

// Initialize application
function initializeApp() {
    loadUserData();
    loadCartData();
    loadSettings();
    
    window.addEventListener('scroll', handleScroll);
    setupIntersectionObserver();
    applyTheme();
    updateVisitorProfile();
    updateLanguage();
}

// Setup event listeners
function setupEventListeners() {
    document.querySelectorAll('.nav-link, .mobile-nav-link, .bottom-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            showSection(target);
            if (document.getElementById('mobile-nav')?.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Password strength checker
    const passwordInput = document.getElementById('userPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }
    
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', checkPasswordMatch);
    }
}

// Enhanced Login system with password creation
function nextStep(step) {
    if (!validateStep(currentStep)) {
        return;
    }
    
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const nextStepEl = document.getElementById(`step${step}`);
    
    currentStepEl.style.transform = 'translateX(-100px)';
    currentStepEl.style.opacity = '0';
    
    setTimeout(() => {
        currentStepEl.classList.remove('active');
        nextStepEl.classList.add('active');
        nextStepEl.style.transform = 'translateX(0)';
        nextStepEl.style.opacity = '1';
        currentStep = step;
    }, 300);
}

function prevStep(step) {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const prevStepEl = document.getElementById(`step${step}`);
    
    currentStepEl.style.transform = 'translateX(100px)';
    currentStepEl.style.opacity = '0';
    
    setTimeout(() => {
        currentStepEl.classList.remove('active');
        prevStepEl.classList.add('active');
        prevStepEl.style.transform = 'translateX(0)';
        prevStepEl.style.opacity = '1';
        currentStep = step;
    }, 300);
}

function validateStep(step) {
    switch(step) {
        case 1:
            const name = document.getElementById('userName').value.trim();
            if (!name) {
                showNotification('Please enter your name', 'error');
                return false;
            }
            userName = name;
            return true;
        case 2:
            const photoInput = document.getElementById('photoInput');
            if (!photoInput.files.length) {
                showNotification('Please upload a photo', 'error');
                return false;
            }
            return true;
        case 3:
            const password = document.getElementById('userPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters long', 'error');
                return false;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return false;
            }
            
            userPassword = password;
            return true;
        default:
            return true;
    }
}

function previewPhoto() {
    const input = document.getElementById('photoInput');
    const preview = document.getElementById('photoPreview');
    const uploadContainer = document.querySelector('.photo-upload');
    const nextBtn = document.getElementById('photoNextBtn');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            uploadContainer.style.border = '3px solid #10b981';
            userPhoto = e.target.result;
            
            // Enable next button
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('userPassword').value;
    const strengthIndicator = document.getElementById('passwordStrength');
    
    let strength = 0;
    let message = '';
    let color = '';
    
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;
    
    switch(strength) {
        case 0:
        case 1:
            message = 'Weak';
            color = '#ef4444';
            break;
        case 2:
        case 3:
            message = 'Medium';
            color = '#f59e0b';
            break;
        case 4:
        case 5:
            message = 'Strong';
            color = '#10b981';
            break;
    }
    
    strengthIndicator.innerHTML = `Password Strength: <span style="color: ${color}; font-weight: 600;">${message}</span>`;
}

function checkPasswordMatch() {
    const password = document.getElementById('userPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmInput = document.getElementById('confirmPassword');
    
    if (confirmPassword && password !== confirmPassword) {
        confirmInput.style.borderColor = '#ef4444';
    } else if (confirmPassword) {
        confirmInput.style.borderColor = '#10b981';
    }
}

function completeRegistration() {
    if (!validateStep(3)) return;
    
    // Check if user already exists
    const existingUser = users.find(user => user.name.toLowerCase() === userName.toLowerCase());
    if (existingUser) {
        showNotification('User with this name already exists. Please choose a different name.', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: userName,
        photo: userPhoto,
        password: userPassword,
        createdAt: new Date().toISOString(),
        loginHistory: []
    };
    
    users.push(newUser);
    localStorage.setItem('snapshop_users', JSON.stringify(users));
    localStorage.setItem('snapshop_last_user', userName);
    
    showNotification('Account created successfully!', 'success');
    loginUser();
}

function authenticateUser() {
    const name = document.getElementById('loginName').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!name || !password) {
        showNotification('Please enter both name and password', 'error');
        return;
    }
    
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase() && u.password === password);
    
    if (user) {
        userName = user.name;
        userPhoto = user.photo;
        userPassword = user.password;
        
        // Update login history
        user.loginHistory = user.loginHistory || [];
        user.loginHistory.push({
            timestamp: new Date().toISOString(),
            ip: 'Unknown', // In a real app, you'd get the actual IP
            userAgent: navigator.userAgent
        });
        
        localStorage.setItem('snapshop_users', JSON.stringify(users));
        localStorage.setItem('snapshop_last_user', userName);
        
        showNotification(`Welcome back, ${userName}!`, 'success');
        loginUser();
    } else {
        showNotification('Invalid name or password', 'error');
    }
}

function loginUser() {
    isLoggedIn = true;
    
    const loginContainer = document.getElementById('login-container');
    const doorContainer = document.getElementById('door-container');
    const logoAnimation = document.getElementById('logo-animation');
    const mainWebsite = document.getElementById('main-website');
    
    loginContainer.style.opacity = '0';
    loginContainer.style.visibility = 'hidden';
    
    setTimeout(() => {
        doorContainer.classList.add('active');
        setTimeout(() => {
            doorContainer.classList.add('opening');
            playDoorSound();
        }, 500);
        
        setTimeout(() => {
            logoAnimation.classList.add('active');
            setTimeout(() => {
                logoAnimation.style.opacity = '0';
                setTimeout(() => {
                    logoAnimation.classList.remove('active');
                    doorContainer.classList.remove('active');
                    mainWebsite.classList.add('active');
                    
                    // Show bottom navbar
                    const bottomNavbar = document.getElementById('bottom-navbar');
                    if (bottomNavbar) {
                        bottomNavbar.classList.add('active');
                    }
                    
                    if (isMusicPlaying) {
                        const bgAudio = document.getElementById('bg-audio');
                        if (bgAudio) {
                            bgAudio.play().catch(e => console.log('Audio autoplay prevented'));
                        }
                    }
                    
                    updateVisitorProfile();
                    saveUserData();
                    updateAdminUsersList(); // Update admin panel with user data
                }, 500);
            }, 3000);
        }, 2000);
    }, 500);
}

// Enhanced Product functions with search and filter
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) {
        console.error('Products grid not found');
        return;
    }
    
    console.log('Rendering products, total:', filteredProducts.length);
    
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
    
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        if (displayedProducts >= filteredProducts.length) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'block';
        }
    }
    
    console.log('Products rendered successfully');
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card animate-fadeInUp';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const stockStatus = product.inStock ? 
        `<span class="stock-in">✓ ${translations[currentLanguage]?.inStock || 'In Stock'}</span>` : 
        `<span class="stock-out">✗ ${translations[currentLanguage]?.outOfStock || 'Out of Stock'}</span>`;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img class="product-image" src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <div class="image-overlay">
                <button class="quick-view-btn" onclick="openProductModal(${product.id})">
                    Quick View
                </button>
            </div>
            <div class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? `${product.stock} ${translations[currentLanguage]?.stockLeft || 'left in stock'}` : translations[currentLanguage]?.outOfStock || 'Out of Stock'}
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="product-description">${product.description.substring(0, 100)}...</p>
            <div class="stock-status">
                ${stockStatus}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    ${translations[currentLanguage]?.addToCart || 'Add to Cart'}
                </button>
                <button class="buy-now-btn" onclick="buyNow(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-bolt"></i>
                    ${translations[currentLanguage]?.buyNow || 'Buy Now'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFilters();
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    let filtered = [...products];
    
    // Apply search first
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Apply price filter
    if (priceFilter) {
        const [min, max] = priceFilter.includes('+') ? 
            [parseInt(priceFilter), Infinity] : 
            priceFilter.split('-').map(p => parseInt(p));
        
        filtered = filtered.filter(product => 
            product.price >= min && (max === undefined || product.price <= max)
        );
    }
    
    filteredProducts = filtered;
    displayedProducts = 12;
    renderProducts();
}

function applyFilters() {
    displayedProducts = 12;
    renderProducts();
}

function loadMoreProducts() {
    displayedProducts += 12;
    renderProducts();
}

// Enhanced Cart functions with proper stock management
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found', 'error');
        return;
    }
    
    if (!product.inStock) {
        showNotification('Product is out of stock', 'error');
        return;
    }
    
    const existingItem = cartItems.find(item => item.id === productId);
    const currentCartQuantity = existingItem ? existingItem.quantity : 0;
    
    if (currentCartQuantity + quantity > product.stock) {
        showNotification(`Only ${product.stock - currentCartQuantity} items available`, 'warning');
        return;
    }
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    saveCartData();
    showNotification(`${product.name} added to cart!`, 'success');
    
    const cartIcon = document.querySelector('.nav-link[href="#cart"] i');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
    
    updateMobileCartCount();
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + (subtotal > 0 ? 9.99 : 0);
    
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    
    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3 data-translate="emptyCart">${translations[currentLanguage]?.emptyCart || 'Your cart is empty'}</h3>
                <p data-translate="emptyCartDesc">${translations[currentLanguage]?.emptyCartDesc || 'Start shopping to add items to your cart'}</p>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.itemId = item.id;
        
        // Create size/color info if they exist
        let variantInfo = '';
        if (item.selectedSize) {
            variantInfo += `<p class="cart-item-variant"><span class="variant-label">Size:</span> ${item.selectedSize}</p>`;
        }
        if (item.selectedColor) {
            variantInfo += `<p class="cart-item-variant"><span class="variant-label">Color:</span> ${item.selectedColor}</p>`;
        }
        
        cartItem.innerHTML = `
            <div class="cart-item-content">
                <img class="cart-item-image" src="${item.images[0]}" alt="${item.name}" loading="lazy">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} <span class="unit-price">($${item.price.toFixed(2)} each)</span></p>
                    ${variantInfo}
                    <div class="cart-item-stock">
                        <span class="stock-info">${item.stock} in stock</span>
                    </div>
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn minus" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1}, '${item.selectedSize}', '${item.selectedColor}')">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" 
                           value="${item.quantity}" 
                           min="1" 
                           max="${item.stock}"
                           onchange="updateCartQuantity(${item.id}, parseInt(this.value), '${item.selectedSize}', '${item.selectedColor}')">
                    <button class="quantity-btn plus" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1}, '${item.selectedSize}', '${item.selectedColor}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.selectedSize}', '${item.selectedColor}')" aria-label="Remove item">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartDisplay();
    renderCartItems();
    saveCartData();
    updateMobileCartCount();
    showNotification('Item removed from cart', 'info');
}

function updateCartQuantity(productId, newQuantity) {
    const item = cartItems.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (item && product) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity > product.stock) {
            showNotification(`Only ${product.stock} items available`, 'warning');
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            renderCartItems();
            saveCartData();
            updateMobileCartCount();
        }
    }
}

function buyNow(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found', 'error');
        return;
    }
    
    if (!product.inStock) {
        showNotification('Product is out of stock', 'error');
        return;
    }
    
    if (quantity > product.stock) {
        showNotification(`Only ${product.stock} items available`, 'warning');
        return;
    }
    
    openOrderModal([{...product, quantity}]);
}

function checkout() {
    if (cartItems.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    // Validate stock for all items
    for (let item of cartItems) {
        const product = products.find(p => p.id === item.id);
        if (!product || !product.inStock || item.quantity > product.stock) {
            showNotification(`${item.name} is not available in requested quantity`, 'error');
            return;
        }
    }
    
    openOrderModal(cartItems);
}

function openOrderModal(items) {
    const orderModal = document.getElementById('order-modal');
    if (!orderModal) return;
    
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    
    if (orderItemsContainer) {
        orderItemsContainer.innerHTML = '';
        let total = 0;
        
        items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            `;
            orderItemsContainer.appendChild(orderItem);
        });
        
        total += 9.99; // Shipping cost
        if (orderTotal) orderTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    orderModal.dataset.orderItems = JSON.stringify(items);
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    const orderModal = document.getElementById('order-modal');
    if (orderModal) {
        orderModal.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}


// Initialize EmailJS with your User ID
// In your DOMContentLoaded event:
const orderForm = document.getElementById('order-form');
if (orderForm) {
    orderForm.addEventListener('submit', submitOrder);
} else {
    console.error('Order form not found');
}
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS first
    (function() {
        // Replace with your actual EmailJS User ID
        emailjs.init({
            publicKey: "bNee4f-yjnd1-AGFW", // Your actual User ID
            blockHeadless: true,
            limitRate: {
                id: 'app',
                throttle: 10000 // 10 seconds
            }
        }).then(function() {
            console.log('EmailJS successfully initialized');
        }).catch(function(error) {
            console.error('EmailJS initialization failed:', error);
            showNotification('Email service currently unavailable', 'error');
        });
    })();

    // Rest of your initialization code...
});
async function submitOrder(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('.submit-order-btn');
    const originalText = submitBtn.innerHTML;
    const orderModal = document.getElementById('order-modal');
    
    // Store form data in case we need to restore it
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    try {
        // Validate EmailJS is ready
        if (typeof emailjs === 'undefined') {
            throw new Error("Email service is not available");
        }

        if (!orderModal || !orderModal.dataset.orderItems) {
            throw new Error("Order information is missing");
        }

        // Parse order items
        const orderItems = JSON.parse(orderModal.dataset.orderItems);
        if (!Array.isArray(orderItems) || orderItems.length === 0) {
            throw new Error("Your cart is empty");
        }

        // Validate required fields
        if (!formValues.customer_name || !formValues.customer_email || !formValues.customer_phone || !formValues.customer_address) {
            throw new Error("Please fill in all required fields");
        }

        // UI Loading State
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Order...';
        submitBtn.disabled = true;
        orderModal.classList.add('loading');

        // Prepare order data
        const orderData = {
            customer_name: formValues.customer_name.trim(),
            customer_email: formValues.customer_email.trim(),
            customer_phone: formValues.customer_phone.trim(),
            customer_city: formValues.customer_city?.trim() || 'Not provided',
            customer_address: formValues.customer_address.trim(),
            payment_method: formValues.payment_method || 'Not specified',
            items: orderItems.map(item => 
                `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
            ).join('\n'),
            total: document.getElementById('order-total')?.textContent || '0.00',
            order_date: new Date().toLocaleString(),
            user_name: window.userName || 'Guest',
            order_id: 'ORD-' + Date.now().toString().slice(-8)
        };

        // Send email
        const response = await emailjs.send(
            'service_ypoo76s',
            'template_5jzh52q',
            orderData
        );

        if (response.status !== 200) {
            throw new Error("Failed to process order");
        }

        // Success handling
        showNotification('Order placed successfully! You will receive a confirmation email.', 'success');
        
        // Update stock and orders
        if (window.products) {
            orderItems.forEach(item => {
                const product = window.products.find(p => p.id === item.id);
                if (product) {
                    product.stock = Math.max(0, product.stock - item.quantity);
                    product.inStock = product.stock > 0;
                }
            });
        }

        if (typeof window.totalOrders !== 'undefined') {
            window.totalOrders++;
        }

        // Clear cart if this was a checkout
        if (window.cartItems && orderItems === window.cartItems) {
            window.cartItems = [];
            updateCartDisplay();
            saveCartData();
            updateMobileCartCount();
        }

        renderProducts();
        
        // Close modal on success
        closeOrderModal(true); // Pass true to indicate success

    } catch (error) {
        console.error('Order Submission Error:', error);
        
        // Restore form values on error
        Object.keys(formValues).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) input.value = formValues[key];
        });
        
      
        
        if (orderModal) {
            orderModal.classList.add('error');
            setTimeout(() => orderModal.classList.remove('error'), 1000);
        }
    } finally {
        // Always reset the button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        if (orderModal) {
            orderModal.classList.remove('loading');
        }
    }
}

function closeOrderModal(success = false) {
    const orderModal = document.getElementById('order-modal');
    if (orderModal) {
        // Only reset the form if the order was successful
        if (success) {
            const form = document.getElementById('order-form');
            if (form) form.reset();
        }
        
        orderModal.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}
// 3. Enhanced Contact Form Submission
async function sendContactForm(event) {
    event.preventDefault();
    
    // Get form reference
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    try {
        // Set loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Validate EmailJS is ready
        if (typeof emailjs === 'undefined') {
            throw new Error("Email service is not available");
        }

        // Prepare form data
        const formData = new FormData(form);
        const contactData = {
            from_name: formData.get('name') || 'Not provided',
            from_email: formData.get('email') || 'Not provided',
            phone_number: formData.get('phone') || 'Not provided',
            city: formData.get('city') || 'Not provided',
            address: formData.get('address') || 'Not provided',
            message: formData.get('message') || 'No message provided',
            contact_reason: formData.get('contact_reason') || 'General inquiry',
            sent_date: new Date().toLocaleString(),
            user_name: userName || 'Guest'
        };

        // Validate required fields
        if (!contactData.from_name || !contactData.from_email || !contactData.message) {
            throw new Error("Please fill in all required fields");
        }

        // Send email
        const response = await emailjs.send(
            'service_nv0wwea',  
            'template_g3mdj4q', 
            contactData
        );

        if (response.status !== 200) {
            throw new Error("Failed to send message");
        }

        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form only after successful submission
        form.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        
        // Show appropriate error message
        const errorMessage = error.message.includes("service_nv0wwea") 
            ? "Email service configuration error" 
            : error.message || 'Error sending message. Please try again.';
        
        showNotification(errorMessage, 'error');
        
    } finally {
        // Always reset the button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Product Modal Functions with enhanced image gallery
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const productModal = document.getElementById('product-modal');
    if (!product || !productModal) return;
    
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalMainImage = document.getElementById('modal-main-image');
    const modalStockStatus = document.getElementById('modal-stock-status');
    
    if (modalProductName) modalProductName.textContent = product.name;
    if (modalProductPrice) modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
    if (modalProductDescription) modalProductDescription.textContent = product.description;
    if (modalMainImage) modalMainImage.src = product.images[0];
    
    // Update stock status
    if (modalStockStatus) {
        const stockIndicator = modalStockStatus.querySelector('.stock-indicator');
        const stockText = modalStockStatus.querySelector('.stock-text');
        
        if (product.inStock) {
            stockIndicator.className = 'stock-indicator in-stock';
            stockText.textContent = `${product.stock} ${translations[currentLanguage]?.stockLeft || 'left in stock'}`;
        } else {
            stockIndicator.className = 'stock-indicator out-of-stock';
            stockText.textContent = translations[currentLanguage]?.outOfStock || 'Out of Stock';
        }
    }
    
    // Generate thumbnails with unique images
    const thumbnailContainer = document.getElementById('modal-thumbnails');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${image}" alt="${product.name}">`;
            thumbnail.onclick = () => selectProductImage(index, product.images);
            thumbnailContainer.appendChild(thumbnail);
        });
    }
    
    // Update action buttons based on stock
    const addToCartBtn = productModal.querySelector('.add-to-cart-btn');
    const buyNowBtn = productModal.querySelector('.buy-now-btn');
    
    if (addToCartBtn && buyNowBtn) {
        if (product.inStock) {
            addToCartBtn.disabled = false;
            buyNowBtn.disabled = false;
            addToCartBtn.style.opacity = '1';
            buyNowBtn.style.opacity = '1';
        } else {
            addToCartBtn.disabled = true;
            buyNowBtn.disabled = true;
            addToCartBtn.style.opacity = '0.5';
            buyNowBtn.style.opacity = '0.5';
        }
    }
    
    productModal.dataset.productId = productId;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function selectProductImage(index, images) {
    const mainImage = document.getElementById('modal-main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.style.opacity = '1';
        }, 200);
    }
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function closeProductModal() {
    const productModal = document.getElementById('product-modal');
    if (productModal) {
        productModal.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const productId = parseInt(document.getElementById('product-modal').dataset.productId);
    const product = products.find(p => p.id === productId);
    
    if (quantityInput && product) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < product.stock) {
            quantityInput.value = currentValue + 1;
        } else {
            showNotification('Maximum stock reached', 'warning');
        }
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

function addToCartFromModal() {
    const productId = parseInt(document.getElementById('product-modal').dataset.productId);
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    addToCart(productId, quantity);
    closeProductModal();
}

function buyNowFromModal() {
    const productId = parseInt(document.getElementById('product-modal').dataset.productId);
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    buyNow(productId, quantity);
    closeProductModal();
}

// Navigation and other utility functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

function scrollToSection(sectionId) {
    showSection(sectionId);
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.classList.toggle('active');
    }
}

function highlightBottomNav(element) {
    const links = document.querySelectorAll('.bottom-nav-link');
    links.forEach(l => l.classList.remove('active'));
    element.classList.add('active');
}

function updateMobileCartCount() {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    const mobileCounts = document.querySelectorAll('.mobile-cart-count');
    
    mobileCounts.forEach(element => {
        element.textContent = count;
        element.style.display = count > 0 ? 'flex' : 'none';
    });
}

// Theme and settings functions
function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
    saveSettings();
}

function applyTheme() {
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        document.body.removeAttribute('data-theme');
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

function toggleMusic() {
    const bgAudio = document.getElementById('bg-audio');
    const musicToggle = document.querySelector('.setting-item .toggle-btn');
    
    if (isMusicPlaying && bgAudio) {
        bgAudio.pause();
        isMusicPlaying = false;
        if (musicToggle) musicToggle.classList.remove('active');
    } else if (bgAudio) {
        bgAudio.play().catch(e => console.log('Audio play failed'));
        isMusicPlaying = true;
        if (musicToggle) musicToggle.classList.add('active');
    }
    
    saveSettings();
}

function toggleSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
        settingsPanel.classList.toggle('active');
        
        // Add or remove the event listener based on panel state
        if (settingsPanel.classList.contains('active')) {
            // Add click listener after a small delay to avoid immediate closing
            setTimeout(() => {
                document.addEventListener('click', closeSettingsOnOutsideClick);
            }, 10);
        } else {
            document.removeEventListener('click', closeSettingsOnOutsideClick);
        }
    }
}

function closeSettingsOnOutsideClick(event) {
    const settingsPanel = document.getElementById('settings-panel');
    const settingsButton = document.querySelector('.settings-button');
    
    // Check if click is outside the settings panel and not on the settings button
    if (settingsPanel && 
        !settingsPanel.contains(event.target) && 
        (!settingsButton || !settingsButton.contains(event.target))) {
        
        settingsPanel.classList.remove('active');
        document.removeEventListener('click', closeSettingsOnOutsideClick);
    }
}

function toggleNotifications() {
    const notificationToggle = document.querySelector('.setting-item:nth-child(2) .toggle-btn');
    if (notificationToggle) {
        notificationToggle.classList.toggle('active');
        saveSettings();
    }
}

// Initialize settings panel behavior
document.addEventListener('DOMContentLoaded', function() {
    // Close settings panel when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const settingsPanel = document.getElementById('settings-panel');
            if (settingsPanel && settingsPanel.classList.contains('active')) {
                settingsPanel.classList.remove('active');
                document.removeEventListener('click', closeSettingsOnOutsideClick);
            }
        }
    });
});
// Language functions
function changeLanguage() {
    const select = document.getElementById('language-select');
    if (select) {
        currentLanguage = select.value;
        updateLanguage();
        saveSettings();
        
        // Sync mobile language selector
        const mobileSelect = document.getElementById('mobile-language-select');
        if (mobileSelect) {
            mobileSelect.value = currentLanguage;
        }
    }
}

function changeLanguageMobile() {
    const select = document.getElementById('mobile-language-select');
    if (select) {
        currentLanguage = select.value;
        updateLanguage();
        saveSettings();
        
        // Sync desktop language selector
        const desktopSelect = document.getElementById('language-select');
        if (desktopSelect) {
            desktopSelect.value = currentLanguage;
        }
    }
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update text direction for RTL languages
    if (currentLanguage === 'ur' || currentLanguage === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.body.style.direction = 'ltr';
        document.body.classList.remove('rtl');
    }
    
    // Re-render products with new language
    renderProducts();
}

// Enhanced Admin functions with user management
function openAdminPanel() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAdminPanel() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.classList.remove('active');
        document.getElementById('admin-password').value = '';
        document.getElementById('admin-dashboard').style.display = 'none';
        document.querySelector('.admin-login-form').style.display = 'block';
        isAdminLoggedIn = false;
    }
    document.body.style.overflow = 'auto';
}

function validateAdminPassword() {
    const password = document.getElementById('admin-password').value;
    
    if (password === 'admin123') {
        document.querySelector('.admin-login-form').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        isAdminLoggedIn = true;
        updateAdminStats();
        updateAdminUsersList();
        showNotification('Admin access granted!', 'success');
    } else {
        showNotification('Invalid admin password', 'error');
        document.getElementById('admin-password').value = '';
    }
}

function updateAdminStats() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-orders').textContent = totalOrders;
    document.getElementById('total-users').textContent = users.length;
}

function updateAdminUsersList() {
    const userProfilesList = document.getElementById('user-profiles-list');
    if (!userProfilesList) {
        // Create the user profiles section if it doesn't exist
        const adminDashboard = document.getElementById('admin-dashboard');
        if (adminDashboard) {
            const userSection = document.createElement('div');
            userSection.className = 'user-profiles-section';
            userSection.innerHTML = `
                <h3>Registered Users</h3>
                <div id="user-profiles-list" class="user-profiles-list"></div>
            `;
            adminDashboard.appendChild(userSection);
        }
    }
    
    const usersList = document.getElementById('user-profiles-list');
    if (!usersList) return;
    
    usersList.innerHTML = '';
    
    if (users.length === 0) {
        usersList.innerHTML = '<p>No users registered yet.</p>';
        return;
    }
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-profile-card';
        userCard.innerHTML = `
            <div class="user-avatar">
                <img src="${user.photo}" alt="${user.name}">
            </div>
            <div class="user-details">
                <h4>${user.name}</h4>
                <p>Joined: ${new Date(user.createdAt).toLocaleDateString()}</p>
                <p>ID: ${user.id}</p>
                ${user.loginHistory ? `<p>Last Login: ${user.loginHistory.length > 0 ? new Date(user.loginHistory[user.loginHistory.length - 1].timestamp).toLocaleDateString() : 'Never'}</p>` : ''}
            </div>
            <div class="user-actions">
                <button class="view-user-btn" onclick="viewUserDetails(${user.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </div>
        `;
        usersList.appendChild(userCard);
    });
}

function viewUserDetails(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    const details = `
        Name: ${user.name}
        ID: ${user.id}
        Created: ${new Date(user.createdAt).toLocaleDateString()}
        Login History: ${user.loginHistory ? user.loginHistory.length : 0} logins
        ${user.loginHistory && user.loginHistory.length > 0 ? 
            `Last Login: ${new Date(user.loginHistory[user.loginHistory.length - 1].timestamp).toLocaleString()}` : 
            'No login history'
        }
    `;
    
    alert(details);
}

function manageProducts() {
    showNotification('Product management feature coming soon!', 'info');
}

function viewOrders() {
    showNotification('Order viewing feature coming soon!', 'info');
}

function manageUsers() {
    updateAdminUsersList();
    showNotification('User list updated!', 'success');
}

// Logout function
function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
        userName = '';
        userPhoto = '';
        userPassword = '';
        isLoggedIn = false;
        
        saveUserData();
        
        const mainWebsite = document.getElementById('main-website');
        const loginContainer = document.getElementById('login-container');
        
        if (mainWebsite) mainWebsite.classList.remove('active');
        if (loginContainer) loginContainer.classList.add('active');
        
        // Hide bottom navbar
        const bottomNavbar = document.getElementById('bottom-navbar');
        if (bottomNavbar) {
            bottomNavbar.classList.remove('active');
        }
        
        // Reset to existing user login or registration
        checkExistingUser();
        
        // Clear form inputs
        const inputs = ['userName', 'userPassword', 'confirmPassword', 'loginName', 'loginPassword'];
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if (input) input.value = '';
        });
        
        const photoPreview = document.getElementById('photoPreview');
        const photoInput = document.getElementById('photoInput');
        
        if (photoPreview) {
            photoPreview.style.display = 'none';
            photoPreview.src = '';
        }
        if (photoInput) photoInput.value = '';
        
        updateVisitorProfile();
        showNotification('You have been logged out successfully', 'success');
        resetActiveSections();
        closeAllModals();
    }
}

function resetActiveSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.classList.add('active');
}

function closeAllModals() {
    const modals = ['product-modal', 'order-modal', 'admin-modal', 'image-zoom-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    });
    
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) settingsPanel.classList.remove('active');
    
    document.body.style.overflow = 'auto';
}

// Utility functions
function updateVisitorProfile() {
    const visitorName = document.getElementById('visitor-name');
    const visitorAvatar = document.getElementById('visitor-avatar');
    
    if (visitorName && isLoggedIn && userName) {
        visitorName.textContent = userName;
    }
    
    if (visitorAvatar && userPhoto) {
        const img = visitorAvatar.querySelector('img');
        if (img) img.src = userPhoto;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScroll() {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    const header = document.querySelector('.header');
    if (header) {
        if (window.pageYOffset > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.section, .product-card, .service-card').forEach(el => {
        observer.observe(el);
    });
}

function playDoorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 1);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (error) {
        console.log('Audio context not available');
    }
}

// Data persistence functions
function saveUserData() {
    localStorage.setItem('snapshop_user', JSON.stringify({
        name: userName,
        photo: userPhoto,
        password: userPassword,
        isLoggedIn: isLoggedIn
    }));
}

function loadUserData() {
    try {
        const userData = localStorage.getItem('snapshop_user');
        if (userData) {
            const parsed = JSON.parse(userData);
            userName = parsed.name || '';
            userPhoto = parsed.photo || '';
            userPassword = parsed.password || '';
            isLoggedIn = parsed.isLoggedIn || false;
            
            if (isLoggedIn && userName) {
                const loginContainer = document.getElementById('login-container');
                const mainWebsite = document.getElementById('main-website');
                
                if (loginContainer && mainWebsite) {
                    loginContainer.classList.remove('active');
                    mainWebsite.classList.add('active');
                    
                    // Show bottom navbar
                    const bottomNavbar = document.getElementById('bottom-navbar');
                    if (bottomNavbar) {
                        bottomNavbar.classList.add('active');
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

function saveCartData() {
    localStorage.setItem('snapshop_cart', JSON.stringify(cartItems));
}

function loadCartData() {
    try {
        const cartData = localStorage.getItem('snapshop_cart');
        if (cartData) {
            cartItems = JSON.parse(cartData);
        }
    } catch (error) {
        console.error('Error loading cart data:', error);
        cartItems = [];
    }
}

function saveSettings() {
    localStorage.setItem('snapshop_settings', JSON.stringify({
        isDarkMode: isDarkMode,
        isMusicPlaying: isMusicPlaying,
        currentLanguage: currentLanguage
    }));
}

function loadSettings() {
    try {
        const settings = localStorage.getItem('snapshop_settings');
        if (settings) {
            const parsed = JSON.parse(settings);
            isDarkMode = parsed.isDarkMode || false;
            isMusicPlaying = parsed.isMusicPlaying || false;
            currentLanguage = parsed.currentLanguage || 'en';
            
            const languageSelect = document.getElementById('language-select');
            const mobileLanguageSelect = document.getElementById('mobile-language-select');
            if (languageSelect) languageSelect.value = currentLanguage;
            if (mobileLanguageSelect) mobileLanguageSelect.value = currentLanguage;
            updateLanguage();
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

// Image zoom functions
function toggleImageZoom() {
    const mainImage = document.getElementById('modal-main-image');
    const zoomedImage = document.getElementById('zoomed-image');
    const imageZoomModal = document.getElementById('image-zoom-modal');
    
    if (mainImage && zoomedImage && imageZoomModal) {
        zoomedImage.src = mainImage.src;
        imageZoomModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageZoom() {
    const imageZoomModal = document.getElementById('image-zoom-modal');
    if (imageZoomModal) {
        imageZoomModal.classList.remove('active');
        document.body.style.overflow = 'hidden'; // Keep modal scroll locked
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showNotification('WellCome Snap & Shop.', 'success');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
    showNotification('A network error occurred. Please check your connection.', 'warning');
});



// bag model
