// =============================================================
//  TERSS GLOBE d.o.o. — konfiguracija stranice
//  (prilagođeno sadržaju s www.terssing.com)
// =============================================================

export const site = {
  // --- Osnovno ---
  name: "TERSS GLOBE d.o.o.",
  shortName: "Terss Globe",
  tagline: "Gradimo brze i moderne web stranice koje ljudi rado koriste.",
  description:
    "Od ideje do objave u samo par dana.",
  url: "https://www.terssing.com",
  lang: "hr",

  // --- Kontakt ---
  phone: "+385 99 358 0298",
  phoneHref: "+385993580298",
  email: "terss@terssing.com",
  address: "Drniška ulica 24, 10000 Zagreb · OIB: 81839516990",
  hours: "Po dogovoru",

  // --- Izrada stranice (kredit u footeru) ---
  developer: {
    name: "Terss Globe d.o.o.",
    url: "https://www.terssing.com",
  },

  // --- Društvene mreže (ostavi prazno "" da se sakrije) ---
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },

  // --- Boje branda (profinjena indigo/violet shema) ---
  colors: {
    primary: "#4338ca",
    primaryDark: "#312e81",
    text: "#1a1830",
    muted: "#5c5b73",
    bg: "#ffffff",
    bgAlt: "#f5f4fb",
  },

  // --- Kontakt forma (Web3Forms access key) ---
  formAccessKey: "497bc88a-170d-492c-bb26-1b0b9fc97a6a",

  // --- Rezervacije ---
  // "google"   = Google Calendar zakazivanja (upisuje se u Google, nudi samo slobodne termine)
  // "form"     = jednostavan upit termina -> email (Web3Forms)
  // "external" = gumb na vanjski servis (Calendly i sl.)
  // "off"      = skriveno
  booking: {
    // "google"        = ugrađeni Google kalendar na stranici
    // "google-button" = Googleov gumb koji otvara kalendar u skočnom prozoru
    // "form" / "external" / "off"
    mode: "off" as "google" | "google-button" | "form" | "external" | "off",
    googleBookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ZE3n-Vx4v_PUZB7Gj-yBDc_tnukSi4AKozcK-r3QGQa4bY1w7veVwDvY_KxpVtIMTnLBh5_7q?gv=true",
    googleBookingLabel: "Rezerviraj termin",
    googleSheetEndpoint: "",
    externalUrl: "",
    externalLabel: "Rezerviraj termin",
  },
};

// --- Usluge ---
export const services = [
  {
    icon: "/icons/www.png",
    title: "Izrada web stranica",
    text: "Brze, moderne i mobilno prilagođene web stranice za tvrtke i obrte — od vizitke naviše.",
  },
  {
    icon: "/icons/uiux.png",
    title: "UX/UI dizajn",
    text: "Osmišljavamo jednostavna i lijepa sučelja koja je ugodno koristiti.",
  },
  {
    icon: "/icons/seo.png",
    title: "SEO i vidljivost",
    text: "Stranice izrađujemo tako da ih Google dobro čita i da vas klijenti lakše pronađu.",
  },
  {
    icon: "/icons/odrzavanje.png",
    title: "Održavanje i podrška",
    text: "Nakon objave nastavljamo s ažuriranjima, izmjenama i tehničkom podrškom.",
  },
];

// --- Sekcija "O nama" ---
export const about = {
  title: "O nama",
  text: [
    "TERSS GLOBE je zagrebački studio za izradu web stranica. Spajamo dizajn i tehnologiju u stranice koje su brze, jasne i ugodne za korištenje.",
    "Radimo za tvrtke i obrte — od jednostavne vizitke do većih stranica, uz punu tehničku brigu.",
  ],
  stats: [
    { number: "100%", label: "mobilno prilagođeno" },
    { number: "SEO", label: "spremne za Google" },
    { number: "Zagreb", label: "sjedište" },
  ],
};

// --- Galerija / reference (isključeno dok nema web projekata za prikaz) ---
export const gallery = {
  enabled: false,
  title: "Reference",
  subtitle: "Nešto od našeg rada.",
  items: [] as { src?: string; alt: string; href?: string }[],
};

// --- Cjenik (isključeno) ---
export const pricing = {
  enabled: false,
  title: "Cjenik",
  subtitle: "",
  plans: [] as { name: string; price: string; features: string[]; highlighted: boolean }[],
};

// --- Česta pitanja ---
export const faq = {
  enabled: true,
  title: "Česta pitanja",
  items: [
    {
      q: "Koliko košta izrada stranice?",
      a: "Ovisi o opsegu. Nakon kratkog razgovora o vašim potrebama dobivate fiksnu ponudu, bez skrivenih troškova.",
    },
    {
      q: "Koliko traje izrada?",
      a: "Za tipičnu prezentacijsku stranicu obično 1–3 tjedna, ovisno o opsegu i brzini dostave materijala.",
    },
    {
      q: "Čija je domena i stranica na kraju?",
      a: "Vaše. Domenu registriramo na vašu tvrtku, a mi preuzimamo cjelokupnu tehničku brigu.",
    },
    {
      q: "Hoću li biti vidljiv na Googleu?",
      a: "Stranicu izrađujemo i prijavljujemo tako da ju Google dobro čita. Za dodatno pozicioniranje nudimo i SEO.",
    },
    {
      q: "Radi li stranica dobro na mobitelu?",
      a: "Da. Sve stranice izrađujemo mobilno-prvo i jednako dobro rade na mobitelu, tabletu i računalu.",
    },
    {
      q: "Mogu li kasnije mijenjati sadržaj?",
      a: "Da. Sitne izmjene pokrivene su mjesečnim održavanjem — javite nam što treba i riješimo.",
    },
    {
      q: "Kako primam upite poslane s kontakt forme?",
      a: "Direktno na vaš email, bez ikakvih prijava i dodatnih alata. Po želji ih možemo skupljati i u tablicu.",
    },
  ],
};

// --- Tim (isključeno) ---
export const team = {
  enabled: false,
  title: "Naš tim",
  subtitle: "",
  members: [] as { name: string; role: string; img: string }[],
};

// --- CTA sekcija (poziv na upitnik) ---
export const cta = {
  enabled: true,
  title: "Razmišljate o novoj web stranici?",
  text: "Ispunite kratki upitnik — traje par minuta. Na temelju odgovora javljamo se s prijedlogom i cijenom.",
  buttons: [
    { label: "Ispuni upitnik", href: "/upitnik" },
  ],
};

// --- Pravne stranice ---
export const legal = {
  updated: "01.01.2026.",
  privacy: {
    enabled: true,
    slug: "politika-privatnosti",
    title: "Politika privatnosti",
  },
  terms: {
    enabled: true,
    slug: "uvjeti-koristenja",
    title: "Uvjeti korištenja",
  },
};
