const products = [
  {
    id: 1,
    name: {
      en: "Premium Cordless Drill",
      hi: "प्रीमियम कॉर्डलेस ड्रिल",
      mr: "प्रीमियम कॉर्डलेस ड्रिल"
    },
    description: {
      en: "20V MAX lithium-ion cordless drill with 2-speed transmission and LED light. Includes 2 batteries, charger, and carrying case.",
      hi: "20V MAX लिथियम-आयन कॉर्डलेस ड्रिल, 2-स्पीड ट्रांसमिशन और LED लाइट के साथ। 2 बैटरी, चार्जर और कैरीइंग केस शामिल है।",
      mr: "20V MAX लिथियम-आयन कॉर्डलेस ड्रिल, 2-स्पीड ट्रान्समिशन आणि LED लाइटसह. 2 बॅटरी, चार्जर आणि कॅरिंग केस समाविष्ट."
    },
    price: 6999,
    image: "https://images.pexels.com/photos/1215176/pexels-photo-1215176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "powerTools",
    inStock: true,
    sale: false
  },
  {
    id: 2,
    name: {
      en: "Professional Hammer Set",
      hi: "प्रोफेशनल हैमर सेट",
      mr: "प्रोफेशनल हॅमर सेट"
    },
    description: {
      en: "Set of 3 premium hammers (claw, ball peen, and mallet) with ergonomic fiberglass handles for reduced vibration and comfort.",
      hi: "3 प्रीमियम हैमर का सेट (क्लॉ, बॉल पीन, और मैलेट) कम कंपन और आराम के लिए एर्गोनोमिक फाइबरग्लास हैंडल के साथ।",
      mr: "3 प्रीमियम हॅमरचा संच (क्लॉ, बॉल पीन, आणि मॅलेट) कमी कंपन आणि आरामासाठी एर्गोनॉमिक फायबरग्लास हँडलसह."
    },
    price: 1499,
    image: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "handTools",
    inStock: true,
    sale: true
  },
  {
    id: 3,
    name: {
      en: "Adjustable Wrench Set",
      hi: "एडजस्टेबल रेंच सेट",
      mr: "अॅडजस्टेबल रेंच सेट"
    },
    description: {
      en: "Set of 4 chrome vanadium adjustable wrenches (6\", 8\", 10\", and 12\") with precise jaw adjustment and comfortable grip.",
      hi: "4 क्रोम वैनेडियम एडजस्टेबल रेंच का सेट (6\", 8\", 10\", और 12\") सटीक जॉ एडजस्टमेंट और आरामदायक ग्रिप के साथ।",
      mr: "4 क्रोम व्हॅनेडियम अॅडजस्टेबल रेंचचा संच (6\", 8\", 10\", आणि 12\") अचूक जॉ अॅडजस्टमेंट आणि आरामदायक ग्रिपसह."
    },
    price: 899,
    image: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "handTools",
    inStock: true,
    sale: false
  },
  {
    id: 4,
    name: {
      en: "Heavy-Duty Circular Saw",
      hi: "हैवी-ड्यूटी सर्कुलर सॉ",
      mr: "हेवी-ड्युटी सर्क्युलर सॉ"
    },
    description: {
      en: "15 Amp, 7-1/4-inch circular saw with 5800 RPM for smooth, fast cuts. Features electric brake, dust blower, and bevel capacity up to 56 degrees.",
      hi: "15 एम्प, 7-1/4-इंच सर्कुलर सॉ, स्मूथ और फास्ट कट के लिए 5800 RPM के साथ। इलेक्ट्रिक ब्रेक, डस्ट ब्लोअर और 56 डिग्री तक बेवल क्षमता।",
      mr: "15 अॅम्प, 7-1/4-इंच सर्क्युलर सॉ, स्मूथ आणि फास्ट कटसाठी 5800 RPM सह. इलेक्ट्रिक ब्रेक, डस्ट ब्लोअर आणि 56 डिग्री पर्यंत बेवल क्षमता."
    },
    price: 8499,
    image: "https://images.pexels.com/photos/2086883/pexels-photo-2086883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "powerTools",
    inStock: true,
    sale: true
  },
  {
    id: 5,
    name: {
      en: "Complete Screwdriver Set",
      hi: "कंप्लीट स्क्रूड्राइवर सेट",
      mr: "कंप्लीट स्क्रूड्रायव्हर सेट"
    },
    description: {
      en: "45-piece screwdriver set with various tips (Phillips, flathead, Torx, hex) and magnetic tips for easy screw pickup. Comes in a handy storage case.",
      hi: "45-पीस स्क्रूड्राइवर सेट विभिन्न टिप्स (फिलिप्स, फ्लैटहेड, टॉर्क्स, हेक्स) और आसान स्क्रू पिकअप के लिए मैग्नेटिक टिप्स के साथ। हैंडी स्टोरेज केस में आता है।",
      mr: "45-पीस स्क्रूड्रायव्हर सेट विविध टिप्स (फिलिप्स, फ्लॅटहेड, टॉर्क्स, हेक्स) आणि सोपे स्क्रू पिकअपसाठी मॅग्नेटिक टिप्ससह. सोयीस्कर स्टोरेज केसमध्ये येते."
    },
    price: 799,
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "handTools",
    inStock: true,
    sale: false
  },
  {
    id: 6,
    name: {
      en: "Digital Multimeter",
      hi: "डिजिटल मल्टीमीटर",
      mr: "डिजिटल मल्टीमीटर"
    },
    description: {
      en: "Auto-ranging digital multimeter for measuring voltage, current, resistance, continuity, and more. Features backlit display and data hold function.",
      hi: "वोल्टेज, करंट, रेजिस्टेंस, कंटिन्युइटी और अधिक को मापने के लिए ऑटो-रेंजिंग डिजिटल मल्टीमीटर। बैकलिट डिस्प्ले और डेटा होल्ड फंक्शन के साथ।",
      mr: "व्होल्टेज, करंट, रेझिस्टन्स, कंटिन्युइटी आणि अधिक मोजण्यासाठी ऑटो-रेंजिंग डिजिटल मल्टीमीटर. बॅकलिट डिस्प्ले आणि डेटा होल्ड फंक्शनसह."
    },
    price: 1299,
    image: "https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electricalSupplies",
    inStock: true,
    sale: false
  },
  {
    id: 7,
    name: {
      en: "PVC Pipe Cutter Set",
      hi: "पीवीसी पाइप कटर सेट",
      mr: "पीव्हीसी पाइप कटर सेट"
    },
    description: {
      en: "Professional ratcheting PVC pipe cutter set for 1/2\" to 2\" pipes. Cuts PVC, CPVC, and PEX with clean, straight edges. Includes replacement blade.",
      hi: "1/2\" से 2\" पाइप के लिए प्रोफेशनल रैचेटिंग पीवीसी पाइप कटर सेट। पीवीसी, सीपीवीसी और पीईएक्स को साफ, सीधे किनारों के साथ काटता है। रिप्लेसमेंट ब्लेड शामिल है।",
      mr: "1/2\" ते 2\" पाइपसाठी प्रोफेशनल रॅचेटिंग पीव्हीसी पाइप कटर सेट. पीव्हीसी, सीपीव्हीसी आणि पीईएक्स स्वच्छ, सरळ किनारींसह कापते. रिप्लेसमेंट ब्लेड समाविष्ट."
    },
    price: 649,
    image: "https://images.pexels.com/photos/2309837/pexels-photo-2309837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "plumbing",
    inStock: false,
    sale: false
  },
  {
    id: 8,
    name: {
      en: "Wire Stripper & Crimper",
      hi: "वायर स्ट्रिपर और क्रिम्पर",
      mr: "वायर स्ट्रिपर आणि क्रिम्पर"
    },
    description: {
      en: "Multi-function wire stripper, cutter, and crimper for 10-22 AWG wire. Features spring-loaded action and comfort grip handles.",
      hi: "10-22 AWG वायर के लिए मल्टी-फंक्शन वायर स्ट्रिपर, कटर और क्रिम्पर। स्प्रिंग-लोडेड एक्शन और कंफर्ट ग्रिप हैंडल्स के साथ।",
      mr: "10-22 AWG वायरसाठी मल्टी-फंक्शन वायर स्ट्रिपर, कटर आणि क्रिम्पर. स्प्रिंग-लोडेड अॅक्शन आणि कंफर्ट ग्रिप हँडल्ससह."
    },
    price: 549,
    image: "https://images.pexels.com/photos/8985583/pexels-photo-8985583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electricalSupplies",
    inStock: true,
    sale: true
  },
  {
    id: 9,
    name: {
      en: "Adjustable Wrench Pipe Set",
      hi: "एडजस्टेबल रेंच पाइप सेट",
      mr: "अॅडजस्टेबल रेंच पाइप सेट"
    },
    description: {
      en: "Heavy-duty cast iron pipe wrench set (10\" and 14\") with adjustable jaw for secure grip on pipes and fittings. Ideal for plumbing repairs.",
      hi: "हैवी-ड्यूटी कास्ट आयरन पाइप रेंच सेट (10\" और 14\") पाइप और फिटिंग पर सुरक्षित पकड़ के लिए एडजस्टेबल जॉ के साथ। प्लंबिंग रिपेयर के लिए आदर्श।",
      mr: "हेवी-ड्युटी कास्ट आयर्न पाइप रेंच सेट (10\" आणि 14\") पाइप आणि फिटिंगवर सुरक्षित पकडसाठी अॅडजस्टेबल जॉसह. प्लंबिंग दुरुस्तीसाठी आदर्श."
    },
    price: 1899,
    image: "https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "plumbing",
    inStock: true,
    sale: false
  },
  {
    id: 10,
    name: {
      en: "Cordless Impact Driver",
      hi: "कॉर्डलेस इम्पैक्ट ड्राइवर",
      mr: "कॉर्डलेस इम्पॅक्ट ड्रायव्हर"
    },
    description: {
      en: "20V MAX lithium-ion cordless impact driver with 1800 in-lbs of torque. Features 3-speed settings, LED light, and battery fuel gauge.",
      hi: "20V MAX लिथियम-आयन कॉर्डलेस इम्पैक्ट ड्राइवर 1800 इन-पाउंड टॉर्क के साथ। 3-स्पीड सेटिंग्स, LED लाइट और बैटरी फ्यूल गेज के साथ।",
      mr: "20V MAX लिथियम-आयन कॉर्डलेस इम्पॅक्ट ड्रायव्हर 1800 इन-पाउंड टॉर्कसह. 3-स्पीड सेटिंग्स, LED लाइट आणि बॅटरी फ्युएल गेजसह."
    },
    price: 7299,
    image: "https://images.pexels.com/photos/5712790/pexels-photo-5712790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "powerTools",
    inStock: true,
    sale: false
  },
  {
    id: 11,
    name: {
      en: "Electrical Testing Kit",
      hi: "इलेक्ट्रिकल टेस्टिंग किट",
      mr: "इलेक्ट्रिकल टेस्टिंग किट"
    },
    description: {
      en: "Complete electrical testing kit with voltage tester, outlet tester, non-contact voltage detector, and digital multimeter. Essential for DIY electrical work.",
      hi: "वोल्टेज टेस्टर, आउटलेट टेस्टर, नॉन-कॉन्टैक्ट वोल्टेज डिटेक्टर और डिजिटल मल्टीमीटर के साथ कंप्लीट इलेक्ट्रिकल टेस्टिंग किट। DIY इलेक्ट्रिकल काम के लिए आवश्यक।",
      mr: "व्होल्टेज टेस्टर, आउटलेट टेस्टर, नॉन-कॉन्टॅक्ट व्होल्टेज डिटेक्टर आणि डिजिटल मल्टीमीटरसह कंप्लीट इलेक्ट्रिकल टेस्टिंग किट. DIY इलेक्ट्रिकल कामासाठी आवश्यक."
    },
    price: 2499,
    image: "https://images.pexels.com/photos/8473465/pexels-photo-8473465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electricalSupplies",
    inStock: true,
    sale: true
  },
  {
    id: 12,
    name: {
      en: "Plumbing Repair Kit",
      hi: "प्लंबिंग रिपेयर किट",
      mr: "प्लंबिंग रिपेअर किट"
    },
    description: {
      en: "Comprehensive plumbing repair kit with wrenches, pipe cutter, soldering tools, Teflon tape, and assorted fittings. Ideal for home plumbing repairs.",
      hi: "रेंच, पाइप कटर, सोल्डरिंग टूल्स, टेफ्लॉन टेप और विभिन्न फिटिंग के साथ व्यापक प्लंबिंग रिपेयर किट। घर के प्लंबिंग रिपेयर के लिए आदर्श।",
      mr: "रेंच, पाइप कटर, सोल्डरिंग टूल्स, टेफ्लॉन टेप आणि विविध फिटिंगसह व्यापक प्लंबिंग रिपेअर किट. घरगुती प्लंबिंग दुरुस्तीसाठी आदर्श."
    },
    price: 3499,
    image: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "plumbing",
    inStock: true,
    sale: false
  }
];

export default products;