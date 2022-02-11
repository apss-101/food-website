let nextPageToken = ""
function getVideos(){
  fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=food%20recipes&key=AIzaSyCbtz8mGvgrzhpn_bGu6m5-dHO5vBzHGlE&pageToken=+nextPageToken")
  .then((result)=>{
    return result.json()
  }) 
  .then((data)=>{
    console.log(data)
    let videos = data.items
    nextPageToken = data.nextPageToken
    let videoContainer = document.querySelector(".youtube_container")
    for(video of videos){
      videoContainer.innerHTML += '<img src="${video.snippet.thumbnails}.high.url}">' 

    }
  })
}
