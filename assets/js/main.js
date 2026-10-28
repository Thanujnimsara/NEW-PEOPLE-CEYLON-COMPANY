/* ==========================================================================
   PEOPLE'S CEYLON (PRIVATE) LIMITED - MAIN INTERACTIVE SCRIPT
   Installment Calculator • Trilingual Engine • FAQ • Forms & Modals • Print Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Initialization
  let currentLang = localStorage.getItem('peoples_ceylon_lang') || 'en';
  setLanguage(currentLang);

  // Setup Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
    });
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // 3. Installment Calculator Engine
  initCalculator();

  // 4. FAQ Accordion & Search Filter
  initFaqEngine();

  // 5. Cookie Consent Banner
  initCookieBanner();

  // 6. Modal System
  initModals();

  // 7. Form Handlers
  initForms();
});

/* ==========================================================================
   LANGUAGE ENGINE
   ========================================================================== */
function setLanguage(lang) {
  if (!siteTranslations[lang]) return;
  
  localStorage.setItem('peoples_ceylon_lang', lang);
  document.body.classList.remove('lang-en', 'lang-si', 'lang-ta');
  document.body.classList.add(`lang-${lang}`);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.getAttribute('data-lang') === lang) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // Update all translatable elements
  const t = siteTranslations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Re-render FAQ list in current language
  renderFaq();
}

/* ==========================================================================
   INSTALLMENT CALCULATOR
   ========================================================================== */
let calcState = {
  facility: 'hp',
  amount: 1500000,
  months: 36,
  rate: 14.5 // Indicative statutory annual charge
};

function initCalculator() {
  const amountSlider = document.getElementById('calcAmountSlider');
  const amountDisplay = document.getElementById('calcAmountDisplay');
  const periodSlider = document.getElementById('calcPeriodSlider');
  const periodDisplay = document.getElementById('calcPeriodDisplay');
  const rateDisplay = document.getElementById('calcRateDisplay');

  // Tab Buttons
  document.querySelectorAll('.calc-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.facility = btn.getAttribute('data-facility');
      
      // Update rates according to facility
      if (calcState.facility === 'hp') {
        calcState.rate = 14.5;
      } else if (calcState.facility === 'biz' || calcState.facility === 'sme') {
        calcState.rate = 16.0;
      } else if (calcState.facility === 'wc') {
        calcState.rate = 15.5;
      } else if (calcState.facility === 'micro') {
        calcState.rate = 16.5;
      } else if (calcState.facility === 'gold') {
        calcState.rate = 12.0;
      } else if (calcState.facility === 'edu') {
        calcState.rate = 11.5;
      } else if (calcState.facility === 'revolving') {
        calcState.rate = 15.0;
      } else if (calcState.facility === 'prof') {
        calcState.rate = 13.5;
      }
      if (rateDisplay) rateDisplay.textContent = `${calcState.rate.toFixed(1)}%`;
      recalculate();
    });
  });

  // Amount Slider
  if (amountSlider && amountDisplay) {
    amountSlider.addEventListener('input', (e) => {
      calcState.amount = parseInt(e.target.value, 10);
      amountDisplay.textContent = formatLKR(calcState.amount);
      recalculate();
    });
  }

  // Period Slider
  if (periodSlider && periodDisplay) {
    periodSlider.addEventListener('input', (e) => {
      calcState.months = parseInt(e.target.value, 10);
      periodDisplay.textContent = `${calcState.months} Months`;
      recalculate();
    });
  }

  // Quick Amount Chips
  document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = parseInt(chip.getAttribute('data-val'), 10);
      if (amountSlider && amountDisplay) {
        amountSlider.value = val;
        calcState.amount = val;
        amountDisplay.textContent = formatLKR(val);
        recalculate();
      }
    });
  });

  // Apply button inside calculator
  const calcApplyBtn = document.getElementById('calcApplyBtn');
  if (calcApplyBtn) {
    calcApplyBtn.addEventListener('click', () => {
      closeAllModals();
      openModal('callbackModal', {
        amount: calcState.amount,
        months: calcState.months,
        facility: calcState.facility
      });
    });
  }

  // Initial Calculation
  recalculate();
}

