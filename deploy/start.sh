source $HOME/.nvm/nvm.sh
nvm use default 2>/dev/null
APP=$HOME/htdocs/cakrawala.rapidnet.id
cd $APP
# kill any existing next on 3009
fuser -k 3009/tcp 2>/dev/null
sleep 1
echo "starting next on 3009..."
nohup env PORT=3009 node node_modules/next/dist/bin/next start -p 3009 > $HOME/next-cakrawala.log 2>&1 &
sleep 8
echo "=== port 3009 ==="
ss -tlnp 2>/dev/null | grep ':3009' || echo "not listening yet"
echo "=== log tail ==="
tail -15 $HOME/next-cakrawala.log