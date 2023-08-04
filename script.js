const searchBtn = document.getElementById("btn")
const input = document.getElementById("Category")

searchBtn.addEventListener("click", pictureGal)

function pictureGal ()  {
    const category = input.value
    fetch(`https://api.unsplash.com/search/photos?query=${category}
    &client_id=6eB1toyfTrg0VXIo_EJUrH37VXJTzww5rLCCe8h9p5g&per_page=12`, {
        headers: {
            Authorization: 'Basic 6eB1toyfTrg0VXIo_EJUrH37VXJTzww5rLCCe8h9p5g'
        }
    }).then((response) => { return response.json() }).then(data => {
        abc = ''
        data.results.forEach(element => {
            abc += `
                <div class="card marg" style = "width: 18rem;">
                <img src="${element.urls.regular}" height="280px" width="300px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.user.name}</h5>
                        <p class="card-text">${element.alt_description}</p>
                        <a href="${element.links.html}" class="btn btn-primary">Url link</a>
                    </div>
                </div>`


        });
        gal.innerHTML = abc
    })
}

