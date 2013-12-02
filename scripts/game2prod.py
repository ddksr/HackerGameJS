import re
import argparse

blocks={}

parser = argparse.ArgumentParser(description='Process game.html.')

parser.add_argument('files', metavar='file', type=str, nargs=2,
					help='Input and output file')
parser.add_argument('-b', '--block',
					help='Replace blocks with strings: block_name1|block_string1|block_name2|block_string2... Note: There must always be a block string after a block name!')

def compile(lines):
	out=[]
	begin_remove=False
	for line in lines:
		new_line=False
		if line.strip() == '':
			continue
		elif "HGJS-SCRIPT" in line:
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
				else:
					continue

		if begin_remove:
			continue
		if not new_line:
			out.append(line)
		else:
			out.append(new_line)
	return "".join(out)

if __name__ == "__main__":
	args = parser.parse_args()

	if args.block != None:
		blocks_array = args.block.split("|")
		blocks = {blocks_array[i]:blocks_array[i+1] for i in range(len(blocks_array)/2)}
	
	if not args.files:
		print "Missing files"
		exit(1)
	file_in, file_out = open(args.files[0], "r"), open(args.files[1], "w")

	out = compile(file_in.readlines())
	file_out.write(out)
	
	file_in.close()
	file_out.close()