function recalculate() {
  const P = calcState.amount;
  const N = calcState.months;
  const annualRate = calcState.rate / 100;

  // Formula: Standard statutory flat charge method used in Sri Lankan Hire Purchase & SME loans
  // Total Charges = Principal * (Annual Rate * (Months / 12))
  const totalCharges = P * annualRate * (N / 12);
  const totalPayable = P + totalCharges;
  const monthlyInstallment = Math.round(totalPayable / N);

  // Update UI Elements
  const resInstallment = document.getElementById('resInstallment');
  const resTotal = document.getElementById('resTotal');
  const resCharges = document.getElementById('resCharges');
  const resPrincipal = document.getElementById('resPrincipal');

  if (resInstallment) resInstallment.textContent = formatLKR(monthlyInstallment);
  if (resTotal) resTotal.textContent = formatLKR(Math.round(totalPayable));
  if (resCharges) resCharges.textContent = formatLKR(Math.round(totalCharges));
  if (resPrincipal) resPrincipal.textContent = formatLKR(P);
}

function formatLKR(amount) {
  return 'LKR ' + amount.toLocaleString('en-US');
}

/* ==========================================================================
   FAQ ACCORDION & SEARCH
   ========================================================================== */
let activeFaqCategory = 'all';
let faqSearchQuery = '';

function initFaqEngine() {
  const searchInput = document.getElementById('faqSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      faqSearchQuery = e.target.value.toLowerCase().trim();
      renderFaq();
    });
  }

  document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFaqCategory = btn.getAttribute('data-cat');
      renderFaq();
    });
  });

  renderFaq();
}

