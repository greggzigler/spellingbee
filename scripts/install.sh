#!/bin/sh
mkdir dictionaries
cd dictionaries
cat /usr/share/dict/words > share
curl https://www.mit.edu/~ecprice/wordlist.10000 > ecprice
curl https://raw.githubusercontent.com/dwyl/english-words/master/words.txt > dwyl
