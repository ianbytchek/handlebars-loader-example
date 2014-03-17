Setup, make sure to create symlinks:

```
cd build
ln -s ../deps/node_modules ./node_modules
cd ../src/js
ln -s ../../deps/node_modules ./node_modules
```

And to install deps:

```
cd deps
npm install
```