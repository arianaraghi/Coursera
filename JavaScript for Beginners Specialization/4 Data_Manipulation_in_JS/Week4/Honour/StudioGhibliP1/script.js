(function () {
    const mainElement = document.querySelector('main');
    let filmData;

    async function getFilms() {
        const filmsPromise = await fetch('https://ghibliapi.herokuapp.com/films');
        const films = await filmsPromise.json();

        setSort(films);
        addCard(films);
        filmData = films;
        document.getElementById('sortorder').removeAttribute('disabled');
    }

    getFilms();


    document.getElementById('sortorder').addEventListener('change', function (e) {
        e.preventDefault();
        mainElement.innerHTML = '';
        setSort(filmData);
        addCard(filmData);
    });

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

    function createCard(data) {
        const card = document.createElement('article');


        const movieTitle = document.createElement('h2');
        const movieTitleText = document.createTextNode(data.title);
        movieTitle.appendChild(movieTitleText);


        const director = document.createElement('p');
        const directorText = document.createTextNode(`Director: ${data.director}`);
        director.appendChild(directorText);


        const year = document.createElement('p');
        const yearText = document.createTextNode(`Released: ${data.release_date}`);
        year.appendChild(yearText);


        const description = document.createElement('p');
        const descriptionText = document.createTextNode(`Description: ${data.description}`);
        description.appendChild(descriptionText);


        const score = document.createElement('p');
        const scoreText = document.createTextNode(`Rotten Tomatoes Score: ${data.rt_score}`);
        score.appendChild(scoreText);


        card.appendChild(movieTitle);
        card.appendChild(director);
        card.appendChild(year);
        card.appendChild(description);
        card.appendChild(score);


        mainElement.appendChild(card);
    }
}());