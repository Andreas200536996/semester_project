// Get the form element
var form = document.getElementById('myForm');

// Get the input elements where the user will enter their order
var item1 = form.elements['item1'];
var item2 = form.elements['item2'];
var item3 = form.elements['item3'];

// Add an event listener that will be triggered when the form is submitted
form.addEventListener('submit', function(e) {
  // Prevent the form from being submitted
 // e.preventDefault();

  // Create a string to hold the items the user has ordered
  var order = '';

  // Check if each item is checked, and add its value to the order string if it is
  if (item1.checked) {
    order += item1.value + '\n';
  }
  if (item2.checked) {
    order += item2.value + '\n';
  }
  if (item3.checked) {
    order += item3.value + '\n';
  }

  // Create a JavaScript alert that displays the items the user has ordered
  window.alert('You have ordered:\n' + order);
});
