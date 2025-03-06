const loadingTextElement = document.querySelector("#movies p");

fetch("https://api.themoviedb.org/3/discover/movie?api_key=80bff396cb383a987a2592fc69940aca")
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        loadingTextElement.remove()
        // console.log(data.results)

        let movies = data.results;
        renderMovies(movies);

        const ratingSelectInput = document.querySelector("#rating-select")
        ratingSelectInput.addEventListener("change", function () {
            const filterdArray = [];
            movies.forEach(movie => {
                if (movie.vote_average >= Number(ratingSelectInput.value) && movie.vote_average < Number(ratingSelectInput.value) + 1) {
                    filterdArray.push(movie);
                }
                // console.log(movie)
            })
            console.log(filterdArray);
            renderMovies(filterdArray);
        })
    })
    .catch(error => {
        console.log(error)
    })

function renderMovies(movies) {
    document.querySelector("#movies").innerHTML = "";
    movies.forEach(movie => {
        const posterPath = 'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path
        document.querySelector("#movies").innerHTML += `
            <div class="movie-box" style="background-image: url('${posterPath}')">
                <div class="content">
                    <div class="heading">${movie.original_title}</div>
                    <div class="rating">
                        <i class="ri-star-fill"></i>
                        <span>${movie.vote_average.toFixed(1)}</span>
                    </div>
                </div>
            </div>`;
    })
}