document.getElementById('svg-object').addEventListener('load', function() {
    const svgDoc = this.contentDocument;
    svgDoc.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', function() {
            const countryId = this.id;
            setActiveCountry(svgDoc, countryId);
            showCountryInfo(countryId);
        });
    });
});

function setActiveCountry(svgDoc, activeId) {
    svgDoc.querySelectorAll('path').forEach(path => {
        if (path.id === activeId) {
            path.classList.add('active-country');
        } else {
            path.classList.remove('active-country');
        }
    });
}

function showCountryInfo(countryId) {
    const infoDiv = document.getElementById('country-info-container');
    const countryName = document.getElementById('country-name');
    const societyLinks = document.getElementById('society-links');
    const countryData = {
        country1: {
            name: "Country1",
            societies: [
                { name: "Ireland Psychoanalytic Society", link: "#" }
            ]
        },
        country2: {
            name: "Country2",
            societies: [
                { name: "Country2 Psychoanalytic Society 1", link: "#" },
                { name: "Country2 Psychoanalytic Society 2", link: "#" }
            ]
        }
        // Dodajte ostale zemlje i njihove informacije ovde
    };

    const data = countryData[countryId] || { name: "Informacije nisu dostupne", societies: [] };
    countryName.textContent = data.name;
    societyLinks.innerHTML = "";
    data.societies.forEach(society => {
        const link = document.createElement('a');
        link.href = society.link;
        link.textContent = society.name;
        societyLinks.appendChild(link);
        societyLinks.appendChild(document.createElement('br'));
    });

    infoDiv.classList.add('active');
}

document.addEventListener('click', function(e) {
    const svgObject = document.getElementById('svg-object');
    if (svgObject && !svgObject.contains(e.target)) {
        document.getElementById('country-info-container').classList.remove('active');
        const svgDoc = svgObject.contentDocument;
        setActiveCountry(svgDoc, null);
    }
});