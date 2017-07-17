let Main = document.querySelector(".container");
let header = document.querySelector(".name_header")
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/ochanya");
req.addEventListener("load",function(){
  let obj = JSON.parse(req.response);
    header.innerHTML=`<h1>${obj.login}</h1>`

    Main.innerHTML= `
    <div class="sections">
      <div class="">
      <h2>The Basics</h2>
        <ul class="no-bullets">
          <li>Name: ${obj.login}</li>
          <li>Github URL: ${obj.html_url}</li>
          <li>Email: ${obj.email}</li>
          <li>Company: ${obj.company}</li>
          <li>Website: ${obj.blog}</li>
        </ul>
    </div>
    <div class="">
      <h2>The Story</h2>
        <p></p>
    </div>
    <div class="">
      <img class = "img-circle"src="${obj.avatar_url}" alt="">
    </div>
  </div>

  `;
})
req.send()
