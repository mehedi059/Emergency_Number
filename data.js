// Emergency Number - data file. To update the app, edit ONLY this file.
// b = Bangla name, e = English name, p = phone (empty = not added yet), w = official website, s:1 = show on home SOS grid
window.SHOHAY = {
  version: "1.1.0",
  updated: "2026-11",
  categories: [
    { id: "emergency", i: "🚨", b: "জরুরি সেবা", e: "Emergency", items: [
      { b: "জাতীয় জরুরি সেবা (পুলিশ, ফায়ার, অ্যাম্বুলেন্স)", e: "National Emergency Service", p: "999", s: 1 },
      { b: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স", e: "Fire Service & Civil Defence", p: "16163", s: 1 }
    ]},
    { id: "health", i: "🏥", b: "স্বাস্থ্য", e: "Health", items: [
      { b: "স্বাস্থ্য বাতায়ন (স্বাস্থ্য সেবা)", e: "Shastho Batayon Health Line", p: "16263", s: 1 }
    ]},
    { id: "women", i: "👩‍👧", b: "নারী ও শিশু", e: "Women & Children", items: [
      { b: "নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন", e: "Violence Against Women & Children Helpline", p: "109", s: 1 },
      { b: "শিশু হেল্পলাইন", e: "Child Helpline", p: "1098" }
    ]},
    { id: "law", i: "⚖️", b: "আইন ও দুর্নীতি", e: "Law & Anti-corruption", items: [
      { b: "জাতীয় আইনগত সহায়তা", e: "National Legal Aid", p: "16430" },
      { b: "দুর্নীতি দমন কমিশন (দুদক)", e: "Anti-Corruption Commission", p: "106" }
    ]},
    { id: "govt", i: "🏛️", b: "সরকারি সেবা", e: "Government Services", items: [
      { b: "সরকারি তথ্য ও সেবা (৩৩৩)", e: "Government Info & Services", p: "333" }
    ]},
    { id: "mobile", i: "📱", b: "মোবাইল ব্যাংকিং", e: "Mobile Banking", items: [
      { b: "বিকাশ", e: "bKash", p: "16247" },
      { b: "নগদ", e: "Nagad", p: "16167" },
      { b: "রকেট", e: "Rocket", p: "16216" },
      { b: "উপায়", e: "Upay", p: "16268" }
    ]},
    { id: "bank", i: "🏦", b: "ব্যাংক", e: "Banks", items: [
      { b: "বাংলাদেশ ব্যাংক (অভিযোগ কেন্দ্র)", e: "Bangladesh Bank Complaint Centre", p: "16236" },
      { b: "ব্র্যাক ব্যাংক", e: "BRAC Bank", p: "16221" },
      { b: "সিটি ব্যাংক", e: "City Bank", p: "16234" },
      { b: "ইসলামী ব্যাংক", e: "Islami Bank", p: "16259" },
      { b: "ইস্টার্ন ব্যাংক", e: "Eastern Bank", p: "16230" },
      { b: "প্রাইম ব্যাংক", e: "Prime Bank", p: "16218" }
    ]}
  ],
  // To add a district: copy one block, change names and items. Divisions and dropdowns build themselves.
  // u = upazila (items with u appear under the upazila dropdown). All numbers below were published on official government websites.
  districts: [
    { div: { b: "রাজশাহী", e: "Rajshahi" }, b: "রাজশাহী", e: "Rajshahi", items: [
      { b: "জেলা প্রশাসকের কার্যালয়", e: "Deputy Commissioner Office", p: "", w: "https://rajshahi.gov.bd" },
      { b: "পুলিশ সুপারের কার্যালয়, রাজশাহী (অফিস)", e: "Superintendent of Police Office, Rajshahi", p: "02588-857250", w: "https://police.rajshahi.gov.bd" },
      { b: "পুলিশ সুপারের কার্যালয়, রাজশাহী (মোবাইল)", e: "Superintendent of Police, Rajshahi (mobile)", p: "01320-122500" },
      { b: "সিভিল সার্জনের কার্যালয়", e: "Civil Surgeon Office", p: "" },
      { b: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", e: "Rajshahi Medical College Hospital", p: "" },
      { b: "ফায়ার সার্ভিস, রাজশাহী", e: "Fire Service, Rajshahi", p: "" },
      { b: "জেলা খাদ্য নিয়ন্ত্রকের কার্যালয়", e: "District Food Controller Office", p: "0258-8854821", w: "https://food.rajshahi.gov.bd" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা নির্বাহী অফিসার (ইউএনও)", e: "Upazila Nirbahi Officer (UNO)", n: "লিয়াকত সালমান", p: "01786-708444", w: "https://puthia.rajshahi.gov.bd" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ইউএনও অফিস: টেলিফোন", e: "UNO Office: landline", p: "07228-56121" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "প্রশাসনিক কর্মকর্তা, ইউএনও অফিস", e: "Administrative Officer, UNO Office", n: "মোঃ এমরান বিন হোসেন", p: "01715-804377" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "সহকারী কমিশনার (ভূমি)", e: "Assistant Commissioner (Land)", n: "শবু দাশ", p: "01709-989543" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "পুঠিয়া থানা: অফিসার ইনচার্জ (ওসি)", e: "Puthia Police Station: Officer in Charge", n: "মোঃ ফরদুল ইসলাম", p: "01320-122672", w: "https://www.digrajshahirange.gov.bd/thana/15" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "পুঠিয়া থানা: টেলিফোন", e: "Puthia Police Station: landline", p: "07228-56103" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "পুঠিয়া থানা: পরিদর্শক (তদন্ত)", e: "Puthia Police Station: Inspector (Investigation)", p: "01320-122673" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "অতিরিক্ত পুলিশ সুপার, পুঠিয়া সার্কেল", e: "Additional Superintendent of Police, Puthia Circle", p: "01320-122549" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "বেলপুকুরিয়া থানা: অফিসার ইনচার্জ (ওসি)", e: "Belpukuria Police Station: Officer in Charge", n: "মোঃ ফারুক হোসেন", p: "01320-061679" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "আইসি, বানেশ্বর হাইওয়ে পুলিশ", e: "IC, Baneshwar Highway Police", p: "01320-183821" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "স্টেশন অফিসার, ফায়ার সার্ভিস ও সিভিল ডিফেন্স", e: "Station Officer, Fire Service & Civil Defence", n: "মোঃ সরোয়ার হোসাইন", p: "01718-659605" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা স্বাস্থ্য কমপ্লেক্স (জরুরি)", e: "Upazila Health Complex (emergency)", p: "" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা স্বাস্থ্য ও পরিবার পরিকল্পনা কর্মকর্তা", e: "Upazila Health & Family Planning Officer", n: "ডা. সূচনা মনোহরা", p: "01711-047301" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা পরিবার পরিকল্পনা কর্মকর্তা", e: "Upazila Family Planning Officer", n: "মোঃ হাসানুজ্জামান", p: "01779-652988" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ভেটেরিনারি সার্জন", e: "Veterinary Surgeon", n: "ডা. ওলিউল্লাহ", p: "01762-677473" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা প্রাণিসম্পদ কর্মকর্তা", e: "Upazila Livestock Officer", n: "ডা. মোঃ মাহমুদুল হাসান", p: "01911-897421" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা কৃষি কর্মকর্তা", e: "Upazila Agriculture Officer", n: "স্মৃতিরানী সরকার", p: "01715-081278" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "সিনিয়র উপজেলা মৎস্য কর্মকর্তা", e: "Senior Upazila Fisheries Officer", n: "মোঃ তানজিমুল ইসলাম", p: "01725-668706", w: "https://fisheries.puthia.rajshahi.gov.bd" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "সিনিয়র উপজেলা মৎস্য কর্মকর্তা (অফিসের সাইটের নাম্বার)", e: "Senior Upazila Fisheries Officer (office website number)", n: "মোঃ তানজিমুল ইসলাম", p: "01769-459641" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "মৎস্য অফিস: টেলিফোন", e: "Fisheries Office: landline", p: "02588-868604" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা কৃষি বিপণন কর্মকর্তার কার্যালয় (বাজার কর্মকর্তা)", e: "Upazila Agricultural Marketing Office (Market Officer)", n: "মোঃ মনোয়ার হোসেন", p: "01823-363219", w: "https://dam.puthia.rajshahi.gov.bd" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা খাদ্য নিয়ন্ত্রক", e: "Upazila Food Controller", n: "মোঃ আবদুস ছালাম বিশ্বাস", p: "01716-300486" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা বন কর্মকর্তা (ফরেস্টার)", e: "Upazila Forest Officer (Forester)", n: "মোহাম্মদ শফিকুল ইসলাম", p: "01720-357315" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা শিক্ষা কর্মকর্তা", e: "Upazila Education Officer", n: "মোঃ মখলেসুর রহমান", p: "01728-403015" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা প্রাথমিক শিক্ষা অফিস: টেলিফোন", e: "Upazila Primary Education Office: landline", p: "07228-56326" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা মাধ্যমিক শিক্ষা কর্মকর্তা", e: "Upazila Secondary Education Officer", n: "লায়লা আখতার জাহান", p: "01712-278418" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা মাধ্যমিক শিক্ষা অফিস (অফিসের সাইটের নাম্বার)", e: "Upazila Secondary Education Office (office website number)", p: "01303-672020" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা সমাজসেবা কর্মকর্তা", e: "Upazila Social Services Officer", n: "মোঃ রবিউল করিম", p: "01712-786368" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা যুব উন্নয়ন কর্মকর্তা", e: "Upazila Youth Development Officer", n: "মোঃ রুহুল আমিন", p: "01718-789174" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা মহিলা বিষয়ক কর্মকর্তা", e: "Upazila Women Affairs Officer", n: "মোছাঃ শাহনুর খাতুন", p: "01958-187618" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা সমবায় কর্মকর্তা", e: "Upazila Cooperative Officer", n: "মোঃ আবু মোতাল্লেব", p: "01715-170991" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা পল্লী উন্নয়ন কর্মকর্তা", e: "Upazila Rural Development Officer", n: "মোসাঃ আঞ্জুমানয়ারা খাতুন", p: "01736-581429" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "প্রকল্প কর্মকর্তা, বিআরডিবি", e: "Project Officer, BRDB", n: "মোঃ মোসাদ্দেক হোসেন", p: "01712-193088" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা", e: "Upazila Project Implementation Officer", n: "মাহবুবা আক্তার", p: "01736-259944" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা প্রকৌশলী", e: "Upazila Engineer", n: "মোসাঃ মুসলেহা ইসলাম", p: "01714-550935" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপ-সহকারী প্রকৌশলী (জনস্বাস্থ্য)", e: "Sub-Assistant Engineer (Public Health)", n: "মোসাঃ সানোয়ারা খাতুন", p: "01838-189525" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "সহকারী প্রকৌশলী, বিএমডিএ", e: "Assistant Engineer, BMDA", n: "মোঃ হানিফ শিকদার", p: "01711-904939" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ডিজিএম, পল্লী বিদ্যুৎ সমিতি-১, পুঠিয়া জোন", e: "DGM, Palli Bidyut Samity-1, Puthia Zone", n: "আহসানুল করিম", p: "01769-400225" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা হিসাবরক্ষণ কর্মকর্তা", e: "Upazila Accounts Officer", n: "মন্নিত আলী", p: "01715-208842" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা সাব-রেজিস্ট্রার", e: "Upazila Sub-Registrar", n: "মোহাম্মদ মোস্তাফিজুর রহমান", p: "01722-488698" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা নির্বাচন কর্মকর্তা", e: "Upazila Election Officer", n: "মোঃ কামরুজ্জামান", p: "01711-311013" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা পরিসংখ্যান কর্মকর্তা", e: "Upazila Statistics Officer", p: "01728-402166" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা আনসার-ভিডিপি কর্মকর্তা", e: "Upazila Ansar-VDP Officer", n: "মোহাম্মদ আনোয়ার হোসেন", p: "01305-009049" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "পরিদর্শক, মাদকদ্রব্য নিয়ন্ত্রণ", e: "Inspector, Narcotics Control", n: "মোঃ সাইফুল আলম", p: "01718-084373" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "উপজেলা আইসিটি কর্মকর্তা (সহকারী প্রোগ্রামার)", e: "Upazila ICT Officer (Assistant Programmer)", n: "মোছাঃ সাহিদা আক্তার", p: "01741-021161" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ইউডিএফ, ইউজিডিপি", e: "UDF, UGDP", n: "মোঃ শাহিন ওয়াজ সরকার", p: "01718-299488" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ফিল্ড সুপারভাইজার, ইসলামিক ফাউন্ডেশন", e: "Field Supervisor, Islamic Foundation", n: "আব্দুল জব্বার", p: "01712-512573" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ফাইবার জয়েন্টার, বিটিসিএল, পুঠিয়া", e: "Fiber Jointer, BTCL, Puthia", n: "মোঃ মকলেছুর রহমান", p: "01760-260003" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "তথ্য আপা, পুঠিয়া", e: "Tathya Apa, Puthia", n: "মোছাঃ কামরুন নাহার", p: "01926-739001" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "উপজেলা সরকারি দপ্তর", e: "Upazila government offices" }, b: "ব্যবস্থাপক, পল্লী সঞ্চয় ব্যাংক", e: "Manager, Palli Sanchay Bank", n: "মোসাঃ নূরে তানজিলা", p: "01720-613868" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: সহকারী প্রকৌশলী", e: "Pourashava: Assistant Engineer", n: "আবু সাইদ মোঃ শহিদুল আলম", p: "01716-076112" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: প্রশাসনিক কর্মকর্তা", e: "Pourashava: Administrative Officer", n: "মোঃ আবুল কাশেম ফজলুল হক", p: "01716-508206" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: হিসাবরক্ষক", e: "Pourashava: Accountant", n: "মোঃ মাসুদ রানা", p: "01723-049222" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: কর আদায়কারী", e: "Pourashava: Tax Collector", n: "মোঃ সরিজুল ইসলাম", p: "01722-361496" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: সহকারী কর আদায়কারী", e: "Pourashava: Assistant Tax Collector", n: "রপিন কুমার মহন্ত", p: "01737-435720" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: লাইসেন্স পরিদর্শক", e: "Pourashava: License Inspector", n: "মোসাঃ সাবনিা সদ্দিকা", p: "01796-160080" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: স্যানিটারি ইন্সপেক্টর", e: "Pourashava: Sanitary Inspector", n: "মোঃ মামুন-অর-রশিদ", p: "01759-444414" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: সহকারী কর নির্ধারক", e: "Pourashava: Assistant Tax Assessor", n: "মোঃ সইবুর রহমান", p: "01712-614289" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: উচ্চমান সহকারী", e: "Pourashava: Upper Division Assistant", n: "মোঃ আতিকুর রহমান", p: "01737-155129" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: টিকাদান সুপারভাইজার", e: "Pourashava: Vaccination Supervisor", n: "ওয়াজি উদ্দিন মোঃ জাফরুল্লাহ", p: "01716-261133" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: কনজারভেন্সি ইন্সপেক্টর", e: "Pourashava: Conservancy Inspector", n: "মোঃ আরফুল হক", p: "01743-328816" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: টিকাদানকারী", e: "Pourashava: Vaccinator", n: "মোঃ সোহেল রানা", p: "01749-997248" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: গারবেজ ট্রাক চালক", e: "Pourashava: Garbage Truck Driver", n: "মোঃ তোফায়েল হোসেন", p: "01709-505702" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: এমএলএসএস", e: "Pourashava: MLSS", n: "মোঃ শাহাবুর রহমান", p: "01751-245026" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: এমএলএসএস", e: "Pourashava: MLSS", n: "মোঃ আমরুল ইসলাম", p: "01797-900877" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: নৈশ প্রহরী", e: "Pourashava: Night Guard", n: "মোঃ সোলায়মান আলী", p: "01782-274281" },
      { u: { b: "পুঠিয়া", e: "Puthia" }, g: { b: "পুঠিয়া পৌরসভা", e: "Puthia Pourashava" }, b: "পৌরসভা: দারোয়ান", e: "Pourashava: Doorman", n: "মোঃ জহিরি রায়হান", p: "01734-158493" },

      { u: { b: "দুর্গাপুর", e: "Durgapur" }, b: "দুর্গাপুর থানা: অফিসার ইনচার্জ (ওসি)", e: "Durgapur Police Station: Officer in Charge", p: "01320-122724", w: "https://www.digrajshahirange.gov.bd/thana/16" },
      { u: { b: "দুর্গাপুর", e: "Durgapur" }, b: "দুর্গাপুর থানা: টেলিফোন", e: "Durgapur Police Station: landline", p: "07224-56004" },
      { u: { b: "দুর্গাপুর", e: "Durgapur" }, b: "উপজেলা নির্বাহী অফিসার (ইউএনও)", e: "Upazila Nirbahi Officer (UNO)", p: "01762-865616" },
      { u: { b: "দুর্গাপুর", e: "Durgapur" }, b: "ইউএনও অফিস: টেলিফোন", e: "UNO Office: landline", p: "02588-879311" },
      { u: { b: "দুর্গাপুর", e: "Durgapur" }, b: "উপজেলা স্বাস্থ্য কমপ্লেক্স (জরুরি)", e: "Upazila Health Complex (emergency)", p: "07224-56007", w: "https://health.durgapur.rajshahi.gov.bd" }
    ]}
  ]
};
