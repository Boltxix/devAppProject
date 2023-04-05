sudo apt update && sudo apt install nodejs npm
sudo npm install -g pm2
pm2 stop devAppProject
cd devAppProject/
npm install
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt
pm2 start ./src/index.js --name devAppProject