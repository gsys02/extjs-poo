var l = function(str) {
	console.log(str)
}

Ext.define('Song', {

	constructor : function(pass) {

		l("Song: " + pass);

	},

	song : function(songName) {
		l("I'm singing " + songName);
	}
});

Ext.define('Persona', {
	extend : 'Song',

	config : {
		name : 'Mr. Unknown',
		age : 2000,
		gender : 'Male'
	},

	piso : '',

	constructor : function(pass) {

		this.callParent([ "assss" ]);
		// this.callParent(arguments);

		this.piso = "es el piso 20";
		l("pass: " + pass);

	},

	mixins : {
		canSong : 'Song',
	},

	song : function() {
		l("mixin {");
		this.mixins.canSong.song.call(this);
		l("mixin }");
		var i = 5;

		l("{i}");
	},

	hola : function() {
		l(this.age + " " + this.piso);

		Persona.addMembers({
			meow : function() {
				alert('Meowww...');
			},
			a : "s"
		});

		Persona.prototype['puti'] = "hola mundo";
	}

});

Ext.define('User', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'name',
		type : 'string'
	}, {
		name : 'age',
		type : 'int'
	}, {
		name : 'phone',
		type : 'string'
	}, {
		name : 'gender',
		type : 'string'
	}, {
		name : 'username',
		type : 'string'
	}, {
		name : 'alive',
		type : 'boolean',
		defaultValue : true
	} ],

	validations : [ {
		type : 'presence',
		field : 'age'
	}, {
		type : 'length',
		field : 'name',
		min : 2
	}, {
		type : 'inclusion',
		field : 'gender',
		list : [ 'Male', 'Female' ]
	}, {
		type : 'exclusion',
		field : 'username',
		list : [ 'Admin', 'Operator' ]
	}, {
		type : 'format',
		field : 'username',
		matcher : /([a-z]+)[0-9]{2,3}/,
		message : "sss"
	} ]
});

var instance = new User({
	name : 'Ed',
	gender : 'Male',
	username : 'edspencer'
});

var errors = instance.validate();
errors.each(function(k) {
	l("field: " + k.field);
	l("message: " + k.message);
});

// jacky = new Persona("PASS",{
// name: "Jacky",
// age: 20
// });
// l(jacky.age);
// jacky.hola();

// var nicolas = new Persona("Nicolas");
// l('\n=== Mixins ===\n')
// nicolas.song("November Rain");

