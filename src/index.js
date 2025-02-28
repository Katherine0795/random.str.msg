const messages = [
	"This is where it all begins...",
	"Commit committed",
	"Version control is awful",
	"COMMIT ALL THE FILES!",
	"The same thing we do every night, Pinky - try to take over the world!",
	"Lock S-foils in attack position",
	"This commit is a lie",
	"I'll explain when you're older!",
	"Here be Dragons",
	"Reinventing the wheel. Again.",
	"This is not the commit message you are looking for",
	"Batman! (this commit has no parents)",
];

/* Math.random indica un número aleatorio entre el 0 y el 1, al multiplicar 
con messages.length que es la cantidad total de elementos en el array: 
messages, da un número decimal que no supera a esa longitud. 
   Math.floor redondea el número al entero mas cercano
Por ejemplo si se tiene 5.95, lo lleva a 6, en el caso de messages redondea el número decimal resultante de Math.random() * messages.length
*/
const funnyCommit = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(`\x1b[34m${message}\x1b[89m`);
}
/* Las siglas dentro de console.log signiican que el formato del mensaje tendrá un color en específico según las nomenclaturas configuradas como blue =\x1b[34m
*/

module.exports = {
	funnyCommit
};