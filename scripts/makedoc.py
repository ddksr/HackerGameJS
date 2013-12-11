import re
import argparse

parser = argparse.ArgumentParser(description='Extract documentation from JS files into MD.')

FILES_PREFIX = "../dev/hgjs."
FILES_POSTFIX = ".js"
FILES = ["core", "state", "commands", "computers", "util"]

STARTER = "/**"

ENDER = "*/"
UNDER_CHR = "-"

def compile(lines):
	out = []

	parsing = False
	first = True
	for line in lines:
		if STARTER in line:
			parsing = True
			continue
		if ENDER in line and parsing:
			parsing = False
			first = True
			out.append("")
			continue
		if parsing:
			out_string = line.strip()
			out_string = out_string[2:]
			out.append(out_string)
			if first:
				first = False
				out.append("".join([UNDER_CHR] * len(out_string)))
	return out

if __name__ == "__main__":


	files = []
	for f in FILES:
		files.append(FILES_PREFIX + f + FILES_POSTFIX)
		

	out = []
	for f in files:
		fid = open(f, "r")
		lines = fid.readlines() or []

		out += compile(lines)
		
		fid.close()

	print "\n".join(out)
