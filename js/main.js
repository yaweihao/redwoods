const mailMap = {
  tom: 'tom * grandine . org',
  alex: 'a_s_gold * hotmail . com',
  mike: 'margaux56 * aol . com',
  tatyana: 'tat ya na * every day creative . net',
  steve: 'swim guy 24 * gmail . com',
  list: ' mi - redwoods - request * freelists . org',
};

const currentCoaches = [
  {
    firstName: 'Kieran',
    lastName: 'Schafer',
    img: '../images/coaches/Kieran Schaefer.png',
    bio: 'Kieran came to SMAC after a four-year varsity swimming career at Seattle University. He now runs Age Group Performance at the Central/MIBC site. A 13-year competitive swimmer from Oregon, Kieran specialized in freestyle events—50, 100, 200, and 500 yards—before bringing his energy to the Redwoods deck.',
    tagline: 'On deck Monday, Tuesday, Thursday, and Friday.',
  },
  {
    firstName: 'Gardner',
    lastName: 'Howland',
    img: '../images/coaches/Gardner Howland.png',
    bio: 'Gardner swam for the University of Tennessee (Go Vols!), setting YMCA national records and qualifying for Olympic Trials. A Tennessee Swimming Hall of Fame inductee and seven-time YMCA National Champion, Gardner has decades of coaching experience, including leading Santa Barbara Swim Club and Conejo Simi Aquatics. He has coached multiple USA Swimming national teams and camps, earning Southeastern Coach of the Year five times.',
    tagline: 'Takes the deck on Wednesdays.',
  },
];

const alumniCoaches = [
  {
    firstName: 'Derek',
    lastName: 'Young',
    img: '../images/coaches/swimcoach.gif',
    email: 'coach.dwyoung@gmailo.com',
    quote: '"Derek moved to Seattle in April of 2018. Immediately prior to moving, Derek served as the Head Coach of the Sandhills Sand Sharks in Southern Pines, North Carolina and started the Masters swim program in Southern Pines. Before that he spent three years with Nation\'s Capital Swim Team (NCAP) and the Arlington Aquatic Club. During his eight years on deck he has worked with swimmers of all ages and achievement levels.  <br><br> Derek\'s swimming career started in the Northern Virginia Swim League (NVSL) when he was 6 years old with an ill-fated relay appearance for the Lincolnia Park Lazers. In addition to his local summer league team, Derek also swam for the Arlington Aquatic Club for 10 years. In 2000, Derek graduated with a degree in marketing from the University of Maryland. At Maryland he was a member of the varsity swim team and letter winner."',
  },
  {
    firstName: 'Tom',
    lastName: 'Grandine',
    img: '../images/coaches/TomG.png',
    email: 'tom@grandine.org',
    quote: '"I\'ve been swimming seriously since I was a middle schooler, and my love for the sport and the activity only seems to grow with time. I\'ve been swimming with the Redwoods since 2003, and I\'ve enjoyed firsthand the amazing health benefits that accrue to middle-aged folk like me when they keep at it and keep in the water, and I have no plans to let up anytime soon. It\'s really true that life begins at 50!"',
  },
  {
    firstName: 'Mike',
    lastName: 'Schaeffer',
    img: '../images/coaches/MikeS.png',
    email: 'margaux56@aol.com',
    quote: '"I made a late return to swimming in my 40s after a 20+ year hiatus, swimming in the slow lane at Redwoods workouts until I graduated up to swim next to (not <em>with</em>!) the big boys. Both of my children grew up swimming summer league at Mercerwood, and my daughter Katie went on to a career at the University of Washington. You can count on my workouts to be, umm, <em>interesting</em>."',
  },
  {
    firstName: 'Alex',
    lastName: 'Goldstein',
    img: '../images/coaches/AlexG.png',
    email: 'alex_s_goldstein@hotmail.com',
    quote: '"Spoiled by the bath-like water temperatures of the South, I always try to keep moving and ignore suggestions that another 10 pounds is worth at least 2-3 degrees in water temp. I coached age group and master swim teams when younger but am now (somewhat) reconciled to the fact that youth will beat me in open water races and in the pool. Now get moving, just standing here watching you is making me cold!."',
  },
  {
    firstName: 'Tom',
    lastName: 'Robertson',
    img: '../images/coaches/TomR.png',
    email: 'tomrobt@u.washington.edu',
    quote: '"I was a collegiate swimmer of modest ability in the early 60\'s, diverted to marathon running for about 15 years, and returned to swimming with a couple of the original Redwoods about the same time that it became clear that both of my daughters were going to be far faster swimmers than I could ever hope to be. I\'m a pulmonary doc at the UW with a professional hobby in the study of exercise physiology. I am now the oldest of the current Redwoods, and use myself as a subject in the study of loss of exercise capacity with aging."',
  },
  {
    firstName: 'Adair',
    lastName: 'Dingle',
    img: '../images/coaches/AdairD.png',
    email: 'a.d.dingle@comcast.net',
    quote: '"I started masters swimming in my early 20s. I\'ve been enjoying the camaraderie of the Redwoods since its inception, and have been attempting to acquire some body rotation for about that long too. Fin-addicted with a strong preference for backstroke, I love our morning workouts, especially when they are outdoors. As a coach, I tend to give long freestyle sets."',
  },
  {
    firstName: 'Q',
    lastName: 'Glaze',
    img: '../images/coaches/QG.png',
    email: 'qglaze@gmail.com',
    quote: '"Q Glaze, coach <em>extraordinaire</em>, honed her coaching skills under the tutelage of Midlakes\' finest coaches of the 60\'s and 70\'s. Since recently returning to the coaching scene, she was delighted to pick up where she had left off decades ago, with the Mercerwood youth mid-mornings and the wiley Redwoods at dawn. At the Saturday 7 am hour, you often hear her drone,<br><br><em>“Flip and go!<br>   Somewhere out there,<br>   Someone is doing 50 100s on the 1:20.<br>   And probably faster than you.”</em>"',
  },
  {
    firstName: 'Shannon',
    lastName: 'McIntyre',
    img: '../images/coaches/ShannonM.png',
    email: 'shannon@mercerswim.org',
    quote: '"Coach Shannon began her swimming career in Southern California in 1980. Her accolades and honors include:<ul><li>Top 25 World Rankings in 1982 in the 100 and 200 M Breaststroke</li><li>1984 Olympic Trial Qualifier in the 100 and 200 M Breaststroke</li><li>Division I NCAA college swimmer 1983 &mdash; 1986.</li><li>2014 Fat Salmon 3.2 mi Open Water Swim 1st Pl AG, 1st Pl Overall</li> <li>2015 National Record US Masters Swimming US Postal 4 x 5000 M</li> <li>2015 USMS National Postal 5000 M swim 2nd in Age Group</li> <li>2015 USMS Nationals 4 Golds: 400 IM, 200 IM, 200 Breast, 400 Free</li> <li>2015 FINA USMS World Ranking</li></ul>"',
  },
];

