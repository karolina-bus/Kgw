const competencyFilters = [
  "Wszystkie",
  "Organizacja",
  "Kulinaria",
  "Ogród",
  "Dzieci",
  "Relacje",
  "Rękodzieło",
  "Sport",
  "Fotografia",
  "Projekty",
  "Transport",
  "Inne"
];

const members = [
  {
    id: "ania",
    name: "Ania",
    title: "Języki obce • zadaniowość • skuteczne rozwiązywanie problemów",
    short: "Wspiera komunikację i szybko znajduje praktyczne rozwiązania.",
    tags: ["Relacje", "Projekty", "Inne"],
    powers: [
      "🇬🇧 język angielski",
      "🇫🇷 język francuski",
      "🧩 rozwiązywanie problemów",
      "✅ nastawienie zadaniowe"
    ],
    details: [
      { name: "Kompetencje językowe", description: "Wspieram działania wymagające komunikacji po angielsku i francusku." },
      { name: "Rozwiązywanie problemów", description: "Analizuję sytuację i skutecznie doprowadzam sprawy do rozwiązania." }
    ],
    help: ["🌍 tłumaczenia", "🧩 rozwiązywanie problemów", "📝 wsparcie projektowe"]
  },
  {
    id: "dorota",
    name: "Dorota",
    title: "Organizacja wydarzeń • relacje • ogród",
    short: "Super organizatorka z lekką ręką do ludzi i roślin.",
    tags: ["Organizacja", "Relacje", "Ogród", "Transport"],
    powers: [
      "🗓️ organizacja wydarzeń",
      "🤝 relacje i mediacje",
      "🌱 ogród i rośliny",
      "🚌 organizacja wyjazdów (także dla 20 osób)"
    ],
    details: [
      { name: "Organizacja i wydarzenia", description: "Planowanie i dopinanie wyjazdów oraz wydarzeń od A do Z." },
      { name: "Relacje z ludźmi", description: "Buduję dobrą atmosferę i skutecznie niweluję konflikty." },
      { name: "Prace ogrodowe", description: "Mam dobrą rękę do roślin i pielęgnacji zieleni." }
    ],
    help: ["🗓️ wydarzenia", "🚌 wyjazdy", "🌱 ogrody", "🤝 inicjatywy sąsiedzkie"]
  },
  {
    id: "martyna",
    name: "Martyna",
    title: "Charakteryzatyka • fotografia • praca ze zwierzętami",
    short: "Łączy twórczość z pasją do podróży i pracy ze zwierzętami.",
    tags: ["Fotografia", "Inne", "Relacje"],
    powers: ["🎭 charakteryzatyka i podróże", "🐶 wychowanie i układanie psa", "📸 fotografia", "🚶 spacery z psem"],
    details: [
      { name: "Twórczość", description: "Fotografia i charakteryzatyka podczas działań lokalnych." },
      { name: "Zwierzęta", description: "Praca z psem, cierpliwość i konsekwencja w działaniu." }
    ],
    help: ["📸 zdjęcia", "🎭 wsparcie artystyczne", "🐾 inicjatywy ze zwierzętami"]
  },
  {
    id: "grzes",
    name: "Grześ",
    title: "Integracja ludzi • wydarzenia • projekty lokalne",
    short: "Napędza wspólne działania i dobrze czuje potrzeby sąsiedzkie.",
    tags: ["Organizacja", "Relacje", "Projekty", "Inne"],
    powers: ["🎉 imprezy i grille", "🤝 integrowanie ludzi", "📄 realizacja projektów", "🎲 planszówki"],
    details: [
      { name: "Integracja i wydarzenia", description: "Organizuję spotkania, degustacje i działania integracyjne." },
      { name: "Sprawy lokalne", description: "Wspieram projekty i pomoc sąsiedzką." }
    ],
    help: ["🎉 organizacja wydarzeń", "🤝 integracja", "📄 wsparcie projektów"]
  },
  {
    id: "tomek",
    name: "Tomek",
    title: "Logistyka • transport • odpowiedzialne działanie",
    short: "Doświadczony kierowca i spokojna głowa przy zadaniach terenowych.",
    tags: ["Transport", "Organizacja", "Inne"],
    powers: ["🚗 doświadczony kierowca", "🧭 planowanie trasy", "🧳 organizacja dojazdów", "🌍 pasja do podróży"],
    details: [
      { name: "Logistyka i transport", description: "Dbam o bezpieczny i sprawny transport podczas inicjatyw." },
      { name: "Postawa", description: "Rozważnie podejmuję decyzje i wspieram zespół w terenie." }
    ],
    help: ["🚗 transport", "🧭 logistyka", "🚌 wsparcie wyjazdów"]
  },
  {
    id: "diana",
    name: "Diana",
    title: "Relacje • komunikacja • pracowitość",
    short: "Buduje dobre kontakty i sprawnie wspiera działania organizacyjne.",
    tags: ["Relacje", "Organizacja", "Inne"],
    powers: ["💬 łatwe nawiązywanie relacji", "🧭 szczerość i stawianie granic", "🧹 sprawność organizacyjna", "⚡ elastyczność i pracowitość"],
    details: [
      { name: "Komunikacja", description: "Tworzę otwartą atmosferę i wspieram zespół w relacjach." },
      { name: "Pracowitość", description: "Działam konkretnie, elastycznie i skutecznie." }
    ],
    help: ["🤝 wsparcie relacyjne", "🧹 organizacja przestrzeni", "🗂️ wsparcie działań"]
  },
  {
    id: "ewa",
    name: "Ewa",
    title: "Organizacja • kreatywność • aktywność",
    short: "Wnosi praktyczne pomysły, cierpliwość i energię do działania.",
    tags: ["Organizacja", "Relacje", "Sport", "Inne"],
    powers: ["🗂️ kwestie organizacyjne", "💡 praktyczne pomysły", "🎯 zaangażowanie i elastyczność", "🏃 aktywne spędzanie czasu"],
    details: [
      { name: "Organizacja i pomysłowość", description: "Dobrze planuję działania i proponuję konkretne rozwiązania." },
      { name: "Postawa", description: "Jestem cierpliwa, otwarta i pracowita, nastawiona na współpracę." }
    ],
    help: ["🗂️ organizacja", "💡 pomysły", "🤝 wsparcie zespołu"]
  },
  {
    id: "ela",
    name: "Ela",
    title: "Kulinaria • ogród • relacje",
    short: "Łączy pasję do gotowania, ogrodu i pracy z ludźmi.",
    tags: ["Kulinaria", "Ogród", "Relacje", "Inne"],
    powers: ["🍳 eksperymenty w kuchni", "🌿 ogrodnictwo", "💛 wsparcie ludzi i relacji", "📚 książki i podróże"],
    details: [
      { name: "Kulinaria", description: "Lubię próbować nowych smaków i dzielić się kuchenną pasją." },
      { name: "Relacje", description: "Wnoszę dużo dobrej energii, uśmiechu i chęci pomagania." }
    ],
    help: ["🍰 kuchnia", "🌿 ogród", "🤝 wsparcie sąsiedzkie"]
  },
  {
    id: "ola",
    name: "Ola",
    title: "Współpraca • szczerość • łagodzenie napięć",
    short: "Pomocna i współpracująca, wzmacnia zespół spokojem i dialogiem.",
    tags: ["Relacje", "Sport", "Inne"],
    powers: ["🤝 współpraca", "🕊️ rola łagodząca w zespole", "💬 szczera komunikacja", "🏃 bieganie"],
    details: [
      { name: "Relacje", description: "Łączę ludzi i wspieram dobrą atmosferę pracy." },
      { name: "Styl życia", description: "Aktywność fizyczna pomaga mi utrzymać energię i równowagę." }
    ],
    help: ["🤝 współpraca", "🕊️ mediacje", "🏃 aktywności lokalne"]
  },
  {
    id: "gosia-lila",
    name: "Gosia (Lila)",
    title: "Ogród • spokój • wsparcie codzienne",
    short: "Skromna i uczynna, z dużą wiedzą o kwiatach i warzywach.",
    tags: ["Ogród", "Relacje", "Inne"],
    powers: ["🌸 pielęgnacja kwiatów", "🥕 uprawa warzyw", "🕊️ spokój i równowaga", "📚 czytanie książek"],
    details: [
      { name: "Ogród i hodowla", description: "Dbam o rośliny i wspieram działania ogrodowe." },
      { name: "Cechy osobiste", description: "Wnoszę spokój, życzliwość i gotowość do pomocy." }
    ],
    help: ["🌿 ogród", "🥕 uprawy", "🤝 sąsiedzka pomoc"]
  },
  {
    id: "teresa",
    name: "Teresa",
    title: "Wycieczki • gotowanie • determinacja",
    short: "Organizuje, gotuje i dowozi sprawy do końca.",
    tags: ["Organizacja", "Kulinaria", "Transport", "Relacje"],
    powers: ["🚌 organizacja wycieczek", "🍲 gotowanie", "💪 determinacja", "🧭 wsparcie w trudnych sprawach"],
    details: [
      { name: "Organizacja i logistyka", description: "Skutecznie planuję i realizuję wyjazdy." },
      { name: "Kulinaria", description: "Świetnie czuję się w kuchni i lubię gotować dla innych." },
      { name: "Siła i wsparcie", description: "Nie poddaję się i wspieram zespół do końca procesu." }
    ],
    help: ["🚌 wyjazdy", "🍲 gotowanie", "💪 wsparcie zadaniowe"]
  },
  {
    id: "agata",
    name: "Agata",
    title: "Granty • projekty społeczne • rękodzieło",
    short: "Łączy działania społeczne, projekty i aktywność w terenie.",
    tags: ["Projekty", "Organizacja", "Rękodzieło", "Ogród", "Sport"],
    powers: ["📄 granty i wnioski", "🤝 inicjatywy społeczne", "🧵 rękodzieło", "🌲 ogród, las, góry"],
    details: [
      { name: "Pozyskiwanie środków", description: "Piszę wnioski i rozwijam inicjatywy społeczne." },
      { name: "Organizacja przestrzeni", description: "Organizuję wycieczki i działania wokół zieleni." },
      { name: "Manualność", description: "Lubię prace ręczne i twórcze." }
    ],
    help: ["📄 granty", "🗺️ projekty lokalne", "🧵 rękodzieło", "🌿 zieleń"]
  },
  {
    id: "renata",
    name: "Renata",
    title: "Liderstwo • mobilizacja • energia działania",
    short: "Konkretna organizatorka, która uruchamia ludzi i zadania.",
    tags: ["Organizacja", "Relacje", "Ogród", "Inne"],
    powers: ["🚀 mobilizacja zespołu", "🗂️ organizacja działań", "🌱 ogród i porządkowanie", "😄 humor i dystans"],
    details: [
      { name: "Liderstwo", description: "Zaangażowanie na 1000% i skuteczność w działaniu." },
      { name: "Postawa", description: "Jestem zdecydowana, towarzyska i nastawiona na efekt." }
    ],
    help: ["🚀 koordynacja", "🌱 ogród", "🧹 organizacja przestrzeni"]
  },
  {
    id: "karolina",
    name: "Karolina",
    title: "Rękodzieło • ogród • aktywności dla dzieci",
    short: "Ciepła, empatyczna i technicznie zaradna organizatorka codziennych działań.",
    tags: ["Rękodzieło", "Ogród", "Dzieci", "Relacje", "Inne"],
    powers: ["🧶 robótki ręczne i druty", "🌸 zielone ręce", "🧒 nauka przez zabawę", "🔧 techniczne super-moce"],
    details: [
      { name: "Pasje i zainteresowania", description: "Rękodzieło, ogród i kwiaty to mój żywioł." },
      { name: "Praca z dziećmi", description: "Tworzę aktywności i edukację przez zabawę." },
      { name: "Relacje", description: "Uważnie słucham i wspieram innych z empatią." }
    ],
    help: ["🧶 rękodzieło", "🌿 ogród", "👶 aktywności dla dzieci", "🔧 wsparcie techniczne"]
  },
  {
    id: "kasia",
    name: "Kasia",
    title: "Relacje • aktywność • wsparcie prawne",
    short: "Łączy ludzi, działa bezinteresownie i wspiera w sprawach spadkowych.",
    tags: ["Relacje", "Sport", "Inne"],
    powers: ["🤝 łączenie ludzi", "🚴 aktywny styl życia", "⚖️ sprawy spadkowe", "💬 otwartość i stabilność"],
    details: [
      { name: "Kontakty międzyludzkie", description: "Buduję współpracę i wspieram zespół w relacjach." },
      { name: "Wiedza prawnicza", description: "Mogę pomóc we wstępnym rozeznaniu spraw spadkowych." }
    ],
    help: ["🤝 relacje", "⚖️ sprawy spadkowe", "🚴 inicjatywy sportowe"]
  },
  {
    id: "marta",
    name: "Marta",
    title: "Wystąpienia publiczne • dzieci • mądre pomysły",
    short: "Łączy kompetencje komunikacyjne z energią do pracy z ludźmi.",
    tags: ["Relacje", "Dzieci", "Sport", "Inne"],
    powers: ["🎤 przemawianie i prezentacje", "👩‍👧 relacje z dziećmi", "💡 mądre pomysły", "📚 pasja czytelnicza i podróże"],
    details: [
      { name: "Komunikacja", description: "Wystąpienia publiczne i jasne przekazywanie idei." },
      { name: "Dzieci", description: "Świadome i empatyczne podejście do pracy z dziećmi." },
      { name: "Postawa", description: "Przyciągam ludzi i uruchamiam pozytywną energię działania." }
    ],
    help: ["🎤 prowadzenie spotkań", "👶 inicjatywy dla dzieci", "💡 wsparcie pomysłów"]
  }
];

