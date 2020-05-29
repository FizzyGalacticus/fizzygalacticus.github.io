#!/usr/bin/env sh

cd hugo && hugo --gc --minify

if [ -d "../docs" ]; then
    cp -r docs/* ../docs/
else
    mv docs ../docs
fi

rm -rf docs