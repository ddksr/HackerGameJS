Developers guide
================

Adding assignments
------------------
There are three things you have to do to add an assignment:

1. Create a new HTML file ASSIGNMENT_ID.HTML in the assignments directory
2. Create a new JS file ASSIGNMENT_ID.JS in the assignments directory
3. Parse new assignment list trough terminal initialization

How to introduce the new assignment to HG: 	

	$(terminalSelector).hackerGame({ assignments: [ ... new element ... ] });
	
If you want the assignment to be one of the defaults, skip the third step
and change the configuration file (place the assignment somewhere in the context)


### Javascript file

The JavaScript file MUST call the `hg.load.assignment()` method.
Example:

	hg.load.assignment([
    	taskObj1,
        taskObj2
    ], {
    	startTime: 0
    });

### HTML File

The HTML file must contain these DIV element:
- ass-title: Assignment title
- ass-instructions: the assignment instructions
- ass-tasks: task descriptions (each task in a separate DIV element with the same class as the assignment id
- ass-learn-more: the learn-more text
- ass-try-it-out: the try-it-out text


The HTML file can also contain:
- ass-greeting: The greeting mail message (optional)
- ass-misc: other stuff

Example:
~~~~~~
<div id="ass-title">Assignment title</div>
<div id="ass-instructions">...</div>
<div id="ass-greeting">...</div>
<div id="ass-tasks">
	<div class="task1"></div>
	<div class="task2"></div>
</div>
<div id="ass-learn-more"></div>
<div id="ass-try-it-out"></div>
~~~~~~

Translating
-----------

There are two types of translations used in HackerGameJS (yes, sorry about that). The interface translations are in form:

	englishSentence => translatedSetence

and the pages:

	pageId => translation

Because pages have a lot of text that can include many html tags, the translation process differ. The core visites every page that has *i18n* class and replaces it with the coresponding content in file *lang/hgjs.LANG.pages.html*. The coresponding content has to be wrapped into a html container with a class attribute *lang-PAGEID*.

### Which files do we need to create to translate the interface and the pages?
Only one for the interface: *src/lang/hgjs.LANG.iterface.js* and
one for the pages: *src/lang/hgjs.LANG.pages.html*.

### What about translating the assignments?
This is similar to translating pages. You will have to translate the file *assignments/ASSIGNMENT/ASSIGNMENT.html*.
You have to create a file named *assignments/ASSIGNMENT/ASSIGNMENT-LANGID.html*. The language
ID has to be the same as in *src/lang/hgjs.LANGID.interface.js* filename. You have all the freedom you need to to translate the assignments because your translated file will be used instead of
the main HTML file.
**Note:**
Translate the assignment title in *src/lang/hgjs.LANGID.interface.js*.

#### Translating commands and JavaScript strings
If your assignment contains any new commands or has other strings that need to be translated,
you can simply translate them via ASSIGNMENT-LANGID.html.
You add a element with id 'ass-translations' in body.

Example:
~~~~~~
<div id="ass-translations">
	<span data-lang="test - just a simple test command">test - enostavna testna komanda</span>
~~~~~~

### How do the translations look like in HTML?

Example:
~~~~~~
<p class="i18n" data-lang="English setence"></p>
~~~~~~
or
~~~~~~
<div class="page i18n" id="page-PAGEID">
... english content ...
</div>
~~~~~~
and the corresponding content in the language file
~~~~~~
<div class="lang-PAGEID">
... translated content ...
</div>
~~~~~~

**Important NOTE:**
If the page html with an *i18n* class attrubte contains any static fields,
they have to have class *static* assigned to them. Any content without the class attribute
will be removed.

### And how in JavaScript?

Example:

	string = hg.t('English sentence')

### And the translation file

Example:

	hg.load.language("myLanguage", {
		'English sentence': 'Sentence in new translation',
		'pageKey': 'This is the translation for the paragraph that has too many words.'
	});


HackerGame object reference
===========================


hg.action
---------

Special module with functions that get triggered by location hashes.
Spec: #/actionMethod/actionArgument -> hg.action.actionMethod (actionArgument)
Example: #/page/help -> hg.action.page (help)


hg.action.assignment (assId)
----------------------------
- **assId** *string* - selected assignment

Select assignment.


hg.action.input (inputId)
-------------------------
- **inputId** *string* - input tab to change to

Change input tab.


hg.action.mail ()
-----------------

Open email.


hg.action.page (pageId)
-----------------------
- **pageId** *string* - page id to switch to

Switch page


hg.action.tab (tabId)
---------------------
- **tabId** *string* - info tab to change to

Change info tab.


hg.commandCompletion (term, string, fn)
---------------------------------------
- **term** *object* - terminal object
- **string** *string* - current input string
- **fn** *function* - terminal callback

Searches trough available commands and returns the candidates for command
completion.


hg.cons.Assignment (assId, loadCallback)
----------------------------------------
- **assId** *assignment* - id

Constructor for Assignment object.
Note: this gets called before assignment is initialized.
Constructor also calls loadAssignment ()

Object fields:
- **id** *string* - assignment id
- **currentTask** *integer* - pointer to current task
- **numOfTasks** *integer* - number of tasks
- **tasks** *array* - container for Task objects
- **isRunning** *boolean* - true when assignment is initialized and started (running)
- **startTime** *integer* - starting counter for timer
- **evaluate** *function* - evaluate function for every assignment
- **queue** *array* - assignment actions queue
- **maxTaskPoints** *integer* - maximum number of points tasks can bring
- **bestScore** *integer* - best assignment score

Object methods:
- startTimer () - start hg.timer
- nextTask () - switch to next task
- fail () - called when assignment fails
- complete () - called when all tasks are completed


hg.cons.Computer (name, isDefault)
----------------------------------
- **name** *string* - computer name
- **isDefault** *boolean* - is default computer?

Constructor for Computer object.
Fields:
- **name** *string* - computer name
- **isDefault** *boolean* - is default computer
- **location** *string* - local ip address
- **pwd** *string* - current working directory
- **hasChanged** *boolean* - has filesystem changed (important for dumping)
- **fs** *object* - computer file system
- **dfs** *object* - computer dynamic file system
- **properties** *object* - all computer properties in a object
  - **hostname** *string* - computer hostname
  - **localIP** *string* - computer local IP adress 192.168.1.2
  - **user**:* string* - default computer user
  - **externalIP** (NOT USED)
  - **visibleFrom** (NOT USED)
  - **domain** (NOT USED)
  - **commandBlackList** *object* - blacklisted commands


hg.cons.State (computer, [config, [innerState]])
------------------------------------------------
- **computer** *object* - computer object
- **config** *object* - configuration for the state
- **innerState** *object* - NOT USED YET

Constructor for State object.

Object fields:
- **computer** *object* - computer object
- **place** *object* - directory object for current working directory

Object methods:
- hasCompletedAssignments ()
- getDefaultComputer ()
- changeDir (directory)
- makeDir (directory)
- removeFile (filePath)
- openFile (filePath)
- saveFile (filePath, content)
- emptyTmp ()
- copy (src, dst)
- move (src, dst)


hg.cons.Task (taskObj, taskHtml)
--------------------------------
- **taskObj** *object* - task configurations
- **taskHtml** *string* - task html from #stash

Object taskObj:
- **evaluate** *function* - callback when user uses a command
- **set** *function* - callback when task is initialized
- **unset** *function* - callback when task is destroyed
- **points** *number* - points user can achieve with this task
- **bonus** *function* - add a callback to check if bonus should be added

Constructor for Task object.

Object fields:
- **id** *string*
- **evaluate** *function*
- **set** *function*
- **unset** *function*
- **pointes** *function*

Object methods:
- switchTask (previousTask) - switch between tasks


hg.dump.computer ()
-------------------

Dump computer information if changes. Also, mark computer.hasChanges = false
If chanes in filesystem (computer.hasChanges):
  - dump = [ computerObj, callback ]
Else:
  - dump = [ null, callback ]
Computer object has next keys:
  - **user** *string*
  - **hostname** *string*
  - **fs** *object* - file system (DFS cannot be loaded)

If callback is called, the computer.hasChanges is reset to True


hg.dump.state ()
----------------

Return: array

Dump state to JSON.
Return format: [stateJson, callback]
Object stateJson can be null if no state changes exist.
Callback resets the changes back to previous state. Everything
That has happend between one dump and one callback call is also
appended to the state.


hg.editor.blur ()
-----------------

Blur Editor (switch to Terminal tab)


hg.editor.disable ()
--------------------

Disable Editor


hg.editor.enable ()
-------------------

Enable Editor


hg.editor.focus ()
------------------

Focus Editor (switch to Editor tab)


hg.editor.getContent ()
-----------------------

Get Editor content


hg.editor.save ()
-----------------

Save contents to watch file (this overwrites special fies !!!)


hg.editor.setContent ()
-----------------------
- **content** *string* - content to be set

Set editor content.


hg.editor.unwatch ()
--------------------

Unwatch current file.


hg.editor.watch (path, specialInput)
------------------------------------
- **path** *string* - path to file to watch
- **specialInput** *string* - optional special input for special files

Watch text or special file in editor. If not special, the file
get editable.


hg.exec (input, term)
---------------------
- **input** *string* - user input
- **term** *object* - terminal object

Evaluates user input. This is the most important function called from the terminal.
It serches for available commands or parses the input to javascript or displays
an error. It also calls the assignment callback for evaluating tasks.

THIS FUNCTION IS PASSED TO THE TERMINAL.


hg.ind
------

Indicator object. Cosits of global states and constants.
- **modal** *boolean* - is there a modal dialog displayed
- **NUM_OF_ASSIGNMENTS** *int* - number of assignments


hg.initComputerCommands (computer)
----------------------------------

Initializes basic computer comands when the computer is initialized.


hg.load.assignment (tasks, other)
---------------------------------
- **tasks** *array* - contains tasks objects
- **other** *object* - other important information

Object in 'tasks' array should contain:
- **evaluate** *function* - evaluation function
- **id** *string* - task id
- **set** *function* - callback before task is initialized
- **unset** *function* - callback after the task is completed
- **points** *number* - number of points this task can bring

Object 'other' must contain:
- **startTime** *number* - number of seconds available for assignment, if 0 then unlimited

Object 'other' can contain:
- **startMail** *boolean* - show email before assignment starts
- **successCallback** *function* - callback if assignment successfully completed
- **failCallback** *function* - callback if assignment fails
- **startCallback** *function* - callback after assignment is started (Start button)
- **initCallback** *function* - callback after assignment is initialized

Method loads the assignment into the game, prepares the tasks
Resets the stats, etc.

THIS SHOULD BE CALLED FROM ASSIGNMENT SCRIPTS!


hg.load.command (exec, help)
----------------------------
- **name** *string* - command name
- **exec** *function* - command logic
- **term** *string*|*array* - help string or array of strings

Add a command to the system. The command logic should be
implemented in **exec** callback. The callback recievs
user command arguments as function arguments.
Help can be a string or an array of strings where the rows
correspond lines.

Example:
~~~~~~
hg.load.command("test", function (a, b, c) {
	hg.term.echo("a + b + c: " + (a+b+c));
}, 'test - test command');
// $ test 1 2 3
~~~~~~


hg.load.externalFile (internalFilePath, externalFilePath)
---------------------------------------------------------
- **internalFilePath** *string* - internal file path to new file
- **externalFilePath** *string* - external file path to file that will be loaded

Load external file as text with AJAX into the filesystem as a text file.


hg.load.language (languageId, languageObject)
---------------------------------------------
- **languageId** *string* - language id
- **languageObject** *object* - contains translations in form english: translated

Load language object to the game. Doesn't run hg.refreshTranslations()


hg.load.specialFile (path, content)
-----------------------------------
- **path** *string* - internal path to file
- **content** *function* (input) - function which takes one argument

Method for loading special files. Special file is represented in
filesystem as a binary object, but its logic ('conent') gets
loaded into the dynamic fielsystem (DFS).

The content function must return an array in the form:
[status, string]
- **status** *boolean* - if the input was correct
- **string** *string* - the return string


hg.load.state (obj)
-------------------
- **obj** *object* - state object

Load saved state.

State object can contain two objects:
- **state** *object* - same format as in config
- **computer** *object*
  - **user** *string*
  - **hostname** *string*
  - **fs** *object* - file system (DFS cannot be loaded)


hg.mail.close()
---------------

Close message dialog.


hg.mail.open ()
---------------

Message dialog box initialization after mail icon is clicked.


hg.mail.recieve (message, clickOpen)
------------------------------------
- **message** *object*
- **clickOpen** *function* - callback when mail is opened

Object 'message' must contain:
- **body** *string* - message body
Object 'message' can contain:
- **sender** *string* - sender name
- **isSensei** *boolean* - if true, message will be treated more importantly
- **button** *object* - object for mail button

Object 'button' must contain:
- **name** *string* - button title
- **action** *function* - callback when button is clicked


hg.mail.setEmpty ()
-------------------

Call to set the mailbox icon as empty.


hg.mail.setNew ()
-----------------

Call to set the mail icon red.


hg.msg.alert (message, [title])
-------------------------------
- message : string
- title : string - title string

Display alert dialog with 'message' as message body and 'title'
as dialog title. If no title is specified, 'Alert' will be used


hg.network.ping (location)
--------------------------
- **location** *string* - location to ping

Pings 'location' and returns TRUE on success.


hg.refreshTranslations ([selector])
-----------------------------------
- **selector** *string* - jQuery selector string

Refresh body or selector translations.


hg.stats.aggregate ([hold])
---------------------------
- **hold** *boolean* - if true, don't automatically refresh stats

Aggregates overall score.


hg.stats.increment (stat, val, [hold])
--------------------------------------
- **stat** *string* - stat to be incremented
- **val** *integer* - increment stat by value
- **hold** *boolean* - if true, don't refresh stats after changes

Increment stats.


hg.stats.refresh ()
-------------------

Function refreshes the stats values in DOM.


hg.t (string)
-------------
- **string** *string* - translation key

The 'string' gets translated if possible.


hg.tEcho (string)
-----------------
- **text** *string*

Echo the text in the terminal.
It also translates the text if possible.


hg.tError (text)
----------------
- **text** *string*

Echo the text in the terminal as an error.
It also translates the text if possible.


hg.term
-------

Terminal object (contains all $.terminal api methods).


hg.timer.counter
----------------

Integer field containing remaining number of seconds.


hg.timer.lastCounter
--------------------

Stores the last counter value if timer was stopped before counter was zero.


hg.timer.set (setCounter, ztCallback)
-------------------------------------
- **setCounter** *integer* - counter value
- **ztCakkbacj** *function* - callback called when counter gets to 0

Initialize and set the timer.


hg.timer.start
--------------

Start counting.


hg.timer.status
---------------

Stores the timeout value.


hg.timer.stop
-------------

Stop counting. Stop callback doesn't get called.


hg.util.absPath (path)
----------------------
- **path** *string* - relative path to file

Return: string

Create absolute path to file (this is a straightforward and stupid method, it just
prepends PWD. Note: no checking if path is already absolute is done.


hg.util.checkFilePermission (absPath, [totalTest])
--------------------------------------------------
- **absPath** *string* - absolute path to file
- **totalTest** *boolean* - if true, path will be cleand and if relative, changed to absolute
Return: boolean

Check if wile is writtable.


hg.util.cleanPath (path)
------------------------
- **path** *string* - absolute or relative path

Return: string

Return cleaned path. Example: /one/two/../two2 -> /one/two2


hg.util.extend (default, over)
------------------------------
- **default** *object* - default object that gets overwritten
- **over** *object* - overwritting object

Return: object

This utility behaves a lot like $.extend but if it detects that both
default[key] and over[key] are objects, it will recursively call itself
upon them.


hg.util.fileExists (loc)
------------------------
- **loc** *string* - location of file (filepath)

Return: boolean

Check if file exists. Note: directory is also a file!


hg.util.fileType (file, [longName])
-----------------------------------
- **file**m*ixed* - file content
- **longName** *boolean* - if true, long filetype name will be returned

Return: string

Return filetype with respect to file content.
Types:
- b: binary ( can also be special! )
- d: directory
- t: text


hg.util.getFile (pathToFile)
----------------------------
- **pathToFile** *string* - path to file

Return: array|null

Gets the specified file in a informative way. The output array is:
[dirPath, fileName, fileContent, fileType]
- dirPath: path to containing directory
- fileName: filename of file in DirPath
- fileContent: contents of file
- fileType: file type of file
If file doesn't exits or path is incorrect, null is returned.


hg.util.getFilenameFilepath (pathToFile)
----------------------------------------
- **pathToFile** *string* - path to some file

Return: array

Function cleans the path and returns the path to file and filename in array.
Example 1: /home/user/file -> ['/home/user/', 'file']
Example 2: / -> ['/', '']


hg.util.getSpecialFile (path)
-----------------------------
- **path** *string* - ABSOLUTE path to special file

Return: function

Get special file. If no special file exists, a function that when called
returns null is generated.


hg.util.isDir (dir)
-------------------
- **dir** *string* - directory filepath

Return: boolean

Check if file is directory. If file doesn't exists, false is returned


hg.util.parseInput (input)
--------------------------
- **input** *string* - user input from command line

Return: array

Parse user input and return: [command, argsStr, args, rawArgsString]
- **command** *string* - user command
- **argsStr** *string* - parsed arguments as a string (removing ' and " )
- **args** *array* - parsed argumetns as array
- **rawArgsString** *string* - same as argsString but unprocessed


hg.util.path = function ([rawPathString])
-----------------------------------------
- **rawPathString** *string* - raw path (relative, absolute ... )

Return: array - path array

Return path array. If rawPathString isn't specified, PWD will be used.
Absolute path is prepended automatically.
Example: /one/two -> ['one', 'two']


hg.util.pathIterator (dir, fn)
------------------------------
- **dir** *string* : directory to iterate to
- **fn** *function* - callback

Return: boolean

Iterate trough path and call the callback function on the last
directory that was iterated. Return true if everything OK, else false.


hg.util.randIP ()
-----------------

Return: string

Generate random IP address.


hg.util.randResponseTime (from, to)
-----------------------------------
- **from** *integer*
- **to** *integer*

Return: function

Return generator for random response time.


hg.util.randomChoice (array)
----------------------------
- **array** *array*

Return a random value in array.


hg.util.randomString (length, [lower])
--------------------------------------
- **length** *int* - length of random string
- **lower** *boolean* - if true, only lower letters

Generate a random string.


hg.util.setFile (pathToFile, content)
-------------------------------------
- **pathToFile** *string* - pat to file to set (can be a new file)
- **content** *mixed* - content of the new file

Return: boolean

Sets new file content if path to file exists and return true. If not, false is returned.


core: baseInit ([settings])
---------------------------
- **settings** *object* - settings objects to overwrite config

This is the base initialization. It initializes the terminal
and assignments. It has to be called right after the page loads and
before any server scripts or similar are loaded.


core: contentInit ()
--------------------

Content initialization (translations evaluated and loading image removed).
Note: has to be called after baseInit and after any server scripts are loaded.


core: hashChange (evt)
----------------------
- **evt** *object* - event object

Event function which listens to hash changes.


core: initAssignment ()
-----------------------

Initialize loaded assignment.
Switch to Game page.


core: initDynamicFields ([selector])
------------------------------------
- **selector** *string* - jQuery selector string

Go trough selector or just body and replace dynamic fields with associated values.


core: initTaskHTML ($task)
--------------------------
- **$task** *jQuery object* - task HTML

Initialize task HTML. Convert hits and help to buttons etc.


core: startAssignment ()
------------------------

Start assignment (time courting, command line evaluation ...).


jQuery: .hackerGame([settings])
-------------------------------
- **settings** *object* - object to overwrite configuration

Make DOM object into the game terminal


jQuery: .hackerGameEditor([settings])
-------------------------------------

Make DOM object into game Editor. Settings are currently not used.


jQuery: .hackerGameTimer()
--------------------------

Initialize hackergame timer.


jQuery: .hgBlink ([numOfBlinks, [time]])
----------------------------------------
- **numOfBlinks** *integer* - number of blinks
- **time** *integer* - time between blinks

jQuery plugin for DOM element blinking.



state: closeTask ()
-------------------

Close current task.


state: evalAssignmentQueue ()
-----------------------------

Evaluate assignment queue. Calculate bonuses etc.


state: loadAssignment (assId, [callback])
-----------------------------------------
- **assId** *string* - assignment id
- **callback** *function* - callback called when script file is loaded

Load assignment HTML and JavaScript. First HTML is loaded into #stash div element.
Then the JS is loaded and evaluated (it can use its HTML elements
directly from #stash. Callback is called if script is successfully loaded.


state: timeToScore ()
---------------------

Return: integer

Convert remaining time to score.


