#!/usr/bin/env sh

cd src && hugo --gc --minify

cp -r docs/* ../

rm -rf docs