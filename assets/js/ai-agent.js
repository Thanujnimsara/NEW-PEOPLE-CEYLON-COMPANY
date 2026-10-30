/* ==============================================================================
   PEOPLE'S CEYLON (PRIVATE) LIMITED - OFFICIAL AI AGENT & VIRTUAL ASSISTANT
   Company No. PV 00354852 • Ampara, Sri Lanka • Trilingual (Sinhala, English, Tamil)
   ============================================================================== */

(function () {
  'use strict';

  // 1. Comprehensive Trained Knowledge Base
  const PCL_KNOWLEDGE = {
    company: {
      name: "People's Ceylon (Private) Limited",
      regNo: "PV 00354852",
      incorpDate: "5 February 2026",
      act: "Companies Act No. 7 of 2007",
      parentGroup: "Global Group of Companies (Group Est. 2007; People's Ceylon Inc. 2026)",
      headOffice: "No. 28/125/1, Weranketagoda, Ampara",
      businessOffice: "Temple Junction, D.S. Senanayake Street, Ampara",
      hotline: "063 7 245 245",
      internationalHotline: "+94 63 7 245 245",
      whatsapp: "063 7 245 245",
      email: "info@pcl.lk",
      complaintsEmail: "complaints@peoplesceylon.lk",
      privacyEmail: "privacy@peoplesceylon.lk",
      domain: "www.pcl.lk",
      hours: {
        weekdays: "8:30 AM – 5:00 PM (Monday to Friday)",
        saturday: "8:30 AM – 1:30 PM",
        sunday: "Closed (Online inquiries & AI Assistant active 24/7)"
      }
    },
    products: [
      {
        id: "hp",
        nameEn: "Vehicle Hire Purchase",
        nameSi: "වාහන කුලී සින්නක්කර (Hire Purchase)",
        nameTa: "வாகன வாடகை கொள்முதல் (Hire Purchase)",
        vehicles: "Cars, vans, 3-wheelers, trucks, agricultural vehicles (ට්‍රැක්ටර් / ගොවිතැන් වාහන) & dual-purpose vehicles",
        period: "12 to 60 Months (වසර 1 සිට 5 දක්වා)",
        summaryEn: "We purchase your chosen vehicle and you pay in fixed monthly installments. Full legal ownership passes to you after the final payment.",
        summarySi: "ඔබ කැමති වාහනය අප මිලදී ගෙන ඔබට මාසික ස්ථාවර වාරික මඟින් ගෙවීමට පහසුකම් සලසයි. අවසාන වාරිකය ගෙවූ පසු වාහනයේ පූර්ණ අයිතිය ඔබට ලැබේ.",
        features: ["Doorstep vehicle inspection", "Affordable down payments", "Prompt Purchase Order (PO) release"],
        formLink: "hp-application-form.html"
      },
      {
        id: "sme",
        nameEn: "SME Business Loans",
        nameSi: "සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාරික ණය (SME Loans)",
        nameTa: "SME வணிகக் கடன்கள்",
        limit: "Up to LKR 5 Million (රුපියල් මිලියන 5 දක්වා)",
        period: "12 to 60 Months",
        summaryEn: "Tailored growth capital for expanding Sri Lankan manufacturing, agricultural and commercial enterprises with flexible collateral.",
        summarySi: "නිෂ්පාදන, කෘෂිකාර්මික හා වාණිජ්‍ය ව්‍යාපාර දියුණු කිරීම සඳහා රුපියල් මිලියන 5 දක්වා නම්‍යශීලී කොන්දේසි සහිත ණය පහසුකම්.",
        features: ["Dedicated relationship manager", "Seasonal structured installment plans"],
        formLink: "loan-application-form.html"
      },
      {
        id: "wc",
        nameEn: "Working Capital Loans",
        nameSi: "කාරක ප්‍රාග්ධන ණය (Working Capital Loans)",
        nameTa: "தொழிற்படு மூலதனக் கடன்",
        period: "Short tenure from 30 days to 365 days with revolving options",
        summaryEn: "Short-term funding for stock, inventory, wages, and festive supplies to bridge cashflow cycles smoothly.",
        summarySi: "තොග රැස්කිරීම, වැටුප් ගෙවීම් සහ එදිනෙදා ව්‍යාපාරික වියදම් සඳහා දින 30 සිට 365 දක්වා කෙටි කාලීන මුල්‍ය විසඳුම්.",
        features: ["Instant liquidity for festive rush & bulk stock", "Minimal documentation", "Expedited disbursement upon underwriting completion"],
        formLink: "loan-application-form.html"
      },
      {
        id: "micro",
        nameEn: "Micro Business Loans",
        nameSi: "ක්ෂුද්‍ර ව්‍යාපාරික ණය (Micro Loans)",
        nameTa: "நுண் வணிகக் கடன்கள் (Micro Loans)",
        limit: "LKR 25,000 to LKR 500,000 (රු. 25,000 සිට 500,000 දක්වා)",
        repayment: "Flexible daily, weekly or monthly installments (දිනපතා, සතිපතා හෝ මාසික)",
        summaryEn: "Empowering grassroots entrepreneurs, retail shops, traders, and self-employed individuals with quick, accessible credit.",
        summarySi: "සුළු වෙළඳුන්, ස්වයං රැකියාලාභීන් සහ කුඩා ව්‍යවසායකයින් සඳහා රු. 25,000 සිට රු. 500,000 දක්වා ක්ෂුද්‍ර ණය.",
        features: ["No complex financial audit required", "Doorstep advisory", "Structured disbursement"],
        formLink: "loan-application-form.html"
      },
      {
        id: "gold",
        nameEn: "Gold Coin Purchase Loan",
        nameSi: "රන් කාසි මිලදී ගැනීමේ ණය (Gold Coin Purchase Loan)",
        nameTa: "தங்க நாணயம் கொள்முதல் கடன்",
        summaryEn: "Convenient, secure financing to purchase gold coins and precious bullion assets with transparent terms.",
        summarySi: "පූර්ණ විනිවිදභාවය සහ සාධාරණ තක්සේරුවක් සහිතව රන් කාසි මිලදී ගැනීම සඳහා පහසු සහ සුරක්ෂිත මූල්‍ය පහසුකම්.",
        features: ["Instant appraisal with calibrated precision digital scales", "Bank vault custody and full insurance", "Partial redemption options"]
      },
      {
        id: "edu",
        nameEn: "Higher Education Loans",
        nameSi: "උසස් අධ්‍යාපන ණය (Higher Education Loans)",
        nameTa: "உயர் கல்விக் கடன்கள் (Education Loans)",
        period: "Repayment tenures up to 2 years with moratorium while studying (වසර 2 දක්වා සහන කාල සහිතව)",
        summaryEn: "For universities registered with our company, we provide loans at a concessionary interest rate to cover the costs of higher education courses.",
        summarySi: "අප සමාගම සමඟ ලියාපදිංචි වී ඇති විශ්වවිද්‍යාල සඳහා උසස් අධ්‍යාපන පාඨමාලා ගාස්තු ආවරණය වන පරිදි සහනදායී පොලී අනුපාත යටතේ අපි ණය පහසුකම් ලබා දෙන්නෙමු.",
        features: ["Covers university tuition, course materials & exam fees", "Low preferential interest rates for students & parents", "Direct institutional payment settlement"]
      },
      {
        id: "prof",
        nameEn: "Professional Loans",
        nameSi: "වෘත්තීයවේදීන්ගේ ණය (Professional Loans)",
        nameTa: "தொழில் வல்லுநர் கடன்",
        limit: "Unsecured or low-collateral options up to LKR 5,000,000/= (රුපියල් 5,000,000/= දක්වා)",
        summaryEn: "Tailored for doctors, engineers, accountants, lawyers, and corporate executives for private clinics, equipment, or office expansion.",
        summarySi: "වෛද්‍යවරුන්, ඉංජිනේරුවන්, ගණකාධිකාරීවරුන්, නීතිඥයන් සහ විධායකයින් සඳහා රුපියල් 5,000,000/= දක්වා ඇප රහිත හෝ අවම ඇප පහසුකම්.",
        features: ["Privileged interest rates", "Personalized executive handling", "Expedited underwriting and priority verification"]
      },
      {
        id: "revolving",
        nameEn: "Revolving Credit Loans",
        nameSi: "ප්‍රතිචක්‍රීය ණය (Revolving Credit Loans)",
        nameTa: "சுழலும் கடன்",
        summaryEn: "Pre-approved line of credit where you only pay charges on the funds you draw and for the exact days utilized.",
        summarySi: "ඔබ ලබාගන්නා මුදලට සහ දින ගණනට පමණක් පොලී අයවන, නැවත ගෙවන විට සීමාව අලුත් වන නම්‍යශීලී මුල්‍ය පහසුකමක්.",
        features: ["Pre-approved limit accessible on-demand", "Charges only on utilized amount & days", "Smooth seasonal cash flow management"]
      }
    ],
    documentsNeeded: [
      "Copy of National Identity Card (NIC) / Valid Passport / Driving License",
      "Proof of Billing / Residential Address (Electricity / Water bill or Grama Niladhari certificate within last 3 months)",
      "Income Proof (Last 3-6 months bank statements, salary slips, or business registration / sales receipts)",
      "Two passport-sized photographs of Applicant & Guarantor(s)",
      "Security documents (Vehicle CR / Registration documents) if applying for vehicle facilities"
    ]
  };

  // 2. Chat Widget HTML Template
  const chatWidgetHtml = `
    <!-- AI Chat Window -->
    <div class="ai-chat-window" id="aiChatWindow">
      <div class="ai-chat-header">
        <div class="ai-header-left">
          <div class="ai-avatar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-3V5a3 3 0 0 0-3-3Z"/>
              <path d="M9 13h.01"/><path d="M15 13h.01"/><path d="M10 17h4"/>
            </svg>
            <span class="ai-status-dot"></span>
          </div>
          <div>
            <div class="ai-bot-name">People's Ceylon AI</div>
            <div class="ai-bot-sub">24/7 Official Financial Assistant</div>
          </div>
        </div>
        <div class="ai-header-actions">
          <button class="ai-head-btn" id="aiResetBtn" title="Clear Chat / නැවත ආරම්භ කරන්න">↺</button>
          <button class="ai-head-btn" id="aiCloseBtn" title="Close / වසන්න">✕</button>
        </div>
      </div>

      <!-- Quick Language Switch in Chat -->
      <div class="ai-lang-pill-row">
        <span>Language:</span>
        <button class="ai-lang-chip active" data-ailang="si">සිංහල</button>
        <button class="ai-lang-chip" data-ailang="en">English</button>
        <button class="ai-lang-chip" data-ailang="ta">தமிழ்</button>
      </div>

      <!-- Messages Area -->
      <div class="ai-chat-messages" id="aiChatMessages">
        <!-- Message bubbles populated by script -->
      </div>

      <!-- Suggestion Chips -->
      <div class="ai-chips-scroll" id="aiChipsContainer">
        <button class="ai-chip" data-prompt="Hire Purchase වාහන විස්තර">🚗 Hire Purchase වාහන</button>
        <button class="ai-chip" data-prompt="Micro Loan කොන්දේසි">💼 Micro Loan (රු. 25,000 - 500,000)</button>
        <button class="ai-chip" data-prompt="SME Business Loans">🏢 SME ණය (මිලියන 5 දක්වා)</button>
        <button class="ai-chip" data-prompt="අම්පාර කාර්යාලය සහ දුරකථන අංක">📍 කාර්යාලය & Hotline</button>
        <button class="ai-chip" data-prompt="ණය අයදුම්පත්‍ර ලබාගන්නේ කෙසේද">📄 Forms බාගත කිරීම</button>
        <button class="ai-chip" data-prompt="Installment Calculator එක භාවිතා කරන්නේ කෙසේද">💰 Calculator එකෙන් වාරිකය</button>
      </div>

      <!-- Input Bar -->
      <form class="ai-chat-input-bar" id="aiChatForm">
        <input type="text" id="aiChatInput" placeholder="ඔබට අවශ්‍ය දේ මෙහි ලියන්න (Sinhala / English)..." autocomplete="off" required>
        <button type="submit" class="ai-send-btn" id="aiSendBtn" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>

      <!-- Footer WhatsApp Escalation -->
      <div class="ai-chat-footer">
        <span>Need a human agent?</span>
        <a href="https://wa.me/94637245245?text=Hello%20People's%20Ceylon%20support,%20I%20am%20chatting%20with%20your%20AI%20and%20would%20like%20to%20talk%20to%20an%20officer" target="_blank" rel="noopener">
          WhatsApp: 063 7 245 245 ↗
        </a>
      </div>
    </div>
  `;

  // 3. Inject Styles
  const chatStyles = `
    .fab-ai {
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%) !important;
      border: 2px solid #F5A623 !important;
      color: #F5A623 !important;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s ease;
      box-shadow: 0 8px 24px rgba(245, 166, 35, 0.4) !important;
    }
    .fab-ai:hover {
      transform: scale(1.08) translateY(-3px) !important;
      box-shadow: 0 12px 28px rgba(245, 166, 35, 0.55) !important;
    }
    .ai-sparkle-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid rgba(245, 166, 35, 0.5);
      animation: aiPulse 2.4s infinite;
      pointer-events: none;
    }
    @keyframes aiPulse {
      0% { transform: scale(0.95); opacity: 0.9; }
      50% { transform: scale(1.15); opacity: 0.3; }
      100% { transform: scale(0.95); opacity: 0.9; }
    }
    .ai-badge-label {
      position: absolute;
      bottom: -8px;
      background: #F5A623;
      color: #0F172A;
      font-size: 10px;
      font-weight: 800;
      padding: 1px 6px;
      border-radius: 10px;
      letter-spacing: 0.3px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      white-space: nowrap;
    }

    /* Chat Window */
    .ai-chat-window {
      position: fixed;
      bottom: 2rem;
      right: calc(2rem + 68px);
      width: 390px;
      max-width: calc(100vw - 2rem);
      height: 580px;
      max-height: calc(100vh - 100px);
      background: #0F172A;
      border: 1px solid rgba(245, 166, 35, 0.3);
      border-radius: 16px;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.06);
      display: none;
      flex-direction: column;
      z-index: 2500;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      animation: aiSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .ai-chat-window.open {
      display: flex;
    }
    @keyframes aiSlideIn {
      from { opacity: 0; transform: translateY(20px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* Header */
    .ai-chat-header {
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    .ai-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ai-avatar {
      position: relative;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(245, 166, 35, 0.15);
      border: 1.5px solid #F5A623;
      color: #F5A623;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ai-status-dot {
      position: absolute;
      bottom: 1px;
      right: 1px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #10B981;
      border: 2px solid #0F172A;
    }
    .ai-bot-name {
      font-size: 14px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.2;
    }
    .ai-bot-sub {
      font-size: 11px;
      color: #94A3B8;
      letter-spacing: 0.2px;
    }
    .ai-header-actions {
      display: flex;
      gap: 6px;
    }
    .ai-head-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #CBD5E1;
      width: 28px;
      height: 28px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transition: all 0.15s ease;
    }
    .ai-head-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #FFF;
    }

    /* Language chips bar */
    .ai-lang-pill-row {
      background: #1E293B;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: #94A3B8;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .ai-lang-chip {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #CBD5E1;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.15s ease;
    }
    .ai-lang-chip.active {
      background: #F5A623;
      color: #0F172A;
      border-color: #F5A623;
    }

    /* Messages Area */
    .ai-chat-messages {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #0B1120;
    }
    .ai-msg {
      max-width: 86%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.5;
      word-break: break-word;
      animation: msgPop 0.2s ease-out;
    }
    @keyframes msgPop {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .ai-msg.bot {
      align-self: flex-start;
      background: #1E293B;
      color: #F1F5F9;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-bottom-left-radius: 3px;
    }
    .ai-msg.user {
      align-self: flex-end;
      background: #A81B1B;
      color: #FFFFFF;
      border-bottom-right-radius: 3px;
    }
    .ai-msg strong {
      color: #FBBF24;
    }
    .ai-msg.user strong {
      color: #FFF;
    }
    .ai-msg a.ai-btn-link {
      display: inline-block;
      margin-top: 6px;
      margin-right: 4px;
      padding: 4px 10px;
      background: rgba(245, 166, 35, 0.15);
      border: 1px solid #F5A623;
      color: #FBBF24;
      text-decoration: none;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 600;
      transition: all 0.15s ease;
    }
    .ai-msg a.ai-btn-link:hover {
      background: #F5A623;
      color: #0F172A;
    }

    /* Typing indicator */
    .ai-typing {
      align-self: flex-start;
      background: #1E293B;
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 8px 14px;
      border-radius: 12px;
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .ai-typing span {
      width: 6px;
      height: 6px;
      background: #F5A623;
      border-radius: 50%;
      animation: aiDot 1.4s infinite;
    }
    .ai-typing span:nth-child(2) { animation-delay: 0.2s; }
    .ai-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes aiDot {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-4px); opacity: 1; }
    }

    /* Chips container */
    .ai-chips-scroll {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding: 8px 12px;
      background: #131C2E;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      scrollbar-width: none;
    }
    .ai-chips-scroll::-webkit-scrollbar { display: none; }
    .ai-chip {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #E2E8F0;
      padding: 5px 11px;
      border-radius: 14px;
      font-size: 11.5px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .ai-chip:hover {
      background: rgba(245, 166, 35, 0.2);
      border-color: #F5A623;
      color: #FBBF24;
    }

    /* Input Bar */
    .ai-chat-input-bar {
      display: flex;
      gap: 8px;
      padding: 10px 12px;
      background: #1E293B;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .ai-chat-input-bar input {
      flex: 1;
      background: #0F172A;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      color: #FFF;
      padding: 8px 12px;
      font-size: 13px;
      outline: none;
      transition: border 0.2s;
    }
    .ai-chat-input-bar input:focus {
      border-color: #F5A623;
    }
    .ai-send-btn {
      background: #F5A623;
      color: #0F172A;
      border: none;
      border-radius: 8px;
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      transition: all 0.15s ease;
    }
    .ai-send-btn:hover {
      background: #FBBF24;
      transform: scale(1.05);
    }

    /* Footer WhatsApp link */
    .ai-chat-footer {
      background: #0B1120;
      padding: 6px 12px;
      font-size: 11px;
      color: #64748B;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.04);
    }
    .ai-chat-footer a {
      color: #25D366;
      text-decoration: none;
      font-weight: 600;
    }
    .ai-chat-footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      .ai-chat-window {
        right: 0.75rem;
        bottom: 85px;
        width: calc(100vw - 1.5rem);
        height: 520px;
      }
    }
  `;

  // 4. NLP Knowledge Matching Engine
  function generateBotResponse(query, lang) {
    const q = query.toLowerCase().trim();

    // 4.1 Greetings
    if (/^(hi|hello|hey|ayubowan|aayubowan|vanakkam|sugam|kohomada|halo|greetings)/i.test(q)) {
      if (lang === 'si') {
        return "ආයුබෝවන්! මම පීපල්ස් සිලෝන් ආයතනයේ නිල AI මූල්‍ය උපදේශක සහයකයා වෙමි. අපගේ වාහන කුලී සින්නක්කර (Hire Purchase), SME හෝ Micro ව්‍යාපාරික ණය, පොලී අනුපාත, අවශ්‍ය ලියකියවිලි හෝ අම්පාර කාර්යාලය පිළිබඳව ඕනෑම තොරතුරක් මගෙන් විමසන්න.";
      } else if (lang === 'ta') {
        return "வணக்கம்! நான் பீப்பிள்ஸ் சிலோன் நிறுவனத்தின் உத்தியோகபூர்வ AI நிதி உதவியாளர். எமது வாகன வாடகை கொள்முதல் (Hire Purchase), வணிகக் கடன்கள், வட்டி விகிதங்கள் அல்லது அம்பாறை அலுவலகம் பற்றி என்னிடம் கேளுங்கள்.";
      }
      return "Hello! I am People's Ceylon's Official AI Financial Assistant. How can I assist you today? You can ask me about our Vehicle Hire Purchase, SME & Micro Loans, Documents Needed, Office Locations, or Installment Calculations.";
    }

    // 4.2 Office Address / Location
    if (/(office|address|ampara|koheda|where|location|place|idama|thanaya|முகவரி|அலுவலகம்|ලිපිනය|කාර්යාල)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>පීපල්ස් සිලෝන් කාර්යාල ලිපිනයන්:</strong><br><br>
🏛️ <strong>ව්‍යාපාරික කාර්යාලය (Business Office):</strong><br>Temple Junction, D.S. Senanayake Street, Ampara.<br><br>
🏢 <strong>ලියාපදිංචි ප්‍රධාන කාර්යාලය (Head Office):</strong><br>නො. 28/125/1, වේරන්කැටගොඩ, අම්පාර.<br><br>
⏰ <strong>විවෘත වේලාවන්:</strong> සඳුදා - සිකුරාදා: පෙ.ව. 8:30 – ප.ව. 5:00 | සෙනසුරාදා: පෙ.ව. 8:30 – ප.ව. 1:30.<br>
📞 <strong>Hotline:</strong> 063 7 245 245`;
      } else if (lang === 'ta') {
        return `<strong>பீப்பிள்ஸ் சிலோன் அலுவலக முகவரிகள்:</strong><br><br>
🏛️ <strong>வணிக அலுவலகம்:</strong> Temple Junction, D.S. Senanayake Street, அம்பாறை.<br><br>
🏢 <strong>பிரதான அலுவலகம்:</strong> No. 28/125/1, வேரன்கெடகொட, அம்பாறை.<br><br>
📞 <strong>Hotline:</strong> 063 7 245 245`;
      }
      return `<strong>People's Ceylon Official Addresses:</strong><br><br>
🏛️ <strong>Business Office:</strong> Temple Junction, D.S. Senanayake Street, Ampara.<br>
🏢 <strong>Registered Head Office:</strong> No. 28/125/1, Weranketagoda, Ampara.<br><br>
⏰ <strong>Working Hours:</strong> Mon - Fri: 8:30 AM – 5:00 PM | Sat: 8:30 AM – 1:30 PM.<br>
📞 <strong>Hotline:</strong> 063 7 245 245`;
    }

    // 4.3 Phone Number / Contact / WhatsApp
    if (/(phone|call|contact|number|hotline|whatsapp|kathakaranne|anukaya|tele|தொலைபேசி|දුරකථන|ඇමතුම්)/i.test(q)) {
      return `<strong>People's Ceylon Official Contact Details:</strong><br><br>
📞 <strong>Hotline & Customer Service:</strong> <a href="tel:0637245245" style="color:#FBBF24;font-weight:bold;">063 7 245 245</a><br>
💬 <strong>WhatsApp Official Chat:</strong> <a href="https://wa.me/94637245245" target="_blank" style="color:#25D366;font-weight:bold;">063 7 245 245 ↗</a><br>
✉️ <strong>Email:</strong> info@pcl.lk<br>
⚠️ <strong>Complaints & Escalation:</strong> complaints@peoplesceylon.lk`;
    }

    // 4.4 Hire Purchase / Vehicle Leasing
    if (/(hire purchase|vehicle|hp|leasing|car|van|lorry|three wheel|treewheel|tractor|bike|agricultural|වාහන|ලීසිං|කුලී සින්නක්කර)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>වාහන කුලී සින්නක්කර (Hire Purchase):</strong><br><br>
🚗 <strong>සුදුසු වාහන:</strong> මෝටර් රථ, වෑන්, ත්‍රිරෝද රථ, ලොරි, කෘෂිකාර්මික වාහන (Agricultural vehicles) සහ ද්විත්ව කාර්ය වාහන.<br>
📅 <strong>ගෙවීමේ කාලය:</strong> මාස 12 සිට 60 දක්වා (වසර 1 සිට 5 දක්වා).<br>
✨ <strong>විශේෂ වාසි:</strong> අවම මූලික ගෙවීම්, ඔබේ නිවසටම පැමිණ වාහන පරීක්ෂා කිරීම, සහ කඩිනම් Purchase Order නිකුත් කිරීම.<br><br>
<a href="hp-application-form.html" target="_blank" class="ai-btn-link">📄 Open HP Application Form ↗</a>
<a href="#calculator" onclick="openModal('calculatorModal');return false;" class="ai-btn-link">💰 Calculate Monthly Installment ↗</a>`;
      }
      return `<strong>Vehicle Hire Purchase Facility:</strong><br><br>
🚗 <strong>Eligible Vehicles:</strong> Cars, vans, 3-wheelers, trucks, agricultural vehicles & dual-purpose vehicles.<br>
📅 <strong>Tenure:</strong> Flexible repayment from 12 to 60 months.<br>
✨ <strong>Key Benefits:</strong> Doorstep inspection, affordable down payments, transparent statutory charges, and immediate PO release.<br><br>
<a href="hp-application-form.html" target="_blank" class="ai-btn-link">📄 Open HP Application Form ↗</a>
<a href="#calculator" onclick="openModal('calculatorModal');return false;" class="ai-btn-link">💰 Open Installment Calculator ↗</a>`;
    }

    // 4.5 Micro Business Loans
    if (/(micro|grassroots|25000|500000|chooti|kuda|swayan|self employ|ක්ෂුද්‍ර|කුඩා ණය|சுயதொழில்)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>ක්ෂුද්‍ර ව්‍යාපාරික ණය (Micro Business Loans):</strong><br><br>
💰 <strong>ණය මුදල:</strong> රුපියල් 25,000 සිට රුපියල් 500,000 දක්වා (LKR 25,000 – LKR 500,000).<br>
🔄 <strong>ආපසු ගෙවීම්:</strong> දිනපතා, සතිපතා හෝ මාසික නම්‍යශීලී වාරික.<br>
⚡ <strong>විශේෂ වාසි:</strong> සංකීර්ණ විගණන ලේඛන අවශ්‍ය නොවේ, විධිමත් ලිපිගොනු පරීක්ෂාවෙන් පසු කඩිනම් පහසුකම් සැලසීම.<br><br>
<a href="loan-application-form.html" target="_blank" class="ai-btn-link">📄 Open Loan Application Form ↗</a>`;
      }
      return `<strong>Micro Business Loans:</strong><br><br>
💰 <strong>Facility Amount:</strong> Fast micro credit from LKR 25,000 to LKR 500,000.<br>
🔄 <strong>Repayment:</strong> Flexible daily, weekly or monthly installments.<br>
⚡ <strong>Highlights:</strong> Simple documentation with no complex audit, doorstep advisory, and prompt processing upon verification.<br><br>
<a href="loan-application-form.html" target="_blank" class="ai-btn-link">📄 Open Loan Application Form ↗</a>`;
    }

    // 4.6 SME Business Loans
    if (/(sme|business loan|5 million|5million|vyaparika|production|factory|ව්‍යාපාරික|සුළු හා මධ්‍ය පරිමාණ)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>සුළු හා මධ්‍ය පරිමාණ ණය (SME Business Loans):</strong><br><br>
💰 <strong>ණය සීමාව:</strong> රුපියල් මිලියන 5 දක්වා (Up to LKR 5 Million).<br>
📅 <strong>කාල සීමාව:</strong> මාස 12 සිට 60 දක්වා.<br>
🏭 <strong>සුදුසුකම්:</strong> නිෂ්පාදන, කෘෂිකාර්මික හා වාණිජ්‍ය ව්‍යාපාර පුළුල් කිරීම සඳහා කැපවූ සබඳතා කළමනාකරණය සමඟින්.<br><br>
<a href="loan-application-form.html" target="_blank" class="ai-btn-link">📄 Open Loan Application Form ↗</a>`;
      }
      return `<strong>SME Business Loans:</strong><br><br>
💰 <strong>Facility Limit:</strong> Facility amounts up to LKR 5 Million with flexible terms.<br>
📅 <strong>Tenures:</strong> 12 to 60 months with seasonal structured plans.<br>
🏭 <strong>Highlights:</strong> Tailored growth capital for manufacturing and agriculture with dedicated relationship management.<br><br>
<a href="loan-application-form.html" target="_blank" class="ai-btn-link">📄 Open Loan Application Form ↗</a>`;
    }

    // 4.7 Working Capital Loans
    if (/(working capital|stock|karaka|30 days|365 days|thoga|කාරක ප්‍රාග්ධන)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>කාරක ප්‍රාග්ධන ණය (Working Capital Loans):</strong><br><br>
⏱️ <strong>කාල සීමාව:</strong> දින 30 සිට 365 දක්වා කෙටි කාලීන පහසුකම් (Short tenure from 30 days to 365 days).<br>
📦 <strong>අරමුණ:</strong> උත්සව සමයේ තොග මිලදී ගැනීම්, වැටුප් ගෙවීම් සහ සැපයුම්කරුවන්ගේ බිල්පත් ගෙවීම.<br>
⚡ <strong>වේගය:</strong> අවම ලියකියවිලි සමඟ සම්පූර්ණ ලේඛන ලැබීමෙන් පසු කඩිනම් අනුමැතිය සහ මුදල් මුදාහැරීම.`;
      }
      return `<strong>Working Capital Loans:</strong><br><br>
⏱️ <strong>Tenure:</strong> Short tenure from 30 days to 365 days with revolving options.<br>
📦 <strong>Purpose:</strong> Instant liquidity for festive inventory, bulk stock purchases, wages, and uninterrupted supplier payments.<br>
⚡ <strong>Speed:</strong> Minimal documentation with streamlined verification and swift disbursement.`;
    }

    // 4.8 Professional Loans
    if (/(professional|doctor|engineer|lawyer|accountant|executive|10 million|10million|වෘත්තීය|වෛද්‍ය|ඉංජිනේරු)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>වෘත්තීයවේදීන්ගේ ණය (Professional Loans):</strong><br><br>
💼 <strong>සුදුසු අය:</strong> වෛද්‍යවරුන්, ඉංජිනේරුවන්, ගණකාධිකාරීවරුන්, නීතිඥයන් සහ ආයතනික විධායක නිලධාරීන්.<br>
💰 <strong>පහසුකම:</strong> රුපියල් 5,000,000/= දක්වා ඇප රහිත හෝ අවම ඇප පහසුකම් (Up to LKR 5,000,000/=).<br>
⚡ <strong>විශේෂතා:</strong> සායන, පුද්ගලික සේවා ස්ථාන හා නවීන උපකරණ මිලදී ගැනීමට ප්‍රමුඛතා පදනම මත කඩිනම් සේවාව.`;
      }
      return `<strong>Professional Loans:</strong><br><br>
💼 <strong>Eligibility:</strong> Specially designed for doctors, engineers, accountants, lawyers, and corporate executives.<br>
💰 <strong>Facility Limit:</strong> Unsecured or low-collateral options up to LKR 5,000,000/=.<br>
⚡ <strong>Features:</strong> Private practice and clinic setup, equipment purchases, privileged rates, and prioritized executive processing.`;
    }

    // 4.9 Higher Education Loans
    if (/(education|higher education|degree|campus|university|study|school|diploma|moratorium|2 years|අධ්‍යාපන|උපාධි|විශ්වවිද්‍යාල)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>උසස් අධ්‍යාපන ණය (Higher Education Loans):</strong><br><br>
🎓 <strong>අරමුණ:</strong> අප සමාගම සමඟ ලියාපදිංචි වී ඇති විශ්වවිද්‍යාල සඳහා උසස් අධ්‍යාපන පාඨමාලා ගාස්තු ආවරණය වන පරිදි සහනදායී පොලී අනුපාත යටතේ අපි ණය පහසුකම් ලබා දෙන්නෙමු.<br>
📅 <strong>කාල සීමාව:</strong> අධ්‍යාපනය හදාරන කාලය තුළ සහන කාලයක් (Moratorium) සමඟ වසර 2 දක්වා ආපසු ගෙවීම් (Repayment tenures up to 2 years).<br>
✨ <strong>විශේෂතා:</strong> සිසුන් සහ දෙමාපියන් සඳහා විශේෂ සහන පොලී අනුපාත යටතේ සෘජුවම අධ්‍යාපන ආයතනයට ගෙවීම්.`;
      }
      return `<strong>Higher Education Loans:</strong><br><br>
🎓 <strong>Purpose:</strong> For universities registered with our company, we provide loans at a concessionary interest rate to cover the costs of higher education courses.<br>
📅 <strong>Tenure:</strong> Repayment tenures up to 2 years with moratorium while studying.<br>
✨ <strong>Features:</strong> Covers tuition and examination fees with low preferential rates and direct institutional settlements.`;
    }

    // 4.10 Gold Coin Loans
    if (/(gold|coin|bullion|soiyna|ran|කාසි|රන්|தங்கம்)/i.test(q)) {
      return `<strong>Gold Coin Purchase Loan (රන් කාසි මිලදී ගැනීමේ ණය):</strong><br><br>
🥇 <strong>විස්තරය:</strong> පූර්ණ විනිවිදභාවය සහ උපරිම ප්‍රතිලාභ සහිතව රන් කාසි (Gold Coins) මිලදී ගැනීම සඳහා මූල්‍ය පහසුකම්.<br>
⚖️ <strong>තක්සේරුව:</strong> කැලිබ්‍රේටඩ් ඩිජිටල් තරාදි මඟින් නිවැරදි තක්සේරුව.<br>
🔒 <strong>ආරක්ෂාව:</strong> බැංකු සුරක්ෂිතාගාර ආරක්ෂාව සහ පූර්ණ රක්ෂණ ආවරණය සහිතයි.`;
    }

    // 4.11 Required Documents
    if (/(document|require|oneda|liyakiwili|proof|nic|bill|papers|ඕනෙ|අවශ්‍ය ලියකියවිලි|ஆவணங்கள்)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>අයදුම් කිරීමට අවශ්‍ය මූලික ලියකියවිලි:</strong><br><br>
1. 🪪 අයදුම්කරුගේ ජාතික හැඳුනුම්පත (NIC) / විදේශ ගමන් බලපත්‍රය / රියදුරු බලපත්‍රයේ පැහැදිලි පිටපතක්.<br>
2. 🏠 ලිපිනය සනාථ කිරීම සඳහා මෑත මාස 3 තුළ විදුලි හෝ ජල බිල්පතක් / ග්‍රාම නිලධාරී සහතිකය.<br>
3. 💼 ආදායම් සනාථ කිරීම: අවසන් මාස 3-6 බැංකු ප්‍රකාශන (Bank statements) හෝ වැටුප් පත්‍රිකා හෝ ව්‍යාපාර ලියාපදිංචි සහතිකය.<br>
4. 🤝 ඇපකරුවන්ගේ හැඳුනුම්පත් සහ ආදායම් විස්තර.<br>
5. 🚗 වාහන පහසුකම් සඳහා වාහනයේ CR සහතිකයේ පිටපත.`;
      }
      return `<strong>Key Documents Required for Application:</strong><br><br>
1. 🪪 Clear copy of Applicant National Identity Card (NIC) / Passport / Driving License.<br>
2. 🏠 Proof of Residential Address (Utility bill within 3 months or GN Certificate).<br>
3. 💼 Proof of Income: Last 3–6 months bank statements, salary slips, or business registration.<br>
4. 🤝 Guarantor(s) NIC copies and income proof.<br>
5. 🚗 Vehicle CR / Registration book copy if applying for vehicle hire purchase.`;
    }

    // 4.12 Calculator Help
    if (/(calculator|estimate|varika|ganan|installment|rate|charges|වාරික|ගණනය)/i.test(q)) {
      if (lang === 'si') {
        return `<strong>මාසික වාරික ගණනය කිරීම (Installment Calculator):</strong><br><br>
අපගේ වෙබ් අඩවියේ ඇති ස්වයංක්‍රීය Calculator එක මගින් ඔබට අවශ්‍ය ණය මුදල සහ ගෙවීමේ කාලය (මාස 12-60) තෝරා ක්ෂණිකව මාසික වාරිකය ඇස්තමේන්තු කරගත හැක.<br><br>
<a href="#calculator" onclick="openModal('calculatorModal');return false;" class="ai-btn-link">💰 Click Here to Open Calculator ↗</a>`;
      }
      return `<strong>Estimate Your Monthly Installment:</strong><br><br>
You can use our interactive web calculator to select your desired facility amount and tenure to calculate the exact estimated installment.<br><br>
<a href="#calculator" onclick="openModal('calculatorModal');return false;" class="ai-btn-link">💰 Click Here to Open Calculator ↗</a>`;
    }

    // 4.13 Interactive Forms & Download
    if (/(form|download|print|ayudumpath|application|පෝරම|අයදුම්පත|விண்ணப்பம்)/i.test(q)) {
      return `<strong>Official Interactive Application Forms:</strong><br><br>
You can type directly into our digital forms, auto-save, print, or send straight to our WhatsApp:<br><br>
🚗 <a href="hp-application-form.html" target="_blank" class="ai-btn-link">HP Application Form (Hire Purchase) ↗</a><br>
💼 <a href="loan-application-form.html" target="_blank" class="ai-btn-link">Loan Application Form (Business & SME) ↗</a>`;
    }

    // 4.14 Company Registration & Legality
    if (/(reg|pv|company|legal|governed|global group|registered|ලියාපදිංචි|සමාගම)/i.test(q)) {
      return `<strong>Legal & Statutory Information:</strong><br><br>
🏛️ <strong>Company:</strong> People's Ceylon (Private) Limited<br>
📜 <strong>Registration No:</strong> PV 00354852<br>
⚖️ <strong>Incorporated:</strong> 5 February 2026 under the Companies Act No. 7 of 2007.<br>
🌐 <strong>Group:</strong> Affiliated Member of Global Group of Companies (Group Operating History Since 2007; Company Incorporated 2026).`;
    }

    // Default Fallback Response
    if (lang === 'si') {
      return `ඔබගේ විමසීම පිළිබඳව තවදුරටත් කරුණු දැනගැනීමට කරුණාකර අපගේ නිලධාරියෙකු හා සෘජුව සම්බන්ධ වන්න:<br><br>
📞 <strong>Hotline:</strong> 063 7 245 245<br>
💬 <strong>WhatsApp:</strong> <a href="https://wa.me/94637245245?text=Hello%20People's%20Ceylon,%20I%20have%20an%20inquiry" target="_blank" style="color:#25D366;font-weight:bold;">063 7 245 245 වෙත පණිවිඩයක් එවන්න ↗</a><br>
🏛️ <strong>කාර්යාලය:</strong> Temple Junction, D.S. Senanayake Street, Ampara.`;
    } else if (lang === 'ta') {
      return `உங்கள் வினாவுக்கு மேலதிக விபரம் பெற எமது வாடிக்கையாளர் சேவை அதிகாரியுடன் தொடர்பு கொள்ளுங்கள்:<br><br>
📞 <strong>Hotline:</strong> 063 7 245 245<br>
💬 <strong>WhatsApp:</strong> <a href="https://wa.me/94637245245" target="_blank" style="color:#25D366;font-weight:bold;">063 7 245 245 ↗</a>`;
    }
    return `Thank you for your question. For detailed or customized inquiries, please contact our team directly:<br><br>
📞 <strong>Hotline:</strong> 063 7 245 245<br>
💬 <strong>WhatsApp:</strong> <a href="https://wa.me/94637245245?text=Hello%20People's%20Ceylon,%20I%20have%20an%20inquiry" target="_blank" style="color:#25D366;font-weight:bold;">Chat on WhatsApp 063 7 245 245 ↗</a><br>
🏛️ <strong>Office:</strong> Temple Junction, D.S. Senanayake Street, Ampara.`;
  }

  // 5. Initialize AI Widget
  document.addEventListener('DOMContentLoaded', () => {
    // 5.1 Inject CSS & HTML
    const styleEl = document.createElement('style');
    styleEl.innerHTML = chatStyles;
    document.head.appendChild(styleEl);

    const container = document.createElement('div');
    container.id = 'aiChatContainer';
    container.innerHTML = chatWidgetHtml;
    document.body.appendChild(container);

    // 5.2 Element references
    const triggerBtn = document.getElementById('aiChatTrigger');
    const chatWindow = document.getElementById('aiChatWindow');
    const closeBtn = document.getElementById('aiCloseBtn');
    const resetBtn = document.getElementById('aiResetBtn');
    const messagesEl = document.getElementById('aiChatMessages');
    const formEl = document.getElementById('aiChatForm');
    const inputEl = document.getElementById('aiChatInput');
    const chipsContainer = document.getElementById('aiChipsContainer');
    const langChips = document.querySelectorAll('.ai-lang-chip');

    let currentAiLang = localStorage.getItem('peoples_ceylon_lang') || 'si';

    // Sync active language chip
    function updateLangChip(lang) {
      currentAiLang = lang;
      langChips.forEach(c => c.classList.toggle('active', c.dataset.ailang === lang));
      if (lang === 'si') {
        inputEl.placeholder = "ඔබට අවශ්‍ය දේ මෙහි ලියන්න (Sinhala / English)...";
      } else if (lang === 'ta') {
        inputEl.placeholder = "உங்கள் கேள்வியை இங்கு தட்டச்சு செய்யவும்...";
      } else {
        inputEl.placeholder = "Type your question here (English / Sinhala)...";
      }
    }
    updateLangChip(currentAiLang);

    langChips.forEach(btn => {
      btn.addEventListener('click', () => {
        updateLangChip(btn.dataset.ailang);
        addBotMessage(
          currentAiLang === 'si'
            ? "භාෂාව සිංහලට මාරු කරන ලදී. ඔබට දැනගැනීමට අවශ්‍ය ඕනෑම දෙයක් විමසන්න."
            : currentAiLang === 'ta'
            ? "மொழி தமிழுக்கு மாற்றப்பட்டது. உங்கள் கேள்வியைக் கேட்கவும்."
            : "Language switched to English. How can I assist you with People's Ceylon services?"
        );
      });
    });

    // 5.3 Toggle Chat Window
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
        if (chatWindow.classList.contains('open')) {
          if (messagesEl.children.length === 0) {
            sendWelcomeMessage();
          }
          setTimeout(() => inputEl.focus(), 200);
        }
      });
    }

    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });

    resetBtn.addEventListener('click', () => {
      messagesEl.innerHTML = '';
      sendWelcomeMessage();
    });

    // 5.4 Message Appenders
    function addUserMessage(text) {
      const msg = document.createElement('div');
      msg.className = 'ai-msg user';
      msg.innerText = text;
      messagesEl.appendChild(msg);
      scrollToBottom();
    }

    function addBotMessage(html) {
      const msg = document.createElement('div');
      msg.className = 'ai-msg bot';
      msg.innerHTML = html;
      messagesEl.appendChild(msg);
      scrollToBottom();
    }

    function showTypingIndicator() {
      const ind = document.createElement('div');
      ind.className = 'ai-typing';
      ind.id = 'aiTypingInd';
      ind.innerHTML = '<span></span><span></span><span></span>';
      messagesEl.appendChild(ind);
      scrollToBottom();
    }

    function removeTypingIndicator() {
      const ind = document.getElementById('aiTypingInd');
      if (ind) ind.remove();
    }

    function scrollToBottom() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function sendWelcomeMessage() {
      let welcome = "";
      if (currentAiLang === 'si') {
        welcome = `<strong>ආයුබෝවන්!</strong> පීපල්ස් සිලෝන් ආයතනයේ නිල <strong>AI මූල්‍ය උපදේශක සහයකයා</strong> වෙත ඔබව සාදරයෙන් පිළිගනිමු.<br><br>
අපගේ වාහන කුලී සින්නක්කර (Hire Purchase), SME හෝ Micro ව්‍යාපාරික ණය, පොලී අනුපාත, අවශ්‍ය ලියකියවිලි හෝ අම්පාර කාර්යාලය පිළිබඳව ඕනෑම දෙයක් මෙහි විමසන්න.`;
      } else if (currentAiLang === 'ta') {
        welcome = `<strong>வணக்கம்!</strong> பீப்பிள்ஸ் சிலோன் நிறுவனத்தின் உத்தியோகபூர்வ <strong>AI நிதி உதவியாளர்</strong> உங்களை வரவேற்கிறது.<br><br>
எமது கடன் வசதிகள், வட்டி விகிதங்கள் அல்லது தேவையான ஆவணங்கள் பற்றி என்னிடம் கேட்கலாம்.`;
      } else {
        welcome = `<strong>Hello!</strong> Welcome to <strong>People's Ceylon AI Financial Assistant</strong>.<br><br>
I am here 24/7 to answer your questions about our Vehicle Hire Purchase, SME & Micro Loans, Interest Rates, Documents, or Office Locations.`;
      }
      addBotMessage(welcome);
    }

    // 5.5 Handle Query Submit
    function handleQuery(text) {
      if (!text || !text.trim()) return;
      const clean = text.trim();
      addUserMessage(clean);
      inputEl.value = '';

      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        const reply = generateBotResponse(clean, currentAiLang);
        addBotMessage(reply);
      }, 450);
    }

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handleQuery(inputEl.value);
    });

    // 5.6 Chips Click Listener
    chipsContainer.querySelectorAll('.ai-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt');
        handleQuery(prompt);
      });
    });

    // 5.7 Listen to main site language change event
    window.addEventListener('languageChanged', (e) => {
      if (e.detail && e.detail.lang) {
        updateLangChip(e.detail.lang);
      }
    });
  });
})();
