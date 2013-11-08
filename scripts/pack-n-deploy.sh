#!/bin/bash

# Depends on:
# - python 2.7
# - closure-compiler

# Run (must run in scripts dircetory):
# ./pack-n-deploy.sh [version]

# names

version=$(git tag)
if [[ -n $version ]]; then
	# if tags exits, get latest tag
	version=$(git describe --abbrev=0 --tags)
fi

# If version is put as argument, overwrite
if [[ -n $1 ]]; then
	version=$1
fi

# if version is set, make it pretty
version_string=""
if [[ -n $version ]]; then
	version_string="-${version}"
fi

js_out="hgjs.js"
js_out_min="hgjs.min.js"
zip_out="hgjs${version_string}.zip"
folder_name="HackerGameJS"

# check if zip_out for this version already exists
do_exit=""
if [[ -a "../releases/${zip_out}" ]]; then
	do_exit="exit"
	echo -n "Version ${version} is already deployed. Do you wish to overwrite [y/N]? "
	read do_overwrite
	if [[ $do_overwrite = "y" ]]; then
		do_exit=""
	fi
fi
if [[ $do_exit = "exit" ]]; then
	exit 0
fi

# pathsand includes
files_path="../dev/"
js_files="core util computers commands state config"
include_files="hgjs.css jquery.terminal.css ass/ lang/ img/"
include_other_files="ext/"

# prepare
mkdir $folder_name
files_path="../${files_path}"
cd $folder_name

js_files_point=""
for js in $js_files
do
	js_files_point="${js_files_point} ${files_path}hgjs.${js}.js"
done

# combine JS files
cat $js_files_point > $js_out


# compress JS files (exclude config)
closure --js $js_out --js_output_file $js_out_min

# change game.html
python2 ../game2prod.py "${files_path}game.html" "game.html"

# move includes
for file in $include_files
do
	file_cp="${files_path}${file}"
	if [[ -d $file_cp ]]; then
		cp -r $file_cp $file
	else
		cp $file_cp $file
	fi
done
for file in $include_other_files
do
	file_cp="${files_path}../${file}"
	if [[ -d $file_cp ]]; then
		cp -r $file_cp $file
	else
		cp $file_cp $file
	fi
done

cd ..

# compress files
zip -r $zip_out $folder_name

# move to release folder
mv $zip_out "../releases/"

# copy to latest (latest is always a fresh copy of the latest zip)
# force if exists
cp -f "../releases/${zip_out}" "../hgjs-latest.zip"

# clean up
rm -r $folder_name

exit 0
