#-*-coding: utf-8-*-
from os import listdir, chdir, getcwd
from json import loads, dumps
from sys import argv
from optparse import OptionParser as opt
from codecs import open


def main():
	op = opt("Usage: %prog [flags] [values]")
	op.add_option("-d", "--dir", default=".", dest="directory", help="Set the directory where the json file is going to be generated.")
	op.add_option("-c", "--category", default="cards", dest="cat", help="Set the category of the files.")
	op.add_option("-f", "--format", default="png", dest="format", help="Set the files that are going to be stored in this category. exp: -f png,jpeg,txt")
	op.add_option("-j", "--json_file", default="log.json", dest="name", help="Set the filename of the json file, if it exists and you dont use -r/--rewrite it is going to add information to the existent file.")
	op.add_option("-r", "--rewrite", action="store_true", default=False, dest="rewrite", help="rewrite files with the same name.")
	(o, argv) = op.parse_args()
	cwd = getcwd()
	chdir(o.directory)
	files = listdir()
	content = {}

	if o.name in files:
		if not o.rewrite:
			with open(o.name, "r", encoding="utf-8") as f:
				content = loads(f.read())
	if not o.cat in content:
		content[o.cat] = []
	formats = o.format.split(",")
	print(formats)
	for file in files:
		file = "..\\assets\\big" + file 
		frmt = file.split(".")[-1].lower()
		if frmt in formats:
			print("[+]{}".format(file))
			content[o.cat].append(file)

	with open(o.name, "w", encoding="utf-8") as f:
		f.write(dumps(content, indent=4))


if __name__ == '__main__':
	main()