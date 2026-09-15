/**
 * Princess Skye — Official Website Core JavaScript
 * 18 YO Bratty British Findom Princess · "You exist to spoil me"
 * Minimalist Haute Luxury Experience (Bilingual EN / DE)
 */
(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // UTILITIES
  // --------------------------------------------------------------------------
  const getEl = (sel, ctx = document) => ctx.querySelector(sel);
  const getEls = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, type, handler, opts) => el && el.addEventListener(type, handler, opts);

  // --------------------------------------------------------------------------
  // 1. INTERNATIONALIZATION (EN / DE)
  // --------------------------------------------------------------------------
  const translations = {
    en: {
      age_title: "Royal Age Verification",
      age_desc: "This sanctuary contains 18+ adult findom content and erotic themes. You must be at least 18 years of age (or the age of majority in your jurisdiction) to enter.",
      age_enter: "I Am 18+ — Enter Royal Realm",
      age_exit: "Exit Website",
      age_meta: 'Strictly 18+ · <a href="content-notice.html">Content Notice</a> &amp; <a href="terms.html">Terms</a>',
      nav_about: "About",
      nav_channels: "Channels",
      nav_vault: "Media Vault",
      nav_debt: "Debt Ledger",
      nav_spoil: "Spoil Intent",
      nav_cta: "Spoil on Revolut",
      nav_overview: "Overview",
      hero_eyebrow: "18 YO BRATTY BRITISH FINDOM PRINCESS · EST. 2025",
      hero_desc: "Bratty, demanding, and utterly irresistible. Welcome to my official sanctuary. Remember your place: you exist to spoil me.",
      hero_btn_revolut: "Spoil on Revolut ↗",
      hero_btn_debt: "Debt Ledger ↗",
      hero_btn_loyalfans: "LoyalFans VIP ↗",
      hero_caption: "British Findom Royalty",
      motto_1: "You do not negotiate with royalty.",
      motto_2: "You exist to <em>spoil me.</em>",
      motto_3: "Pay your tributes, clear your debt, and know your place.",
      channels_eyebrow: "Verified Royal Endpoints",
      channels_title: "Her Only Official Links",
      channels_desc: "Beware of impersonators and copycats. Below are the ONLY verified official platforms, tribute channels, and wishlists for Princess Skye.",
      card_lf_badge: "UNCENSORED VIP &amp; DM",
      card_lf_title: "LoyalFans",
      card_lf_desc: "Exclusive uncensored videos, full photo collections, pay-per-view drops, and direct VIP 1-on-1 messaging with Princess Skye.",
      card_lf_btn: "Enter LoyalFans ↗",
      card_dk_badge: "FINSUB DEBT TRACKER",
      card_dk_title: "DebtKeeper",
      card_dk_desc: "Official finsub debt assignment and financial servitude tracking. Sign on, take on debt, and pay off your balance to your Princess.",
      card_dk_btn: "Open Debt Ledger ↗",
      card_fv_badge: "VIP SUBSCRIPTION FEED",
      card_fv_title: "Fanvue",
      card_fv_desc: "High-definition photo feeds, daily updates, behind-the-scenes teasers, and ongoing subscription access to Princess Skye's world.",
      card_fv_btn: "Join Fanvue ↗",
      card_rev_badge: "INSTANT CASH SPOILING",
      card_rev_title: "Revolut",
      card_rev_desc: "Instant, frictionless bank-speed tributes. Send cash directly to fund Princess Skye's shopping spree, coffee, or whatever she commands.",
      card_rev_btn: "Spoil on Revolut ↗",
      card_pp_badge: "DIRECT TRIBUTE",
      card_pp_title: "PayPal",
      card_pp_desc: "Fast international financial tributes. Gratuitous cash submission sent directly via PayPal Me to show total financial appreciation.",
      card_pp_btn: "Send via PayPal ↗",
      card_amz_badge: "LUXURY GIFTS",
      card_amz_title: "Amazon UK Wishlist",
      card_amz_desc: "Hand-picked wardrobe, beauty, designer indulgences, and spoiling items shipped directly and discreetly to Princess Skye.",
      card_amz_btn: "Spoil from Amazon ↗",
      card_th_badge: "PRIVACY-FIRST GIFTS",
      card_th_title: "Throne Wishlist",
      card_th_desc: "Verified 100% private crowdfunding and luxury gifting registry. Fund specific royal wishes or contribute toward large indulgences safely.",
      card_th_btn: "View Throne Registry ↗",
      card_x_badge: "OFFICIAL MAIN FEED",
      card_x_title: "X (Twitter) Main",
      card_x_desc: "Princess Skye's primary public kingdom. Daily brat findom thoughts, lifestyle updates, teasers, and spontaneous drain commands.",
      card_x_btn: "Follow on X (@princessskyexxx) ↗",
      card_xb_badge: "OFFICIAL BACKUP ACCOUNT",
      card_xb_title: "X Backup Account",
      card_xb_desc: "Princess Skye's official verified backup account. Follow immediately to guarantee uninterrupted contact, announcements, and updates.",
      card_xb_btn: "Follow Backup (@Skyesbackup_x) ↗",
      vault_eyebrow: "EXCLUSIVES &amp; TEASERS",
      vault_title: "Royal Media Vault",
      vault_desc: "Official preview clips and teasers from Princess Skye. Complete uncensored video sets and custom requests available on LoyalFans &amp; Fanvue.",
      vault_tab_all: "All Previews",
      vault_tab_videos: "Video Teasers",
      vault_tab_photos: "Photo Gallery",
      spoil_eyebrow: "Financial Submission",
      spoil_title: "Tribute Brief &amp; Spoil Intent",
      spoil_desc: "Declare your tribute to Princess Skye. Select your platform, specify your offering, and generate a verified tribute declaration.",
      banner_title: "Tribute Brief Copied &amp; Redirecting",
      banner_desc: "Your tribute declaration has been copied to your clipboard. Present it with your tribute.",
      label_name: "Your Finsub Name / Moniker <span>(optional)</span>",
      ph_name: "What should Princess Skye call you?",
      label_contact: "Your Social Handle <span>(optional)</span>",
      ph_contact: "e.g. @YourHandle on X / LoyalFans",
      label_channel: "Tribute Endpoint <span>(required)</span>",
      label_budget: "Tribute Amount / Offering <span>(optional)</span>",
      opt_bdg_1: "£50 (Coffee &amp; Spoil)",
      opt_bdg_2: "£100 (Brat Tribute)",
      opt_bdg_3: "£250 (Shopping Spree Fund)",
      opt_bdg_4: "£500 (Designer Luxury Tribute)",
      opt_bdg_5: "£1,000+ (Princess VIP Devotion)",
      opt_bdg_6: "Wishlist Item Purchased",
      label_service: "Submission Reason <span>(optional)</span>",
      opt_srv_1: 'Unconditional Gratuitous Spoil ("You exist to spoil me")',
      opt_srv_2: "Debt Reduction / DebtKeeper Balance Payment",
      opt_srv_3: "Wishlist Gift Fulfillment (Amazon / Throne)",
      opt_srv_4: "VIP Content &amp; Subscription Unlock",
      opt_srv_5: "Custom Humiliation / Findom Request",
      label_details: "Submission Note <span>(optional)</span>",
      ph_details: "State your devotion, why Princess Skye should take your money, or transaction reference...",
      terms_text: "I confirm that I am at least 18 years of age and that all tributes are 100% voluntary, gratuitous, and non-refundable gifts. <strong>(required)</strong>",
      btn_submit: "Copy Tribute Brief &amp; Open Selected Platform",
      btn_quick_rev: "Instant Spoil: Revolut ↗",
      btn_quick_dk: "Pay Debt: DebtKeeper ↗",
      btn_quick_lf: "Message on LoyalFans ↗",
      footer_motto: '18 YO Bratty British Findom Princess · "You exist to spoil me"',
      legal_notice: "18+ Content Notice",
      legal_terms: "Terms &amp; Policies",
      legal_privacy: "Privacy",
      legal_cookies: "Cookies",
      footer_copyright: "&copy; 2025–2026 Princess Skye. All Rights Reserved. Strictly 18+ Adult Findom Entertainment.",
      toast_copied: "Copied: ",
      toast_tribute: "Tribute brief copied! Opening platform..."
    },
    de: {
      age_title: "Königliche Altersbestätigung",
      age_desc: "Dieses Heiligtum enthält 18+ Adult Findom Inhalte. Du musst mindestens 18 Jahre alt sein, um das Reich von Princess Skye zu betreten.",
      age_enter: "Ich bin 18+ — Reich betreten",
      age_exit: "Website verlassen",
      age_meta: 'Streng 18+ · <a href="content-notice.html">Inhaltshinweis</a> &amp; <a href="terms.html">AGB</a>',
      nav_about: "Über Skye",
      nav_channels: "Kanäle",
      nav_vault: "Medien-Vault",
      nav_debt: "Schuldenbuch",
      nav_spoil: "Tributabsicht",
      nav_cta: "Tribut via Revolut",
      nav_overview: "Übersicht",
      hero_eyebrow: "18-JÄHRIGE BRATTY BRITISH FINDOM PRINCESS · SEIT 2025",
      hero_desc: "Verwöhnt, fordernd und absolut unwiderstehlich. Willkommen in meinem Reich. Vergiss nie: Du existierst, um mich zu verwöhnen.",
      hero_btn_revolut: "Auf Revolut verwöhnen ↗",
      hero_btn_debt: "Schuldenbuch ↗",
      hero_btn_loyalfans: "LoyalFans VIP ↗",
      hero_caption: "British Findom Royalty",
      motto_1: "Mit Königen verhandelt man nicht.",
      motto_2: "Du existierst, um <em>mich zu verwöhnen.</em>",
      motto_3: "Zahle deine Tribute, begleiche Schulden und kenne deinen Platz.",
      channels_eyebrow: "Verifizierte Endpunkte",
      channels_title: "Ihre einzigen offiziellen Links",
      channels_desc: "Achtung vor Fake-Profilen. Hier findest du die EINZIGEN verifizierten Profile, Spoil-Kanäle und Wunschlisten von Princess Skye.",
      card_lf_badge: "VIP &amp; DIREKT-CHAT",
      card_lf_title: "LoyalFans",
      card_lf_desc: "Exklusiver Feed, unzensierte Videos, PPV-Inhalte und privater 1-zu-1-Austausch mit Princess Skye.",
      card_lf_btn: "LoyalFans öffnen ↗",
      card_dk_badge: "FINSUB SCHULDENBUCH",
      card_dk_title: "DebtKeeper",
      card_dk_desc: "Offizielle Finsub-Schuldenverwaltung. Verpflichte dich, trage Schulden ab und diene deiner Prinzessin.",
      card_dk_btn: "Schuldenbuch öffnen ↗",
      card_fv_badge: "VIP ABONNEMENT",
      card_fv_title: "Fanvue",
      card_fv_desc: "HD-Fotostrecken, regelmäßige Updates, exklusive Einblicke und dauerhafter Zugang zu Skyes Welt.",
      card_fv_btn: "Fanvue beitreten ↗",
      card_rev_badge: "SOFORT-TRIBUT",
      card_rev_title: "Revolut",
      card_rev_desc: "Direkte und blitzschnelle Bargeld-Tribute. Finanziere Skyes Shopping-Wünsche und Launen ohne Reibung.",
      card_rev_btn: "Auf Revolut senden ↗",
      card_pp_badge: "DIREKTE ZAHLUNG",
      card_pp_title: "PayPal",
      card_pp_desc: "Schnelle internationale Tribute. Freiwillige finanzielle Unterwerfung direkt via PayPal Me.",
      card_pp_btn: "Via PayPal senden ↗",
      card_amz_badge: "WUNSCHLISTE",
      card_amz_title: "Amazon UK Wishlist",
      card_amz_desc: "Ausgewählte Designer-Artikel, Mode und Luxusgeschenke, direkt und diskret an Princess Skye geliefert.",
      card_amz_btn: "Von Amazon schenken ↗",
      card_th_badge: "DISKRETE GESCHENKE",
      card_th_title: "Throne Wishlist",
      card_th_desc: "Verifizierte, diskrete Geschenk- und Crowdfunding-Plattform für Luxusziele und Wünsche.",
      card_th_btn: "Throne ansehen ↗",
      card_x_badge: "OFFIZIELLER HAUPTACCOUNT",
      card_x_title: "X (Twitter) Main",
      card_x_desc: "Skyes öffentliche Bühne. Tägliche Findom-Gedanken, Lifestyle-Updates und spontane Tribut-Aufrufe.",
      card_x_btn: "Auf X folgen (@princessskyexxx) ↗",
      card_xb_badge: "BACKUP-ACCOUNT",
      card_xb_title: "X Backup Account",
      card_xb_desc: "Offizieller Backup-Account. Folge hier für ununterbrochene Erreichbarkeit und wichtige Updates.",
      card_xb_btn: "Backup folgen (@Skyesbackup_x) ↗",
      vault_eyebrow: "EXKLUSIV &amp; TEASER",
      vault_title: "Königlicher Medien-Vault",
      vault_desc: "Offizielle Vorschau-Clips und Fotos von Princess Skye. Vollständige unzensierte Videosets auf LoyalFans &amp; Fanvue.",
      vault_tab_all: "Alle Vorschauen",
      vault_tab_videos: "Video-Teaser",
      vault_tab_photos: "Fotogalerie",
      spoil_eyebrow: "Finanzielle Unterwerfung",
      spoil_title: "Tribut-Erklärung &amp; Absicht",
      spoil_desc: "Erkläre deinen Tribut an Princess Skye. Wähle die Plattform, bestimme deinen Betrag und generiere dein Tribut-Briefing.",
      banner_title: "Tribut-Briefing kopiert &amp; Weiterleitung",
      banner_desc: "Deine Erklärung wurde in die Zwischenablage kopiert. Füge sie deiner Zahlung bei.",
      label_name: "Dein Finsub-Name / Alias <span>(optional)</span>",
      ph_name: "Wie soll Princess Skye dich nennen?",
      label_contact: "Dein Social Handle <span>(optional)</span>",
      ph_contact: "z.B. @DeinHandle auf X / LoyalFans",
      label_channel: "Tribut-Kanal <span>(erforderlich)</span>",
      label_budget: "Tributhöhe / Gabe <span>(optional)</span>",
      opt_bdg_1: "50 £ (Kaffee &amp; Spoil)",
      opt_bdg_2: "100 £ (Brat Tribute)",
      opt_bdg_3: "250 £ (Shopping-Kasse)",
      opt_bdg_4: "500 £ (Designer-Luxus)",
      opt_bdg_5: "1.000 £+ (Princess VIP)",
      opt_bdg_6: "Wunschlisten-Artikel gekauft",
      label_service: "Grund der Unterwerfung <span>(optional)</span>",
      opt_srv_1: 'Bedingungsloses Verwöhnen ("You exist to spoil me")',
      opt_srv_2: "Schuldentilgung / DebtKeeper Balance",
      opt_srv_3: "Geschenkerfüllung (Amazon / Throne)",
      opt_srv_4: "VIP Content &amp; Abonnement-Freischaltung",
      opt_srv_5: "Individuelle Demütigung / Findom-Anfrage",
      label_details: "Ergebene Nachricht <span>(optional)</span>",
      ph_details: "Erkläre deine Ergebenheit oder nenne Referenzdaten deiner Zahlung...",
      terms_text: "Ich bestätige, dass ich mindestens 18 Jahre alt bin und alle Tribute 100% freiwillige, unentgeltliche Schenkungen ohne Rückerstattungsanspruch sind. <strong>(erforderlich)</strong>",
      btn_submit: "Tribut-Briefing kopieren &amp; Plattform öffnen",
      btn_quick_rev: "Sofort: Revolut ↗",
      btn_quick_dk: "Schulden: DebtKeeper ↗",
      btn_quick_lf: "Nachricht: LoyalFans ↗",
      footer_motto: '18 YO Bratty British Findom Princess · "You exist to spoil me"',
      legal_notice: "Inhaltshinweis (18+)",
      legal_terms: "AGB &amp; Richtlinien",
      legal_privacy: "Datenschutz",
      legal_cookies: "Cookies",
      footer_copyright: "&copy; 2025–2026 Princess Skye. Alle Rechte vorbehalten. Streng 18+ Erwachsenenunterhaltung.",
      toast_copied: "Kopiert: ",
      toast_tribute: "Tribut-Briefing kopiert! Plattform wird geöffnet..."
    }
  };

  let currentLang = 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem('qe_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    getEls('[data-lang-switch]').forEach(btn => {
      const isActive = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    const dict = translations[lang];
    getEls('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    getEls('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });
  };

  const initI18n = () => {
    let saved = 'en';
    try {
      saved = localStorage.getItem('qe_lang') || (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en');
    } catch (e) {}

    getEls('[data-lang-switch]').forEach(btn => {
      on(btn, 'click', () => {
        const lang = btn.getAttribute('data-lang-switch');
        setLanguage(lang);
      });
    });

    setLanguage(saved);
  };

  // --------------------------------------------------------------------------
  // 2. AGE GATE
  // --------------------------------------------------------------------------
  const initAgeGate = () => {
    const gate = getEl('#age-gate');
    if (!gate) return;

    const TTL_DAYS = 30;
    const enterBtn = getEl('[data-age-enter]', gate);
    const exitBtn = getEl('[data-age-exit]', gate);

    const isVerified = () => {
      try {
        const stored = localStorage.getItem('qe_age_verified_v2');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Date.now() < parsed.expiry) return true;
          localStorage.removeItem('qe_age_verified_v2');
        }
      } catch (e) {}
      return document.cookie.indexOf('qe_age_verified_v2=1') !== -1;
    };

    if (isVerified()) {
      document.documentElement.classList.add('age-verified');
      gate.hidden = true;
      return;
    }

    on(enterBtn, 'click', () => {
      const expiry = Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000;
      try {
        localStorage.setItem('qe_age_verified_v2', JSON.stringify({ verified: true, expiry }));
      } catch (e) {}
      document.cookie = `qe_age_verified_v2=1; max-age=${TTL_DAYS * 86400}; path=/; SameSite=Lax`;
      document.documentElement.classList.add('age-verified');
      gate.hidden = true;
    });

    on(exitBtn, 'click', () => {
      window.location.href = 'https://www.google.com';
    });
  };

  // --------------------------------------------------------------------------
  // 3. NAVIGATION
  // --------------------------------------------------------------------------
  const initNav = () => {
    const openBtn = getEl('[data-nav-open]');
    const closeBtn = getEl('[data-nav-close]');
    const drawer = getEl('#nav-drawer');

    if (!drawer) return;

    const openDrawer = () => drawer.classList.add('is-open');
    const closeDrawer = () => drawer.classList.remove('is-open');

    on(openBtn, 'click', openDrawer);
    on(closeBtn, 'click', closeDrawer);

    getEls('a[href^="#"]', drawer).forEach(link => {
      on(link, 'click', () => {
        closeDrawer();
      });
    });

    on(document, 'keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  };

  // --------------------------------------------------------------------------
  // 4. CLIPBOARD COPY HANDLER
  // --------------------------------------------------------------------------
  const showToast = msg => {
    let toast = getEl('#site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  };

  const initCopyChips = () => {
    getEls('[data-copy-tag]').forEach(chip => {
      on(chip, 'click', async () => {
        const text = chip.getAttribute('data-copy-tag');
        try {
          await navigator.clipboard.writeText(text);
          const prefix = translations[currentLang].toast_copied || 'Copied: ';
          showToast(`${prefix}${text}`);
        } catch (e) {
          showToast(text);
        }
      });
    });
  };

  // --------------------------------------------------------------------------
  // 5. TRIBUTE INTENT & SPOIL SUBMISSION SYSTEM
  // --------------------------------------------------------------------------
  const initBookingSystem = () => {
    const form = getEl('#booking-form');
    if (!form) return;

    const banner = getEl('#booking-success');

    on(form, 'submit', async e => {
      e.preventDefault();

      const name = getEl('#book-name')?.value.trim() || 'Anonymous Finsub';
      const contact = getEl('#book-contact')?.value.trim() || 'N/A';
      const platform = getEl('#book-platform')?.value || 'Revolut (@skye_k08)';
      const budget = getEl('#book-budget')?.value || 'Standard Spoil';
      const service = getEl('#book-service')?.value || 'Unconditional Spoil';
      const details = getEl('#book-details')?.value.trim() || 'You exist to spoil me.';

      const briefText = currentLang === 'de' ?
`PRINCESS SKYE — TRIBUT-ERKLÄRUNG
• Finsub / Alias: ${name}
• Social Handle: ${contact}
• Zielkanal: ${platform}
• Tributhöhe: ${budget}
• Absicht / Grund: ${service}
• Ergebene Notiz: ${details}
• Leitsatz: "You exist to spoil me."`
:
`PRINCESS SKYE — TRIBUTE BRIEF
• Finsub / Moniker: ${name}
• Social Handle: ${contact}
• Target Endpoint: ${platform}
• Offering / Amount: ${budget}
• Intent / Purpose: ${service}
• Devotion Note: ${details}
• Principle: "You exist to spoil me."`;

      try {
        await navigator.clipboard.writeText(briefText);
      } catch (err) {}

      if (banner) banner.classList.add('is-visible');
      const toastMsg = translations[currentLang].toast_tribute || 'Tribute brief copied! Opening platform...';
      showToast(toastMsg);

      let targetUrl = 'https://revolut.me/skye_k08';
      if (platform.includes('DebtKeeper')) {
        targetUrl = 'https://debtkeeper.app/d/princess_skye';
      } else if (platform.includes('LoyalFans')) {
        targetUrl = 'https://www.loyalfans.com/princessskyexxx';
      } else if (platform.includes('PayPal')) {
        targetUrl = 'https://www.paypal.com/paypalme/princesssksyex';
      } else if (platform.includes('Fanvue')) {
        targetUrl = 'https://www.fanvue.com/princess_skyexx';
      } else if (platform.includes('Amazon')) {
        targetUrl = 'https://www.amazon.co.uk/hz/wishlist/ls/3F2XAW7VXU6D3?ref_=wl_share';
      } else if (platform.includes('Throne')) {
        targetUrl = 'https://throne.com/xprincessskyexx';
      } else if (platform.includes('X Main')) {
        targetUrl = 'https://x.com/princessskyexxx';
      }

      setTimeout(() => {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }, 750);
    });
  };

  // --------------------------------------------------------------------------
  // 6. HERO IMAGE CROSSFADE SWITCHER (44 Authentic Skye Photos)
  // --------------------------------------------------------------------------
  const initHeroImageSwitcher = () => {
    const primaryImg = getEl('#heroPrimaryImg');
    const secondaryImg = getEl('#heroSecondaryImg');
    if (!primaryImg || !secondaryImg) return;

    // Load all 44 optimized Princess Skye photos
    const images = Array.from({ length: 44 }, (_, i) => `assets/img/skye_${String(i + 1).padStart(2, '0')}.jpg`);

    // Preload top glamour portraits immediately
    const priorityPreload = [
      'assets/img/skye_30.jpg',
      'assets/img/skye_23.jpg',
      'assets/img/skye_08.jpg',
      'assets/img/skye_21.jpg',
      'assets/img/skye_04.jpg',
      'assets/img/skye_18.jpg',
      'assets/img/skye_40.jpg'
    ];
    priorityPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    let currentIndex = 29; // Starts on skye_30.jpg
    let isShowingPrimary = true;
    let timer = null;

    const switchImage = () => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === currentIndex && images.length > 1);

      currentIndex = nextIndex;
      const nextSrc = images[currentIndex];

      const activeLayer = isShowingPrimary ? primaryImg : secondaryImg;
      const incomingLayer = isShowingPrimary ? secondaryImg : primaryImg;

      incomingLayer.src = nextSrc;
      incomingLayer.classList.add('is-incoming');

      requestAnimationFrame(() => {
        incomingLayer.classList.add('is-active');
        setTimeout(() => {
          activeLayer.classList.remove('is-active', 'is-incoming');
          incomingLayer.classList.remove('is-incoming');
          isShowingPrimary = !isShowingPrimary;
        }, 1400);
      });
    };

    timer = setInterval(switchImage, 10000);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        clearInterval(timer);
        timer = setInterval(switchImage, 10000);
      }
    });
  };

  // --------------------------------------------------------------------------
  // 7. MEDIA VAULT TABS & VIDEO PREVIEWS
  // --------------------------------------------------------------------------
  const initMediaVault = () => {
    const tabBtns = getEls('.vault-tab-btn');
    const items = getEls('.vault-item');

    tabBtns.forEach(btn => {
      on(btn, 'click', () => {
        tabBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
          const type = item.getAttribute('data-media-type');
          if (filter === 'all' || filter === type) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Play video on hover for desktop, pause when mouse leaves
    getEls('.vault-item video').forEach(vid => {
      on(vid.parentElement, 'mouseenter', () => {
        vid.play().catch(() => {});
      });
      on(vid.parentElement, 'mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
      });
    });
  };

  // --------------------------------------------------------------------------
  // 8. LIGHTBOX MODAL VIEWER
  // --------------------------------------------------------------------------
  const initLightbox = () => {
    const lightbox = getEl('#site-lightbox');
    if (!lightbox) return;

    const closeBtn = getEl('.lightbox__close', lightbox);
    const mediaContainer = getEl('.lightbox__content', lightbox);
    const captionEl = getEl('.lightbox__caption', lightbox);

    const openLightbox = (type, src, title) => {
      mediaContainer.innerHTML = '';
      if (type === 'video') {
        const vid = document.createElement('video');
        vid.src = src;
        vid.controls = true;
        vid.autoplay = true;
        vid.playsInline = true;
        mediaContainer.appendChild(vid);
      } else {
        const img = document.createElement('img');
        img.src = src;
        img.alt = title || 'Princess Skye Exclusive';
        mediaContainer.appendChild(img);
      }
      if (captionEl) captionEl.textContent = title || 'Princess Skye';
      lightbox.classList.add('is-open');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      const activeVid = mediaContainer.querySelector('video');
      if (activeVid) activeVid.pause();
      setTimeout(() => {
        mediaContainer.innerHTML = '';
      }, 300);
    };

    getEls('.vault-item').forEach(item => {
      on(item, 'click', () => {
        const type = item.getAttribute('data-media-type');
        const src = item.getAttribute('data-src');
        const title = item.querySelector('.vault-item__title')?.textContent || '';
        openLightbox(type, src, title);
      });
    });

    on(closeBtn, 'click', closeLightbox);
    on(lightbox, 'click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    on(document, 'keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  };

  // --------------------------------------------------------------------------
  // BOOTSTRAP
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initAgeGate();
    initNav();
    initCopyChips();
    initBookingSystem();
    initHeroImageSwitcher();
    initMediaVault();
    initLightbox();
  });
})();