function renderFaq() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  const currentLang = localStorage.getItem('peoples_ceylon_lang') || 'en';
  
  const filtered = faqData.filter(item => {
    const matchesCat = (activeFaqCategory === 'all' || item.category === activeFaqCategory);
    const questionText = (item.q[currentLang] || item.q.en).toLowerCase();
    const answerText = (item.a[currentLang] || item.a.en).toLowerCase();
    const matchesSearch = !faqSearchQuery || questionText.includes(faqSearchQuery) || answerText.includes(faqSearchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 2rem; color: #64748B;">No questions found matching your search. Try another query or contact our hotline directly.</div>`;
    return;
  }

  container.innerHTML = filtered.map((item, idx) => {
    const question = item.q[currentLang] || item.q.en;
    const answer = item.a[currentLang] || item.a.en;
    return `
      <div class="faq-item" id="faqItem_${idx}">
        <button class="faq-question" onclick="toggleFaq(${idx})">
          <span>${question}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="faq-answer">
          <p>${answer}</p>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleFaq = function(idx) {
  const item = document.getElementById(`faqItem_${idx}`);
  if (!item) return;
  const wasActive = item.classList.contains('active');
  
  // Close all other items for clean accordion
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  
  if (!wasActive) {
    item.classList.add('active');
  }
};

/* ==========================================================================
   MODALS SYSTEM
   ========================================================================== */
function initModals() {
  // Close modal buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close when clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Open Call-back modal buttons
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      const facility = btn.getAttribute('data-facility');
      openModal(modalId, { facility });
    });
  });
}

function openModal(modalId, data = {}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (data.facility) {
    const select = modal.querySelector('select[name="facility"]');
    if (select) select.value = data.facility;
  }
  if (data.amount) {
    const amountInput = modal.querySelector('input[name="estimatedAmount"]');
    if (amountInput) amountInput.value = formatLKR(data.amount);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeAllModals = closeAllModals;

/* ==========================================================================
   DOCUMENT VIEWER & PRINTABLE APPLICATION GENERATOR
   ========================================================================== */
window.previewDocument = function(docType) {
  const previewModal = document.getElementById('docPreviewModal');
  const previewContent = document.getElementById('docPreviewContent');
  const printTitle = document.getElementById('docPreviewTitle');
  if (!previewModal || !previewContent) return;

  let title = "Official Form";
  let html = "";

  if (docType === 'hp_app') {
    title = "Vehicle Hire Purchase Application Form (Interactive & Print Ready)";
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; background: #EEF2F6; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;">
        <span style="font-size: 13px; color: #1E293B; font-weight: 600;">You can type directly into the form below, auto-save, and print.</span>
        <a href="hp-application-form.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration: none;">Open in Fullscreen Tab ↗</a>
      </div>
      <iframe src="hp-application-form.html" style="width: 100%; height: 72vh; border: 1px solid #CBD5E1; border-radius: 8px;"></iframe>
    `;
    printTitle.innerText = title;
    previewContent.innerHTML = html;
    openModal('docPreviewModal');
    return;
  } else if (docType === 'guar_stmt') {
    title = "Guarantor's Legal Statement & Consent Form";
    html = `
      <div style="border: 2px solid #0A2540; padding: 25px; border-radius: 8px; font-family: sans-serif; color: #1E293B;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #C59B27; padding-bottom: 15px; margin-bottom: 20px;">
          <div>
            <h2 style="color: #0A2540; margin: 0; font-size: 20px;">PEOPLE'S CEYLON (PRIVATE) LIMITED</h2>
            <div style="font-size: 12px; color: #64748B;">Company Registration No. PV 00354852 • Ampara Head Office</div>
          </div>
          <div style="text-align: right; font-weight: bold; color: #C59B27;">FORM: PC-GR-02</div>
        </div>
        <h3 style="text-align: center; text-transform: uppercase; margin: 15px 0; color: #0A2540;">GUARANTOR'S DECLARATION & STATEMENT OF UNDERTAKING</h3>
        <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 15px;">
          <strong>Important Notice:</strong> You are requested to sign this document as a Guarantor for the facility granted by People's Ceylon (Private) Limited. As a guarantor, you will be jointly and severally responsible for the repayment of the facility in the event the borrower defaults.
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 13px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #CBD5E1; background: #F8FAFC; width: 30%;">Guarantor's Full Name:</td>
            <td style="padding: 8px; border: 1px solid #CBD5E1;">____________________________________________________</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #CBD5E1; background: #F8FAFC;">NIC / Passport Number:</td>
            <td style="padding: 8px; border: 1px solid #CBD5E1;">________________________ Relationship to Borrower: _________</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #CBD5E1; background: #F8FAFC;">Residential Address:</td>
            <td style="padding: 8px; border: 1px solid #CBD5E1;">____________________________________________________</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #CBD5E1; background: #F8FAFC;">Primary Borrower Name:</td>
            <td style="padding: 8px; border: 1px solid #CBD5E1;">________________________ Facility Amount: LKR _____________</td>
          </tr>
        </table>
        <div style="background: #FFFBEB; border-left: 4px solid #F59E0B; padding: 12px; font-size: 11px; line-height: 1.5; margin-top: 15px;">
          I confirm that I have read and understood the liability I undertake. I have not been pressured into signing this guarantee and have been provided with an opportunity to seek independent advice.
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 40px; font-size: 12px;">
          <div>Guarantor Signature: __________________________</div>
          <div>Date: __________________________</div>
        </div>
      </div>
    `;
  } else if (docType === 'biz_app') {
    title = "Business Loan Application Form (Interactive & Print Ready)";
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; background: #EEF2F6; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;">
        <span style="font-size: 13px; color: #1E293B; font-weight: 600;">You can type directly into the loan application form below, auto-save, and print.</span>
        <a href="loan-application-form.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration: none;">Open in Fullscreen Tab ↗</a>
      </div>
      <iframe src="loan-application-form.html" style="width: 100%; height: 72vh; border: 1px solid #CBD5E1; border-radius: 8px;"></iframe>
    `;
    printTitle.innerText = title;
    previewContent.innerHTML = html;
    openModal('docPreviewModal');
    return;
  } else {
    title = "Customer Required Documents Checklist";
    html = `
      <div style="border: 2px solid #0A2540; padding: 25px; border-radius: 8px; font-family: sans-serif; color: #1E293B;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #C59B27; padding-bottom: 15px; margin-bottom: 20px;">
          <div>
            <h2 style="color: #0A2540; margin: 0; font-size: 20px;">PEOPLE'S CEYLON (PRIVATE) LIMITED</h2>
            <div style="font-size: 12px; color: #64748B;">Company Registration No. PV 00354852 • Ampara Head Office</div>
          </div>
          <div style="text-align: right; font-weight: bold; color: #C59B27;">CHECKLIST: PC-CK-04</div>
        </div>
        <h3 style="text-align: center; text-transform: uppercase; margin: 15px 0; color: #0A2540;">APPLICANT & GUARANTOR DOCUMENT CHECKLIST</h3>
        <ul style="line-height: 2; font-size: 13px; list-style-type: none; padding-left: 0;">
          <li>[  ] 1. Clear color copy of Applicant National Identity Card (NIC) / Valid Passport / Driving License</li>
          <li>[  ] 2. Proof of Billing / Residential Address (Electricity / Water / Landline bill within last 3 months)</li>
          <li>[  ] 3. Bank Statements for last 3 to 6 consecutive months (Official bank certified)</li>
          <li>[  ] 4. For Salaried: Salary slips for last 3 months and Letter of Employment Confirmation</li>
          <li>[  ] 5. For Self-employed / Businesses: Business Registration (BR) Certificate & Sales Ledger proof</li>
          <li>[  ] 6. For Agriculturalists: Crop / paddy harvest slips, cultivation officer letter, or sales receipts</li>
          <li>[  ] 7. Vehicle Quotation or Certificate of Registration (CR Book Copy) from seller / registered dealer</li>
          <li>[  ] 8. Clear copy of Guarantor(s) NIC and recent income proof (salary slip or business proof)</li>
        </ul>
        <div style="margin-top: 25px; padding: 12px; background: #ECFDF5; border-left: 4px solid #10B981; font-size: 12px;">
          <strong>Tip for Faster Approval:</strong> Submitting all 8 items together ensures your facility is processed and purchase order released within 24 to 48 hours!
        </div>
      </div>
    `;
  }

  printTitle.textContent = title;
  previewContent.innerHTML = html;
  previewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.printCurrentDoc = function() {
  const iframe = document.querySelector('#docPreviewContent iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.print();
    return;
  }
  const content = document.getElementById('docPreviewContent').innerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>People's Ceylon (Private) Limited - Official Document</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          @media print {
            body { margin: 0; padding: 10px; }
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 300);
};

/* ==========================================================================
   COOKIE BANNER
   ========================================================================== */
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookieBtn');
  const declineBtn = document.getElementById('declineCookieBtn');

  if (!banner) return;

  const cookieChoice = localStorage.getItem('peoples_ceylon_cookie_consent');
  if (!cookieChoice) {
    banner.style.display = 'block';
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('peoples_ceylon_cookie_consent', 'accepted');
      banner.style.display = 'none';
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('peoples_ceylon_cookie_consent', 'declined');
      banner.style.display = 'none';
    });
  }
}

/* ==========================================================================
   FORM HANDLERS WITH SUCCESS NOTIFICATIONS
   ========================================================================== */
function initForms() {
  // Quick Call-back Hero Form
  const heroForm = document.getElementById('heroCallbackForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSuccess(heroForm, 'Thank you! Your call-back request has been received. Our officer in Ampara will contact you shortly.');
    });
  }

  // Modal Call-back Form
  const modalForm = document.getElementById('modalCallbackForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSuccess(modalForm, 'Thank you! Your priority inquiry has been received. Our loan officer will contact you within 2 business hours.');
      setTimeout(() => {
        closeAllModals();
      }, 2500);
    });
  }

  // Dealer Registration Form
  const dealerForm = document.getElementById('dealerRegForm');
  if (dealerForm) {
    dealerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSuccess(dealerForm, 'Dealer Application Submitted! Our Operations Manager will review your details and contact your showroom within 24 hours.');
      setTimeout(() => {
        closeAllModals();
      }, 2500);
    });
  }

  // Contact Page Form
  const contactForm = document.getElementById('contactPageForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSuccess(contactForm, 'Message Sent! Thank you for contacting People\'s Ceylon. We will reply to your email or mobile promptly.');
    });
  }

  // Career Application Form
  const careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSuccess(careerForm, 'Application Received! Our Human Resources team will review your qualifications and contact shortlisted candidates.');
      setTimeout(() => {
        closeAllModals();
      }, 2500);
    });
  }
}

function handleFormSuccess(form, message) {
  const originalHtml = form.innerHTML;
  form.innerHTML = `
    <div style="background: #ECFDF5; border: 1.5px solid #10B981; border-radius: 12px; padding: 25px; text-align: center; color: #065F46;">
      <div style="width: 48px; height: 48px; background: #10B981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3 style="color: #065F46; margin-bottom: 8px; font-weight: 800;">Request Successfully Received</h3>
      <p style="font-size: 14px; line-height: 1.5;">${message}</p>
    </div>
  `;
}
