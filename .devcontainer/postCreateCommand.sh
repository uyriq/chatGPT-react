#!sh
alias redis='nohup redis-server  ./redis.conf   &> /dev/null &disown'
redis
cd ./server && npm install && npm ci && npm run server