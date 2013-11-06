import re
import sys

def compile(lines):
	out=[]
	begin_remove=False
	for line in lines:
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
					
		if begin_remove:
			continue
		out.append(line)
	return "".join(out)

if __name__ == "__main__" and len(sys.argv) >= 2:
	file_in = open(sys.argv[1], "r")
	file_out = open(sys.argv[2], "w")

	out = compile(file_in.readlines())
	file_out.write(out)
	
	file_in.close()
	file_out.close()
