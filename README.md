# photos.latytud.com
Juste pour tester Bootstrap v3.

Utilisation de pages statiques hébergées sur github (branch :gh_pages) :)

## Update
Le menu étant de plus en plus long, on en profite pour le rendre dynamique en utilisant AngularJS et Gulp.

# Installation
- Installer nodejs et nodejs-legacy
  - ```$ sudo apt-get install nodejs-legacy```
- Installer gulp
  - ```$ sudo npm install --global gulp```
  - Dans le répertoire du projet:
    - ```$ npm install --save-dev gulp gulp-concat```
    - ```$ npm install --save-de gulp-uglify```
    - ```$ npm install --save-dev del```
    - ```$ npm install --save-dev gulp-ng-annotate```
    - ```$ npm install --save-dev gulp-debug```
    - ```$ npm install --save-dev gulp-connect```

# Utilisation
Le fichier gulpfile.js permet de récupérer tous les fichiers javascript d'AngularJS contenus dans le répertoire src/\* de les concatener, transformer, ... et de 'pousser' le résultat dans **js/latytud.js** et **js/latytud.min.js**

# Ressources
## Gulp
- https://github.com/dickeyxxx/ng-modules
- https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917
- gulp-connect
  - https://www.npmjs.com/package/gulp-connect
  - http://stephenradford.me/gulp-angularjs-and-html5mode/

## Markdown
- https://guides.github.com/features/mastering-markdown/
