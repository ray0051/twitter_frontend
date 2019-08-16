function post_text()
{
    var x = document.getElementById("tweet");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    } 
}
function log_out()
{
  var x = document.getElementById("logout");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
}