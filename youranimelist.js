var api_url = "https://api.jikan.moe/v4/anime/{id}/full"; 
let counter = 0
let id = 1;

async function getAnime(numberOfRequest) { 
    if(counter >= numberOfRequest) {
        return;
    }

    let response;
    try {
    // Making an API call (request) 
    // and getting the response back 
    response = await fetch(api_url.replace("{id}", id)); 
    }
    catch(err) {
        console.log("There was an error with this request")
        return;
    }
    
    // check if response is OK
    // logging if not ok and return to skip the rest of the block
    if (!response.ok) {
        console.log("The anime id " + id + " has failed to repond with OK")
        //increment the id number and keep searching until number of request is reached.
        id++
        getAnime(numberOfRequest)
        return;
    } else {  
    
    // Parsing it to JSON format 
    const data = await response.json();

    // Retrieving data from JSON
    const anime = data.data;
    let {title, url} = anime;
    let images = anime.images.jpg.large_image_url;

    // creating container for anime image and title dynamically
    var container = document.createElement("figure")
    
    // making the image link to more details page
    var link = document.createElement("a")
    link.href = url

    // creating image to display anime cover
    var img = document.createElement("img");
    img.className = "anime-img"
    img.src = images

    // adding image to link
    link.appendChild(img)

    // adding link to container
    container.appendChild(link)

    // adding caption/text underneath the anime cover
    var text = document.createElement("figcaption");
    text.className = "anime-name"
    text.innerHTML = title;
    container.appendChild(text)

    // add container into HTML body of index.html
    document.body.appendChild(container)
    
    //counters to progress the function until all anime is gotten
    counter++
    id++
    getAnime(numberOfRequest)
    }
}

getAnime(100)

