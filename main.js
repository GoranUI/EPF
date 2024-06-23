const countries = {
  norway: {
    name: 'Norway',
    societies: [{
      name: 'Norwegian Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/norwegian-psychoanalytical-society',
    }],
  },
  russia: {
    name: 'Russia',
    societies: [{
      name: 'Moscow Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/moscow-psychoanalytic-society',
    }, {
      name: 'Moscow Group of Psychoanalysts',
      link: 'https://www.epf-fep.eu/en/society/moscow-group-of-psychoanalysts',
    }],
  },
  sweden: {
    name: 'Sweden',
    societies: [{
      name: 'Swedish Psychoanalytical Association',
      link: 'https://www.epf-fep.eu/en/society/swedish-psychoanalytical-association',
    }],
  },
  finland: {
    name: 'Finland',
    societies: [{
      name: 'Finnish Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/finnish-psychoanalytical-society',
    }],
  },
  'estonia-latvia': {
    name: 'Estonia & Latvia',
    societies: [{
      name: 'Estonian-Latvian Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/estonian-latvian-psychoanalytical-society',
    }],
  },
  lithuania: {
    name: 'Lithuania',
    societies: [{
      name: 'Vilnius Society of Psychoanalysts',
      link: 'https://www.epf-fep.eu/en/society/vilnius-society-of-psychoanalysts',
    }],
  },
  ukraine: {
    name: 'Ukraine',
    societies: [{
      name: 'Ukraine Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/ukraine-psychoanalytic-society',
    }],
  },
  romania: {
    name: 'Romania',
    societies: [{
      name: 'Romanian Society of Psychoanalysis',
      link: 'https://www.epf-fep.eu/en/society/romanian-society-of-psychoanalysis',
    }],
  },
  bulgaria: {
    name: 'Bulgaria',
    societies: [{
      name: 'Bulgarian Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/bulgarian-psychoanalytic-society-bps',
    }],
  },
  greece: {
    name: 'Greece',
    societies: [{
      name: 'Hellenic Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/hellenic-psychoanalytical-society',
    }],
  },
  serbia: {
    name: 'Serbia',
    societies: [{
      name: 'Belgrade Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/belgrade-psychoanalytical-society',
    }, {
      name: 'Psychoanalytical Society of Serbia',
      link: 'https://www.epf-fep.eu/en/society/psychoanalytical-society-of-serbia',
    }],
  },
  croatia: {
    name: 'Croatia',
    societies: [{
      name: 'Croatian Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/croatian-psychoanalytical-society',
    }],
  },
  hungary: {
    name: 'Hungary',
    societies: [{
      name: 'Hungarian Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/hungarian-psychoanalytical-society',
    }],
  },
  italy: {
    name: 'Italy',
    societies: [{
      name: 'Italian Psychoanalytical Association/AIPsi',
      link: 'https://www.epf-fep.eu/en/society/italian-psychoanalytical-association-aipsi',
    }, {
      name: 'Italian Psychoanalytical Society/SPI',
      link: 'https://www.epf-fep.eu/en/society/italian-psychoanalytical-society-spi',
    }],
  },
  turkey: {
    name: 'Turkey',
    societies: [{
      name: 'Istanbul Psychoanalytical Association',
      link: 'https://www.epf-fep.eu/en/society/istanbul-psychoanalytical-association',
    }, {
      name: 'Psike İstanbul Psychoanalytic Association',
      link: 'https://www.epf-fep.eu/en/society/psike-istanbul-psychoanalytic-association',
    }],
  },
  spain: {
    name: 'Spain',
    societies: [{
      name: 'Madrid Psychoanalytical Association',
      link: 'https://www.epf-fep.eu/en/society/madrid-psychoanalytical-association',
    }, {
      name: 'Spanish Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/spanish-psychoanalytical-society',
    }],
  },
  portugal: {
    name: 'Portugal',
    societies: [{
      name: 'Portuguese Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/portuguese-psychoanalytical-society',
    }, {
      name: 'Portuguese Nucleus of Psychoanalysis',
      link: 'https://www.epf-fep.eu/en/society/portuguese-nucleus-of-psychoanalysis',
    }],
  },
  switzerland: {
    name: 'Switzerland',
    societies: [{
      name: 'Swiss Society of Psychoanalysis',
      link: 'https://www.epf-fep.eu/en/society/swiss-society-of-psychoanalysis',
    }],
  },
  austria: {
    name: 'Austria',
    societies: [{
      name: 'Vienna Psychoanalytic Association',
      link: 'https://www.epf-fep.eu/en/society/vienna-psychoanalytic-association',
    }, {
      name: 'Vienna Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/vienna-psychoanalytic-society',
    }],
  },
  germany: {
    name: 'Germany',
    societies: [{
      name: 'German Psychoanalytical Association/DPV',
      link: 'https://www.epf-fep.eu/en/society/german-psychoanalytical-association-dpv',
    }, {
      name: 'German Psychoanalytical Society/DPG',
      link: 'https://www.epf-fep.eu/en/society/german-psychoanalytical-society',
    }],
  },
  denmark: {
    name: 'Denmark',
    societies: [{
      name: 'Danish Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/danish-psychoanalytical-society',
    }],
  },
  'czech-republic': {
    name: 'Czech Republic',
    societies: [{
      name: 'Czech Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/czech-psychoanalytical-society',
    }],
  },
  poland: {
    name: 'Poland',
    societies: [{
      name: 'Polish Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/polish-psychoanalytical-society',
    }],
  },
  france: {
    name: 'France',
    societies: [{
      name: 'French Psychoanalytical Association/APF',
      link: 'https://www.epf-fep.eu/en/society/french-psychoanalytical-association-apf',
    }, {
      name: 'Paris Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/paris-psychoanalytical-society',
    }, {
      name: 'Psychoanalytic Society for Research and Training',
      link: 'https://www.epf-fep.eu/en/society/psychoanalytic-society-for-research-and-training',
    }],
  },
  'the-netherlands': {
    name: 'The Netherlands',
    societies: [{
      name: 'Dutch Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/dutch-psychoanalytic-society',
    }],
  },
  belgium: {
    name: 'Belgium',
    societies: [{
      name: 'Belgian Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/belgian-psychoanalytic-society',
    }],
  },
  'the-united-kingdom': {
    name: 'The United Kingdom',
    societies: [{
      name: 'British Psychoanalytic Association',
      link: 'https://www.epf-fep.eu/en/society/british-psychoanalytic-association',
    }, {
      name: 'British Psychoanalytical Society',
      link: 'https://www.epf-fep.eu/en/society/british-psychoanalytical-society',
    }, {
      name: 'Northern Ireland Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/northern-ireland-psychoanalytic-society',
    }],
  },
};

