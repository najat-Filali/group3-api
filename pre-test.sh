#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -uroot -pdistance5545
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -uroot -pdistance5545 deploy