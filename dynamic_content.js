function IncludeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("data-include")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("data-include");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("data-include");
          a.innerHTML = xhttp.responseText;

          z[i].parentNode.replaceChild(a, z[i]);
          IncludeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
