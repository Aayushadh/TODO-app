var addButton = document.getElementById("add-button");
var listBlock = document.getElementById("list-block");

addButton.addEventListener("click", function () {
  
  //showing border of list-block
  if (listBlock.clientHeight >= 400) {
    listBlock.style.border = "1px solid";
  }

  var inputField = document.getElementById("inputfield");
  var activity = inputField.value;

  // if input is not null
  if (activity != "") {
    inputField.value = "";

    var div = document.createElement("div");
    div.classList.add("item");

    //using string-interpolation
    const list = `<button class="cross">
                    <i class="fas fa-check"></i>
                </button>
                <p class="item-text">${activity}</p>
                <button class="removeButton">
                    <i class="fas fa-times-circle"></i>
                </button>
    `;

    div.innerHTML = list;
    listBlock.appendChild(div);
  }

  // if input is null don't add that task
  else {
    alert("You can't keep it blank");
  }
});

var input = document.getElementById("inputfield");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    //no need of preventDefault() because it's not submitting and also not in form
    document.getElementById("add-button").click();
  }
});


//delete and check functions using event-delegation on listBlock

listBlock.addEventListener("click", (event) => {
  const elem = event.target;

  //deleting the specific list
  if (elem.className == "fas fa-times-circle") {
    var bappu = elem.parentElement.parentElement;
    bappu.style.display = "none";

    //hiding border of list-block if height of list-block is smaller than 450
    if (listBlock.clientHeight < 450) {
      listBlock.style.border = "0";
    }
  }

  //checking the activity
  else if (elem.className == "fas fa-check") {
    var texti = elem.parentElement.nextElementSibling;

    if(texti.className.includes('striked')){
       texti.classList.remove("striked")
       elem.style.color="red"
    }
    else{
        texti.classList.add("striked")
        elem.style.color="green"
    }
  }
});
