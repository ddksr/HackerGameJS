import re
import sys

blocks={}

def parse_args():
	pass

def compile(lines):
	out=[]
	begin_remove=False
	for line in lines:
		new_line=False
		if "HGJS-SCRIPT" in line:
			found = re.search('HGJS-SCRIPT:(\w+) (\w*)', line, re.IGNORECASE)
			if not found:
				continue
			command, arg = found.group(1), found.group(2)

			if command=="begin":
				if arg=="remove":
					begin_remove = True
				continue
			elif command=="end":
				if arg=="remove":
					begin_remove = False
				continue
			elif command=="remove_line":
				continue
			elif command=="block":
				if arg in blocks:
					new_line = blocks[arg]

		if begin_remove:
			continue
		if not new_line:
			out.append(line)
		else:
			out.append(new_line)
	return "".join(out)

if __name__ == "__main__" and len(sys.argv) >= 2:
	parse_args()

	file_in = open(sys.argv[1], "r")
	file_out = open(sys.argv[2], "w")

	out = compile(file_in.readlines())
	file_out.write(out)
	
	file_in.close()
	file_out.close()