const activities = [
  {
    title: "Święto Księginic",
    date: "15 czerwca 2026",
    place: "Księginice",
    description: "Wspólny piknik, strefa rodzinna i lokalne inicjatywy mieszkańców."
  },
  {
    title: "Warsztaty rękodzieła",
    date: "21 maja 2026",
    place: "Sala spotkań KGW",
    description: "Tworzenie dekoracji i prac ręcznych z materiałów naturalnych."
  },
  {
    title: "Dzień Sąsiedzki",
    date: "7 kwietnia 2026",
    place: "Centrum wsi",
    description: "Wspólne działania i lokalna wymiana pomocy sąsiedzkiej."
  }
];

const calendarEvents = [
  { date: "2026-03-15", month: "Marzec", title: "Rozpoczęcie prac ogrodowych", place: "Ogród społeczny", description: "Start sezonu zielonych działań." },
  { date: "2026-04-12", month: "Kwiecień", title: "Akcja porządkowania przestrzeni", place: "Księginice", description: "Wspólne działania porządkowe." },
  { date: "2026-05-24", month: "Maj", title: "Wydarzenie lokalne", place: "Plac wydarzeń", description: "Spotkanie integracyjne mieszkańców." },
  { date: "2026-06-15", month: "Czerwiec", title: "Piknik mieszkańców", place: "Księginice", description: "Piknik i animacje dla rodzin." },
  { date: "2026-09-20", month: "Wrzesień", title: "Jarmark jesienny", place: "Centrum wsi", description: "Rękodzieło i lokalne produkty." },
  { date: "2026-12-10", month: "Grudzień", title: "Spotkanie świąteczne", place: "Sala KGW", description: "Podsumowanie roku i wspólne kolędowanie." }
];

