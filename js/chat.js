$("#sent-msg").hide();
$("#recieved-msg").hide();



var d = new Date();

var month = d.toLocaleString('default', { month: 'long' });
var day = d.getDate();
var hour=  d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var minutes=d.getMinutes(); 

var output = (day<10 ? '0' : '')+day+" "+month+","+(hour<10 ? '0' : '')+ hour ; //+ ":" + (minutes<10 ? '0' : '')+ minutes;

    document.getElementById("date").innerHTML = output;



function send(){
    var x = document.getElementById("input-text");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  $("#sent-msg").show();
  document.getElementById("sent-msg").innerHTML = text;

  setTimeout(reply, 2000);
}

function reply(){
  $("#recieved-msg").show();
  var text="okay,cool 😊";
  document.getElementById("recieved-msg").innerHTML = text;
}