# spellingbee
New York Times Spelling Bee cheat

Given a set of 1 required letter and 6 optional letters and a dictionary, generate a list of words that satisfy these rules:

* must contain required letter
* must have length of 4 or greater
* must not contain letters outside the set of required+optional letters

Note: a word may repeat any letter.

## Setup
`npm install`

## Usage
`npm run cheat REQUIRED OPTIONALS DICT`

where

* `REQUIRED` is a single letter
* `OPTIONALS` is a string of six letters
* `DICT` is an optional string containing `share` (default), `dwyl`, or `ecprice`
