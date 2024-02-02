window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, id) {
  let tdNode = document.createElement("td");
  tdNode.id = id;
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createBtnNode(txt, index="") {
  let btnNode = document.createElement("button");
  btnNode.innerText = txt;
  btnNode.onclick = () => {
    handleEditTextClick(index);
  }
  return btnNode;
  // btnNode.appendChild(createTxtNode(txt));
  // btnNode.id = id;
  // return btnNode;
}

function handleEditTextClick(index) {
  // let inputNode = document.getElementById(id);
  // inputNode.disabled = false;
  // inputNode.focus();
  let cell = document.getElementById(`col - ${index}`);
  cell.innerHTML = '<input type="text" id="input" value="Hello">';
  
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"), `col - ${i}`);
    let col2 = createTDNode(createBtnNode("Edit", "cell" + i + "0"));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
