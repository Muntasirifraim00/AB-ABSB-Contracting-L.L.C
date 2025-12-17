// ABSB Contracting - Mock Data

export const companyInfo = {
  name: "ABSB Contracting L.L.C",
  tagline: "Precision in Every Structure.",
  phone: "+971 55 409 7614",
  email: "info@absbcontracting.ae",
  address: "Al Qusais Ind. Area, Dubai, UAE",
  subContractorId: "DXB-SC-0921"
};

export const stats = [
  { value: "150+", label: "Projects" },
  { value: "50+", label: "Experts" },
  { value: "ISO", label: "Certified" },
  { value: "24/7", label: "Support" }
];

export const liveTicker = [
  { label: "Concrete Poured This Month", value: "450 m³" },
  { label: "Current Safe Man-Hours", value: "140,200" },
  { label: "Active Sites", value: "12" },
  { label: "Last Inspection Passed", value: "4 Hours Ago" },
  { label: "Steel Fixed", value: "120 Tons" },
  { label: "Workforce Deployed", value: "285" }
];

export const engineeringPartners = [
  { id: "PE", name: "Proline Engineering", role: "Lead Consultant", clearance: "G+10 High Rise" },
  { id: "EM", name: "Emsquare Engineering", role: "Structural Audit", clearance: "Al Barari Standard" },
  { id: "DC", name: "Design Center", role: "Architectural Lead", clearance: "Commercial Zones" }
];

export const executionPartners = [
  { id: "GB", name: "Golden Building Cont.", role: "Main Contractor", collaboration: "Tier 1 Sub-Contracting" },
  { id: "TC", name: "Trans Creek Const.", role: "Main Contractor", collaboration: "Infrastructure Works" },
  { id: "PA", name: "Proline Architects", role: "Design Partner", collaboration: "3D Visualization" }
];

export const whyChooseFeatures = [
  {
    title: 'The "Zero-Delay" Promise',
    description: "Time is money. Our rigorous project management protocols and in-house teams allow us to hit milestones with military precision.",
    stat: "98%",
    statLabel: "Projects Delivered On Schedule"
  },
  {
    title: "Uncompromising Finish",
    description: "From marble alignment to joinery gaps, we obsess over the millimeters you don't see.",
    type: "interior"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden clauses. We provide detailed BOQs so you know exactly where every Dirham goes.",
    cta: "Request a Sample Quote"
  },
  {
    title: "Smart MEP Integration",
    description: "We don't just lay pipes; we optimize energy flow. Our MEP solutions reduce long-term operational costs.",
    cta: "View MEP Capabilities"
  }
];

export const comparisonData = {
  typical: [
    { title: "Variable Estimates", desc: 'Quotes often exclude "hidden essentials" like municipality fees or premium finishing, leading to mid-project price hikes.' },
    { title: "Outsourced Labor", desc: "Reliance on random sub-contractors means inconsistent quality and no accountability when things break." },
    { title: "Radio Silence", desc: "You chase them for updates. Calls go unanswered. Progress reports are non-existent." }
  ],
  absb: [
    { title: "Fixed-Price Contracts", desc: 'We use detailed BOQs. The price you sign is the price you pay. Zero surprises, zero "variation" tricks.' },
    { title: "In-House Engineers", desc: "Our team is on payroll. We control the quality, the schedule, and the safety standards directly." },
    { title: "Proactive Updates", desc: "Weekly video reports sent to your phone. You see the progress before you even ask." }
  ]
};

export const civilMepTeam = {
  civil: { name: "Mr. Mamoon", role: "CIVIL SUPERVISOR", tasks: ["Structural Integrity", "Blockwork Precision", "Waterproofing"] },
  mep: { name: "Mr. Rony", role: "MEP SUPERVISOR", tasks: ["Electrical Load", "HVAC Ducting", "Plumbing Networks"] },
  coordinator: { name: "Engr. Mr. Mahin", role: "Project Engineer" }
};

