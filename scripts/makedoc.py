import argparse

parser = argparse.ArgumentParser(description='Extract documentation from JS files into MD.')

FILE_OUT = "../DOCS.md"

FILES_PREFIX = "../dev/hgjs."
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
3. Parse new assignment list trough terminal initialisation

How to introduce the new assignment to HG: 	

	.hackerGame({ assignments: [ ... new element ... ] });
	
If you want the assignment to be one of the defaults, skip the third step
and change the configuration file (place the assignment somewhere in the context)


Translating
-----------

There are two types of translations used in HackerGameJS (yes, sorry about that). The majority
are in form:

	englishSentence => newTranslationSetence

and a fiew are:

	someKey => translation


In the begining of the development there were only sentence translations. When the pages nedeed translations, 
it would be to brutal to maintain the page sentance by setnance.

### How does this look in html ?

Example:

	<p class='i18n' data-lang='English setence'></p>

or

	<p class='i18n text' data-lang'pageKey'>
		This paragraph has a lot of words and it wouldnt be optimal to 
		maintain it sentence by sentence.
	</p>

HTML elements with class *i18n* will get translated.

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
