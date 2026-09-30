// =============================================================
//  TERSS GLOBE d.o.o. — konfiguracija stranice
//  (prilagođeno sadržaju s www.terssing.com)
// =============================================================

export const site = {
  // --- Osnovno ---
  name: "TERSS GLOBE d.o.o.",
  shortName: "Terss Globe",
  tagline: "Olakšajte klijentima put do vaših usluga.",
  // Dio slogana koji se u heroju ističe akcentnom bojom ("" = bez isticanja)
  taglineAccent: "vaših usluga.",
  description:
    "Digitalna rješenja koja prate vaše poslovanje. Od ideje do objave u samo par dana.",
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

  // --- Boje branda (shema "Globus": teal + koralj) ---
  colors: {
    primary: "#0f6b64",
    primaryDark: "#0a4a45",
    accent: "#c8442a",
    text: "#0e1f1d",
    muted: "#4f615e",
    bg: "#ffffff",
    bgAlt: "#eef5f3",
    line: "#d9e7e3",
    footer: "#0a2f2c",
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
    icon: "/icons/mob_app.png",
    title: "Izrada mobilnih aplikacija",
    text: "Aplikacije prilagođene vašim korisnicima i poslovnim ciljevima, od planiranja do objave.",
  },
  {
    icon: "/icons/mob_app_development.png",
    title: "Nadogradnja mobilnih aplikacija",
    text: "Nove funkcionalnosti i ažuriranja kako bi aplikacija pratila potrebe vašeg poslovanja.",
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
    "TERSS GLOBE izrađuje web stranice i mobilne aplikacije za tvrtke i obrte. Spajamo dizajn i tehnologiju kako bismo stvorili brza, jasna i jednostavna digitalna rješenja prilagođena vašem poslovanju i vašim korisnicima.",
    "Pomažemo vam od prve ideje do objave, a nakon toga stojimo vam na raspolaganju za podršku, ažuriranja i daljnji razvoj. Bilo da vam treba moderna web stranica ili mobilna aplikacija, cilj nam je olakšati klijentima da vas pronađu i koriste vaše usluge.",
  ],
  stats: [
    { number: "WEB + MOB", label: "rješenja prilagođena vašim korisnicima" },
    { number: "OD IDEJE", label: "do objave uz izradu i podršku na jednom mjestu" },
    { number: "NULA", label: "skrivenih troškova" },
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
      q: "Izrađujete li mobilne aplikacije?",
      a: "Da. Izrađujemo mobilne aplikacije prema ciljevima vašeg poslovanja i potrebama korisnika. Opseg i funkcionalnosti dogovaramo prije početka rada.",
    },
    {
      q: "Možete li nadograditi postojeću mobilnu aplikaciju?",
      a: "Da. Možemo dodati nove funkcionalnosti ili unaprijediti postojeće. Prvo pregledamo aplikaciju i dogovorimo opseg radova.",
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
  title: "Razmišljate o web stranici ili mobilnoj aplikaciji?",
  text: "Ispunite kratki upitnik — traje par minuta. Na temelju odgovora javljamo se s prijedlogom i cijenom.",
  buttons: [
    { label: "Upitnik za web", href: "/upitnik" },
    { label: "Upitnik za mobilnu aplikaciju", href: "/upitnik-mobilna-aplikacija" },
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
