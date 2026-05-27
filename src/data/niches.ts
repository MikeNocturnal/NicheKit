const baseNiches = [
  { slug: "freelance-photographer", title: "Freelance Photographer", baseSalary: 60000, expenses: ["Equipment Maintenance", "Studio Rent", "Software (Adobe CC)", "Travel/Gas"], emoji: "📸" },
  { slug: "wedding-photographer", title: "Wedding Photographer", baseSalary: 75000, expenses: ["Equipment", "Travel/Gas", "Software", "Marketing/Ads"], emoji: "💍" },
  { slug: "react-developer", title: "React Developer", baseSalary: 95000, expenses: ["Software Subscriptions", "Hardware Upgrades", "Cloud Hosting", "Internet"], emoji: "💻" },
  { slug: "python-developer", title: "Python Developer", baseSalary: 100000, expenses: ["Cloud Hosting (AWS/GCP)", "Hardware Upgrades", "Internet", "Software"], emoji: "🐍" },
  { slug: "backend-developer", title: "Backend Developer", baseSalary: 105000, expenses: ["Server Costs", "Database Hosting", "Hardware", "Internet"], emoji: "⚙️" },
  { slug: "mobile-app-developer", title: "Mobile App Developer", baseSalary: 98000, expenses: ["Apple Developer Account", "Google Play Fee", "Test Devices", "Software"], emoji: "📱" },
  { slug: "shopify-developer", title: "Shopify Developer", baseSalary: 85000, expenses: ["Theme Licenses", "App Subscriptions", "Hardware", "Internet"], emoji: "🛍️" },
  { slug: "webflow-developer", title: "Webflow Developer", baseSalary: 80000, expenses: ["Webflow Workspace", "Figma", "Internet", "Hardware"], emoji: "🕸️" },
  { slug: "graphic-designer", title: "Graphic Designer", baseSalary: 65000, expenses: ["Adobe CC", "Stock Assets", "Hardware Upgrades", "Internet"], emoji: "🎨" },
  { slug: "ui-ux-designer", title: "UI/UX Designer", baseSalary: 85000, expenses: ["Figma Pro", "Usability Testing Tools", "Hardware", "Internet"], emoji: "🖌️" },
  { slug: "freelance-illustrator", title: "Freelance Illustrator", baseSalary: 55000, expenses: ["Art Supplies/iPad", "Adobe CC", "Website Hosting", "Marketing"], emoji: "✏️" },
  { slug: "interior-designer", title: "Interior Designer", baseSalary: 70000, expenses: ["CAD Software", "Sample Materials", "Travel/Gas", "Marketing"], emoji: "🛋️" },
  { slug: "3d-animator", title: "3D Animator", baseSalary: 80000, expenses: ["Maya/Blender Sub", "High-end PC/Render Farm", "Internet", "Stock Models"], emoji: "🧊" },
  { slug: "video-editor", title: "Video Editor", baseSalary: 60000, expenses: ["Adobe Premiere/DaVinci", "Massive Cloud Storage", "Hardware Upgrades", "Plugins"], emoji: "🎬" },
  { slug: "audio-engineer", title: "Audio Engineer", baseSalary: 65000, expenses: ["DAW Software", "Studio Plugins", "Hardware/Monitors", "Soundproofing"], emoji: "🎧" },
  { slug: "voiceover-artist", title: "Voiceover Artist", baseSalary: 55000, expenses: ["Microphone Upgrades", "Soundproofing", "DAW Software", "Marketing"], emoji: "🎙️" },
  { slug: "content-creator", title: "Content Creator", baseSalary: 70000, expenses: ["Camera Gear", "Editing Software", "Props", "Travel"], emoji: "🎥" },
  { slug: "copywriter", title: "Freelance Copywriter", baseSalary: 60000, expenses: ["Grammarly", "Website Hosting", "Internet", "Marketing"], emoji: "✍️" },
  { slug: "seo-consultant", title: "SEO Consultant", baseSalary: 85000, expenses: ["Ahrefs/SEMrush", "Website Hosting", "Internet", "Marketing"], emoji: "🔍" },
  { slug: "social-media-manager", title: "Social Media Manager", baseSalary: 55000, expenses: ["Scheduling Tools (Buffer)", "Canva Pro", "Internet", "Phone Bill"], emoji: "📱" },
  { slug: "pr-freelancer", title: "Public Relations (PR) Freelancer", baseSalary: 75000, expenses: ["Media Database Sub", "Internet", "Phone Bill", "Travel"], emoji: "📰" },
  { slug: "data-analyst", title: "Data Analyst", baseSalary: 85000, expenses: ["Tableau/PowerBI", "Cloud Storage", "Hardware", "Internet"], emoji: "📊" },
  { slug: "it-consultant", title: "IT Consultant", baseSalary: 95000, expenses: ["Certifications", "Testing Hardware", "Travel", "Software"], emoji: "🖥️" },
  { slug: "cybersecurity-consultant", title: "Cybersecurity Consultant", baseSalary: 110000, expenses: ["Security Tools", "Certifications", "VPN/Proxy", "Hardware"], emoji: "🔒" },
  { slug: "business-consultant", title: "Business Consultant", baseSalary: 100000, expenses: ["Travel", "CRM Software", "Internet", "Marketing"], emoji: "💼" },
  { slug: "financial-advisor", title: "Financial Advisor", baseSalary: 90000, expenses: ["Licensing Fees", "Financial Software", "Marketing", "Travel"], emoji: "💰" },
  { slug: "virtual-assistant", title: "Virtual Assistant", baseSalary: 45000, expenses: ["Internet", "Software (Asana/Slack)", "Phone Bill", "Hardware"], emoji: "📱" },
  { slug: "freelance-translator", title: "Freelance Translator", baseSalary: 50000, expenses: ["CAT Tools", "Internet", "Dictionaries/Software", "Hardware"], emoji: "🌍" },
  { slug: "personal-trainer", title: "Personal Trainer", baseSalary: 55000, expenses: ["Gym Fees/Rent", "Certifications", "Insurance", "Marketing"], emoji: "💪" },
  { slug: "event-planner", title: "Event Planner", baseSalary: 60000, expenses: ["Planning Software", "Travel", "Marketing", "Phone Bill"], emoji: "🎉" },
  { slug: "freelance-makeup-artist", title: "Freelance Makeup Artist", baseSalary: 50000, expenses: ["Makeup Kits", "Travel/Gas", "Sanitation Supplies", "Marketing"], emoji: "💄" }
];

