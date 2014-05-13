Ext.define('Persona', {

	config : {
		name : 'Mr. Unknown',
		age : 2000,
		gender : 'Male'
	},

	constructor : function(config) {
		this.initConfig(config);

		Persona.prototype['meow2'] = function() {
			console.log('Meowww...  2s');
		};
		
		this.meow2();
		
	},

	hola : function() {
		

		Persona.addMembers({
			meow : function() {
				console.log('Meowww...');
			},
			ho : "adios mundo"
		});

		Persona.prototype['puti'] = "hola mundo";
		Persona.prototype['meow2'] = function() {
			console.log('Meowww...  2222');
		};
	}

});

/*
 * MAIN
 */

var jacky = new Persona({
	name : "Jacky",
	age : 20
});

console.log('x'+jacky.age);
jacky.hola();

jacky.meow();
console.log(jacky.ho);

console.log("Config "+jacky.name);


console.log(a);