export const operationalPhases = [
  {
    phase: "01",
    title: "Financial Lock",
    subtitle: "Secure The Foundation (Financial)",
    description: "Before a single brick is laid, we secure the project legally and financially. We allocate funds strictly per the BOQ and clear all government permits.",
    tasks: ["Budget Frozen (Fixed Price)", "Permits Issued", "Resource Allocation"],
    controller: { name: "Mr. Asif", role: "Admin & Sr. Accountant", initials: "AS" },
    status: "FINANCIAL CLEARANCE",
    authority: "LEVEL 1"
  },
  {
    phase: "02",
    title: "Engineering",
    subtitle: "The Blueprint Strategy",
    description: "We don't just build; we simulate. Our Engineering team maps out the entire critical path, identifying Civil/MEP clashes digitally before they happen.",
    tasks: ["Shop Drawings Approved", "Material Selection", "Zero-Clash Planning"],
    controller: { name: "Engr. Mahin", role: "Project Engineer", initials: "EM" },
    status: "TECHNICAL PLANNING",
    authority: "LEVEL 2"
  },
  {
    phase: "03",
    title: "Execution",
    subtitle: "Synchronized Deployment",
    description: "Boots on the ground. Civil and MEP teams deploy simultaneously under strict supervision. We run daily progress checks to ensure the timeline holds.",
    tasks: ["40+ Core Crew Deployed", "HSE Safety Protocols Live", "Weekly WhatsApp Reports"],
    controller: { name: "Mamoon & Rony", role: "Civil & MEP Supervisors", initials: "OPS" },
    status: "CONSTRUCTION ACTIVE",
    authority: "DEPLOYED"
  },
  {
    phase: "04",
    title: "Handover",
    subtitle: "The Quality Seal",
    description: "We don't leave until it's perfect. Final snagging, deep cleaning, and utility connections. The MD personally reviews the site before handover.",
    tasks: ["Snagging List Cleared", "Warranty Issued", "Keys Handed Over"],
    controller: { name: "Mr. Abdul Barik", role: "Managing Director", initials: "AB" },
    status: "PROJECT COMPLETE",
    authority: "VERIFIED"
  }
];

export const services = [
  {
    id: "construction",
    category: "Construction",
    title: "G+1 Turnkey Construction",
    description: "Complete structural and architectural execution for luxury villas and commercial buildings. We handle everything from the first shovel to the final key handover.",
    features: ["Foundations & Concrete", "Block & Plaster Works", "Waterproofing Systems", "Façade Finishing"],
    isCore: true
  },
  {
    id: "interiors",
    category: "Interiors",
    title: "Interior Fit-Out",
    description: "Transforming shells into functional spaces. Offices, showrooms, and luxury interiors.",
    features: ["Gypsum Partitions", "Flooring & Tiling", "Joinery Works"]
  },
  {
    id: "mep",
    category: "Maintenance & MEP",
    title: "MEP Solutions",
    description: "The nervous system of your building. DEWA-compliant Electrical, Plumbing, and HVAC.",
    features: ["Load Balancing", "HVAC Ducting", "Drainage Systems"]
  },
  {
    id: "metal",
    category: "Construction",
    title: "Metal Fabrication",
    description: "Custom steel structures for industrial and aesthetic needs.",
    features: ["Pergolas & Shades", "Steel Mezzanines", "Custom Gates"]
  },
  {
    id: "pools",
    category: "Construction",
    title: "Pools & Landscape",
    description: "Exterior luxury. Custom swimming pools and hardscape engineering.",
    features: ["Excavation & Tiling", "Filtration Pumps", "Interlock Paving"]
  },
  {
    id: "amc",
    category: "Maintenance & MEP",
    title: "24/7 Support - Annual Maintenance (AMC)",
    description: "Proactive care for residential and commercial assets. We prevent breakdowns before they happen with scheduled checks and rapid emergency response.",
    features: ["AC Coil Cleaning", "Electrical Inspections", "Water Tank Cleaning", "Paint Touch-ups"]
  }
];

export const assets = [
  {
    id: "FLT-01",
    title: "Transport Fleet",
    items: ["ASHOK BUS (84 PAX) - 02 UNITS", "COASTER (35 PAX) - 01 UNIT", "CHEVROLET TAHOE - 01 UNIT"],
    status: "Fully Paid & Insured"
  },
  {
    id: "MCH-09",
    title: "Power & Tools",
    items: ["POWER GEN 33KW - ACTIVE", "BENDING MACHINES - FULL SET", "TILE FIXING UNIT - FULL SET"],
    status: "Self-Sufficient"
  },
  {
    id: "HR-40",
    title: "Core Squad",
    count: "40+",
    label: "Full-Time Employees (Own Visa)",
    extra: "+250 Outsourced (Standby)",
    status: "Legal & Compliant"
  },
  {
    id: "DED-LIC",
    title: "Licenses",
    items: ["DUBAI ECONOMIC DEPT - Building Contracting LLC", "MAINTENANCE DIVISION - Building Maintenance LLC"],
    status: "Government Approved"
  }
];

