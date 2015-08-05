#!/bin/bash

convert \
$1 \
$2 \
-geometry +50+400 \
-composite \
2$1

