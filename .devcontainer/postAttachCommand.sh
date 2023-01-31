#!/bin/bash

gh codespace ports visibility 3001:public -c $CODESPACE_NAME && gh codespace ports visibility 6379:public -c $CODESPACE_NAME
alias redis='nohup redis-server  ./redis.conf   &> /dev/null &disown'
redis

#cd ./server && npm ci && npm run server