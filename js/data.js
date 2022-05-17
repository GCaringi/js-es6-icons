/*---------------------
 	DATA STRUCTURE
----------------------*/
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/*---------------------
 	    FUNCTION
----------------------*/

function printAllIcon(icons, container){
	const template = document.getElementById("tpl-box").content.cloneNode(true);
	const icon = document.createElement("i");
	
	icon.classList.add(icons.prefix+icons.name, icons.family);
	icon.style.color = icons.color;
	template.querySelector(".box").append(icon);
	
	const description = document.createElement("div");
	description.classList.add("icon_name");
	description.innerHTML = icons.name;
	template.querySelector(".box").append(description);

	container.append(template);
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


for (let i = 0; i < icons.length; i++){
	printAllIcon(icons[i], container);
}

selector.addEventListener("change", (event) => {
		emptyContainer(container);
		const selector = document.getElementById("categories").value;
		printFilteredIcon(icons, container, selector);
	}
)



