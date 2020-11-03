var msg      = document.querySelector('#msg');
var interact = document.querySelector('#interact');
var result   = document.querySelector('#reply');

interact.addEventListener('click',function(){
  var c = msg.value.toLowerCase();
  var reply = '';
  if(c.match("hello")){
    reply = "Hi There !";
  }else if(c.match("name")){
    reply = "Custom Bot"
  }else{
    reply = c;
  }
  result.innerHTML = reply;
  let khota = new SpeechSynthesisUtterance(reply);
  speechSynthesis.speak(khota);
})