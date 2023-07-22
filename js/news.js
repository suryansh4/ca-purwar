
newsacc = document.getElementById('newsacc');

function reqListener() {
  let json = JSON.parse(this.responseText);
  let articles = json.articles;
  // console.log(articles);
  let newsHtml ="";

  articles.forEach(function(element) {
    
    let news =`  <div class="card" id="newsacc">
                                <h5 class="card-header">${element["publishedAt"]}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text">${element["content"]}</p>
                                    <a href="${element["url"]}" target="_blank" class="btn btn-primary">Go somewhere</a>
                                </div>
                </div>`
    
    newsHtml+=news;
 });
  newsacc.innerHTML = newsHtml;

  

}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c98c1c5e6404267b1f09c955f905eec");
req.send();


