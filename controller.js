function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	}

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}


	this.feedPet = function(name, amount) {
		var f = model.getPetByName(name);
		f.feed(amount);
		return f;
	}

	this.beginTimer = function(name, showAllPets){
		var pet = model.getPetByName(name);
		window.setInterval(function() {
			pet.hunger += 1;
			pet.fun -= 1;
			showAllPets();
		}, 5000)
	}


}

