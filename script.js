const inp = document.getElementById("input");
const btn = document.getElementById("button");
const result = document.getElementById("details");
console.log(result);

let movie = () => {
  let input = inp.value;
  console.log(input);
  if(input.length <= 0){
    alert("Please! Enter a movie name");
  } else{
    fetch(`http://www.omdbapi.com/?t=${input}&apikey=a6d9f3b0`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `  <div class="info">
        <img src=${data.Poster} class="poster">
        <div>
            <h2>${data.Title}</h2>
            <div class="rating">
                <img src="star-icon.svg">
                <h4>${data.Ratings[0].Value}</h4>
            </div>
            <div class="details">
               
                <span>${data.Released}</span>
                <span>${data.Runtime}</span>
            </div>
            <div class="genre">
            <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>
            <h3>Director</h3>
            <div class ="director"><h4>${data.Director}</h4></div>
            </div>
                <div class ="language"><p>Language :${data.Language}</p></div>
                </div>
            </div>
    <h3>Plot:</h3>
    <p>${data.Plot}</p>
    <h3>Cast:</h3>
    <p>${data.Actors}</p> `
      })
  }
}


btn.addEventListener("click", movie);
window.addEventListener("load", movie);
