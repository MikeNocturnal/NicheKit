const baseNiches = [
  // Creative & Design
  { slug: "freelance-photographer", title: "Freelance Photographer", baseSalary: 60000, expenses: ["Equipment Maintenance", "Studio Rent", "Software (Adobe CC)", "Travel/Gas"], emoji: "📸" },
  { slug: "wedding-photographer", title: "Wedding Photographer", baseSalary: 75000, expenses: ["Equipment", "Travel/Gas", "Software", "Marketing/Ads"], emoji: "💍" },
  { slug: "graphic-designer", title: "Graphic Designer", baseSalary: 65000, expenses: ["Adobe CC", "Stock Assets", "Hardware Upgrades", "Internet"], emoji: "🎨" },
  { slug: "ui-ux-designer", title: "UI/UX Designer", baseSalary: 85000, expenses: ["Figma Pro", "Usability Testing Tools", "Hardware", "Internet"], emoji: "🖌️" },
  { slug: "freelance-illustrator", title: "Freelance Illustrator", baseSalary: 55000, expenses: ["Art Supplies/iPad", "Adobe CC", "Website Hosting", "Marketing"], emoji: "✏️" },
  { slug: "interior-designer", title: "Interior Designer", baseSalary: 70000, expenses: ["CAD Software", "Sample Materials", "Travel/Gas", "Marketing"], emoji: "🛋️" },
  { slug: "3d-animator", title: "3D Animator", baseSalary: 80000, expenses: ["Maya/Blender Sub", "High-end PC/Render Farm", "Internet", "Stock Models"], emoji: "🧊" },
  { slug: "3d-modeler", title: "3D Modeler", baseSalary: 75000, expenses: ["ZBrush/Maya", "High-end PC", "Stock Textures", "Internet"], emoji: "🗿" },
  { slug: "vfx-artist", title: "VFX Artist", baseSalary: 85000, expenses: ["Nuke/After Effects", "Render Farm", "Plugins", "Hardware"], emoji: "💥" },
  { slug: "motion-graphics-designer", title: "Motion Graphics Designer", baseSalary: 75000, expenses: ["After Effects", "Cinema 4D", "Plugins", "Hardware"], emoji: "🌀" },
  
  // Software Development & Tech
  { slug: "react-developer", title: "React Developer", baseSalary: 95000, expenses: ["Software Subscriptions", "Hardware Upgrades", "Cloud Hosting", "Internet"], emoji: "💻" },
  { slug: "python-developer", title: "Python Developer", baseSalary: 100000, expenses: ["Cloud Hosting (AWS/GCP)", "Hardware Upgrades", "Internet", "Software"], emoji: "🐍" },
  { slug: "backend-developer", title: "Backend Developer", baseSalary: 105000, expenses: ["Server Costs", "Database Hosting", "Hardware", "Internet"], emoji: "⚙️" },
  { slug: "mobile-app-developer", title: "Mobile App Developer", baseSalary: 98000, expenses: ["Apple Developer Account", "Google Play Fee", "Test Devices", "Software"], emoji: "📱" },
  { slug: "shopify-developer", title: "Shopify Developer", baseSalary: 85000, expenses: ["Theme Licenses", "App Subscriptions", "Hardware", "Internet"], emoji: "🛍️" },
  { slug: "webflow-developer", title: "Webflow Developer", baseSalary: 80000, expenses: ["Webflow Workspace", "Figma", "Internet", "Hardware"], emoji: "🕸️" },
  { slug: "game-developer", title: "Game Developer", baseSalary: 90000, expenses: ["Unity/Unreal Pro", "Asset Store", "High-end PC", "Testing Devices"], emoji: "🎮" },
  { slug: "unity-developer", title: "Unity Developer", baseSalary: 90000, expenses: ["Unity Pro", "Asset Store", "Hardware", "Internet"], emoji: "🕹️" },
  { slug: "blockchain-developer", title: "Blockchain Developer", baseSalary: 130000, expenses: ["Cloud Nodes", "Security Audits", "Hardware", "Internet"], emoji: "⛓️" },
  { slug: "smart-contract-developer", title: "Smart Contract Developer", baseSalary: 140000, expenses: ["Audit Tools", "Cloud Nodes", "Hardware", "Internet"], emoji: "📜" },
  { slug: "machine-learning-engineer", title: "Machine Learning Engineer", baseSalary: 140000, expenses: ["Cloud GPUs (AWS/GCP)", "Data APIs", "Hardware", "Internet"], emoji: "🤖" },
  { slug: "data-scientist", title: "Data Scientist", baseSalary: 120000, expenses: ["Cloud Computing", "Data Subscriptions", "Hardware", "Internet"], emoji: "📈" },
  { slug: "prompt-engineer", title: "Prompt Engineer", baseSalary: 90000, expenses: ["OpenAI API", "Anthropic API", "Midjourney Sub", "Internet"], emoji: "🧠" },
  { slug: "devops-engineer", title: "DevOps Engineer", baseSalary: 125000, expenses: ["AWS/GCP/Azure", "CI/CD Tools", "Monitoring Tools", "Hardware"], emoji: "🚀" },
  { slug: "cloud-architect", title: "Cloud Architect", baseSalary: 135000, expenses: ["AWS/GCP Certs", "Lab Environments", "Software", "Internet"], emoji: "☁️" },
  
  // Writing & Content
  { slug: "copywriter", title: "Freelance Copywriter", baseSalary: 60000, expenses: ["Grammarly", "Website Hosting", "Internet", "Marketing"], emoji: "✍️" },
  { slug: "freelance-writer", title: "Freelance Writer", baseSalary: 50000, expenses: ["Grammarly", "Internet", "Website", "Marketing"], emoji: "📝" },
  { slug: "ghostwriter", title: "Ghostwriter", baseSalary: 65000, expenses: ["Writing Software", "Research Tools", "Internet", "Marketing"], emoji: "👻" },
  { slug: "technical-writer", title: "Technical Writer", baseSalary: 75000, expenses: ["Documentation Tools", "Software Subscriptions", "Internet", "Hardware"], emoji: "📋" },
  { slug: "ux-writer", title: "UX Writer", baseSalary: 80000, expenses: ["Figma", "Usability Tools", "Internet", "Hardware"], emoji: "📱" },
  { slug: "resume-writer", title: "Resume Writer", baseSalary: 55000, expenses: ["Job Board Subs", "Formatting Software", "Internet", "Marketing"], emoji: "📄" },
  { slug: "grant-writer", title: "Grant Writer", baseSalary: 65000, expenses: ["Grant Databases", "Research Tools", "Internet", "Marketing"], emoji: "🏛️" },
  { slug: "seo-copywriter", title: "SEO Copywriter", baseSalary: 65000, expenses: ["Ahrefs/SEMrush", "Grammarly", "Internet", "Marketing"], emoji: "🔍" },
  
  // Audio & Video
  { slug: "video-editor", title: "Video Editor", baseSalary: 60000, expenses: ["Adobe Premiere/DaVinci", "Massive Cloud Storage", "Hardware Upgrades", "Plugins"], emoji: "🎬" },
  { slug: "audio-engineer", title: "Audio Engineer", baseSalary: 65000, expenses: ["DAW Software", "Studio Plugins", "Hardware/Monitors", "Soundproofing"], emoji: "🎧" },
  { slug: "voiceover-artist", title: "Voiceover Artist", baseSalary: 55000, expenses: ["Microphone Upgrades", "Soundproofing", "DAW Software", "Marketing"], emoji: "🎙️" },
  { slug: "content-creator", title: "Content Creator", baseSalary: 70000, expenses: ["Camera Gear", "Editing Software", "Props", "Travel"], emoji: "🎥" },
  { slug: "videographer", title: "Videographer", baseSalary: 65000, expenses: ["Camera Lenses", "Lighting", "Storage", "Travel/Gas"], emoji: "📹" },
  { slug: "drone-operator", title: "Drone Operator", baseSalary: 70000, expenses: ["Drone Insurance", "Part 107 License", "Batteries/Repairs", "Travel"], emoji: "🚁" },
  { slug: "podcast-producer", title: "Podcast Producer", baseSalary: 60000, expenses: ["Hosting Platforms", "DAW Software", "Microphones", "Internet"], emoji: "🎙️" },
  { slug: "music-producer", title: "Music Producer", baseSalary: 65000, expenses: ["DAW Software", "Sample Libraries", "Studio Gear", "Plugins"], emoji: "🎹" },
  
  // Marketing & Ads
  { slug: "social-media-manager", title: "Social Media Manager", baseSalary: 55000, expenses: ["Scheduling Tools (Buffer)", "Canva Pro", "Internet", "Phone Bill"], emoji: "📱" },
  { slug: "seo-consultant", title: "SEO Consultant", baseSalary: 85000, expenses: ["Ahrefs/SEMrush", "Website Hosting", "Internet", "Marketing"], emoji: "🔍" },
  { slug: "paid-ads-consultant", title: "Paid Ads Consultant", baseSalary: 80000, expenses: ["Spy Tools", "Reporting Software", "Internet", "Marketing"], emoji: "💸" },
  { slug: "google-ads-specialist", title: "Google Ads Specialist", baseSalary: 85000, expenses: ["SpyFu/SEMrush", "Reporting Software", "Internet", "Marketing"], emoji: "🎯" },
  { slug: "facebook-ads-manager", title: "Facebook Ads Manager", baseSalary: 80000, expenses: ["Ad Spy Tools", "Canva Pro", "Internet", "Marketing"], emoji: "👍" },
  { slug: "email-marketing-specialist", title: "Email Marketing Specialist", baseSalary: 75000, expenses: ["Klaviyo/Mailchimp", "Litmus", "Internet", "Marketing"], emoji: "📧" },
  { slug: "brand-strategist", title: "Brand Strategist", baseSalary: 85000, expenses: ["Research Tools", "Design Software", "Internet", "Marketing"], emoji: "✨" },
  { slug: "pr-freelancer", title: "Public Relations (PR) Freelancer", baseSalary: 75000, expenses: ["Media Database Sub", "Internet", "Phone Bill", "Travel"], emoji: "📰" },
  
  // Consulting & Management
  { slug: "business-consultant", title: "Business Consultant", baseSalary: 100000, expenses: ["Travel", "CRM Software", "Internet", "Marketing"], emoji: "💼" },
  { slug: "it-consultant", title: "IT Consultant", baseSalary: 95000, expenses: ["Certifications", "Testing Hardware", "Travel", "Software"], emoji: "🖥️" },
  { slug: "cybersecurity-consultant", title: "Cybersecurity Consultant", baseSalary: 110000, expenses: ["Security Tools", "Certifications", "VPN/Proxy", "Hardware"], emoji: "🔒" },
  { slug: "penetration-tester", title: "Penetration Tester", baseSalary: 115000, expenses: ["Security Tools (Burp Suite)", "Hardware", "Certifications", "Internet"], emoji: "🕵️‍♂️" },
  { slug: "sales-consultant", title: "Sales Consultant", baseSalary: 95000, expenses: ["LinkedIn Sales Navigator", "CRM", "Phone Bill", "Travel"], emoji: "🤝" },
  { slug: "ecommerce-consultant", title: "E-commerce Consultant", baseSalary: 90000, expenses: ["Spy Tools", "Shopify Apps", "Internet", "Marketing"], emoji: "🛒" },
  { slug: "fractional-cmo", title: "Fractional CMO", baseSalary: 150000, expenses: ["Marketing Tools", "Travel", "CRM", "Internet"], emoji: "📈" },
  { slug: "fractional-cto", title: "Fractional CTO", baseSalary: 160000, expenses: ["Cloud Tools", "Travel", "Software", "Internet"], emoji: "🚀" },
  { slug: "agile-coach", title: "Agile Coach", baseSalary: 110000, expenses: ["Certifications", "Travel", "Whiteboard Tools", "Internet"], emoji: "🏃" },
  { slug: "scrum-master", title: "Scrum Master", baseSalary: 100000, expenses: ["Jira Sub", "Certifications", "Internet", "Hardware"], emoji: "🏈" },
  { slug: "project-manager", title: "Project Manager", baseSalary: 85000, expenses: ["Asana/Monday", "Internet", "Hardware", "Phone Bill"], emoji: "📋" },
  { slug: "product-manager", title: "Product Manager", baseSalary: 105000, expenses: ["Productboard/Jira", "Figma", "Internet", "Hardware"], emoji: "📦" },
  
  // Admin, Finance & Legal
  { slug: "data-analyst", title: "Data Analyst", baseSalary: 85000, expenses: ["Tableau/PowerBI", "Cloud Storage", "Hardware", "Internet"], emoji: "📊" },
  { slug: "financial-advisor", title: "Financial Advisor", baseSalary: 90000, expenses: ["Licensing Fees", "Financial Software", "Marketing", "Travel"], emoji: "💰" },
  { slug: "accountant", title: "Accountant", baseSalary: 85000, expenses: ["CPA License", "Tax Software", "Internet", "Marketing"], emoji: "🧾" },
  { slug: "bookkeeper", title: "Bookkeeper", baseSalary: 55000, expenses: ["QuickBooks/Xero", "Internet", "Hardware", "Marketing"], emoji: "📒" },
  { slug: "tax-preparer", title: "Tax Preparer", baseSalary: 65000, expenses: ["Tax Software", "PTIN Fees", "Internet", "Marketing"], emoji: "📝" },
  { slug: "virtual-assistant", title: "Virtual Assistant", baseSalary: 45000, expenses: ["Internet", "Software (Asana/Slack)", "Phone Bill", "Hardware"], emoji: "📱" },
  { slug: "data-entry-clerk", title: "Data Entry Clerk", baseSalary: 40000, expenses: ["Internet", "Ergonomic Hardware", "Software", "Phone Bill"], emoji: "⌨️" },
  { slug: "customer-support-rep", title: "Customer Support Rep", baseSalary: 45000, expenses: ["Zendesk/Intercom", "Headset", "Internet", "Hardware"], emoji: "🎧" },
  { slug: "transcriptionist", title: "Transcriptionist", baseSalary: 45000, expenses: ["Foot Pedal", "Headphones", "Transcription Software", "Internet"], emoji: "⌨️" },
  { slug: "freelance-translator", title: "Freelance Translator", baseSalary: 50000, expenses: ["CAT Tools", "Internet", "Dictionaries/Software", "Hardware"], emoji: "🌍" },
  
  // Coaching & Lifestyle
  { slug: "career-coach", title: "Career Coach", baseSalary: 75000, expenses: ["Zoom Pro", "Marketing", "Internet", "Website"], emoji: "🎯" },
  { slug: "life-coach", title: "Life Coach", baseSalary: 65000, expenses: ["Zoom Pro", "Marketing", "Website", "Certifications"], emoji: "🌟" },
  { slug: "executive-coach", title: "Executive Coach", baseSalary: 120000, expenses: ["Travel", "Assessments (DiSC/MBTI)", "Marketing", "Internet"], emoji: "👔" },
  { slug: "personal-trainer", title: "Personal Trainer", baseSalary: 55000, expenses: ["Gym Fees/Rent", "Certifications", "Insurance", "Marketing"], emoji: "💪" },
  { slug: "event-planner", title: "Event Planner", baseSalary: 60000, expenses: ["Planning Software", "Travel", "Marketing", "Phone Bill"], emoji: "🎉" },
  { slug: "wedding-planner", title: "Wedding Planner", baseSalary: 65000, expenses: ["Travel", "Marketing", "Planning Software", "Phone Bill"], emoji: "💒" },
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