export const projects = [
  {
    id: 1,
    title: "Luxury G+1 Villa",
    description: "Proposed private residential villa with luxury finishing and boundary works.",
    location: "Mirdif",
    consultant: "Proline Arch.",
    contractor: "Golden Building Cont.",
    progress: 85,
    status: "Active"
  },
  {
    id: 2,
    title: "Al Barsha Mixed-Use",
    description: "G+2P+6+Roof Commercial & Residential Building. Complex structural sub-contract.",
    location: "Al Barsha S3",
    consultant: "Proline Eng.",
    contractor: "Golden Building Cont.",
    progress: 60,
    status: "Active"
  },
  {
    id: 3,
    title: "Satwa Commercial Hub",
    description: "G+P+8+Roof Commercial/Residential Building in high-density zone.",
    location: "Satwa",
    consultant: "Design Center",
    contractor: "Golden Building Cont.",
    progress: 45,
    status: "Active"
  }
];

export const contractualGuarantees = [
  { title: 'The "Late-Pay" Clause', description: "Every day we exceed the agreed handover date, we pay YOU a penalty fee. We value your time as much as our own." },
  { title: "Fixed-Price Lock", description: "The price on the contract is the final price. We absorb any market fluctuations in material costs during the build." },
  { title: "10-Year Warranty", description: "Full decennial liability coverage on structure and foundation. If the building cracks, we come back." },
  { title: "Zero-Snag Handover", description: "We don't hand over the keys until you sign off on every tile, switch, and handle. You have the final say." }
];

export const licenses = [
  { type: "Building Contracting L.L.C", licenseNo: "DXB-CN-2024", approval: "G+1 Villa & Civil Construction Approved" },
  { type: "Building Maintenance L.L.C", licenseNo: "DXB-MN-2024", approval: "MEP, Fit-out & Facility Mgmt Approved" }
];

export const materialSpecs = [
  {
    id: "CIV-STR-01",
    title: "Structural Core",
    items: [
      { component: "Steel Rebar", brand: "Emirates Steel", spec: "Grade 60 BS:4449 (B500B)" },
      { component: "Ready Mix Concrete", brand: "Unibeton / CEMEX", spec: "OPC/SRC 40-60 MPa" },
      { component: "Waterproofing", brand: "Henkel Polybit", spec: "4mm Bituminous Membrane" },
      { component: "Thermal Blocks", brand: "Ytong / AAC", spec: "Density 550 kg/m³" }
    ]
  },
  {
    id: "MEP-SYS-02",
    title: "MEP Systems",
    items: [
      { component: "Electrical Cabling", brand: "Ducab", spec: "XLPE Fire-Retardant Copper" },
      { component: "Switchgear", brand: "Schneider Electric", spec: "IEC 61439 Type Tested" },
      { component: "Piping (Water)", brand: "Cosmoplast", spec: "High Pressure UPVC/PPR" },
      { component: "HVAC Units", brand: "O-General / Carrier", spec: "T3 Tropical Compressors" }
    ]
  },
  {
    id: "ARC-FIN-03",
    title: "Finishing & Decor",
    items: [
      { component: "Internal Paint", brand: "Jotun Fenomastic", spec: "Zero VOC / Antibacterial" },
      { component: "Ceramic Tiles", brand: "RAK Ceramics", spec: "Grade A / Laser Cut Edges" },
      { component: "Aluminum Glass", brand: "Gutmann / Technal", spec: "Double Glazed 6-12-6mm" },
      { component: "Sanitary Ware", brand: "Grohe / Kohler", spec: "Chrome Plated Brass" }
    ]
  }
];

export const teamMembers = [
  {
    name: "Abdul Barik",
    role: "Managing Director & Sr. Civil Engineer",
    experience: "20+",
    projects: "150+",
    quote: "Quality is not an act, it is a habit.",
    initials: "AB"
  },
  {
    name: "Eng. Solaiman",
    role: "Technical Director (MEP)",
    certification: "DEWA Certified",
    approval: "100%",
    quote: "Precision prevents problems.",
    initials: "ES"
  },
  {
    name: "Sarah Al-Fayed",
    role: "Lead Architect & Fit-Out Specialist",
    award: "Design Award Winner",
    fitouts: "50+",
    quote: "Design is intelligence made visible.",
    initials: "SA"
  }
];

