var n = 1;
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://api.usaspending.gov/api/v2/references/glossary/?limit=20&?page=${n}`);
  xhttp.onload = function () {
    var data = [];
    data.push(JSON.parse(this.responseText));
    var articles = data[0].results;
    var entries = "";
    articles.map((n, i) => {
      entries +=
        '<div class="card" syle="width: 18rem;"><div class="card-body"><h5 class="card-title">' +
        n.term +
        '</h5><p class="card-text">' +
        n.plain +
        '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
    }, this);
    entries = entries.replace("Account", "<strong>Account</strong>");
    document.getElementById("entry-cards").innerHTML = entries;
    console.log(data);
    console.log(entries);
  };
  xhttp.send();
}
function nextPage() {
  n += 1;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://api.usaspending.gov/api/v2/references/glossary/?limit=20&?page=${n}`);
  xhttp.onload = function () {
    var data = [];
    data.push(JSON.parse(this.responseText));
    var articles = data[0].results;
    var entries = "";
    articles.map((n, i) => {
      '<div class="card" syle="width: 18rem;"><div class="card-body"><h5 class="card-title">' +
        n.term +
        '</h5><p class="card-text">' +
        n.plain +
        '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
    }, this);
    entries = entries.replace("Account", "<strong>Account</strong>");
    document.getElementById("entries").innerHTML = entries;
    console.log(data);
    console.log(entries);
  };
  xhttp.send();
}
function previousPage() {
  n -= 1;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://api.usaspending.gov/api/v2/references/glossary/?limit=20&?page=${n}`);
  xhttp.onload = function () {
    var data = [];
    data.push(JSON.parse(this.responseText));
    var articles = data[0].results;
    var entries = "";
    articles.map((n, i) => {
      '<div class="card" syle="width: 18rem;"><div class="card-body"><h5 class="card-title">' +
        n.term +
        '</h5><p class="card-text">' +
        n.plain +
        '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
    }, this);
    entries = entries.replace("Account", "<strong>Account</strong>");
    document.getElementById("entries").innerHTML = entries;
    console.log(data);
    console.log(entries);
  };
  xhttp.send();
}
if (n > 1) {
  document.getElementById("previous-page").style.visibility = "visible";
}
