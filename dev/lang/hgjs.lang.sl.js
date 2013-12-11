HackerGame.load.language("sl", {
	
	// Interface
	// ---------
	"Toggle navigation": "Skrij/prikaži navigacijo",
	"HackerGameJS": "HackerGameJS",
	"Getting started": "Kako začeti?",
	"Game": "Igra",
	"Help": "Pomoč",
	"Terminal": "Terminal",
	"Editor": "Urejevalnik",
	"Assignment": "Misija",
	"Tasks": "Naloge",
	"Try it out!": "Poskusi sam",
	"Tasks completed": "Opravljene naloge",
	"Time left": "Preostali čas",
	"Assignments completed": "Opravljene misije",
	"Disclaimer": "Omejitev odgovornosti",
	"Learn more": "Spoznaj več",
	
	"Current score": "Trenutne točke",
	"Best score": "Najboljše točke",
	"Trials": "Poskusi",
	"Save": "Shrani",
	"Close": "Zapri",
	
	// Terminal echos
	// --------------
	"OK": "OK",
	"LOST": "IZGUBLJEN",
	"packets transmited": "paketov poslanih",
	"recieved": "sprejetih", // packets recieved
	"% pacet loss, time ": "% izguba paketov, čas ",
	"Success": "Uspeh",
	"Poskus": "Try",
	"Brute force attack!!!": "Brute-force napad",
	" is too much for this computer. Trying 3 characters ...": " je preveč za ta računalnik. Poskušam s 3 znaki ... ",
	"Password found": "Geslo najdeno",
	"Brute force failed.": "Brute force neuspešen",
	"Log dumped to": "Zapisnik naložen v",
	"To view use command": "Za pregled uporabi komando",
	"File is not password protected.": "Datoteka ni zaščitena za geslom",
	"File doesn't exist!": "Datoteka ne obstaja!", // CEKIRAJ
	"Dictionary attack!!!": "Slovarski napad!!!",
	"Dictionary attack failed.": "Slovarski napad je spodletel.",
	"Error: no dictionary file in": "Napaka: ni slovarja v",
	"Cannot display binary files.": "Ne morem prikazovat binarnih datotek",
	"Cannot display directory contents.": "Ne morem prikazovat vsebine imenika",
	"Directory doesn't exist!": "Imenik ne obstaja!",
	"File or directory doesn't exist!": "Imenik ali datoteka ne obstaja",
	"Cannot remove root directory.": "Ne morem odstranit korenskega imenika",
	"You do not have permissions!": "Nimaš pravic!",
	"Message to sensei sent": "Sporočilo Sensei-ju poslano",
	"\nFor more information type: help COMMAND": "\nZa več informacij vtipkaj: help UKAZ",
	"No information on command": "Ni informacij o ukazu",
	"Command is not defined!": "Ukaz ni definiran!",
	"Parse error": "Napaka pri interpretiranju",
	"Hint": "Namig",
	"Relative": "Relativna", //relative path
	"Absolute": "Absolutna",

	// Commands help
	// -------------
	"ping - send a ping package to remote computer": "ping - pošlji pozivni patek na oddaljen računalnik", 
	"Usage: ping IP|DOMAIN [NUMBER_OF_PINGS=5 [TIME_TO_LIVE=60]]": "Uporaba: ping IP|DOMENA [STEVILO_POZIVOV=5 [CAS_ZIVLJENJA=60]]",
	"TIME_TO_LIVE is in seconds.": "CAS_ZIVLJENJA je v sekundah",
	"Example: ping localhost": "Primer: ping localhost",
	
	"brute - use brute force attack to crack password protected file": "brute - uporabi brute-force napad za krekanje gesla",
	"Usage: brute FILE [NUM]": "Uporaba: brute DATOTEKA [STEVILO]",
	"- FILE: password protected file": "- DATOTEKA: zaščitena datoteka",
	"- NUM (optional): number of characters": "- STEVILO (opcijsko): število znakov",
	"                  if not specified, NUM=1..3": "                     če ni podano, STEVILO=1..3",
	"Example: brute file.txt 3": "Primer: brute datoteka.txt 3",
	"dict - use common passwords to crack password protected file": "dict - uporabi znane beseda za krekanje gesla",
	"Usage: dict FILE": "Uporaba: dict DATOTEKA",
	"Example: dict file.txt": "Primer: dict datoteka.txt",

	"cat - Display file contents": "cat - prikaži vsebino datoteke",
	"Usage: cat FILE": "Uporaba: cat DATOTEKA",
	"Example: cat /etc/hostname": "Primer: cat /etc/hostname",
	
	"tree - see the file hierarchy in the form of a tree": "tree - prikaži datotečno strukturo v obliki drevesa",
	"If no directory is specified, the working directory hierarchy": "če ni podanega imenika, prikaži strukturo",
	"is displayed.": "delovnega imenika",
	"Usage: tree [DIRECTORY]": "Ugase: tree [IMENIK]",
	"Example 1: tree": "Primer 1: tree",
	"Example 2: tree /home": "Primer 2: tree /home",
	
	"ls - list directory contents": "ls - prikaži vsebino imenika",
	"Usage: ls [DIRECTORY]": "Uporaba: ls [IMENIK]",
	"Example 1: ls": "Primer 1: ls",
	"Example 2: ls /home": "Primer 2: ls /home",
	
	"mkdir - create a directory": "mkdir - ustvari imenik",
	"Usage: mkdir DIRECTORY": "Uporaba: mkdir IMENIK",
	"Example: mkdir /tmp/new_directory": "Primer: mkdir /tmp/nov_imenik",
	
	"pwd - path to current directory": "pwd - prikaži pot do delovnega imenika",
	"Usage: pwd": "Uporaba: pwd",
	"Example: pwd": "Primer: pwd",

	
	"cd - change directory": "cd - spremeni delovni imenik",
	"Usage: cd [PATH]": "Uporaba: cd [IMENIK]",
	"Example 1: cd ..": "Primer 1: cd ..",
	"Example 2: cd /home": "Primer 2: cd /home",
	
	"rm - remove file or directory": "rm - odstrani datoteko ali imenik",
	"Usage: rm PATH": "Uporaba: rm DATOTEKA",
	"Example: rm /tmp/file": "Primer: rm /tmp/datoteka",
	"Linux: rm file OR rmdir empty_directory": "Linux: rm datoteka ALI rmdir prazen_imenik",
	
	
	"edit - edit file": "edit - uredi datoteko",
	"Usage: edit FILE [KEY]": "Uporaba: edit DATOTEKA [KLJUC]",
	"- KEY: optional, if file is password protected":"- KLJUC: opcijsko, ce je datoteka zaščitena",
	"Example 1: edit /etc/hostname": "Primer 1: edit /etc/hostname",
	"Example 2: edit /tmp/protected thisIsAFilePassword": "Primer 2: edit /tmp/zascitena geslo123",
	"Linux: there are many command line programs for editing files,": "Linux: obstaja ogromno terminalskih urejevalnikov datotek,", 
	"but they are not necessarily installed.": "ampak niso nujno naloženi na računalnik",
	
	"eval - execute a JavaScript command": "eval - interpretiraj Javascript ukaz", 
	"Usage: eval COMMAND": "Uporaba: eval UKAZ",
	
	"export - store a variable": "export - spravi spremenljivko",
	"Usage: export VARIABLE=VALUE": "Uporaba: export SPREMENLJIVKA=VREDNOST",
	
	"sensei - send a message to sensei via secure connection": "sensei - pošlji sporočilo Sensei-ju preko varne povezave",
	"Usage: sensei MESSAGE": "Uporaba: sensei SPOROCILO",
	"Example: sensei Hello sensei, how are you?": "Primer: sensei Pozdrav Sensei, kako si?",
	
	"echo - print text in terminal": "echo - izpiši tekst v terminal", 
	"Usage: echo TEXT": "Uporaba: echo TEKST",
	"Example: echo Hello!": "Primer: echo Pozdravljen!",
	
	"help - display help information": "help - izpiši pomoč", 
	"Usage: help [COMMAND]": "Uporaba: help [UKAZ]",
	"Example 1: help": "Primer 1: help",
	"Example 2: help ls": "Primer 2: help ls",
	"Linux: man or COMMAND -h or COMMAND --help": "Linux: man ali UKAZ -h ali UKAZ --help",

	// Pages
	// -----
	


	// Assignments
	// -----------
	"How to play": "Kako igrati HackerGame",
	"Introduction to the terminal": "Uvod v terminal",
	"How to move around": "Kako se premikati naokoli",
	"Security": "Varnost",
	"Cracking passwords": "Krekanje gesel"
});
