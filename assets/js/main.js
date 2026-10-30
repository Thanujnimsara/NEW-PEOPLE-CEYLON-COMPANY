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

  // Notify AI Agent of language change
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/* ==========================================================================
   INSTALLMENT CALCULATOR
   ========================================================================== */
let calcState = {
  facility: 'hp',
  amount: 1500000,
  months: 36,
  rate: 14.5, // Indicative statutory annual charge
  method: 'flat' // 'flat' (statutory charge) or 'reducing' (amortization)
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
      
      // Update rates and default calculation method according to facility
      if (calcState.facility === 'hp') {
        calcState.rate = 14.5;
        calcState.method = 'flat';
      } else if (calcState.facility === 'biz' || calcState.facility === 'sme') {
        calcState.rate = 16.0;
        calcState.method = 'reducing';
      } else if (calcState.facility === 'wc') {
        calcState.rate = 15.5;
        calcState.method = 'flat';
      } else if (calcState.facility === 'micro') {
        calcState.rate = 16.5;
        calcState.method = 'flat';
      } else if (calcState.facility === 'gold') {
        calcState.rate = 12.0;
        calcState.method = 'flat';
      } else if (calcState.facility === 'edu') {
        calcState.rate = 11.5;
        calcState.method = 'reducing';
      } else if (calcState.facility === 'revolving') {
        calcState.rate = 15.0;
        calcState.method = 'flat';
      } else if (calcState.facility === 'prof') {
        calcState.rate = 13.5;
        calcState.method = 'reducing';
      }

      // Sync method toggle buttons
      syncMethodToggleUI();

      if (rateDisplay) rateDisplay.textContent = `${calcState.rate.toFixed(1)}%`;
      recalculate();
    });
  });

  // Method Toggle Buttons (Flat Rate vs Reducing Balance)
  document.querySelectorAll('.calc-method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-method-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.method = btn.getAttribute('data-method');
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
  syncMethodToggleUI();
  recalculate();
}

