#!/bin/bash

convert \
$1 \
$2 \
-geometry +100+30 \
-composite \
2$1

