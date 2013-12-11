HackerGame.load.language('sl', {
	
	// Interface
	// ---------
	'Toggle navigation': 'Skrij/prikaži navigacijo',
	'HackerGameJS': 'HackerGameJS',
	'Getting started': 'Kako začeti?',
	'Game': 'Igra',
	'Help': 'Pomoč',
	'Terminal': 'Terminal',
	'Editor': 'Urejevalnik',
	'Assignment': 'Misija',
	'Assignments': 'Misije',
	'Tasks': 'Naloge',
	'Try it out!': 'Poskusi sam',
	'Tasks completed': 'Opravljene naloge',
	'Time left': 'Preostali čas',
	'Assignments completed': 'Opravljene misije',
	'Disclaimer': 'Omejitev odgovornosti',
	'Learn more': 'Spoznaj več',
	
	'Current score': 'Trenutne točke',
	'Best score': 'Najboljše točke',
	'Trials': 'Število poskusov',
	'Save': 'Shrani',
	'Close': 'Zapri',
	
	// Terminal echos
	// --------------
	'OK': 'OK',
	'LOST': 'IZGUBLJEN',
	'packets transmited': 'paketov poslanih',
	'recieved': 'sprejetih', // packets recieved
	'% pacet loss, time ': '% izguba paketov, čas ',
	'Success': 'Uspeh',
	'Poskus': 'Try',
	'Brute force attack!!!': 'Brute-force napad',
	' is too much for this computer. Trying 3 characters ...': ' je preveč za ta računalnik. Poskušam s 3 znaki ... ',
	'Password found': 'Geslo najdeno',
	'Brute force failed.': 'Brute force neuspešen',
	'Log dumped to': 'Zapisnik naložen v',
	'To view use command': 'Za pregled uporabi komando',
	'File is not password protected.': 'Datoteka ni zaščitena za geslom',
	'File doesn\'t exist!': 'Datoteka ne obstaja!', // CEKIRAJ
	'Dictionary attack!!!': 'Slovarski napad!!!',
	'Dictionary attack failed.': 'Slovarski napad je spodletel.',
	'Error: no dictionary file in': 'Napaka: ni slovarja v',
	'Cannot display binary files.': 'Ne morem prikazovat binarnih datotek',
	'Cannot display directory contents.': 'Ne morem prikazovat vsebine imenika',
	'Directory doesn\'t exist!': 'Imenik ne obstaja!',
	'File or directory doesn\'t exist!': 'Imenik ali datoteka ne obstaja',
	'Cannot remove root directory.': 'Ne morem odstranit korenskega imenika',
	'You do not have permissions!': 'Nimaš pravic!',
	'Message to sensei sent': 'Sporočilo Sensei-ju poslano',
	'\nFor more information type: help COMMAND': '\nZa več informacij vtipkaj: help UKAZ',
	'No information on command': 'Ni informacij o ukazu',
	'Command is not defined!': 'Ukaz ni definiran!',
	'Parse error': 'Napaka pri interpretiranju',
	'Hint': 'Namig',
	'Relative': 'Relativna', //relative path
	'Absolute': 'Absolutna',

	// Commands help
	// -------------
	'ping - send a ping package to remote computer': 'ping - pošlji pozivni patek na oddaljen računalnik', 
	'Usage: ping IP|DOMAIN [NUMBER_OF_PINGS=5 [TIME_TO_LIVE=60]]': 'Uporaba: ping IP|DOMENA [STEVILO_POZIVOV=5 [CAS_ZIVLJENJA=60]]',
	'TIME_TO_LIVE is in seconds.': 'CAS_ZIVLJENJA je v sekundah',
	'Example: ping localhost': 'Primer: ping localhost',
	
	'brute - use brute force attack to crack password protected file': 'brute - uporabi brute-force napad za krekanje gesla',
	'Usage: brute FILE [NUM]': 'Uporaba: brute DATOTEKA [STEVILO]',
	'- FILE: password protected file': '- DATOTEKA: zaščitena datoteka',
	'- NUM (optional): number of characters': '- STEVILO (opcijsko): število znakov',
	'                  if not specified, NUM=1..3': '                     če ni podano, STEVILO=1..3',
	'Example: brute file.txt 3': 'Primer: brute datoteka.txt 3',
	'dict - use common passwords to crack password protected file': 'dict - uporabi znane beseda za krekanje gesla',
	'Usage: dict FILE': 'Uporaba: dict DATOTEKA',
	'Example: dict file.txt': 'Primer: dict datoteka.txt',

	'cat - Display file contents': 'cat - prikaži vsebino datoteke',
	'Usage: cat FILE': 'Uporaba: cat DATOTEKA',
	'Example: cat /etc/hostname': 'Primer: cat /etc/hostname',
	
	'tree - see the file hierarchy in the form of a tree': 'tree - prikaži datotečno strukturo v obliki drevesa',
	'If no directory is specified, the working directory hierarchy': 'če ni podanega imenika, prikaži strukturo',
	'is displayed.': 'delovnega imenika',
	'Usage: tree [DIRECTORY]': 'Ugase: tree [IMENIK]',
	'Example 1: tree': 'Primer 1: tree',
	'Example 2: tree /home': 'Primer 2: tree /home',
	
	'ls - list directory contents': 'ls - prikaži vsebino imenika',
	'Usage: ls [DIRECTORY]': 'Uporaba: ls [IMENIK]',
	'Example 1: ls': 'Primer 1: ls',
	'Example 2: ls /home': 'Primer 2: ls /home',
	
	'mkdir - create a directory': 'mkdir - ustvari imenik',
	'Usage: mkdir DIRECTORY': 'Uporaba: mkdir IMENIK',
	'Example: mkdir /tmp/new_directory': 'Primer: mkdir /tmp/nov_imenik',
	
	'pwd - path to current directory': 'pwd - prikaži pot do delovnega imenika',
	'Usage: pwd': 'Uporaba: pwd',
	'Example: pwd': 'Primer: pwd',

	
	'cd - change directory': 'cd - spremeni delovni imenik',
	'Usage: cd [PATH]': 'Uporaba: cd [IMENIK]',
	'Example 1: cd ..': 'Primer 1: cd ..',
	'Example 2: cd /home': 'Primer 2: cd /home',
	
	'rm - remove file or directory': 'rm - odstrani datoteko ali imenik',
	'Usage: rm PATH': 'Uporaba: rm DATOTEKA',
	'Example: rm /tmp/file': 'Primer: rm /tmp/datoteka',
	'Linux: rm file OR rmdir empty_directory': 'Linux: rm datoteka ALI rmdir prazen_imenik',
	
	
	'edit - edit file': 'edit - uredi datoteko',
	'Usage: edit FILE [KEY]': 'Uporaba: edit DATOTEKA [KLJUC]',
	'- KEY: optional, if file is password protected':'- KLJUC: opcijsko, ce je datoteka zaščitena',
	'Example 1: edit /etc/hostname': 'Primer 1: edit /etc/hostname',
	'Example 2: edit /tmp/protected thisIsAFilePassword': 'Primer 2: edit /tmp/zascitena geslo123',
	'Linux: there are many command line programs for editing files,': 'Linux: obstaja ogromno terminalskih urejevalnikov datotek,', 
	'but they are not necessarily installed.': 'ampak niso nujno naloženi na računalnik',
	
	'eval - execute a JavaScript command': 'eval - interpretiraj Javascript ukaz', 
	'Usage: eval COMMAND': 'Uporaba: eval UKAZ',
	
	'export - store a variable': 'export - spravi spremenljivko',
	'Usage: export VARIABLE=VALUE': 'Uporaba: export SPREMENLJIVKA=VREDNOST',
	
	'sensei - send a message to sensei via secure connection': 'sensei - pošlji sporočilo Sensei-ju preko varne povezave',
	'Usage: sensei MESSAGE': 'Uporaba: sensei SPOROCILO',
	'Example: sensei Hello sensei, how are you?': 'Primer: sensei Pozdrav Sensei, kako si?',
	
	'echo - print text in terminal': 'echo - izpiši tekst v terminal', 
	'Usage: echo TEXT': 'Uporaba: echo TEKST',
	'Example: echo Hello!': 'Primer: echo Pozdravljen!',
	
	'help - display help information': 'help - izpiši pomoč', 
	'Usage: help [COMMAND]': 'Uporaba: help [UKAZ]',
	'Example 1: help': 'Primer 1: help',
	'Example 2: help ls': 'Primer 2: help ls',
	'Linux: man or COMMAND -h or COMMAND --help': 'Linux: man ali UKAZ -h ali UKAZ --help',

	// Pages
	// -----
	'text_gettingStarted1': 'Pozdravljen! Izberi poglavje, ki te najbolje opisuje in sledi navodilom',
	'text_gettingStarted2-1': 'Ni problema. Namen igre je, da te popelje v svet ničel in enk. Računalništvo ni samo poznavanje delovanja računalnikov. Je mnogo več. Inženirji računalništva počnejo veliko zanimivih in različnih stvari, npr. pišejo računalniške programe, vzdržujejo računalniška omrežja, strežnike in druge sisteme, analizirajo podatke in iščejo vzorce v njih, odkrivajo gene v genomih itd.',
	'text_gettingStarted2-2': 'V večini primerov hacker ni nekdo, ki krši zakone. Lahko je strokovnjak za računalniško varnost, ki pomaga podjetjem zavarovati svoj produkt in infrastrukturo. Lahko sodeluje s policijo kot digitalni forenzik, lahko sodeluje z obveščevalno agencijo ali pa celo v vojski.',
	'text_gettingStarted2-3': 'Ampak hekanje ni vedno povezano z računalniško varnostjo. Heker je tudi nekdo, ki si prilagaja in spreminja elektroniko in drugo računalniško opremo. Večina hekerjev je programerjev, ki obožujejo raziskovanje programske kode, si jo prilagajajo in svoje prilagoditve delujo z drugimi. Tako je nastal tudi operacijski sistem GNU/Linux, ki sestoji samo iz svobodne in brezplačne programske kode. ',
	'text_gettingStarted2-4': 'Najbolje je, da najprej preletiš <a href="#/page/help">Pomoč</a>. Ta je zelo kratka, ker te igra ves čas vodi in usmerja.',
	'text_gettingStarted3': 'Odlično! Potem boš zelo hitro končal misije za trening. Začni igrati na <a href="#/page/assignments">strani z misijami</a>',
	'text_gettingStarted4': 'To je res odlično! Najverjetneje ni potrebe, da bi šel skozi trening. Mogoče pa le. V vsakem primeru boš hitro zaključil z njim. Izberi misijo na <a href="#/page/assignments">strani z misijami</a>',
	'text_gettingStarted5': 'Verjetno bo zate igra dolgočasna. Ali celo neumna. Če ti bo zanimiva, preberi naslednje poglavje',
	'text_gettingStarted6': 'Zakon! S tvojo pomočjo lahko igra postane res dober uvod v računalništvo. Igro lahko podpiraš na veliko načinov. Lahko pripravljaš misije, izboljšaš igralno jedro ali uporabniško izkušnjo, oblikuješ vmesnik, prevajaš tekst v druge jezike ali pa igro testiraš. Za več informacij obišči <a href="https://github.com/ddksr/HackerGameJS">Github</a> stran. Hvala!',
	'text_gettingStarted7': 'Dobrodošel nazaj! <a href="#/page/assignments">Poglej</a>, če je na voljo kakšna nova misija.',

	'text_help1-1': 'Terminali so bili najbolj pomembni v času pred grafičnimi vmesniki. Bili so edini način komuniciranja z računalnikov. Vsak, ki je želel uporabljati računalnik, se je moral naučiti uporabljati ukazno vrstico. Ampak stvari so se spremenile.',
	'text_help1-2': 'Razvili so se grafični uporabniški vmesniki. Na začetku je bilo še vse zelo togo, venar so se eksperti kmalu prilagodili. Novi uporabniki so se grafičnih vmesnikov naučili veliko hitreje. Tako so bili terminali skoraj pozabljeni. Skoraj. Zakaj še vedno obstajajo? Celo na Windows operacijskem sistemu?',
	'text_help1-3': 'Ker so izjemno močno orodje. Razlogov za to je več. Veliko močnih orodij je bilo že spisanih predno so obstajali grafični vmesniki in se še vedno uporabljajo danes. Programerji nimajo težav z uporabo terminala in zato niso spreminjali starih programov, da bi bili grafični. Razvoj negrafičnih programov je tudi veliko hitrejši od razvoja grafičnih. Če moraš kaj na hitro izračunati, analizirati nek tekst ali pa potrditi kakšno svojo hipotezo, najverjetneje pripraviš negrafični program.',
	'text_help1-4': 'Igra te bo v korakih vpeljala v uporabo terminala. Ne samo to, spoznala te bo z ogromno novimi konepti, ki niso težki za razumevanje, lahko ti pa pomagajo uresničiti tvoje cilje. Ne le cilje inženirjev računalništva, ampak tudi drugih ekspertov. Celo biologi, kemiki, matematiki, strojni inženirji ter fiziki morajo poznati vsaj osnove programiranja, če želijo postati strokovnjaki na svojem področju.',
	'text_help2-1': 'Najprej izberi misijo. Klikni nanjo in počakaj nekaj trenutkov. Če je to tvoja prva naloga, boš prejel e-pošto. Do nje dostopaš v desnem zgonjem kotu. Če ni to tvoja prva naloga, te bo preusmerilo v igro.',
	'text_help2-2': 'Igra je preprosta. Na levi je terminal in urejevalnik besedil, na desni pa navodila ter dodatne informacije. V zavihku Naloge med igro prejemaš naloge, ki jih moraš opraviti. Če si uspešen ali pa ne, na koncu si preusmerjen nazaj na stran z misijami, kjer si lahko ogledaš dosežene točke.',
	'text_help2-3': 'Terminal je enostavno uporabljati. V terminal zapišeš ukaz v obliki <code>UKAZ [AGUMENTI]</code> in pritisneš ENTER na tipkovnici.',
	'text_help3-1': 'Vsak ukaz ima svojo pomoč. Do nje lahko dostopaš z ukazom <code>help UKAZ</code> (primer: <code>help pwd</code>. Pomoč sestavljajo opis delovanja ukaza, opis uporabe ukaza in referenco na podoben ukaz na operacijskem sistemu GNU/Linux.',
	'text_help3-2': 'code>UKAZ</code>: Ukaz nima argumentov. Ukaz samo vtipkaš v terminal. Primer: <code>pwd</code>',
	'text_help3-3': '<code>UKAZ ARGUMENT</code>: Ukaz potrebuje argument za svoje delovanje. Primer: <code>mkdir nov_imenik</code>',
	'text_help3-4': '<code>UKAZ ARGUMENT1 ARGUMENT2</code>: Ukaz potrebuje dva argumenta za svoje delovanje. Primer: <code>mv datotaka nova_lokacija_datoteke</code>',
	'text_help3-5': '<code>UKAZ [ARGUMENT]</code>: Ukaz lahko prejme opcijski argument, vendar ga ne potrebuje za delovanje. Primer: <code>ls</code> ali <code>ls /home</code>',
	'text_help3-6': '<code>UKAZ ARGUMENT1 [ARGUMENT2]</code>: Ukaz potrebuje en argument za delovanje, drug argument pa je opcijski. Vrstni red je pomemben. Primer: <code>edit datoteka</code> or <code>edit zascitena_datoteka geslo</code>.',
	'text_help3-7': '<code>UKAZ [ARGUMENT1 [ARGUMENT2]]</code>: Ukaz ne potrebuje nobenih argumentov, lahko pa prejme enega ali dva. Če želimo podati drugi argument, moramo nujno podati tudi prvega.',


	'text_disclaimer1': 'Ta igra želi doseči veliko ciljev, vendar v nobenem primeru ne želi promovirati neupoštevanje zakonodaje. Glavni cilj igre je učenje uporabnika različne računalniške koncepte. Želimo predstaviti računalniško varnost in nevarnost, operacijske sisteme, programiranje in hekanje na igriv in izobraževalen način.',
	'text_disclaimer2': 'Logika igre je v veliki načini spisana v programskem jeziku JavaScript. Kodo lahko vedno analiziraš na <a href="https://github.com/ddksr/HackerGameJS">GitHub</a> računu (kjer si tudi dobrodošel kaj spreminjat). Celotno okolje je virtualno, zato ni mogoče ustvariti škodo. Veliko konceptov je tudi poenostavljenih, tako da lahko otroci in mladostniki lažje razumejo snov. ',
	'text_disclaimer3': 'Avtorji igre ne prevzemajo nobene odgovornosti, če informacije niso najnovejše. Prepričani smo tudi, da je veliko stvari mogoče narediti drugače. Ni namen te igre izobraziti ekperte na področju računalniške varnosti ali računalništva na splošno, ampak samo predstaviti koncepte na igriv in privlačen način.',

	// Headings
	// --------

	// Assignments
	// -----------
	'Training': '0. Trening',
	'Level 1: Discovering insecurity': '1. Raziskovanje nevarnosti',
	'Introduction to the terminal': 'Uvod v terminal',
	'How to move around': 'Kako se premikati naokoli',
	'Moving and copying files': 'Premikanje in kopiranje datotek',
	'Cracking passwords': 'Krekanje gesel'
});
