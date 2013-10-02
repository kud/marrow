# Marrow

**Marrow** is a boilerplate for **backbone.js**.

### Not included:

- Magic code *oh noooes!*
- Coffee *bad for your heart anyway*
- Give you the opportunity to twiddle your thumbs *sorry buddy*

### Included:

- A structure
- A great compilation process via Grunt
- Easy styling via libsass *so fast!*
- Templating via handlebars
- Lo-Dash instead of underscore for performance!
- An HTTP server
- pushState
- ... all you need to begin a great app and being happy

## Explanation

```shell
.
├── Gruntfile.js
├── README.md
├── bin
├── bower.json
├── bower_components // folder when you'll find all packages you install via bower install
├── config.json
├── dist // final files
├── grunt_tasks // where all grunt tasks are defined
│   └── options
├── package.json
└── src // where you code
    ├── assets // static files
    ├── bootstrap.js
    ├── collections // http://backbonejs.org/#Collection
    ├── first.js // if a script needs to be at the beginning of the website
    ├── libs
    ├── main.js // $(document).ready
    ├── models // http://backbonejs.org/#Model
    ├── routers // http://backbonejs.org/#Router
    ├── styles // http://sass-lang.com/
    ├── templates // http://handlebarsjs.com/
    └── views // http://backbonejs.org/#View
```

## Install

### Requirements

- ```node.js```
- ```npm```

Easy way on Mac OS X: ```brew install node```

### Then

```
$ git clone https://github.com/kud/marrow.git
```

### Node dependencies

```
$ npm install
```

### Bower dependencies

```
$ bower install
```

## Development

### Watch mode

```
$ grunt
```

### Classic mode

```
$ grunt dev
```

## Distribution

```
$ grunt dist
```

## Note

I use jQuery as dependency but if you only focus on Mobile app, you probably should use [Zepto](http://zeptojs.com/) or have a look to [Backbone.Native](https://github.com/inkling/backbone.native).