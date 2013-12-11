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
Bla bla ...

Translating
-----------


HacerGame object reference
==========================

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
