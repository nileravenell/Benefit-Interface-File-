//Hanldle File Select
function init(){
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  document.getElementById('XMLInput').addEventListener('change', handleXMLFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
  document.getElementById('fileContent').textContent = event.target.result;
}

//XMl Handles File Select
function handleXMLFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleXMLFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleXMLFileLoad(event){
  XMLParser(event.target.result);
}

//XML Parse
function XMLParser(text){
  let parser = new DOMParser();
  let XMLDoc = parser.parseFromString(text,"text/xml");
  let stack = [XMLDoc];
  while (stack.length > 0) {
    let node = stack.pop();
    for (i = 0; node.children.length > i; i++){
      stack.push(node.children[i]);
    }
    console.log(node.tagName)
  }
}

//Display XML Content
function XMLContent(){
  var elmnt = document.getElementsByTagName('H1')[0];
  var attr = elmnt.getAttributeNode('class').value;
  document.getElementById("XMLInput").innerHTML = attr;
}