var api_url = "https://api.jikan.moe/v4/anime/{id}/full"; 


async function getAnime(id) { 
      
    // Making an API call (request) 
    // and getting the response back 
    const response = await fetch(api_url.replace("{id}", id)); 

    if (!response.ok) {
        console.log("not ok " + id)
        return;
    } else {  
    // Parsing it to JSON format 
    const data = await response.json();

    // Retrieving data from JSON
    const anime = data.data;
    let {title, url} = anime;
    let images = anime.images.jpg.large_image_url;

    // Accessing the div container and modify/add 
    // elements to the containers

    var container = document.createElement("div")

    var link = document.createElement("a")
    link.href = url
    var img = document.createElement("img");
    img.className = "anime-img"
    img.src = images
    link.appendChild(img)
    container.appendChild(link)
    
    var text = document.createElement("div");
    text.className = "anime-name"
    text.innerHTML = title;
    container.appendChild(text)

    document.body.appendChild(container)

    //success, i can make the div dynamically.
    //now i need to make sure that only success is counted when looping through.
    //it's also really slow.
    }
}

for (let i = 1; i < 15; i++) {
    getAnime(i);
}

// try catch block might be more suitable for this.

