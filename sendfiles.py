#-*-coding: utf-8-*-
from ftplib import *
from os import listdir, chdir
from os.path import isfile
from sys import argv
from pathlib import Path

def send(file, ftp):
	filepath = Path(file)
	with open(file, "rb") as f:
		ftp.storbinary(f'STOR {filepath}', f)


def main():
	chdir("assets")
	user = argv[1]
	passw = argv[2]
	server = "147.135.84.40"
	client = FTP(server)
	print("[+]Login into server")
	client.login(user, passw)
	client.cwd("/web/tarotgratis.best/public_html/assets")
	count = 0
	
	while count < 2:
		cf = 0 
		print("[+]sending files")
		if count == 1: 
			chdir('big')
			client.cwd("/web/tarotgratis.best/public_html/assets/big")
		for file in listdir():
			if isfile(file):
				send(file, client)
				cf += 1
		print("[+]Total sent files in this directory: {}".format(cf))

		count += 1




if __name__ == '__main__':
	main()