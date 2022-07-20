
function newComponent() {

  var newEle = document.createElement('p');
  var txtContent = document.createTextNode('This is a new element');
  var ele = newEle.appendChild(txtContent);
  document.getElementById('root').appendChild(ele);

}

newComponent();
