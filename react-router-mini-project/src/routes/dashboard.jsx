export default function Dashboard () {

  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", async function () {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    console.log(movies);
    updateUI(movies);
  });

  // event binding
  document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("modal-detail")) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    }
  });



  function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=84d8c1bd&s=" + keyword)
      .then((response) => response.json())
      .then((response) => response.Search);
  }

  function updateUI(movies) {
    let cards = "";
    movies.forEach((m) => {
      cards += showCards(m);
    });
    // select movies container
    const moviesContainer = document.querySelector(".movies-container");
    moviesContainer.innerHTML = cards;
  }

  function getMovieDetail(imdbid) {
    return fetch("http://www.omdbapi.com/?apikey=84d8c1bd&i=" + imdbid)
      .then((response) => response.json())
      .then((m) => m);
  }

  function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const detail = document.querySelector(".modal-body");
    detail.innerHTML = movieDetail;
  }

  // constants
  function showCards(m) {
    return `<div class="col-md-3 my-3">
                  <div class="card" style="width: 18rem;">
                      <img src="${m.Poster}" class="card-img-top" alt="Ini poster, lho">
                      <div class="card-body">
                          <h5 class="card-title">${m.Title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                          <a href="#" class="btn btn-success modal-detail" data-bs-toggle="modal" data-bs-target="#moviesDetail"
                          data-imdbid="${m.imdbID}">Details</a>
                      </div>
                  </div>
              </div>`;
  }

  function showMovieDetail(m) {
    return `<div class="container-fluid">
                  <div class="row">
                  <div class="col-md-3">
                      <img class="img-fluid" src="${m.Poster}" />
                  </div>
                  <div class="col-md">
                      <ul class="list-group">
                      <li class="list-group-item">
                          <h4>${m.Title} (${m.Year})</h4>
                      </li>
                      <li class="list-group-item">
                          <strong>Director : </strong>${m.Director}
                      </li>
                      <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                      <li class="list-group-item">
                          <strong>Actors : </strong>${m.Actors}
                      </li>
                      <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                      </ul>
                  </div>
                  </div>
              </div>`;
  }

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />

      <div class="container">
        <div class="row ">
          <div class="col-md my-3">
            <h1>Booking Cinema Ticket</h1>
          </div>
        </div>
        <div class="search">
          <div class="input-group mb-3">
              <input type="text" class="form-control input-keyword" placeholder="Search Movie..." />
              <button class="btn btn-outline-primary search-button" type="button" >Search</button>
            </div>
        </div>
        <div class="body">
          <div class="row movies-container"></div>
        </div>
      {/* <!-- Template Modal --> */}
      {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="moviesDetail"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="moviesDetailLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="moviesDetailLabel">Descriptions</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
      
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>

      <script src="script.js"></script>
    </div>
  );
}