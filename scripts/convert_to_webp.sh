#!/bin/bash

i = 0
for filename in /gallery/*.png; do
    convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% filename  ./gallery/$i.webp
    ((i = i + 1))
done
