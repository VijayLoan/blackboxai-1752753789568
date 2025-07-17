export interface BlogPost {
  id: string
  title: string
  titleHindi?: string
  excerpt: string
  excerptHindi?: string
  image: string
  link: string
  category: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Marriage in Bastar',
    titleHindi: 'बस्तर में विवाह',
    excerpt: 'Explore the unique marriage traditions and customs of Bastar that have been preserved for centuries.',
    excerptHindi: 'बस्तर की अनोखी शादी की परंपराओं और रीति-रिवाजों का अन्वेषण करें जो सदियों से संरक्षित हैं।',
    image: '/images/marriage.jpg',
    link: '/marriage-in-bastar',
    category: 'Culture',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Mohari Baja',
    titleHindi: 'मोहरी बाजा',
    excerpt: 'Discover the traditional musical instrument Mohari Baja and its significance in Bastar culture.',
    excerptHindi: 'पारंपरिक संगीत वाद्य मोहरी बाजा और बस्तर संस्कृति में इसके महत्व की खोज करें।',
    image: '/images/mohari-baja.jpg',
    link: '/mohari-baja',
    category: 'Music',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Bastar Tour - Explore the Gem',
    titleHindi: 'बस्तर दौरा - रत्न की खोज',
    excerpt: 'A comprehensive guide to exploring the hidden gems of Bastar, from tribal villages to natural wonders.',
    excerptHindi: 'बस्तर के छिपे हुए रत्नों की खोज करने के लिए एक व्यापक मार्गदर्शिका, आदिवासी गांवों से लेकर प्राकृतिक आश्चर्यों तक।',
    image: '/images/tribal-food.jpg',
    link: '/bastar-tour',
    category: 'Travel',
    date: '2024-01-05'
  },
  {
    id: '4',
    title: 'Amus - The First Festival of Bastar',
    titleHindi: 'अमुस - बस्तर का पहला त्यौहार',
    excerpt: 'Learn about Amus, the first festival celebrated in the forest regions of Bastar during the month of Sawan.',
    excerptHindi: 'अमुस के बारे में जानें, सावन के महीने में बस्तर के वनांचल में मनाया जाने वाला पहला त्यौहार।',
    image: '/images/amus.jpg',
    link: '/amus-festival',
    category: 'Festival',
    date: '2024-01-01'
  },
  {
    id: '5',
    title: 'Sukma Raj Mandai',
    titleHindi: 'सुकमा राज मंडई',
    excerpt: 'The royal celebration that happens once every 12 years to commemorate victory during the princely era.',
    excerptHindi: 'रियासत कालीन जीत की खुशी में 12 साल में एक बार मनाया जाने वाला शाही उत्सव।',
    image: '/images/raj-mandai.jpg',
    link: '/sukma-raj-mandai',
    category: 'Heritage',
    date: '2023-12-25'
  },
  {
    id: '6',
    title: 'Bhojali - Festival of Nature Conservation',
    titleHindi: 'भोजली - प्रकृति संरक्षण का पर्व',
    excerpt: 'Bhojali represents the dedication towards friendship and nature conservation in tribal culture.',
    excerptHindi: 'भोजली आदिवासी संस्कृति में मित्रता और प्रकृति संरक्षण के प्रति समर्पण का प्रतीक है।',
    image: '/images/bhojali.jpg',
    link: '/bhojali-festival',
    category: 'Culture',
    date: '2023-12-20'
  }
]

export const statistics = {
  visitors: 12500,
  videos: 150,
  engagement: 85
}
