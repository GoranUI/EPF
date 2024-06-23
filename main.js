const countries = {
  norway: {
    name: 'Norway',
    societies: [{
      name: 'norway',
      link: 'norway'
    }]
  },
  russia: {
    name: 'Russia',
    societies: [{
      name: 'russia',
      link: 'russia'
    }]
  },
  sweden: {
    name: 'Sweden',
    societies: [{
      name: 'sweden',
      link: 'sweden'
    }]
  },
  finland: {
    name: 'Finland',
    societies: [{
      name: 'finland',
      link: 'finland'
    }]
  },
  'estonia-latvia': {
    name: 'Estonia & Latvia',
    societies: [{
      name: 'estonia-latvia',
      link: 'estonia-latvia'
    }]
  },
  lithuania: {
    name: 'Lithuania',
    societies: [{
      name: 'lithuania',
      link: 'lithuania'
    }]
  },
  ukraine: {
    name: 'Ukraine',
    societies: [{
      name: 'ukraine',
      link: 'ukraine'
    }]
  },
  romania: {
    name: 'Romania',
    societies: [{
      name: 'romania',
      link: 'romania'
    }]
  },
  bulgaria: {
    name: 'Bulgaria',
    societies: [{
      name: 'bulgaria',
      link: 'bulgaria'
    }]
  },
  greece: {
    name: 'Greece',
    societies: [{
      name: 'greece',
      link: 'greece'
    }]
  },
  serbia: {
    name: 'Serbia',
    societies: [{
      name: 'serbia',
      link: 'serbia'
    }]
  },
  croatia: {
    name: 'Croatia',
    societies: [{
      name: 'croatia',
      link: 'croatia'
    }]
  },
  hungary: {
    name: 'Hungary',
    societies: [{
      name: 'hungary',
      link: 'hungary'
    }]
  },
  italy: {
    name: 'Italy',
    societies: [{
      name: 'italy',
      link: 'italy'
    }]
  },
  turkey: {
    name: 'Turkey',
    societies: [{
      name: 'turkey',
      link: 'turkey'
    }]
  },
  spain: {
    name: 'Spain',
    societies: [{
      name: 'spain',
      link: 'spain'
    }]
  },
  portugal: {
    name: 'Portugal',
    societies: [{
      name: 'portugal',
      link: 'portugal'
    }]
  },
  switzerland: {
    name: 'Switzerland',
    societies: [{
      name: 'switzerland',
      link: 'switzerland'
    }]
  },
  austria: {
    name: 'Austria',
    societies: [{
      name: 'austria',
      link: 'austria'
    }]
  },
  germany: {
    name: 'Germany',
    societies: [{
      name: 'germany',
      link: 'germany'
    }]
  },
  denmark: {
    name: 'Denmark',
    societies: [{
      name: 'denmark',
      link: 'denmark'
    }]
  },
  'czech-republic': {
    name: 'Czech Republic',
    societies: [{
      name: 'czech-republic',
      link: 'czech-republic'
    }]
  },
  poland: {
    name: 'Poland',
    societies: [{
      name: 'poland',
      link: 'poland'
    }]
  },
  france: {
    name: 'France',
    societies: [{
      name: 'france',
      link: 'france'
    }]
  },
  'the-netherlands': {
    name: 'The Netherlands',
    societies: [{
      name: 'the-netherlands',
      link: 'the-netherlands'
    }]
  },
  belgium: {
    name: 'Belgium',
    societies: [{
      name: 'belgium',
      link: 'belgium'
    }]
  },
  'fixme-beneath-belgium': {
    name: 'Fixme Beneath Belgium',
    societies: [{
      name: 'fixme-beneath-belgium',
      link: 'fixme-beneath-belgium'
    }]
  },
  'the-united-kingdom': {
    name: 'The United Kingdom',
    societies: [{
      name: 'the-united-kingdom',
      link: 'the-united-kingdom'
    }]
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
    link.textContent = society.name;
    societyLinks.appendChild(link);
    societyLinks.appendChild(document.createElement('br'));
  });

  infoDiv.classList.add('active');
}

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