const faqs = [
  {
    q: 'How much does it cost to swim?',
    html: 'Please refer to the <a href="#membership">What it costs to swim</a> section for current dues and drop-in rates.'
  },
  {
    q: "I'm planning to be gone for an entire month. Can I just pay 2/3 of a quarterly bill?",
    html: "No. We'll all be better off, in that case, if you simply pay monthly during that time.",
  },
  {
    q: 'Who are the coaches?',
    html: '<a target="coaches" href="https://www.gomotionapp.com/team/pnscaat/page/system/coaches#:~:text=her%20bachelor%27s%20degree.-,Kieran,-Schaefer">Kieran Schafer</a> is on deck Monday, Tuesday, Thursday, and Friday. <a target="coaches" href="https://www.gomotionapp.com/team/pnscaat/page/system/coaches#:~:text=Husky%20sport%20teams.-,Gardner,-Howland">Gardner Howland</a> takes over on Wednesdays. Both these gentlemen also coach professionally at SMAC.',
  },
  {
    q: 'Are guests welcome?',
    html: "By all means, yes. Those of you who haven't committed to swim with us regularly, but would nevertheless like to make appearances at our workouts from time to time, are welcome to do so. Please feel free to swim with us as often as you'd like. The drop-in fee for guest swimmers is $13; please leave that with the coach on deck as you enter.",
  },
  {
    q: 'Is USMS registration required?',
    html: "Yes! USMS provides local teams like ours with the liability insurance coverage required by MSC, our host pool (as any other pool-renting facility requires). The <em>certificate of liability insurance</em> is provided by USMS free of charge, but only if all of our team members are also USMS members in good standing. There are plenty of other benefits to USMS membership; if you aren't already a member, you can register online at <a href=\"http://www.usms.org/reg/\" target=\"_blank\">www.usms.org</a>.",
  },
  {
    q: 'When are fees due?',
    html: 'Please arrange to pay for your membership at the beginning of each quarter. Make your check payable to <em>Mercer Island Redwoods</em> or use <a target="_blank" href="https://venmo.com/Thomas-Grandine?txn=pay&note=Mercer+Island+Redwoods+dues">Venmo</a> (code=<strong class="required">4302</strong>).',
  },
  {
    q: 'What happens on holidays?',
    html: "Normally, practices are scheduled for Monday-Friday mornings, regardless of whether or not it's a holiday. Check with the coach, or Alex Goldstein at practice as each holiday draws near in case there are any exceptions.",
  },
];

function decodeMail(value) {
  const raw = mailMap[value] || value;
  return raw.replace(/\s+/g, '').replace(/\*/g, '@');
}