const showCountryInfo = (name, societies) => {
  const infoDiv = document.getElementById('country-info-container');
  const countryName = document.getElementById('country-name');
  const societyLinks = document.getElementById('society-links');

  countryName.textContent = name;

  societyLinks.innerHTML = '';
  societies.forEach((society) => {
    const link = document.createElement('a');
    link.href = society.link;
    link.target = '_blank';
    link.textContent = society.name;
    link.addEventListener('click', (e) => e.stopPropagation());
    societyLinks.appendChild(link);
    societyLinks.appendChild(document.createElement('br'));
  });

  infoDiv.classList.add('active');
}

const drawBezierCurve = (country) => {
  const elem1 = document.querySelector('.country-info-container');
  const elem2 = document.getElementById(country);

  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();

  const startX = rect1.left + rect1.width / 2;
  const startY = rect1.top;

  const controlPoint1X = rect1.left + rect1.width / 2;
  const controlPoint1Y = rect1.top + rect1.height;

  const controlPoint2X = rect2.left + rect2.width / 2;
  const controlPoint2Y = rect2.top;

  const endX = rect2.left;
  const endY = rect2.top;

  const bezierCurvePath = document.getElementById('bezierCurve');
  const pathData = `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`;
  bezierCurvePath.setAttribute('d', pathData);
};

let selectedCountryElement = null;

window.onload = () => {
  document.body.addEventListener('click', () => {
    if (selectedCountryElement) {
      selectedCountryElement.setAttribute('style', 'fill: #DEDEDE');
      selectedCountryElement = null;
    }
    document.getElementById('country-info-container').classList.remove('active');
  });

  for (const [countrySlug, { name, societies }] of Object.entries(countries)) {
    const countryElement = document.getElementById(countrySlug);
    countryElement.addEventListener('click', (event) => {
      if (selectedCountryElement) {
        selectedCountryElement.setAttribute('style', 'fill: #DEDEDE');
      }
      selectedCountryElement = countryElement;

      countryElement.setAttribute('style', 'fill: url("#active-gradient")');

      showCountryInfo(name, societies);

      event.stopPropagation();
    });
  }
};