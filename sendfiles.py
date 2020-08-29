#-*-coding: utf-8-*-
from ftplib import *
from os import listdir, chdir
from os.path import isfile
from sys import argv
from pathlib import Path
from optparse import OptionParser as opt

def send(file, ftp):
	filepath = Path(file)
	with open(file, "rb") as f:
		ftp.storbinary(f'STOR {filepath}', f)


def main():
	op = opt("Usage: %prog [flags] [values]")
	op.add_option("-u", "--user", dest="user", help="Set the user name of the FTP server.")
	op.add_option("-p", "--password", dest="passw", help="Set the password of the FTP server.")
	op.add_option("-d", "--directory", dest="dir", default=".", help="Set the local directory where are the files that you want to send.")
	op.add_option("-c", "--cwd", dest="cwd", default="/web/tarotgratis.best/public_html", help="Set the directory of the FTP server.")
	op.add_option("-s", "--server", dest="server", default="147.135.84.40", help="Set the FTP server.")
	(o, argv) = op.parse_args()
	chdir(o.dir)
	client = FTP(o.server)
	print("[+]Login into {}".format(o.server))
	client.login(o.user, o.passw)
	client.cwd(o.cwd)
	cf = 0 
	print("[+]sending files")
	for file in listdir():
		if isfile(file):
			send(file, client)
			cf += 1
	print("[+]Total sent files in this directory: {}".format(cf))




if __name__ == '__main__':
	main()