export const calculatorNiches = baseNiches.map(niche => {
  return {
    ...niche,
    seoParagraphs: [
      `As a ${niche.title}, setting the right hourly rate is critical for sustaining your business. Many freelancers drastically undercharge because they only consider their desired take-home pay, completely ignoring taxes, vacation time, and the significant costs of running a freelance business.`,
      `For example, typical expenses in this industry often include ${niche.expenses.join(', ')}. If you don't factor these into your hourly rate, you are effectively taking a pay cut every time you pay a business expense.`,
      `Using our calculator, you can reverse-engineer your perfect hourly rate. By starting with a target base salary (the industry average is roughly $${niche.baseSalary.toLocaleString()}), and adding your specific overhead, you ensure that every billable hour actually moves you closer to your financial goals.`
    ],
    faqs: [
      {
        question: `What is a good starting salary for a ${niche.title}?`,
        answer: `While it varies by experience and location, a solid benchmark for a full-time equivalent salary is around $${niche.baseSalary.toLocaleString()} per year. Your hourly rate should be calculated to hit this target after expenses and taxes.`
      },
      {
        question: `Should I charge for non-billable hours?`,
        answer: `No, you shouldn't explicitly bill clients for admin work. However, your hourly rate MUST be high enough to cover the time you spend doing administrative tasks, marketing, and accounting. Our calculator accounts for this by only asking for your 'billable' hours per week.`
      },
      {
        question: `How do ${niche.expenses[0]} and other expenses affect my rate?`,
        answer: `Every business expense directly reduces your profit. For a ${niche.title}, costs like ${niche.expenses.join(' and ')} must be added to your gross revenue target before calculating your hourly rate.`
      }
    ]
  };
});
