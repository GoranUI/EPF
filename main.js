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
  australia: {
    name: 'Australia',
    societies: [{
      name: 'Australian Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/australian-psychoanalytic-society',
    }],
  },
  lebanon: {
    name: 'Lebanon',
    societies: [{
      name: 'Lebanese Association for the Development of Psychoanalysis',
      link: 'https://www.epf-fep.eu/en/society/lebanese-association-for-the-development-of-psychoanalysis',
    }],
  },
  israel: {
    name: 'Israel',
    societies: [{
      name: 'Israel Psychoanalytic Society',
      link: 'https://www.epf-fep.eu/en/society/israel-psychoanalytic-society',
    }],
  },
  'south-africa': {
    name: 'South Africa',
    societies: [{
      name: 'South African Psychoanalytical Association',
      link: 'https://www.epf-fep.eu/en/society/south-african-psychoanalytical-association',
    }],
  }
};

const drawBezierCurve = (country) => {
  const infoDiv = document.querySelector('.country-info-container .circle');
  const countryCircleDiv = document.getElementById(`${country}-circle`);

  const infoRect = infoDiv.getBoundingClientRect();
  const countryCircleRect = countryCircleDiv.getBoundingClientRect();

  const startX = infoRect.left + infoRect.width / 2;
  const startY = infoRect.top + infoRect.height / 2;

  const endX = countryCircleRect.left + countryCircleRect.width / 2;
  const endY = countryCircleRect.top + countryCircleRect.height / 2;

  // Calculate the distance between start and end points
  const dx = endX - startX;
  const dy = endY - startY;

  // Midpoint between the start and end points
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;

  // Calculate the control points above the midpoint
  const controlHeight = Math.min(Math.sqrt(dx * dx + dy * dy) / 2, 150);

  const controlPoint1X = startX + 0.25 * dx;
  const controlPoint1Y = midY - controlHeight;

  const controlPoint2X = startX + 0.75 * dx;
  const controlPoint2Y = midY - controlHeight;

  const bezierCurvePath = document.getElementById('bezier-curve');
  const pathData = `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`;
  bezierCurvePath.setAttribute('d', pathData);

  // Position the start and end caps
  const startCap = document.getElementById('start-cap');
  startCap.setAttribute('cx', startX);
  startCap.setAttribute('cy', startY);

  const endCap = document.getElementById('end-cap');
  endCap.setAttribute('cx', endX);
  endCap.setAttribute('cy', endY);

  // Make the circles visible
  startCap.classList.remove('circle-hidden');
  endCap.classList.remove('circle-hidden');
};

const showCountryInfo = (countrySlug, name, societies) => {
  const infoDiv = document.getElementById('country-info-container');
  const countryName = document.getElementById('country-name');
  const societyLinks = document.getElementById('society-links');

  infoDiv.style.opacity = 0;

  setTimeout(() => {
    countryName.textContent = name;

    societyLinks.innerHTML = '';
    societies.forEach((society) => {
      const link = document.createElement('a');
      link.href = society.link;
      link.target = '_blank';
      link.textContent = society.name;
      link.addEventListener('click', (e) => e.stopPropagation());
      societyLinks.appendChild(link);
    });

    drawBezierCurve(countrySlug);
    infoDiv.style.opacity = 1;
  }, 300);
}

let selectedCountryElement = null;
let selectedCountryCircleElement = null;

window.onload = () => {
  const bezierCurveContainer = document.getElementById('bezier-curve-container');
  bezierCurveContainer.setAttribute('width', document.body.clientWidth);
  bezierCurveContainer.setAttribute('height', document.body.clientHeight);
  bezierCurveContainer.setAttribute('viewport', `0 0 ${document.body.clientWidth} ${document.body.clientHeight}`);

  document.body.addEventListener('click', (event) => {
    if (!event.target.classList.contains('circle-cap')) {
      if (selectedCountryElement) {
        selectedCountryElement.setAttribute('style', 'fill: #DEDEDE');
        selectedCountryElement = null;
        selectedCountryCircleElement.setAttribute('style', 'opacity: 0');
        selectedCountryCircleElement = null;
      }
      document.getElementById('bezier-curve').setAttribute('d', '');
      document.getElementById('country-info-container').classList.remove('active');
      document.getElementById('start-cap').classList.add('circle-hidden');
      document.getElementById('end-cap').classList.add('circle-hidden');
    }
  });

  for (const [countrySlug, { name, societies }] of Object.entries(countries)) {
    const countryElement = document.getElementById(countrySlug);
    const countryCircleElement = document.getElementById(`${countrySlug}-circle`);

    countryElement.addEventListener('click', (event) => {
      if (selectedCountryElement) {
        selectedCountryElement.setAttribute('style', 'fill: #DEDEDE');
        selectedCountryCircleElement.setAttribute('style', 'opacity: 0');
      }
      selectedCountryElement = countryElement;
      selectedCountryCircleElement = countryCircleElement;

      countryElement.setAttribute('style', 'fill: url("#active-gradient")');
      countryCircleElement.setAttribute('style', 'opacity: 1');

      showCountryInfo(countrySlug, name, societies);

      event.stopPropagation();
    });
  }

};