//this is a helper method to create a DOM node
function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

const ol = document.getElementById("people");
fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((people) => showPeople(people.results));

function showPeople(people){
  people.forEach((person) => {
    const picture = person.picture.large;
    const first_name = person.name.first;
    const last_name = person.name.last;
    const li = document.createElement("li");
    var pic = new Image();
    pic.src = picture;
    li.appendChild(pic);
    li.appendChild(document.createTextNode(first_name + " " + last_name));
    ol.appendChild(li);
  });
}