source $HOME/.nvm/nvm.sh
nvm use default 2>/dev/null
echo "node: $(node -v)  npm: $(npm -v)"
APP=$HOME/htdocs/cakrawala.rapidnet.id
cd $APP
echo "=== npm install ==="
npm install 2>&1 | tail -8
echo "install exit: ${PIPESTATUS[0]}"
echo "=== npm run build ==="
npm run build 2>&1 | tail -25
echo "build exit: ${PIPESTATUS[0]}"