const achievementTimeline = [
  { year: "2025", text: "🌱 stworzenie pasa zieleni" },
  { year: "2025", text: "🎉 organizacja pierwszego święta sąsiedzkiego" },
  { year: "2026", text: "🤝 rozwój współpracy z mieszkańcami" },
  { year: "2026", text: "🗺️ stworzenie mapy kompetencji" }
];

const helpNeeds = [
  "ogród",
  "dzieci",
  "wypieki",
  "gotowanie",
  "transport",
  "organizacja wydarzenia",
  "rękodzieło",
  "fotografia",
  "pomoc sąsiedzka",
  "inne"
];

const joinSkills = [
  "organizacja",
  "gotowanie",
  "ogród",
  "dzieci",
  "sport",
  "rękodzieło",
  "fotografia",
  "transport",
  "projekty/granty",
  "technologia",
  "inne"
];

const state = {
  filter: "Wszystkie",
  query: ""
};

const emojiRegex = /\p{Extended_Pictographic}|\uFE0F/gu;

function select(id) {
  return document.getElementById(id);
}

function stripDecorativeIcons(text) {
  if (typeof text !== "string") return text;
  return text.replace(emojiRegex, "").replace(/\s+/g, " ").trim();
}

function renderCheckboxes(container, values, name) {
  if (!container) return;
  container.innerHTML = "";
  values.forEach((value) => {
    const safeId = `${name}-${value.replace(/\s+/g, "-")}`;
    const label = document.createElement("label");
    label.innerHTML = `<input id="${safeId}" type="checkbox" name="${name}" value="${value}">${value}`;
    container.append(label);
  });
}

