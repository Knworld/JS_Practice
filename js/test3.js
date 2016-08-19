function getShortMessages(messages){

  return messages.filter(function(a){
    if(a.message.length < 50) return true;
  }).map(function(item){return item.message});



}


//console.log(getShortMessages([{message: "tes here"}]))

module.exports = getShortMessages;
