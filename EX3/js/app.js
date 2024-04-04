//Si dichiara un array di studenti
const students = [      // array<object>
	{
		name: 'Corrado',  
		surname: 'Garrasi', 
	    age: 8,  
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

//Stampa l'array di studenti
console.log(students);

//Si scandisce il vettore degli studenti e si richiama la funzione appendTableHtml per visualizzare 
//gli studenti nella tabella html
for (let i = 0; i < students.length; i++) {
	const currentStudent = students[i];  //si individua l'i-esimo studente dell'array di oggetti
	console.log(currentStudent);
	appendTableHtml(currentStudent); //si richiama la funzione che permette di aggiungere lo studente nella tabella html
}

//si recupera il form con i dati dell'utente
const form = document.getElementById('form-add-students');
//Se l'utente clicca sul bottone Aggiungi viene eseguita la funzione aggiungiStudente
form.addEventListener('submit', aggiungiStudente); 

//Funzione che accetta un parametro di tipo evento
//Quando l'utente clicca sul bottone si recuperano i campi del nuovo oggetto inserito dall'utente,
//si aggiunge il nuovo studente all'array di oggetti e se è maggiorenne lo si inserisce nella tabella html
function aggiungiStudente(e) {
	e.preventDefault()  //si usa il metodo preventDefault per disabilitare la propagazione del submit
	//Si recuperano i valori inseriti alla compilazione del form
	const name = document.getElementById('name').value 
	const surname = document.getElementById('surname').value 
	const age = document.getElementById('age').value 

	//Si definisce il nuovo studente
	const newStudent = {
		name: name,
		surname: surname,
		age: age,
	}

	console.log(newStudent);
	//Si aggiunge il nuovo studente nell'array
	students.push(newStudent);
	console.log(students);

   //Prima di aggiungere la riga alla tabella si chiama la funzione validateStudent per validare 
   //i dati inseriti dall'utente
	const isValid = validateStudent(name, surname, age)
	if (isValid && age>=18) {
		appendTableHtml(newStudent);
	}
}

//accetta come parametro uno studente e lo inserisce nella tabella
function appendTableHtml(student) {
	//si recupera il corpo della tabella html
	const tBodyElement = document.getElementById('table-body')
	//si genera una nuova riga con il dati del nuovo studente
	const trHTMLString = `     
	<tr>
	  <td>${student.name}</td>
	  <td>${student.surname}</td>
	  <td>${student.age}</td>
	</tr>
	`
	tBodyElement.innerHTML += trHTMLString  //si usa la concatenazione per inserire la nuova riga nella tabella
}

//La funzione validateStudent esegue la validazione dei campi inseriti dall'utente  
//Restituisce il valore booleano true solo se l'utente ha inserito tutti i campi del form
function validateStudent(name, surname, age) {
	console.log(name, typeof name);
	console.log(surname, typeof surname);
	console.log(age, typeof age);

	//Validazione del nome 
	if (name === '') {   //se la stringa è vuota si stampa un avviso e si restituisce il valore booleano false
		console.log('il nome non è valido');
		return false;
	}

	//Validazione del cognome
	if (surname === '') {  // se la stringa è vuota si stampa un avviso e si restituisce il valore booleano false
		console.log('il cognome non è valido');
		return false;
	}
	
	//Validazione dell'età
	if (age === '') {  //se la stringa è vuota si stampa un avviso e si restituisce il valore booleano false
		console.log('l\'eta non è valida');
		return false;
	}

	//Se l'utente inserisce tutti i dati si restituisce il valore true
	return true;
}





	
	