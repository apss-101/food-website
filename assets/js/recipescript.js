fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=recipes&key=AIzaSyAhbUq2j3C1NR5yXlBQ2DaajGY0AhY252I"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let videos = data.items;
    console.log(videos);
    let videoContainer = document.getElementById("youtubeContainer");
    for (video of videos) {
      var div = document.createElement("div");
      div.classList.add("video-card");
      function videoTitle(title) {
        var trimmedTitle = title.slice(0, 15);
        return (trimmedTitle = `${trimmedTitle}(...)`);
      }
      div.innerHTML =
        "<h3>" +
        videoTitle(video.snippet.title) +
        "</h3>" +
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        video.id.videoId +
        '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      videoContainer.appendChild(div);
    }
  });
