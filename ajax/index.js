function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.usaspending.gov/api/v2/references/glossary/?limit=20");
  xhttp.onload = function () {
    var data = [];
    data.push(JSON.parse(this.responseText));
    var articles = data[0].results;
    var entries = "";
    articles.map((n, i) => {
      entries += "<tr><td>" + n.term + "</td><td>" + n.slug + "</td><td>" + n.plain + "</td></tr>";
    }, this);
    document.getElementById("entries").innerHTML = entries;
    console.log(data);
    console.log(entries);
  };
  xhttp.send();
}
