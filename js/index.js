// Get the form element
var form = document.getElementById('myForm');


// Add an event listener that will be triggered when the form is submitted
form.addEventListener('submit', function(e) {
  // Prevent the form from being submitted
  e.preventDefault();





  // Redirect the user to the thanks.html page
  window.location.replace('thanks.html');

// Get the form data from the previous page
var formData = window.opener.formData;

// Write the form data to the page
document.write("Your Order: ")
document.write('<dl>');
for (var i in formData) {
  document.write('<dt>' + i + '</dt>');
  document.write('<dd>' + formData[i] + '</dd>');
}
document.write('</dl>');

});

