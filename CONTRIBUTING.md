# Contribuer

Merci de contribuer au moteur morphologique kabyle.

Ce dépôt contient le moteur logiciel, ses tests et sa documentation technique.

## Prérequis

La toolchain de référence est :

- Node.js 24.18.1 ;
- npm 11.16.0.

Avec NVM for Windows :

```bash
nvm use 24.18.1
```

Installez ensuite les dépendances depuis le lockfile :

```bash
npm ci
```

## Branches

- `main` est la branche stable et de release ;
- `dev` est la branche d’intégration du développement ;
- les changements sont développés sur des branches courtes créées depuis
  `dev`, par exemple `feat/*`, `fix/*`, `refactor/*` ou `chore/*` ;
- une branche de travail ouvre une pull request vers `dev` ;
- une branche de feature ou de maintenance ne cible jamais directement
  `main` ;
- la promotion de `dev` vers `main` est une opération de release dédiée ;
- les branches de travail sont supprimées après leur merge.

Les push directs sur `dev` et `main` ne font pas partie du workflow normal.

## Commits

Les messages de commit suivent Conventional Commits.

Types usuels :

- `feat:` nouvelle capacité fonctionnelle ;
- `fix:` correction ;
- `refactor:` modification interne sans changement fonctionnel attendu ;
- `test:` tests uniquement ;
- `docs:` documentation ;
- `build:` système de build ou dépendances ;
- `ci:` intégration ou livraison continue ;
- `chore:` maintenance ne relevant pas des catégories précédentes.

Un changement incompatible doit être déclaré explicitement avec `!` ou un
footer `BREAKING CHANGE:`.

Les commits doivent rester cohérents et centrés sur une modification logique.

## Validation

Avant une pull request et avant tout commit destiné à être livré :

```bash
npm run validate
git diff --check
```

`npm run validate` exécute les tests, le typecheck, le lint, le build puis le
nettoyage de `dist`.

Les tests ne doivent jamais être modifiés pour accepter une sortie linguistique
connue comme fausse.

## Conventions TypeScript

- TypeScript strict ;
- modules ESM / NodeNext ;
- imports relatifs avec extension `.js` ;
- fonctions fléchées par défaut dans le code du projet ;
- pas de `any` ;
- Unicode NFC aux frontières du moteur ;
- alphabet kabyle préservé sans translittération silencieuse.

## Données linguistiques et sources

Une règle, une forme ou une attestation ne doit pas être inventée pour faire
passer un test.

Le code doit distinguer lorsque nécessaire une forme générée, attestée,
formelle, variante ou inconnue.

Seules les sources dont la présence dans le dépôt public est autorisée peuvent
y être ajoutées. Les documents non redistribuables ou non publics restent hors
du Git public.

Les références scientifiques conservées dans `docs/sources` gardent leurs
propres conditions de diffusion ; la licence MIT du logiciel ne les remplace
pas.

## Pull requests

Une pull request doit :

1. avoir un périmètre clair ;
2. expliquer le comportement modifié ;
3. signaler les conséquences linguistiques lorsqu’elles existent ;
4. inclure ou adapter les tests nécessaires ;
5. passer intégralement la CI avant merge ;
6. ne contenir aucun secret ni contenu dont la redistribution n’est pas autorisée.

Le merge n’est effectué qu’après résolution des conversations et succès des
checks obligatoires.
