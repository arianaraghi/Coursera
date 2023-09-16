(function(){
	'use strict';

	var detailsForm = document.querySelector('#destination_details_form');

	detailsForm.addEventListener('submit', function(event){
		event.preventDefault();

		const name = event.target.elements['name'].value;
		const location = event.target.elements['location'].value;
		const photo = event.target.elements['photo'].value;
		const description = event.target.elements['description'].value;

		for(let i=0; i<detailsForm.elements.length;i++){
			detailsForm.elements[i].value = '';
		}

		const wishListContainer = document.querySelector('#destination_container');
		if (wishListContainer.children.length === 0){
			document.querySelector('#title').innerHTML = 'My Wish List';
		}
		
		const destCard = createDestinationCard(name, location, photo, description);

		document.querySelector('#destination_container').appendChild(destCard);
	});

	function createDestinationCard(name, location, photoUrl, description){
		const card = document.createElement('div');
		card.className = 'card';

		const photo = document.createElement('img');
		photo.setAttribute('alt', name);
		const constantPhotoUrl = 'images/signpost.jpg';
		if(photoUrl.length === 0){
			photo.setAttribute('src', constantPhotoUrl);
		}else{
			photo.setAttribute('src', photoUrl);
		}
		card.appendChild(photo);

		const cardBody = document.createElement('div');
		cardBody.className = 'card-body';

		const cardName = document.createElement('h3');
		cardName.innerText = name;
		cardBody.appendChild(cardName);

		const cardloc = document.createElement('h4');
		cardloc.innerText = location;
		cardBody.appendChild(cardloc);

		const cardDesc = document.createElement('p');
		if(description.length != 0){
			cardDesc.innerText = description;
		}else{
			cardDesc.innerText = 'No Description';
		}
		cardBody.appendChild(cardDesc);

		const cardDeleteBtn = document.createElement('button');
		cardDeleteBtn.innerText = 'Remove';

		cardDeleteBtn.addEventListener('click', removeDestination);
		cardBody.appendChild(cardDeleteBtn);
		card.appendChild(cardBody);
		return card;
	}
	function removeDestination(event){
		const card = event.target.parentElement.parentElement;
		card.remove();
	}
})();