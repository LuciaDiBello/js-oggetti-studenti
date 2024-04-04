//Array di oggetti che rappresentano gli studenti
//Ogni studente ha un nome, un cognome e un’età

const students = [      // array<object>
	{
		name: 'Corrado',  //stringa
		surname: 'Garrasi', //stringa
		age: 8,  //numero
	},
	{
		name: 'Rita',
		surname: 'Gori',
		age: 19,
	},
	{
		name: 'Cosimo',
		surname: 'Loiodice',
		age: 15,
	},
	{
		name: 'Agata',
		surname: 'Cattaneo',
		age: 5,
	},
	{
		name: 'Agostino',
		surname: 'Baldoni',
		age: 28,
	}
]

//Stampa l'array di oggetti
console.log(students);

//Si usa un ciclo for per scandire l'array degli studenti e stampare il nome e il cognome di ogni studente
console.log('Stampa eseguita con il ciclo for');
for (let i=0; i<students.length; i++) {
    currentStudent=students[i]; //i-esimo elemento dell'array
    console.log('Nome: ', currentStudent.name);
    console.log('Cognome: ', currentStudent.surname);
}
//si usa il metodo forEach per scandire l'array e stampare il nome e il cognome di ogni elemento dell'array
console.log('Stampa eseguita con il metodo forEach');
//Si applica il metodo forEach al vettore students
//Al metodo forEach si passa una funzione che riceve in input l'elemento dell'array ed esegue la stampa del nome e cognome dello studente
students.forEach(function(currentStudent){
    console.log('Nome: ', currentStudent.name);
    console.log('Cognome: ', currentStudent.surname);
})