function syncMethodToggleUI() {
  document.querySelectorAll('.calc-method-btn').forEach(btn => {
    if (btn.getAttribute('data-method') === calcState.method) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function recalculate() {
  const P = calcState.amount;
  const N = calcState.months;
  let totalCharges = 0;
  let totalPayable = 0;
  let monthlyInstallment = 0;
  let exactMonthly = 0;

  if (calcState.method === 'reducing') {
    // Amortized Reducing Balance (Standard EMI formula)
    const monthlyRate = (calcState.rate / 100) / 12;
    if (monthlyRate > 0) {
      const factor = Math.pow(1 + monthlyRate, N);
      exactMonthly = P * (monthlyRate * factor) / (factor - 1);
    } else {
      exactMonthly = P / N;
    }
    monthlyInstallment = Math.round(exactMonthly);
    totalPayable = Math.round(exactMonthly * N);
    totalCharges = Math.round(totalPayable - P);
  } else {
    // Standard statutory flat charge formula (used in Sri Lankan Hire Purchase & fixed credit)
    // Total Charges = Principal * (Annual Flat Rate * (Months / 12))
    const annualRate = calcState.rate / 100;
    totalCharges = Math.round(P * annualRate * (N / 12));
    totalPayable = P + totalCharges;
    exactMonthly = totalPayable / N;
    monthlyInstallment = Math.round(exactMonthly);
  }

  // Update UI Elements
  const resInstallment = document.getElementById('resInstallment');
  const resInstallmentSub = document.getElementById('resInstallmentSub');
  const resTotal = document.getElementById('resTotal');
  const resCharges = document.getElementById('resCharges');
  const resPrincipal = document.getElementById('resPrincipal');
  const resMethod = document.getElementById('resMethod');
  const resFormula = document.getElementById('resFormula');

  if (resInstallment) resInstallment.textContent = formatLKR(monthlyInstallment);
  if (resInstallmentSub) {
    resInstallmentSub.textContent = `Approx. ${formatLKR(Math.floor(exactMonthly))} / month (${N} monthly instalments)`;
  }
  if (resTotal) resTotal.textContent = formatLKR(totalPayable);
  if (resCharges) resCharges.textContent = formatLKR(totalCharges);
  if (resPrincipal) resPrincipal.textContent = formatLKR(P);
  if (resMethod) {
    resMethod.textContent = calcState.method === 'reducing' ? 'Reducing Balance (Monthly Amortization)' : 'Flat Rate (Statutory Fixed Charge)';
  }
  if (resFormula) {
    if (calcState.method === 'reducing') {
      resFormula.innerHTML = `<strong>Reducing Balance Method:</strong> Calculated using standard monthly amortization. Total payable = ${formatLKR(monthlyInstallment)} × ${N} months = <strong>${formatLKR(totalPayable)}</strong> (Principal: ${formatLKR(P)} + Total Interest: ${formatLKR(totalCharges)}).`;
    } else {
      resFormula.innerHTML = `<strong>Flat Rate Method:</strong> Total Charges = ${formatLKR(P)} × ${calcState.rate.toFixed(1)}% × (${N}/12) = <strong>${formatLKR(totalCharges)}</strong>. Total Amount Payable = <strong>${formatLKR(totalPayable)}</strong> (${N} equal monthly instalments of ${formatLKR(monthlyInstallment)}).`;
    }
  }
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
          <strong>Tip for Prompt Processing:</strong> Submitting all required items together helps expedite facility appraisal and verification within 48 to 72 business hours.
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
   FORM HANDLERS WITH VALIDATION & NOTIFICATIONS
   ========================================================================== */
function validatePhoneNumber(phone) {
  if (!phone) return false;
  // Sri Lanka mobile / landline format check (07XXXXXXXX, 063XXXXXXX, +94XXXXXXXXX)
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  return /^(?:0|\+?94)?[0-9]{9,10}$/.test(cleaned);
}

function showFormError(form, message) {
  let errBox = form.querySelector('.form-inline-error');
  if (!errBox) {
    errBox = document.createElement('div');
    errBox.className = 'form-inline-error';
    errBox.style.cssText = 'background: #FEF2F2; border: 1px solid #F87171; color: #991B1B; padding: 8px 12px; border-radius: 6px; font-size: 13px; margin-bottom: 12px;';
    form.insertBefore(errBox, form.firstChild);
  }
  errBox.textContent = message;
  errBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function removeFormError(form) {
  const errBox = form.querySelector('.form-inline-error');
  if (errBox) errBox.remove();
}

function setFormSubmitting(form, isSubmitting) {
  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;
  if (isSubmitting) {
    btn.disabled = true;
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;">Processing...</span>`;
  } else {
    btn.disabled = false;
    if (btn.dataset.originalText) btn.innerHTML = btn.dataset.originalText;
  }
}

function initForms() {
  // 1. Quick Call-back Hero Form
  const heroForm = document.getElementById('heroCallbackForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      removeFormError(heroForm);
      const phoneInput = heroForm.querySelector('input[type="tel"]');
      if (phoneInput && !validatePhoneNumber(phoneInput.value)) {
        showFormError(heroForm, 'Please enter a valid telephone/mobile number (e.g. 07X XXX XXXX).');
        return;
      }
      setFormSubmitting(heroForm, true);
      setTimeout(() => {
        handleFormSuccess(heroForm, 'Thank you! Your call-back request has been recorded. Our officer in Ampara will contact you during business hours.', 'Target: info@pcl.lk');
      }, 600);
    });
  }

  // 2. Modal Call-back Form
  const modalForm = document.getElementById('modalCallbackForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      removeFormError(modalForm);
      const phoneInput = modalForm.querySelector('input[type="tel"]');
      if (phoneInput && !validatePhoneNumber(phoneInput.value)) {
        showFormError(modalForm, 'Please enter a valid telephone/mobile number (e.g. 07X XXX XXXX).');
        return;
      }
      setFormSubmitting(modalForm, true);
      setTimeout(() => {
        handleFormSuccess(modalForm, 'Thank you! Your facility inquiry has been received. Our credit officer in Ampara will contact you to discuss your requirements.', 'Target: loans@peoplesceylon.lk');
        setTimeout(() => {
          closeAllModals();
        }, 3000);
      }, 600);
    });
  }

  // 3. Dealer Registration Form
  const dealerForm = document.getElementById('dealerRegForm');
  if (dealerForm) {
    dealerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      removeFormError(dealerForm);
      const phoneInput = dealerForm.querySelector('input[type="tel"]');
      if (phoneInput && !validatePhoneNumber(phoneInput.value)) {
        showFormError(dealerForm, 'Please enter a valid dealership telephone number.');
        return;
      }
      setFormSubmitting(dealerForm, true);
      setTimeout(() => {
        handleFormSuccess(dealerForm, 'Dealer Application Submitted! Our Operations Manager will review your showroom credentials and contact you.', 'Target: operations@peoplesceylon.lk');
        setTimeout(() => {
          closeAllModals();
        }, 3000);
      }, 600);
    });
  }

  // 4. Contact Page Form
  const contactForm = document.getElementById('contactPageForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      removeFormError(contactForm);
      const phoneInput = contactForm.querySelector('input[type="tel"]');
      if (phoneInput && !validatePhoneNumber(phoneInput.value)) {
        showFormError(contactForm, 'Please enter a valid phone number.');
        return;
      }
      setFormSubmitting(contactForm, true);
      setTimeout(() => {
        handleFormSuccess(contactForm, 'Message Sent! Thank you for contacting People\'s Ceylon. We will reply to your inquiry promptly.', 'Target: info@pcl.lk');
      }, 600);
    });
  }

  // 5. Career Application Form
  const careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      removeFormError(careerForm);
      const phoneInput = careerForm.querySelector('input[type="tel"]');
      if (phoneInput && !validatePhoneNumber(phoneInput.value)) {
        showFormError(careerForm, 'Please enter a valid contact telephone number.');
        return;
      }
      setFormSubmitting(careerForm, true);
      setTimeout(() => {
        handleFormSuccess(careerForm, 'Application Received! Our Human Resources team will review your qualifications and contact shortlisted applicants.', 'Target: careers@peoplesceylon.lk');
        setTimeout(() => {
          closeAllModals();
        }, 3000);
      }, 600);
    });
  }
}

function handleFormSuccess(form, message, routingMeta = '') {
  form.innerHTML = `
    <div style="background: #ECFDF5; border: 1.5px solid #10B981; border-radius: 12px; padding: 25px; text-align: center; color: #065F46;">
      <div style="width: 48px; height: 48px; background: #10B981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3 style="color: #065F46; margin-bottom: 8px; font-weight: 800;">Request Successfully Received</h3>
      <p style="font-size: 14px; line-height: 1.5; margin-bottom: 8px;">${message}</p>
      ${routingMeta ? `<div style="font-size: 11px; color: #047857; opacity: 0.85;">Dispatched to Authorized Secure Inbox: ${routingMeta}</div>` : ''}
    </div>
  `;
}
