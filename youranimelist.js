var api_url = "https://api.jikan.moe/v4/anime/{id}/full"; 


async function getAnime(id) { 
      
    // Making an API call (request) 
    // and getting the response back 
    const response = await fetch(api_url.replace("{id}", id)); 

    // check if response is OK
    // logging if not ok and return to skip the rest of the block
    if (!response.ok) {
        console.log("The anime id " + id + " has failed to repond with OK")
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
    }
}

// repeat api calls for first 100 ids in Jikan
for (let i = 1; i < 100; i++) {
    getAnime(i);
}


