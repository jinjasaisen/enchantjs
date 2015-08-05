#!/bin/bash

montage \
-label "あにきをさがせ!" \
$1   \
-font /mnt/data/Font/sazanami-gothic.ttf \
-pointsize 20 \
-geometry +0+0 \
-frame 5 \
-background none 2$1
