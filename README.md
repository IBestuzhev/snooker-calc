# snooker-calc

Application allows you to calculate players score and remaining score on table.

### Preview

* Always synced to master on [snooker-calc@netlify](https://snooker-calc.netlify.com/)
* Awailable on [GitHub pages](https://ibestuzhev.github.io/snooker-calc/)

### Built using:

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Reselect](https://github.com/reactjs/reselect)
* [React-Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [Material UI](https://material-ui-next.com)
* [WebPack](https://webpack.js.org/)
* [TypeScript](https://www.typescriptlang.org/)

### Notes

I'm a backend developer (Python) and so this is my project to take some learning with React frontend.

Perhaps some parts of applications are implemented differently. E.g. showing faul popup is done without actions, but rather passing
the callback with props. This is intended as I was experementing with different approaches.

### Build instructions 

Run the dev server at http://localhost:8080

```
npm start
```

Hot reload module is enabled.

------------

Build for *Netlify*

```
npm run build
```

This commands cleans up the `/dist/` folder and generates all the files there. The public path is `/` so files should be served
directly from that folder. E.g.

```
cd dist
python -m http.server 8080
```

------------

Build for *GitHub pages*

```
# TODO add a npm command
npx webpack --config .\webpack.ghp.js --progress
```

Files are stored in `/docs/` folder with `/snooker-calc/` as public path. Folder is not cleaned up

------------

```
npm test
```

For testing.