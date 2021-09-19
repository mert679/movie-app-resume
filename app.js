const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
showmovie(apiUrl)
function showmovie(url) {
    fetch(url).then(res => res.json())
    .then((data)=>{
        console.log(data.results)
        data.results.forEach(element =>{
            const movcontainer = document.createElement("div")
            movcontainer.className = "movie"
            const img = document.createElement("img")
            const li1 = document.createElement("li")
            const li2 = document.createElement("li")
            const li3 = document.createElement("li")
            
            li1.innerHTML = `${"Title:" + element.title}`
            li2.innerHTML =`${"Date:" +  element.release_date}`
            li3.innerHTML =`${"Vote:" +  element.vote_average}`
            img.src = IMGPATH + element.poster_path
            movcontainer.append(img)
            movcontainer.append(li1)
            movcontainer.append(li2)
            movcontainer.append(li3)
            main.append(movcontainer)
            
        })

    })
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    main.innerHTML = '';
    let searchMovie = search.value
    if (searchMovie){
        showmovie(SEARCHAPI+searchMovie)
        search.value = ""
    } 
})