window.addEventListener('DOMContentLoaded', function() {
  var head = document.head || document.getElementsByTagName('head')[0];
  
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './assets/index-827e91fd.css';
  
  head.appendChild(link);

  var body = document.body || document.getElementsByTagName('body')[0];

   // Create a new div element
   var div = document.createElement('div');
  
   // Set attributes or styles for the div element
   div.id = 'root';

    // Create a new script element
  var script = document.createElement('script');
  script.src = './assets/index-96fdd6c1.js';
    
    // Append the script element to the body section of the document
  body.appendChild(div);
  body.appendChild(script);
});