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

# Utilisation
Le fichier gulpfile.js permet de récupérer tous les fichiers javascript d'AngularJS contenus dans le répertoire src/\* de les concatener, transformer, ... et de 'pousser' le résultat dans **js/latytud.js** et **js/latytud.min.js**
