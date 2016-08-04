$(document).ready(function() {
  console.log("ready");
  //put a new spy button on the DOM
  $("#newSpyButton").append('<button id="addSpy">New Spy</button>');

  //request new spy information when you press the button
  $("#addSpy").on("click", getSpy);

  //change status functionality
  $("#container").on("click", ".status", function() {
    console.log("clicked this");
    $(this).parent().toggleClass("highlightRed");
  });

  //delete line functionality
  $("#container").on("click", ".delete", function() {
    $(this).parent().remove();
  });

});

var spy = ""
var spyNumber = 0

function getSpy() {
  spy = prompt("Please enter the new spy name:");
  spyNumber++;
  $("#container").append('<div class="spyLine">' + spyNumber + '     ' + spy + '<button class="status">Change Status</button><button class="delete">Delete</button></div>');
}
