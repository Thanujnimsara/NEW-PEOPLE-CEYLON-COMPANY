# PEOPLE’S CEYLON (PRIVATE) LIMITED
## Official Corporate Website & Customer Finance Portal
**Company Registration No.:** PV 00354852  
**Date of Incorporation:** 5 February 2026  
**Registered Office:** No. 28/125/1, Weranketagoda, Ampara, Sri Lanka  
**Group Affiliation:** Member of Global Group of Companies (Operating since 2007)  

---

### 🌐 Live Permanent Website Link (Never Expires)
**Production URL:** [https://peoples-ceylon.surge.sh](https://peoples-ceylon.surge.sh)  
*(Anyone from anywhere can view this live URL on phone, tablet, or desktop 24/7 without expiration.)*

---

### 📋 Project Overview & Guideline Compliance
Built strictly in accordance with the **People’s Ceylon (Private) Limited Website Development Guide v1.0 (October 2026)**:

1. **Trilingual Architecture (Part 1.2, 4)**:
   - **English (EN)**
   - **Sinhala (සිංහල - SI)**
   - **Tamil (தமிழ் - TA)**
   - Instant language switching engine with persistent state across all pages, forms, and calculators.

2. **Core Financial Products (Part 3, Annex 5)**:
   - **Hire Purchase (වාහන කුලී සින්නක්කර)**: Cars, vans, 3-wheelers, trucks, and dual-purpose vehicles with 12 to 60-month terms and statutory charge formulas.
   - **Business Loans (ව්‍යාපාරික ණය)**: Expansion capital matching seasonal cashflow.
   - **Working Capital Loans (කාරක ප්‍රාග්ධන ණය)**: Short-term liquidity for stock, inventory, and payroll.
   - **Professional Loans (වෘත්තීයවේදීන්ගේ ණය)**: Tailored funding for doctors, engineers, lawyers, and accountants.

3. **Interactive Features (Part 4)**:
   - **Live Installment Calculator**: Real-time statutory flat/reducing charge calculations, interactive sliders, quick amount chips, and pre-filled application forwarding.
   - **Quick Call-Back & Inquiry Forms**: Priority request collection with customer consent checkbox compliant with Sri Lanka's Personal Data Protection Act No. 9 of 2022.
   - **Dealer & Supplier Accreditation Portal**: Online registration for accredited automobile and equipment dealerships.
   - **Guarantors Plain-Language Legal Guide**: Clarifies legal rights and responsibilities under Sri Lankan law.
   - **Comprehensive 20-Question FAQ**: Categorized and searchable in all 3 languages.
   - **Downloads Center**: Print-ready and downloadable official forms for Hire Purchase, Business Loans, Guarantor Statements, and Customer Document Checklists.
   - **Customer Complaints & Grievance Mechanism**: Structured 3-step escalation process with 7–14 business day resolution timeline.
   - **Direct WhatsApp Business & Hotline Action Buttons**: Floating instant communication triggers.

4. **Brand & Visual Aesthetics (Official Logo Aligned)**:
   - Palette: Golden Yellow (`#F5A623`), Dark Red / Crimson (`#A81B1B`), Deep Midnight Obsidian (`#0F172A`), Slate White.
   - Typography: Google Fonts `Plus Jakarta Sans`, `Noto Sans Sinhala`, and `Noto Sans Tamil`.
   - Authentic branding: Official People's Ceylon gear & growth arrow emblem, high-resolution fleet, director executive portrait, and Ampara branch imagery.

---

### 📂 File Structure
```
NEW PEOPLE CEYLON COMPANY/
├── index.html                  # Main responsive master portal
├── README.md                   # Project documentation & guideline map
├── assets/
│   ├── css/
│   │   └── style.css           # Complete responsive stylesheet (mobile-first)
│   ├── js/
│   │   ├── translations.js     # Trilingual dictionary (EN, SI, TA + 20 FAQs)
│   │   └── main.js             # Calculator, language engine, modals & forms
│   └── images/
│       ├── hero-banner.jpg     # Corporate headquarters & fleet banner
│       ├── director-portrait.jpg# Managing Director executive portrait
│       ├── hire-purchase-fleet.jpg # Showroom vehicles display
│       ├── business-sme.jpg    # SME entrepreneur & credit officer
│       └── ampara-branch.jpg   # Ampara customer service counter
└── CNAME                       # Domain routing configuration
```

---

### 🚀 Custom Domain Deployment Guide (for `peoplesceylon.lk`)
When the official `.lk` domain registration via www.domains.lk is completed:
1. In the domain registrar DNS management, add a `CNAME` record:
   - **Host:** `www` or `@`
   - **Points to:** `peoples-ceylon.surge.sh`
2. Run `npx surge . peoplesceylon.lk` to link the custom domain directly.
