I had a hell of a time trying to get casperjs to download a simple csv
from Yahoo Finance.
After alot of playing around with phantomjs and casperjs, I am beginning to have
some idea of how to accomplish my goal.
For anyone else that might be having the same problem as me trying to get casperjs to download
a simple file, here is the code I finally got it to do it with.
run command: casperjs --ignore-ssl-errors=true --ssl-protocol=any --web-security=no new3
