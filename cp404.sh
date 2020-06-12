#!/bin/bash

cp 404.html build || echo "Couldn't move 404.html" >&2
ls build
