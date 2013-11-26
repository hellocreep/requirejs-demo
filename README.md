requirejs-demo
==============

It's a demo to show how to use bower, grunt and requrejs in multiple pages.

> Base on h5bp

**Note**: Install nodejs first.

## Step by step

Download this project, change the work dir to this project.

```
  npm install
```
install all dependent modules from `package.json`

```
  bower install
```
install all dependent js files from `bower.json`

```
  grunt
```
run the default grunt tasks, see `Gruntfile.js`

```
  grunt server
```
start a light server, visit `127.0.0.1:9000`

```
  grunt watch
```
watch the css files when changed will trigger other task

```
  grunt requrejs
```
compile this project with r.js

## Summary

There is only one module **SearchSuggest**, used in different way in two pages.
