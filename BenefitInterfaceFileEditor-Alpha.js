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
  let fileContent = String('fileContent')
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
  document.getElementById("mount").innerHTML = null
  let parser = new DOMParser();
  let XMLDoc = parser.parseFromString(text,"text/xml");
  let stack = [XMLDoc];
  let dateFormat;
  let target;
  let fieldIndex = 0;
  while (stack.length > 0) {
    let node = stack.pop();
    for (i = 0; node.children.length > i; i++){
      stack.push(node.children[node.children.length-i-1]);
    }
    switch(node.tagName){
      case "interface":
        headerNode = document.createElement("H6");
        headerNode.innerHTML = node.getAttribute("name");
        document.getElementById('mount').appendChild(headerNode);
        break;
      case "line":
        lineNode = document.createElement("H1");
        lineNode.innerHTML = node.getAttribute("type");
        document.getElementById('mount').appendChild(lineNode);
        break;
      case "section":
        sectionNode = document.createElement("H6");
        sectionNode.innerHTML = node.getAttribute("name");
        document.getElementById('mount').appendChild(sectionNode);
        break;
      case "dateFormat":
        dateFormat = node.innerHTML;
        console.log(dateFormat);
        break;
      case "fields":
        /*fieldsNode = document.createElement("ul");
        fieldsNode.id = "fields" + String(fieldIndex);
        fieldIndex++;
        document.getElementById('mount').appendChild(fieldsNode);
        target = fieldsNode;*/
        break;
      case "field":
        divNode = document.createElement("div");
        divNode.class = "form-group";
        labelNode = document.createElement("label");
        inputNode = document.createElement("input");
        inputNode.class = "form-control";
        divNode.appendChild(labelNode);
        divNode.appendChild(inputNode);
        document.getElementById('mount').appendChild(divNode);
        labelNode.innerHTML = node.getAttribute("name");
        inputNode.id = "fields" + String(fieldIndex);
        labelNode.for = inputNode.id
        inputNode.maxLength = parseInt(node.getAttribute("length"), 10);
        /*fieldNode = document.createElement("li");
        fieldNode.innerHTML = node.getAttribute("name");
        document.getElementById(target.id).appendChild(fieldNode);*/
    }
  }
}

//Display XML Content
function XMLContent(){
  var elmnt = document.getElementsByTagName('H1')[0];
  var attr = elmnt.getAttributeNode('class').value;
  document.getElementById("XMLInput").innerHTML = attr;
}

//XML Display