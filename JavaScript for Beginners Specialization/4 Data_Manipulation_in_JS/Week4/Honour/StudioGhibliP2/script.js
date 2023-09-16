(function () {
    const mainElement = document.querySelector('main');
    const navLinks = document.querySelectorAll('#mainnav ul li a');

    let filmData;
    let dataSet = 'films';
    let url = 'https://ghibliapi.herokuapp.com/films'


    getData(url);

    document.getElementById('sortorder').addEventListener('change', function (e) {
        e.preventDefault();
        mainElement.innerHTML = '';
        setSort(filmData);
        addCard(filmData);
    });

    navLinks.forEach(eachlink => {
        eachlink.addEventListener('click', function (e) {
            e.preventDefault();
            const thisLink = e.target.getAttribute('href').substring(1);
            url = 'https://ghibliapi.herokuapp.com/' + thisLink;
            dataSet = thisLink;
            if (dataSet != 'films') {
                document.getElementById('sortorder').style.display = 'none';
            }
            else {
                document.getElementById('sortorder').style.display = 'block';
            }
            getData(url);
        });
    });


    /* --------------------------------------------- */
    /*                                               */
    /*                   Functions                   */
    /*                                               */
    /* --------------------------------------------- */


    async function getData(url) {

        const dataPromise = await fetch(url);
        const data = await dataPromise.json();

        if (dataSet === 'films') {
            mainElement.innerHTML = '';
            setSort(data);
            addCard(data);
            filmData = data;
            document.getElementById('sortorder').removeAttribute('disabled');
        }
        else {
            mainElement.innerHTML = '';
            addCard(data);
        }
    }


    function setSort(array) {
        const sortOrder = document.getElementById('sortorder').value;
        switch (sortOrder) {
            case 'title': array.sort((a, b) => (a.title > b.title) ? 1 : -1); break;
            case 'release_date': array.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1); break;
            case 'rt-score': array.sort((a, b) => (parseInt(a.rt_score) > parseInt(b.rt_score)) ? -1 : 1); break;
        }
    }

    function addCard(array) {
        array.forEach(eachItem => {
            createCard(eachItem);
        });
    }

    async function createCard(data) {
        const card = document.createElement('article');
        switch (dataSet) {
            case 'films': card.innerHTML = filmCardContent(data); break;
            case 'people': card.innerHTML = await peopleCardContent(data); break;
            case 'locations': card.innerHTML = await locationCardContent(data); break;
        }

        mainElement.appendChild(card);
    }

    async function indivItem(url, item) {
        let theItem;
        try {
            const itemPromise = await fetch(url);
            const data = await itemPromise.json();
            theItem = data[item];
        } catch {
            theItem = "No data available!"
        } finally {
            return theItem;
        }
    }

    function filmCardContent(data) {
        let html = `<h2>${data.title}</h2>`;
        html += `<p><strong>Director:</strong>${data.director}</p>`;
        html += `<p><strong>Released:</strong>${data.release_date}</p>`;
        html += `<p><${data.description}</p>`
        html += `<p><strong>Rotten Tomatoes Score:</strong>${data.rt_score}</p>`;

        return html;
    }

    async function peopleCardContent(data) {
        const theFilms = data.films;
        let filmtitles = [];
        for (film of theFilms) {
            const filmTitle = await indivItem(film, 'title');
            filmtitles.push(filmTitle);
        }

        const species = await indivItem(data.species, 'name');
        let html = `<h2>${data.name}</h2>`;
        html += `<p><strong>Details:</strong> gender ${data.gender}, age ${data.age}, eye color ${data.eye_color}, hair color ${data.hair_color} </p>`;
        html += `<p><strong>Films:</strong>${filmtitles.join(', ')}</p>`;
        html += `<p><strong>Species:</strong>${species}</p>`;
        return html;
    }

    async function locationCardContent(data) {
        const regex = 'https:?\/\/';
        const theResidents = data.residents;
        let residentNames = [];
        for (resident of theResidents) {
            if (resident.match(regex)) {
                const resName = await indivItem(resident, 'name');
                residentNames.push(resName);
            }
            else {
                residentNames[0] = 'No data available!'
            }

        }

        const theFilms = data.films;
        let filmtitles = [];
        for (film of theFilms) {
            const filmTitle = await indivItem(film, 'title');
            filmtitles.push(filmTitle);
        }

        let html = `<h2>${data.name}</h2>`;
        html += `<p><strong>Details:</strong> climate ${data.climate}, terrain ${data.terrain}, surface water  ${data.surface_water}</p>`;
        html += `<p><strong>Residents:</strong>${residentNames.join(', ')}</p>`;
        html += `<p><strong>Films:</strong>${filmtitles.join(', ')}</p>`;
        return html;
    }

}());