/*---------------------
 	DATA STRUCTURE
----------------------*/
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: hexColorGenerator()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: hexColorGenerator()
	}
];

/*---------------------
 	    FUNCTION
----------------------*/

function hexColorGenerator(){
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function printAllIcon(icons, container){
	for (let i = 0; i < icons.length; i++){
		
		const template = document.getElementById("tpl-box").content.cloneNode(true);
		const icon = document.createElement("i");
		
		icon.classList.add(icons[i].prefix+icons[i].name, icons[i].family);
		icon.style.color = icons[i].color;
		template.querySelector(".box").append(icon);
		
		const description = document.createElement("div");
		description.classList.add("icon_name");
		description.innerHTML = icons[i].name;
		template.querySelector(".box").append(description);

		container.append(template);
	}
}

function printFilteredIcon(ObjectList, container, label){
	ObjectList.forEach((element, index) => {
		if (element.type === label){
			const template = document.getElementById("tpl-box").content.cloneNode(true);
			const icon = document.createElement("i");

			icon.classList.add(ObjectList[index].prefix+ObjectList[index].name, ObjectList[index].family);
			icon.style.color = ObjectList[index].color;
			template.querySelector(".box").append(icon);

			const description = document.createElement("div");
			description.classList.add("icon_name");
			description.innerHTML = ObjectList[index].name;
			template.querySelector(".box").append(description);

			container.append(template);

		}else{

		}
	});
}

function emptyContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



/*---------------------
 		MAIN
----------------------*/
const container = document.querySelector(".icons_container");
const selector = document.querySelector("#categories");


printAllIcon(icons, container);

selector.addEventListener("change", (event) => {
		emptyContainer(container);
		const selector = document.getElementById("categories").value;
		console.log(selector);
		if (selector === "all"){
			printAllIcon(icons, container);
		}else{
			printFilteredIcon(icons, container, selector);
		}
	}
)