function attachMailLinks(context = document) {
  context.querySelectorAll('[data-mail]').forEach((node) => {
    const key = node.getAttribute('data-mail');
    const email = decodeMail(key);
    node.href = `mailto:${email}`;
    node.textContent = email;
  });
}

function makeCoachCard(coach, index, options = {}) {
  const card = document.createElement('article');
  card.className = 'coach-card';

  const renderBio = () => {
    if (coach.bio) {
      return `<p class="coach-quote active" data-quote="${index}">${coach.bio}</p>`;
    }
    return `<blockquote class="coach-quote" data-quote="${index}">${coach.quote || ''}</blockquote>`;
  };

  const renderTagline = () => {
    if (coach.tagline) {
      return `<p class="coach-tagline">${coach.tagline}</p>`;
    }
    return '';
  };

  const renderEmail = () => {
    if (coach.email) {
      return `<p class="coach-email"><a data-mail="${coach.email}"></a></p>`;
    }
    return '';
  };

  card.innerHTML = `
    <header class="coach-header">
      <img class="coach-image" src="${coach.img}" alt="${coach.firstName} ${coach.lastName}">
      <div>
        <p class="coach-name">${coach.firstName} ${coach.lastName}</p>
        ${renderEmail()}
      </div>
    </header>
    ${renderTagline()}
    ${renderBio()}
  `;

  if (options.defaultOpen) {
    const quote = card.querySelector('[data-quote]');
    if (quote) {
      quote.classList.add('active');
    }
  }

  attachMailLinks(card);
  return card;
}

function renderCurrentCoaches() {
  const container = document.querySelector('[data-coach-grid-current]');
  if (!container) return;

  currentCoaches.forEach((coach, index) => {
    const card = makeCoachCard(coach, index, { defaultOpen: true });
    container.appendChild(card);
  });
}

function renderAlumniCoaches() {
  const container = document.querySelector('[data-coach-grid]');
  if (!container) return;

  alumniCoaches.forEach((coach, index) => {
    const card = makeCoachCard(coach, index + currentCoaches.length);
    card.setAttribute('data-toggle-card', String(index + currentCoaches.length));
    container.appendChild(card);
  });
}

function renderFAQs() {
  const container = document.querySelector('[data-faq]');
  if (!container) return;

  faqs.forEach((faq, index) => {
    const details = document.createElement('details');
    details.className = 'faq-item';

    details.innerHTML = `
      <summary>${faq.q}</summary>
      <div class="answer">${faq.html}</div>
    `;

    container.appendChild(details);
  });
}

function handleCoachToggles() {
  const container = document.querySelector('[data-coach-grid]');
  if (!container) return;

  container.addEventListener('click', (event) => {
    const card = event.target.closest('[data-toggle-card]');
    if (!card) return;

    const id = card.getAttribute('data-toggle-card');
    const quote = card.querySelector(`[data-quote="${id}"]`);

    if (quote) {
      const wasActive = quote.classList.contains('active');
      container.querySelectorAll('[data-quote]').forEach((node) => node.classList.remove('active'));
      container.querySelectorAll('[data-toggle-card]').forEach((node) => node.classList.remove('expanded'));
      if (!wasActive) {
        quote.classList.add('active');
        card.classList.add('expanded');
      }
    }
  });
}

function handleNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const links = nav ? nav.querySelectorAll('.nav-link') : [];

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
      nav.classList.toggle('open', !expanded);
    });

    links.forEach((link) =>
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      })
    );
  }

  const setActive = () => {
    const fromTop = window.scrollY + 140;
    const sections = Array.from(document.querySelectorAll('main section'));

    let activeId = 'home';
    sections.forEach((section) => {
      if (section.offsetTop <= fromTop) {
        activeId = section.id || activeId;
      }
    });

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const targetId = href.replace('#', '');
      link.classList.toggle('active', targetId === activeId);
    });
  };

  window.addEventListener('scroll', setActive);
  window.addEventListener('load', setActive);
}

function handleMotto() {
  const button = document.querySelector('[data-motto]');
  if (!button) return;
  button.addEventListener('click', () => button.classList.toggle('active'));
}

function handleReveal() {
  const revealItems = document.querySelectorAll('[data-reveal]');
  if (!revealItems.length) return;

  const makeVisible = (nodeList) => {
    nodeList.forEach((node) => node.classList.add('is-visible'));
  };

  if (!('IntersectionObserver' in window)) {
    makeVisible(revealItems);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function updateYear() {
  const el = document.querySelector('[data-year]');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCurrentCoaches();
  renderAlumniCoaches();
  renderFAQs();
  attachMailLinks();
  handleCoachToggles();
  handleNav();
  handleMotto();
  handleReveal();
  updateYear();

  document.querySelectorAll('.hero-overlay, .hero-cards').forEach((node) => {
    node.classList.add('is-visible');
  });
});
