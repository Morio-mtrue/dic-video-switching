let number = 0;
// Holds the data retrieved from ajax.json so that it only has to be
// fetched once. While it is empty, no request has succeeded yet.
let data = [];

const button = document.getElementById("btn");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

// Ajax communication with ajax.json. Runs only the first time.
function getData(callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        data = request.response;
        callback();
      }
    }
  };
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

// Displays the video at the current index, then moves the index on by one.
function showVideo() {
  titleArea.textContent = data[number].title;
  contentArea.textContent = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = number === data.length - 1 ? 0 : number + 1;
}

function changeVideo() {
  button.addEventListener("click", () => {
    // Only the very first click communicates with ajax.json.
    // Every later click reuses the data already stored in the variable.
    if (data.length === 0) {
      getData(showVideo);
    } else {
      showVideo();
    }
  });
}

window.onload = changeVideo;
