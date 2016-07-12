# express-modular
----

A simplified MVC based directory structure for all your expressJS apps.

### Installation
```sh
git clone https://github.com/shubhamoli/express-modular
and start hacking :-)
```
### Version
0.0.3

### License
MIT




### Documentation
----

Express-modular is basically a directory structure boilerplate. It can be used to quickly setup a modular directory strucutre without any hassle, thus, saving your quality time to focus on development only.

express-modular relies on the principles of MVC architecture, so directories are named accordingly.

The directory structure is as follows:

```
express-modular
|-- app.js
|-- package.json
|-- ...
|-- app/
    |_______|-- controllers/
                    |______ |-- urls.js
                            |-- routes.js
            |-- helpers/
                    |______ |-- config.json
            |-- middlewares/
            |-- models/
                    |______ |-- models.js
            |-- public/
                    |______ |-- css/
                                |______ |-- style.css
                            |-- images/
                                |______ |-- readme.txt
                            |-- js/
                                |______ |-- script.js    
            |-- tests/
                    |______ |-- tests.js
            |-- views/
                    |______ |-- error.pug
                            |-- index.pug
                            |-- layout.pug
```     
