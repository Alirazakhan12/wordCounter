let textbox = document.getElementById("textbox")

textbox.addEventListener("input",function(){
 let text = this.value;
 let char = text.length;
 document.getElementById("char").innerHTML = char


  text = text.trim()
  let word = text.split(" ")
  let spaceCount = word.filter(function(ele){
   return ele!=""
  })
  document.getElementById("words").innerHTML = spaceCount.length
})


