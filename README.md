# Conjugueur automatique du verbe kabyle

Projet de moteur morphologique pour la conjugaison automatique du kabyle
(**taqbaylit**), mené conjointement par **Kamel Bouamara**, responsable
scientifique, et **Ali Benmerad**, chargé de la conception et du développement
logiciel.

Le projet vise à traduire une modélisation linguistique explicite du verbe
kabyle en règles informatiques exécutables, testables et traçables.

## Équipe

### Kamel Bouamara — Responsable scientifique

Kamel Bouamara assure la responsabilité scientifique du projet. Ses travaux
sur la morphologie et la conjugaison du verbe kabyle constituent le fondement
linguistique du moteur.

Il intervient dans la définition du modèle linguistique, l’interprétation des
règles morphologiques et la validation scientifique des choix de
formalisation.

### Ali Benmerad — Conception et développement logiciel

Ali Benmerad assure la conception et le développement du moteur. Il prend en
charge la formalisation informatique des règles, l’architecture technique,
l’implémentation en TypeScript et les tests.

## But du projet

Le moteur a pour vocation de représenter et de combiner :

- les types morphologiques verbaux ;
- les thèmes associés aux différents aspects ;
- les indices personnels ;
- les règles morphophonologiques ;
- les formes de base et les formes dérivées ;
- les exceptions lexicales et les comportements particuliers.

Il doit pouvoir servir de base à plusieurs usages :

- conjugaison automatique ;
- génération de paradigmes ;
- analyse morphologique ;
- outils pédagogiques ;
- recherche et expérimentation linguistique.

## Approche

Le projet repose sur des règles explicites plutôt que sur une simple liste de
formes conjuguées.

La modélisation distingue notamment :

1. le lemme ;
2. le type morphologique ;
3. les thèmes aspectuels ;
4. les indices personnels ;
5. les transformations morphophonologiques ;
6. les exceptions lexicales.

Cette séparation facilite la vérification des règles, les tests unitaires et
la comparaison avec les descriptions linguistiques de référence.

## Technologies

- TypeScript ;
- Node.js ;
- modules ECMAScript ;
- Vitest ;
- ESLint ;
- npm.

## Fondements scientifiques

La modélisation linguistique repose sur les travaux de Kamel Bouamara et sur
les échanges menés avec lui dans le cadre de cette collaboration.

### Références publiques principales

- Kamel Bouamara, *Analyse morphologique du verbe kabyle — Régularité,
  irrégularité et défectivité en taqbaylit*
  [HAL — hal-05533803v1](https://hal.science/hal-05533803v1)
- Kamel Bouamara, *Modélisation des types morphologiques et de la conjugaison
  du verbe kabyle. Première partie : formes de base*
  [HAL — hal-05647626v1](https://hal.science/hal-05647626v1)
- Kamel Bouamara, *Modélisation des types morphologiques et de la conjugaison
  du verbe kabyle. Deuxième volume : formes dérivées*
  [HAL — hal-05655932v1](https://hal.science/hal-05655932v1)

Profil scientifique :
[Kamel Bouamara sur HAL](https://cv.hal.science/kamel-bouamara)

### Ouvrage à paraître

- Kamel Bouamara, *Le Verbe Kabyle*, ouvrage à paraître.

Cet ouvrage peut être cité, mais il n’est pas distribué dans ce dépôt.

## Sources publiques conservées dans le dépôt

Les trois publications accessibles sur HAL sont conservées dans
[`docs/sources`](docs/sources) sous deux formes :

- leur PDF public ;
- une transcription Markdown structurée et recherchable.

Le PDF reste la référence lorsqu’une transcription Markdown altère une table,
une disposition, un symbole ou un caractère.

Aucune copie, transcription intégrale ou archive de l’ouvrage à paraître n’est
incluse dans la version publique du dépôt.

## Licence et droits

Le code source original et la documentation logicielle originale du projet
sont distribués sous licence MIT. Voir [`LICENSE`](LICENSE).

Ce dépôt héberge la composante logicielle du projet mené conjointement par
Kamel Bouamara et Ali Benmerad.

Les publications scientifiques de Kamel Bouamara, ainsi que les documents,
tableaux et contenus linguistiques qui lui sont attribués, demeurent distincts
du code source et conservent leurs propres conditions de diffusion.
