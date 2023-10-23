const api_url = "https://api.jikan.moe/v4/anime/1/full"; 
async function getAnime() { 
      
    // Making an API call (request) 
    // and getting the response back 
    const response = await fetch(api_url); 

    // Parsing it to JSON format 
    const data = await response.json(); 
    console.log(data.approved); 

    // Retrieving data from JSON
    //const anime = data.title_english;

    
    // Accessing the div container and modify/add 
      // elements to the containers 
    document.getElementById("animename").innerHTML = data.title_english;
}

getAnime();