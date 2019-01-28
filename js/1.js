// Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

function getAttributes() {
  var elem = document.getElementById('w3r');
  
  console.log(elem.href);
  console.log(elem.hreflang);
  console.log(elem.rel);
  console.log(elem.target);
  console.log(elem.type);
}
