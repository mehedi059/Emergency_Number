// Emergency Number - data file. To update the app, edit ONLY this file.
// b = Bangla name, e = English name, p = phone (empty = not added yet), w = official website, s:1 = show on home SOS grid
window.SHOHAY = {
  version: "1.0.0",
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
  districts: [
    { div: { b: "রাজশাহী", e: "Rajshahi" }, b: "রাজশাহী", e: "Rajshahi", items: [
      { b: "জেলা প্রশাসকের কার্যালয়", e: "Deputy Commissioner Office", p: "", w: "https://rajshahi.gov.bd" },
      { b: "জেলা পুলিশ", e: "District Police", p: "", w: "https://police.portal.gov.bd" },
      { b: "সিভিল সার্জনের কার্যালয়", e: "Civil Surgeon Office", p: "" },
      { b: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", e: "Rajshahi Medical College Hospital", p: "" },
      { b: "ফায়ার সার্ভিস, রাজশাহী", e: "Fire Service, Rajshahi", p: "" },
      { b: "জেলা খাদ্য নিয়ন্ত্রকের কার্যালয়", e: "District Food Controller Office", p: "0258-8854821", w: "https://food.rajshahi.gov.bd" }
    ]}
  ]
};
