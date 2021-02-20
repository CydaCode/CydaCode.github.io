var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var bbt = document.querySelectorAll(".bold");



function inputLengths(){
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		 li.appendChild(document.createTextNode(input.value));
		 ul.appendChild(li);
		 input.value = "";
}
function createButton() {
	var bb = document.createElement("button");
		bb.appendChild(document.createElement("button"));
		li.appendChild(bb);
}

function addButtonList() {
		if (inputLengths()> 0) {
		createListElement();
		}
}


function addInputList(event) {
		if (inputLengths() > 0 && event.keyCode===13) {
			createListElement();
		}
	}
	
function toggle() {
	{
		this.classList.toggle("done");
	 }
	}
		for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", toggle);

		}
function bbbt() {
		this.classList.toggle("done");
}

for (var i = 0; i < bbt.length; i++) {
		bbt[i].addEventListener("click", bbbt);


function bt() {
		this.closest(".bold").remove();
}
		bbt[i].querySelector("button").addEventListener("click", bt);
	}

button.addEventListener("click", addButtonList);
		 
	

input.addEventListener("keypress", addInputList);




