export interface ProductItem {
  id: number;
  name: string;
  city: string;
  title: string;
  description: string;
  phone: string;
  hasWhatsapp: boolean;
  whatsappNumber: string;
  age: number;
  rating: number;
  status: string;
  image: string; // Image path or URL
  aboutMe?: string;
  services?: string[];
  locationDetail?: string;
  height?: string;
  weight?: string;
  figure?: string;
  hair?: string;
  eyes?: string;
  languages?: string[];
  timing?: string;
  badge?: string;
  availableFor?: string[];
}

export const initialProductsData: ProductItem[] = [
  // 1. College Road
  {
    id: 1,
    name: "Ananya Sharma",
    city: "Nashik / College Road",
    title: "Hey I am Ananya provide all service Real meet and video call in College Road 💋✨",
    description: "I am high class independent companion with attractive figure in College Road. Sexy curvy figure will get u mad. Very neat and clean. Available 24/7 for luxury hotel and home visits with complete privacy guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image1.avif",
    aboutMe: "GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, WE WOULD REFUND YOUR FEES, WITHOUT ANY QUESTIONS ASKED 👉 WILL PROVIDE YOU WITH SEXY MODELS WHO WILL DANCE & DRINK WITH YOU AND ALSO PROVIDE YOU RELAXING COMPANIONSHIP. 👉YOU MAY TAKE THEM OUT FOR A PARTY OR PRIVATE DINNER. 👉THESE GIRLS ARE INTERESTED IN MAKING YOUR TIME IN NASHIK SPECIAL.\n\nBookings Open Now! Excellent High profile Independent Female Model VIP High Class And Top Class Service with us in College Road Nashik.",
  },
  // 2. Gangapur Road
  {
    id: 2,
    name: "Pooja Hegde",
    city: "Nashik / Gangapur Road",
    title: "VIP Companion & Model Service in Gangapur Road Nashik 👑",
    description: "Charming and friendly VIP companion in Gangapur Road. Professional service for corporate events, dinner dates, and luxury hotel stays. Real meet available.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image31.avif",
    aboutMe: "High profile Independent Female Model VIP High Class Service in Gangapur Road Nashik. Professional service provider with discrete companionship and entertainment guaranteed.",
  },

  // 3. Mahatma Nagar
  {
    id: 3,
    name: "Riya Kulkarni",
    city: "Nashik / Mahatma Nagar",
    title: "Premium College Escort Service in Mahatma Nagar 🔥",
    description: "Sophisticated and educated companion available in Mahatma Nagar near City Centre Mall. 100% genuine photos, sweet nature and fully confidential service guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image3.avif",
    aboutMe: "100% genuine photos, sweet nature and fully confidential service guaranteed for luxury hotel outcalls and residential visits in Mahatma Nagar Nashik.",
  },

  // 4. Pathardi Phata
  {
    id: 4,
    name: "Sneha Joshi",
    city: "Nashik / Pathardi Phata",
    title: "Independent IT Park Escort in Ambad MIDC 🌸",
    description: "Located near Ambad MIDC. Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality for IT executives and travelers.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image29.avif",
    aboutMe: "Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality in Pathardi Phata Nashik.",
  },

  // 5. Indira Nagar
  {
    id: 5,
    name: "Riya Sen",
    city: "Nashik / Indira Nagar",
    title: "Celebrity & Model Escort Service in Indira Nagar 💃",
    description: "High class model companion in Indira Nagar. Perfect for business travelers seeking premium companion experience with full privacy on Indira Nagar.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image5.avif",
    aboutMe: "High class model companion in Indira Nagar Nashik. Perfect for business travelers seeking premium companion experience with full privacy.",
  },

  // 6. Govind Nagar
  {
    id: 6,
    name: "Kavya Verma",
    city: "Nashik / Govind Nagar",
    title: "Luxury Escort & Dating Partner in Govind Nagar Nashik 💕",
    description: "Gentle and attentive escort partner in Govind Nagar near Mumbai-Nashik Expressway. Fast response on call and WhatsApp for instant hotel visits.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "Gentle and attentive escort partner in Govind Nagar Nashik. Fast response on call and WhatsApp for instant hotel visits.",
  },

  // 7. CIDCO
  {
    id: 7,
    name: "Divya Deshmukh",
    city: "Nashik / CIDCO",
    title: "Independent Escort Companion in CIDCO ✨",
    description: "Quiet and respectful escort in CIDCO area. Direct call booking available with 100% privacy assurance for discreet gentlemen.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "online",
    image: "/images/image7.avif",
    aboutMe: "Quiet and respectful escort in CIDCO Nashik. Direct call booking available with 100% privacy assurance.",
  },

  // 8. Panchavati
  {
    id: 8,
    name: "Neha Singh",
    city: "Nashik / Panchavati",
    title: "High Profile Call Girl Service in Panchavati 🌹",
    description: "Attractive and friendly companion in central Panchavati. Available for evening dates, luxury hotel visits and long drives across Nashik.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image8.avif",
    aboutMe: "Attractive and friendly companion in Panchavati Nashik. Available for evening dates, hotel visits and relaxing companionship.",
  },

  // 9. Nashik Road
  {
    id: 9,
    name: "Simran Gill",
    city: "Nashik / Nashik Road",
    title: "Independent Young Escort Girl in Nashik Road Nashik 💋",
    description: "Beautiful independent girl in Nashik Road. Polite, punctual and committed to providing a peaceful and glamorous companion experience.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image9.avif",
    aboutMe: "Beautiful independent girl in Nashik Road Nashik. Polite, punctual and committed to providing a peaceful experience.",
  },

  // 10. Satpur MIDC
  {
    id: 10,
    name: "Aarti Patel",
    city: "Nashik / Satpur MIDC",
    title: "College Student Escort Service in Satpur MIDC 🎓",
    description: "Fun-loving college student escort in Satpur MIDC Satpur. Flexible timings, affordable packages, instant WhatsApp chat.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image10.avif",
    aboutMe: "Fun-loving college student escort in Satpur MIDC Nashik. Flexible timings, affordable packages, instant WhatsApp chat.",
  },

  // 11. Ambad
  {
    id: 11,
    name: "Ishita Roy",
    city: "Nashik / Ambad",
    title: "Corporate Companion & VIP Escort in Ambad IT Hub 💼",
    description: "Elegant corporate companion in Ambad near Ambad MIDC. Professional, discrete and well-mannered for corporate executives.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.6,
    status: "Busy",
    image: "/images/image11.avif",
    aboutMe: "Elegant corporate companion in Ambad Ambad MIDC Nashik. Professional, discrete and well-mannered.",
  },

  // 12. Sharanpur Road
  {
    id: 12,
    name: "Meera Joshi",
    city: "Nashik / Sharanpur Road",
    title: "Independent Escort Service on Sharanpur Road Nashik 🌺",
    description: "Charming independent escort near Sharanpur Road. Ideal companion for relaxing cafe dates, city drives and hotel stays.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image12.avif",
    aboutMe: "Charming independent escort on Sharanpur Road Nashik. Ideal companion for relaxing evenings and luxury hotel stays.",
  },

  // 13. Nashik Camp
  {
    id: 13,
    name: "Shreya Das",
    city: "Nashik / Nashik Camp",
    title: "Five Star Hotel Escort Partner in Nashik Camp & Deolali Camp ⭐",
    description: "Sophisticated escort girl in Nashik Camp area. Specially available for luxury 5-star hotel outcalls and VIP heritage visits.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image13.avif",
    aboutMe: "Sophisticated escort girl in Nashik Camp & Deolali Camp. Specially available for luxury 5-star hotel outcalls.",
  },

  // 14. Tidke Colony
  {
    id: 14,
    name: "Natasha Malik",
    city: "Nashik / Tidke Colony",
    title: "Fashion Model Escort in Tidke Colony Nashik 💄",
    description: "Glamorous fashion model companion on Tidke Colony near Express Inn. Warm nature, hygienic, and committed to total discretion.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image14.avif",
    aboutMe: "Glamorous fashion model companion on Tidke Colony Nashik. Warm nature, hygienic, and committed to discretion.",
  },

  // 15. Dwarka
  {
    id: 15,
    name: "Sonal Chauhan",
    city: "Nashik / Dwarka",
    title: "Independent Escort & Companion in Dwarka Circle 🌟",
    description: "Friendly independent girl in Dwarka Circle. Quick response on WhatsApp with direct phone call support for dinner dates.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image15.avif",
    aboutMe: "Friendly independent girl in Dwarka Circle Nashik. Quick response on WhatsApp with direct phone call support.",
  },

  // 16. Upnagar
  {
    id: 16,
    name: "Nisha Agarwal",
    city: "Nashik / Upnagar",
    title: "Desi College Girl Escort in Upnagar Nashik 💖",
    description: "Lovely desi college girl in Upnagar near Upnagar. Sweet conversationalist and attentive companion for private time.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image16.avif",
    aboutMe: "Lovely desi college girl in Upnagar Nashik. Sweet conversationalist and attentive companion.",
  },

  // 17. Makhmalabad
  {
    id: 17,
    name: "Tanvi Shah",
    city: "Nashik / Makhmalabad",
    title: "High Class Escort in Makhmalabad Nashik ✨",
    description: "Mature and caring companion in Makhmalabad. Safe, secure, and hassle-free meeting arrangements in Nashik.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image17.avif",
    aboutMe: "Mature and caring companion in Makhmalabad Nashik. Safe, secure, and hassle-free meeting arrangements.",
  },

  // 18. Ozar
  {
    id: 18,
    name: "Maya Deshmukh",
    city: "Nashik / Ozar",
    title: "Luxury VIP Escort in Ozar (Nashik) 🏰",
    description: "High profile companion residing in Ozar. Available for industrial executive meets and local weekend hotel stays.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image18.avif",
    aboutMe: "High profile companion in Ozar Nashik. Available for outstation travels and local weekend stays.",
  },

  // 19. Mumbai Naka
  {
    id: 19,
    name: "Kriti Malhotra",
    city: "Nashik / Mumbai Naka",
    title: "Independent High Class Escort in Mumbai Naka Nashik 💫",
    description: "Elegant companion near Mumbai Naka transit hub. Top rated verified profile with excellent feedback.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image19.avif",
    aboutMe: "Elegant companion in Mumbai Naka Nashik. Top rated verified profile with excellent feedback.",
  },

  // 20. Bhabha Nagar
  {
    id: 20,
    name: "Payal Rajput",
    city: "Nashik / Bhabha Nagar",
    title: "Independent Escort Partner in Bhabha Nagar & Bhabha Nagar 🌸",
    description: "Polite independent profile in Bhabha Nagar Bhabha Nagar area. Simple booking process via direct phone call.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.7,
    status: "Offline",
    image: "/images/image20.avif",
    aboutMe: "Polite independent profile in Bhabha Nagar & Bhabha Nagar Nashik. Simple booking process via direct phone call.",
  },

  // 21. Ashoka Marg
  {
    id: 21,
    name: "Swati Mishra",
    city: "Nashik / Ashoka Marg",
    title: "High Profile Call Girl Service in Ashoka Marg & Ashoka Marg 💖",
    description: "Friendly companion in Ashoka Marg area. 100% real photos, safety first policy and privacy guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image21.avif",
    aboutMe: "Friendly companion in Ashoka Marg Ashoka Marg Nashik. 100% real photos, safety first policy and privacy guaranteed.",
  },

  // 22. Jail Road
  {
    id: 22,
    name: "Rashmi Gautham",
    city: "Nashik / Jail Road",
    title: "Independent Escort Girl in Jail Road Near Jail Road 🔥",
    description: "Attractive girl available for home and luxury hotel outcall services in Jail Road Nashik.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image22.avif",
    aboutMe: "Attractive girl available for home and hotel outcall services in Jail Road Nashik.",
  },

  // 23. Anandvalli
  {
    id: 23,
    name: "Deepika Nambiar",
    city: "Nashik / Anandvalli",
    title: "College Student Escort in Anandvalli & Anandvalli ⚾",
    description: "Young college escort near Anandvalli and Anandvalli. Fun, energetic and well-mannered companion for outings.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image23.avif",
    aboutMe: "Young college escort near Anandvalli & Anandvalli Nashik. Fun, energetic and well-mannered companion for outings.",
  },

  // 24. Untwadi
  {
    id: 24,
    name: "Shruti Iyer",
    city: "Nashik / Untwadi",
    title: "Verified Independent Companion in Untwadi Nashik 🌷",
    description: "Sweet and honest companion in Untwadi near College Road. Direct phone call booking and quick WhatsApp response.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image24.avif",
    aboutMe: "Sweet and honest companion in Untwadi Nashik. Direct phone call booking and quick WhatsApp response.",
  },

  // 25. Adgaon
  {
    id: 25,
    name: "Trisha Mukherjee",
    city: "Nashik / Adgaon",
    title: "VIP Airport Transit & Hotel Escort in Adgaon 🏖️",
    description: "High class model companion for Nashik Airport layovers and hotel visits in Adgaon.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "High class model companion for Nashik Airport layovers and hotel visits in Adgaon & Adgaon.",
  },

  // 26. Wadala Naka
  {
    id: 26,
    name: "Aditi Bhatia",
    city: "Nashik / Wadala Naka",
    title: "Young Independent Girl Escort in Wadala Naka Nashik 🎀",
    description: "Polite young companion in Wadala Naka area near Wadala Naka. Available for daytime and overnight bookings.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image26.avif",
    aboutMe: "Polite young companion in Wadala Naka Nashik. Available for daytime and overnight bookings.",
  },

  // 27. Savarkar Nagar
  {
    id: 27,
    name: "Radhika Merchant",
    city: "Nashik / Savarkar Nagar",
    title: "VIP Escort & Dating Partner in Savarkar Nagar Panchavati ✈️",
    description: "Located in serene Savarkar Nagar Nashik. Ideal companion for executives, fine dining and peaceful layovers.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image27.avif",
    aboutMe: "Located in Savarkar Nagar Nashik. Ideal companion for travelers and executives with prompt service.",
  },

  // 28. D'Souza Colony
  {
    id: 28,
    name: "Jyoti Saxena",
    city: "Nashik / D'Souza Colony",
    title: "Independent Escort & Dating Partner on D'Souza Colony 💐",
    description: "Charming independent partner in D'Souza Colony Ashok Stambh area. Clean, safe, and professional companion service.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image28.avif",
    aboutMe: "Charming independent partner on D'Souza Colony Nashik. Clean, safe, and professional companion service.",
  },

  // 29. Ashok Stambh
  {
    id: 29,
    name: "Mansi Joshi",
    city: "Nashik / Ashok Stambh",
    title: "High Profile Call Girl Service in Ashok Stambh 🌺",
    description: "Respectful companion in Ashok Stambh Nashik. Booking available directly via phone line and WhatsApp.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.7,
    status: "Busy",
    image: "/images/image29.avif",
    aboutMe: "Respectful companion in Ashok Stambh Nashik. Booking available directly via phone line.",
  },

  // 30. Trimbakeshwar
  {
    id: 30,
    name: "Sunita Rao",
    city: "Nashik / Trimbakeshwar",
    title: "Desi College Escort Service in Trimbakeshwar Nashik 💋",
    description: "Sweet desi college girl in Trimbakeshwar on Trimbakeshwar Road. High quality companion service for home and hotel outcalls.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image2.avif",
    aboutMe: "Sweet desi college girl in Trimbakeshwar Nashik. High quality companion service for home and hotel outcalls.",
  },
];