function renderFilters() {
  const wrap = select("competency-filters");
  if (!wrap) return;
  wrap.innerHTML = "";
  competencyFilters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip-btn${state.filter === filter ? " is-active" : ""}`;
    button.textContent = filter;
    button.addEventListener("click", () => {
      state.filter = filter;
      renderFilters();
      renderMembers();
    });
    wrap.append(button);
  });
}

function filteredMembers() {
  return members.filter((member) => {
    const byFilter = state.filter === "Wszystkie" || member.tags.includes(state.filter);
    const text = `${member.name} ${member.title} ${member.tags.join(" ")} ${member.powers.join(" ")}`.toLowerCase();
    const byQuery = text.includes(state.query.toLowerCase());
    return byFilter && byQuery;
  });
}

function renderMembers() {
  const grid = select("competency-grid");
  if (!grid) return;
  const result = filteredMembers();
  grid.innerHTML = "";

  if (result.length === 0) {
    grid.innerHTML = `<article class="split-card"><h3>Brak wyników</h3><p>Spróbuj innej frazy lub kategorii.</p></article>`;
    return;
  }

  result.forEach((member) => {
    const article = document.createElement("article");
    article.className = "profile-card";
    article.innerHTML = `
      <h3>${member.name.toUpperCase()}</h3>
      <p>${member.short}</p>
      <p><strong>Jej/Jego supermoce:</strong></p>
      <div class="skill-list">${member.powers.map((power) => `<span class="skill-badge">${stripDecorativeIcons(power)}</span>`).join("")}</div>
      <button class="btn btn--solid" type="button" data-profile-id="${member.id}">Poznaj ${member.name}</button>
    `;
    grid.append(article);
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  }
}

function renderProfile(member) {
  const content = select("profile-content");
  if (!content) return;

  content.innerHTML = `
    <h3>${member.name}</h3>
    <p>${member.title}</p>
    <h4>Potrafię:</h4>
    ${member.details.map((detail) => `<p><strong>${detail.name}</strong><br>${detail.description}</p>`).join("")}
    <h4>Mogę pomóc przy:</h4>
    <div class="skill-list">${member.help.map((item) => `<span class="skill-badge">${stripDecorativeIcons(item)}</span>`).join("")}</div>
  `;
}

function setupProfileModal() {
  const modal = select("profile-modal");
  const close = select("profile-close");
  const grid = select("competency-grid");
  if (!modal || !close || !grid) return;

  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const id = target.dataset.profileId;
    if (!id) return;
    const member = members.find((item) => item.id === id);
    if (!member) return;
    renderProfile(member);
    openDialog(modal);
  });

  close.addEventListener("click", () => closeDialog(modal));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDialog(modal);
    }
  });
}

function setupHelpModal() {
  const modal = select("help-modal");
  const openDesktop = select("help-open");
  const openMobile = select("help-open-mobile");
  const close = select("help-close");
  const form = select("help-form");
  const status = select("help-status");
  const helpGrid = select("help-needs");
  if (!modal || !close || !form || !helpGrid) return;

  renderCheckboxes(helpGrid, helpNeeds, "helpNeed");

  [openDesktop, openMobile].forEach((button) => {
    if (!button) return;
    button.addEventListener("click", () => openDialog(modal));
  });

  close.addEventListener("click", () => closeDialog(modal));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDialog(modal);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (status) {
      status.textContent = "Dziękujemy. Zgłoszenie zostało zapisane lokalnie na stronie demonstracyjnej.";
    }
    form.reset();
  });
}

function toGoogleCalendarUrl(eventData) {
  const start = eventData.date.replaceAll("-", "");
  const endDate = new Date(eventData.date);
  endDate.setDate(endDate.getDate() + 1);
  const end = endDate.toISOString().slice(0, 10).replaceAll("-", "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventData.title,
    dates: `${start}/${end}`,
    details: eventData.description,
    location: eventData.place
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function renderCalendar() {
  const monthView = select("calendar-month");
  const yearView = select("calendar-year");
  if (!monthView || !yearView) return;

  const grouped = calendarEvents.reduce((acc, eventData) => {
    if (!acc[eventData.month]) acc[eventData.month] = [];
    acc[eventData.month].push(eventData);
    return acc;
  }, {});

  monthView.innerHTML = Object.entries(grouped).map(([month, events]) => `
    <article class="calendar-month-group">
      <h3>${month}</h3>
      <ul class="calendar-list">
        ${events.map((eventData) => `
          <li class="calendar-card">
            <strong>${eventData.title}</strong><br>
            <span class="ms">calendar_today</span>${new Date(eventData.date).toLocaleDateString("pl-PL")} • <span class="ms">location_on</span>${eventData.place}
            <p>${eventData.description}</p>
            <div class="event-actions">
              <a href="${toGoogleCalendarUrl(eventData)}" target="_blank" rel="noopener noreferrer">Dodaj do kalendarza</a>
            </div>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");

  yearView.innerHTML = `
    <article class="calendar-card"><h3>MARZEC</h3><p>Rozpoczęcie prac ogrodowych</p></article>
    <article class="calendar-card"><h3>KWIECIEŃ</h3><p>Akcja porządkowania przestrzeni</p></article>
    <article class="calendar-card"><h3>MAJ</h3><p>Wydarzenie lokalne</p></article>
    <article class="calendar-card"><h3>CZERWIEC</h3><p>Piknik mieszkańców</p></article>
    <article class="calendar-card"><h3>WRZESIEŃ</h3><p>Jarmark jesienny i inicjatywy sąsiedzkie</p></article>
    <article class="calendar-card"><h3>GRUDZIEŃ</h3><p>Podsumowanie roku i spotkanie świąteczne</p></article>
  `;
}

function setupCalendarSwitch() {
  const switches = [...document.querySelectorAll("[data-calendar-view]")];
  const monthView = select("calendar-month");
  const yearView = select("calendar-year");
  if (!switches.length || !monthView || !yearView) return;

  switches.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.calendarView;
      switches.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const isMonth = mode === "month";
      monthView.hidden = !isMonth;
      yearView.hidden = isMonth;
    });
  });
}

function renderActivities() {
  const grid = select("activity-grid");
  if (!grid) return;
  grid.innerHTML = activities.map((activity) => `
    <article class="split-card">
      <h3>${activity.title}</h3>
      <p><span class="ms">calendar_today</span>${activity.date}<br><span class="ms">location_on</span>${activity.place}</p>
      <p>${activity.description}</p>
      <a class="btn btn--light" href="#kontakt">Zobacz zdjęcia →</a>
    </article>
  `).join("");
}

function renderAchievements() {
  const timeline = select("achievements-timeline");
  if (!timeline) return;
  timeline.innerHTML = achievementTimeline.map((entry) => `
    <article>
      <h3>${entry.year}</h3>
      <p>${stripDecorativeIcons(entry.text)}</p>
    </article>
  `).join("");
}

function setupForms() {
  const joinForm = select("join-form");
  const joinStatus = select("join-status");
  const contactForm = select("contact-form");
  const contactStatus = select("contact-status");

  if (joinForm) {
    joinForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (joinStatus) {
        joinStatus.textContent = "Dziękujemy za zgłoszenie. Skontaktujemy się z Tobą.";
      }
      joinForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (contactStatus) {
        contactStatus.textContent = "Wiadomość została zapisana lokalnie na stronie demonstracyjnej.";
      }
      contactForm.reset();
    });
  }
}

function setupJoinFormReveal() {
  const joinOpen = select("join-open");
  const joinForm = select("join-form");
  if (!(joinOpen instanceof HTMLButtonElement) || !(joinForm instanceof HTMLFormElement)) return;

  const revealForm = () => {
    joinForm.hidden = false;
    joinOpen.setAttribute("aria-expanded", "true");
    joinForm.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  joinOpen.addEventListener("click", revealForm);

  const hash = window.location.hash;
  if (hash === "#formularz-dolacz" || hash === "#join-form") {
    revealForm();
  }
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = select("main-menu");
  if (!(toggle instanceof HTMLButtonElement) || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupSearch() {
  const search = select("competency-search");
  if (!(search instanceof HTMLInputElement)) return;
  search.addEventListener("input", () => {
    state.query = search.value.trim();
    renderMembers();
  });
}

function setupSinglePageExperience() {
  const panels = [...document.querySelectorAll("main .panel[id]")];
  const menuLinks = [...document.querySelectorAll('.main-menu a[href^="#"]')];

  if (!panels.length) return;

  panels.forEach((panel, index) => {
    if (index === 0) {
      panel.classList.add("is-visible");
    }
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    panels.forEach((panel) => revealObserver.observe(panel));
  } else {
    panels.forEach((panel) => panel.classList.add("is-visible"));
  }

  if (!menuLinks.length || !("IntersectionObserver" in window)) return;

  const setActive = (activeId) => {
    menuLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${activeId}`);
    });
  };

  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      setActive(visible.target.id);
    },
    { threshold: [0.25, 0.45, 0.65], rootMargin: "-18% 0px -50% 0px" }
  );

  panels.forEach((panel) => activeObserver.observe(panel));
}

function setDynamicValues() {
  const year = select("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setStats() {
  const membersStat = select("stat-czlonkowie");
  const servicesStat = select("stat-uslugi");
  const eventsStat = select("stat-imprezy");
  if (membersStat) membersStat.textContent = String(members.length);
  const uniqueTags = new Set(members.flatMap((member) => member.tags));
  if (servicesStat) servicesStat.textContent = String(uniqueTags.size);
  if (eventsStat) eventsStat.textContent = String(calendarEvents.length);
}

function init() {
  renderCheckboxes(select("join-skills"), joinSkills, "joinSkill");
  renderFilters();
  renderMembers();
  renderActivities();
  renderCalendar();
  renderAchievements();
  setupCalendarSwitch();
  setupProfileModal();
  setupHelpModal();
  setupForms();
  setupJoinFormReveal();
  setupMobileMenu();
  setupSearch();
  setupSinglePageExperience();
  setDynamicValues();
  setStats();
}

init();
