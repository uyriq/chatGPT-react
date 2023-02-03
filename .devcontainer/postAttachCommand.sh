#!/bin/bash

gh codespace ports visibility 3000:public -c $CODESPACE_NAME && gh codespace ports visibility 3001:public -c $CODESPACE_NAME
nohup redis-server  ./redis.conf   &> /dev/null &disown

#cd ./server && npm ci && npm run server