export const orgChart = {
  head: { name: "Mr. Abdul Barik", role: "Managing Director", quote: "Strategic Vision & Governance", initials: "MD" },
  departments: [
    [
      { name: "Mr. Asif", role: "Admin & Sr. Acc.", initials: "AS" },
      { name: "Mr. Nayan", role: "Assistant HR", initials: "MN" }
    ],
    [
      { name: "Engr. Mahin", role: "Project Engineer", initials: "PE" },
      { name: "Mr. Rony", role: "MEP Supervisor", initials: "MR" },
      { name: "Mr. Jahed", role: "MEP Foreman", initials: "MJ" },
      { name: "Mr. Mamoon", role: "Civil Supervisor", initials: "MM" },
      { name: "Nurul Haque", role: "Civil Foreman", initials: "NH" }
    ],
    [
      { name: "Fayaz Ul Haque", role: "Marketing Head", initials: "MKT" },
      { name: "Mr. Riyad", role: "Marketing Officer", initials: "MR" }
    ]
  ]
};

export const testimonials = [
  { name: "Ahmed K.", role: "CEO, TechStart", text: "The team managed our office fit-out in Business Bay. Delivered 3 days early and under budget. The PM was always available.", initials: "AK" },
  { name: "Sarah Jenkins", role: "Villa Owner, The Springs", text: "Professional civil works. They handled the Dubai Municipality approvals which saved us a massive headache.", initials: "SJ" },
  { name: "Mohammed R.", role: "Facility Manager", text: "Top notch MEP work. Fixed a cooling issue two other contractors couldn't solve.", initials: "MR" },
  { name: "James L.", role: "Homeowner, Jumeirah", text: "ABSB transformed our backyard with a custom pergola and interlock work. The finish is hotel-quality.", initials: "JL" },
  { name: "Real Estate PM", role: "Property Management Co.", text: "We use them for Annual Maintenance for our 3 buildings. Response time is excellent, even on weekends.", initials: "RE" },
  { name: "Fahad K.", role: "Investor", text: "Transparent pricing. The BOQ they gave us matched the final invoice exactly. Rare in Dubai.", initials: "FK" }
];

export const supplyPartners = [
  "JOTUN", "RAK CERAMICS", "GROHE", "SCHNEIDER", "DANUBE", "SIEMENS", "CAPAROL"
];

export const faqs = [
  { question: "Will the budget increase halfway through?", answer: "No. We use fixed-price contracts with detailed BOQs. The price you sign is the price you pay. We absorb any market fluctuations." },
  { question: "Do you handle Dubai Municipality approvals?", answer: "Yes. We handle all government permits, NOCs, and approvals as part of our turnkey service." },
  { question: "Can I visit the site during construction?", answer: "Absolutely. We encourage site visits. You'll also receive weekly video reports on WhatsApp." },
  { question: "What happens if something breaks after you leave?", answer: "We provide a 10-year structural warranty and offer comprehensive AMC packages for ongoing maintenance." },
  { question: "Do you take on smaller renovation jobs?", answer: "Yes. We handle everything from full villa construction to single-room renovations and maintenance work." }
];

export const futureFeatures = [
  {
    title: "Passive Cooling",
    description: "We use thermal-block technology and strategic orientation to naturally reduce indoor temperatures, slashing your reliance on AC."
  },
  {
    title: "Smart-Home Ready",
    description: "We install neutral lines in switchboards and structured cabling from day one, making your home compatible with Alexa, Google Home, and IoT instantly."
  },
  {
    title: "Durable Materials",
    description: "We use sulfate-resistant cement and marine-grade steel paints to fight the UAE's humidity and salinity, preventing corrosion before it starts."
  }
];

export const dualLicensingBenefits = [
  {
    title: "No Handover Loopholes",
    description: "We hold ourselves accountable. The team that builds your asset is legally mandated to maintain it, ensuring structural integrity from Day 1."
  },
  {
    title: "Seamless Trade Management",
    description: "Civil, MEP, and Finishing are managed legally and operationally under one roof, reducing vendor disputes and integration risk."
  },
  {
    title: "Guaranteed Legal Compliance",
    description: "You have peace of mind knowing all major works fall under Dubai Economic Department-approved business activities and licenses."
  }
];
