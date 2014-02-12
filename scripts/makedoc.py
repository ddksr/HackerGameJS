import argparse

parser = argparse.ArgumentParser(description='Extract documentation from JS files into MD.')

FILE_OUT = "../DOCS.md"

FILES_PREFIX = "../src/hgjs."
FILES_POSTFIX = ".js"
FILES = ["core", "state", "commands", "computers", "util"]

STARTER = "/**"

ENDER = "*/"
UNDER_CHR = "-"


START_DOC = """Developers guide
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


"""

END_DOC=""

def sort_method(x, y):
	if x[0:2] == y[0:2] == "hg":
		return cmp(x, y)
	if x[0:2] == "hg":
		return -1
	if y[0:2] == "hg":
		return 1
	return cmp(x, y)


def compile_file(lines, out):


	out_group = []

	parsing = False
	first = None
	for line in lines:
		if STARTER in line:
			parsing = True
			continue
		if ENDER in line and parsing:
			parsing = False
			out_group.append("")
			out_group.append("")
			out_group.append("")
			out[first] = out_group
			out_group = []
			first = None
			continue
		if parsing:
			out_string = line.strip()
			out_string = out_string[2:]
			out_group.append(out_string)
			if not first:
				first = out_string
				out_group.append("".join([UNDER_CHR] * len(out_string)))

if __name__ == "__main__":

	files = []
	for f in FILES:
		files.append(FILES_PREFIX + f + FILES_POSTFIX)
		

	out = {}
	for f in files:
		fid = open(f, "r")
		lines = fid.readlines() or []

		compile_file(lines, out)
		
		fid.close()

	fid = open(FILE_OUT, "w")
	fid.write(START_DOC)
	for key in sorted(out.keys(), cmp=sort_method):
		fid.write("\n".join(out[key]))
	fid.write(END_DOC)
	fid.close()
