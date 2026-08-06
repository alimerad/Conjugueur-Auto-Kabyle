# AGENTS.md — conjugeur-auto-tamazight-kab

## 1. Mission du repository

Ce repository implémente un moteur morphologique kabyle déterministe capable, à terme, de :

- générer les thèmes aspectuels d’un verbe ;
- conjuguer un thème selon la personne, le nombre et le genre ;
- appliquer les règles morphophonologiques ;
- gérer les variantes, les formes supplétives et les paradigmes défectifs ;
- traiter les formes verbales de base et dérivées ;
- analyser une forme fléchie pour proposer un ou plusieurs lemmes et traits grammaticaux ;
- expliquer chaque résultat par une trace de règles et de données sourcées.

Le moteur est le produit principal. Une API, une CLI ou une interface graphique ne doivent pas dicter son architecture.

## 2. Corpus et hiérarchie des sources linguistiques

Les règles et données linguistiques doivent provenir exclusivement des documents validés pour le projet.

Ordre de priorité actuel :

1. **Kamal Bouamara, _Un cas de génie linguistique : le verbe kabyle. Types morphologiques et conjugaison_, version française corrigée, 2026** : corpus, typologie, paradigmes, index, variantes, données corrigées et contexte méthodologique.
2. **Kamel Bouamara, _Modélisation des types morphologiques et de la conjugaison du verbe kabyle. Premier volume : formes de base_, 2026** : règles formelles des formes de base.
3. **Kamel Bouamara, _Modélisation des types morphologiques et de la conjugaison du verbe kabyle. Deuxième volume : formes dérivées_, 2026** : règles formelles des dérivés.
4. **Kamel Bouamara, _Analyse morphologique du verbe kabyle. Régularité, irrégularité et défectivité en Taqbaylit_, 2026** : définitions et statuts linguistiques.

Ne pas compléter silencieusement une lacune documentaire avec une connaissance externe.

Toute donnée ajoutée doit indiquer :

- le document source ;
- la page PDF et, si nécessaire, la page imprimée ;
- la nature de la donnée : règle, type, exemple, variante, exception ou attestation ;
- son statut : confirmé, ambigu, contradictoire ou à vérifier.

Lorsqu’une source plus récente corrige une source antérieure, conserver la provenance et documenter le conflit au lieu d’écraser silencieusement l’ancienne donnée.

## 3. Périmètre linguistique et promesse du moteur

Le moteur garantit uniquement :

> une génération et une analyse conformes aux règles et données explicitement encodées depuis les sources du projet.

Il ne doit pas prétendre :

- couvrir tous les parlers kabyles ;
- connaître tout verbe absent du corpus ;
- déduire avec certitude le type d’un lemme inconnu à partir de sa seule forme externe ;
- garantir qu’une forme morphologiquement calculable est réellement attestée dans l’usage.

Distinguer obligatoirement :

- `generated` : forme calculée par le moteur ;
- `attested` : forme attestée par une source ;
- `formal` : forme de conjugaison formelle, possiblement non usuelle ;
- `unattested` : forme signalée comme absente de l’usage ;
- `variant` : variante documentée ;
- `dialectal` : variante liée à un parler ou profil linguistique ;
- `unknown` : attestation non déterminée.

## 4. Architecture cible

Organisation recommandée :

```text
src/
  domain/          Contrats et types métier sans dépendance d’infrastructure
  data/            Types morphologiques, lexique, exceptions et provenance
  engine/          Génération, flexion et morphophonologie
  analysis/        Analyse inverse et désambiguïsation
  validation/      Validation des données linguistiques
  index.ts         API publique du package
tests/
  unit/
  integration/
  fixtures/
  golden/
docs/
  sources/
  decisions/
  rules/
scripts/
```

Contraintes :

- `domain` ne dépend d’aucune autre couche applicative ;
- `engine` consomme les contrats et données, mais ne connaît ni HTTP ni UI ;
- les types morphologiques sont des données déclaratives, pas des chaînes de `if` dispersées ;
- les exceptions lexicales sont explicites et séparées des règles productives ;
- l’analyse inverse réutilise les mêmes règles que la génération autant que possible ;
- aucune nouvelle source de vérité ne doit dupliquer les thèmes, règles ou statuts.

## 5. Conventions TypeScript et modules

Le projet utilise TypeScript strict en ESM natif.

Règles obligatoires :

- `package.json` contient `"type": "module"` ;
- `module` et `moduleResolution` utilisent `NodeNext` ;
- les imports relatifs TypeScript utilisent l’extension de sortie `.js` ;
- utiliser `import type` lorsque l’import est uniquement typologique ;
- fonctions déclarées sous forme de fonctions fléchées ;
- callbacks sous forme de fonctions fléchées ;
- pas de `function` sauf contrainte technique explicitement justifiée ;
- pas de `any` ;
- préférer `unknown` avec validation explicite ;
- pas de classes sans besoin démontré ;
- préférer des fonctions pures, des données immuables et des types discriminés ;
- pas de mutation implicite des entrées ;
- pas d’exception silencieusement absorbée ;
- pas d’abstraction prématurée.

Exemple attendu :

```ts
export const normalizeKabyle = (value: string): string =>
  value.normalize("NFC");
```

Exemple interdit :

```ts
export function normalizeKabyle(value: string): string {
  return value.normalize("NFC");
}
```

## 6. Unicode et alphabet kabyle

Toutes les entrées textuelles doivent être normalisées en Unicode NFC aux frontières du moteur.

Ne jamais :

- supprimer un diacritique pour faire passer un test ;
- translittérer implicitement une lettre ;
- comparer des chaînes sans prendre en compte leur normalisation ;
- réduire une consonne tendue à une consonne simple sans règle morphophonologique explicite ;
- traiter `e` comme une voyelle lexicale stable lorsqu’il constitue un schwa d’appui.

Les tests doivent inclure les lettres et signes réellement employés dans les sources, notamment :

```text
č ḍ ɛ ǧ ɣ ḥ ṛ ṣ ṭ ẓ
```

## 7. Modèle de données linguistique

Une entrée de type morphologique doit au minimum contenir :

- son identifiant stable ;
- sa classe : base, SG, TG, NG, MG, MSG ou autre ;
- son groupe ;
- son schème de lemme ;
- les patrons des thèmes ;
- les aspects disponibles ;
- les restrictions de personne éventuelles ;
- ses règles ou transformations particulières ;
- ses références documentaires ;
- des exemples de validation.

Une entrée lexicale doit pouvoir contenir :

- le lemme ;
- le type morphologique ;
- les consonnes radicales lorsqu’elles sont confirmées ;
- les thèmes explicitement attestés ;
- les substitutions supplétives ;
- le statut de verbe d’état ;
- les variantes ;
- les formes défectives ;
- le profil dialectal ;
- les relations de dérivation ;
- la base verbale, nominale ou inconnue ;
- les sens lexicalisés utiles ;
- les références documentaires.

Ne pas stocker un paradigme complet lorsqu’il peut être généré de façon déterministe, sauf comme fixture de référence ou donnée attestée indépendante.

## 8. Règles contre le surcodage lexical

Une règle générale doit être encodée une seule fois.

Un comportement propre à un type doit vivre dans la définition de ce type.

Un comportement propre à un lemme doit vivre dans une surcharge lexicale explicite.

Exemples :

- choix `i-` ou `y-` : règle générale ;
- patron de l’aoriste intensif de `G3.1-1` : donnée du type ;
- `ini → qqaṛ` : surcharge supplétive du lexique ;
- absence d’une forme de `amu` : statut d’attestation ou de défectivité ;
- stratégie dialectale du participe négatif : profil dialectal.

Il est interdit d’ajouter dans le moteur une condition comme `if (lemma === "ini")` lorsqu’une surcharge lexicale peut représenter le cas.

## 9. Traçabilité de la génération

Toute opération publique de génération doit pouvoir retourner une trace structurée.

Exemple conceptuel :

```ts
{
  result: "iqqaṛ",
  trace: [
    { operation: "select-theme", value: "qqaṛ" },
    { operation: "select-3sgm-prefix", value: "i" },
    { operation: "concatenate", value: "iqqaṛ" }
  ]
}
```

La trace doit distinguer :

- les données lexicales ;
- les patrons du type ;
- les affixes flexionnels ;
- les règles morphophonologiques ;
- les normalisations Unicode ;
- les variantes ou avertissements d’attestation.

## 10. Tests et méthode de développement

Appliquer RED–GREEN–REFACTOR.

Pour chaque règle ou type :

1. ajouter un test ciblé issu d’un exemple documentaire ;
2. confirmer l’échec pour la raison attendue ;
3. implémenter le correctif minimal ;
4. faire passer le test ciblé ;
5. ajouter les cas limites directement associés ;
6. exécuter le typecheck et le lint ;
7. contrôler le diff.

Catégories de tests :

- tests unitaires des patrons ;
- tests unitaires des affixes ;
- tests unitaires morphophonologiques ;
- tests d’intégration d’un paradigme ;
- golden tests reproduisant les tableaux des sources ;
- tests de non-régression pour les exceptions ;
- tests de validation des données et de leur provenance ;
- tests Unicode NFC/NFD.

Un test ne doit pas être modifié pour accepter une sortie incorrecte du moteur.

Une forme issue d’un tableau du livre peut être utilisée comme résultat attendu, mais sa provenance doit apparaître dans la fixture ou le nom du cas.

## 11. Ordre des jalons

Ordre de développement à respecter sauf décision explicite :

1. infrastructure ESM, TypeScript strict, lint et tests ;
2. normalisation Unicode et contrats du domaine ;
3. moteur de patrons ;
4. premier type régulier `G3.1-1` ;
5. affixes personnels ;
6. sélection `i-` / `y-` ;
7. moteur du schwa et des collisions ;
8. paradigmes complets des types de base ;
9. verbes d’état ;
10. supplétisme, variantes et défectivité ;
11. formes dérivées ;
12. impératifs, participes et urmiret ;
13. analyse inverse ;
14. API ou CLI ;
15. interface utilisateur.

Ne pas développer une interface avant que le moteur ne possède un noyau testé et stable.

## 12. Mode de collaboration avec l’utilisateur

Pour chaque intervention :

- analyser l’état disponible ;
- fournir un seul bloc shell correspondant à une action logique ;
- indiquer l’objectif, les préconditions, les actions et les non-actions ;
- demander la sortie exacte nécessaire ;
- attendre et analyser cette sortie avant l’étape suivante ;
- ne jamais déclarer une commande réussie sans preuve.

Séparer au minimum :

- inspection ;
- modification ;
- validation ;
- contrôle du diff ;
- commit ;
- push ;
- vérification distante.

## 13. Règles des scripts shell fournis

Les scripts destinés à l’utilisateur doivent :

- être compatibles Bash ;
- utiliser `set +e` ;
- ne jamais appeler `exit` ;
- utiliser `abort=0` ;
- conditionner chaque étape suivante à `[ "$abort" -eq 0 ]` ;
- se terminer par `true` ;
- être idempotents autant que possible ;
- ne pas dépendre d’un outil non vérifié ;
- ne pas lancer plusieurs actions logiques indépendantes ;
- ne jamais utiliser `git add .` ni `git add -A` ;
- ne pas committer, pousser ou merger sans étape dédiée et validation préalable.

Chaque script affiche :

```text
===== PRÉCONDITIONS =====
===== ACTION =====
===== VALIDATION =====
===== ÉTAT FINAL =====
===== RÉSULTAT =====
Abort : 0|1
```

Une erreur doit empêcher toute mutation suivante.

## 14. Git et protection du travail local

Ce repository est un projet autonome mono-repository.

Avant toute modification d’un repository déjà initialisé :

```bash
git status --porcelain=v1
git diff --cached --name-only
git branch --show-current
git rev-parse HEAD
```

Préserver toute modification locale sans rapport avec l’action en cours.

Ne jamais :

- restaurer automatiquement un fichier modifié par l’utilisateur ;
- écraser un fichier existant sans vérifier son contenu ;
- réécrire un fichier complet pour une correction locale ;
- créer un commit avec des fichiers non attendus ;
- annoncer un commit ou un push avant d’en vérifier le SHA.

Après configuration d’un remote :

- `dev` est la branche d’intégration ;
- toute branche de travail part de `origin/dev` ;
- toute pull request cible `dev` ;
- aucune feature n’est mergée directement dans `main`.

Lors de l’amorçage initial sans remote, la création locale de la branche `dev` est autorisée.

## 15. Validation progressive

Après une modification ciblée :

```bash
npm run test -- <fichier-ou-filtre>
npm run typecheck
npm run lint
git diff --check
git diff --stat
git diff --name-only
```

Avant commit :

```bash
npm run validate
git diff --check
git status --short
git diff --cached --name-only
```

Le staging doit utiliser une liste blanche explicite :

```bash
git add -- fichier-1 fichier-2
```

## 16. Documentation des décisions

Toute décision linguistique non triviale doit être documentée sous `docs/decisions/` avec :

- le problème ;
- les sources ;
- les options envisagées ;
- la décision ;
- les conséquences algorithmiques ;
- les limites et questions ouvertes.

Les conflits documentaires ne doivent pas être résolus implicitement dans le code.

## 17. Définition de terminé pour une règle ou un type

Une règle ou un type n’est terminé que lorsque :

- sa source est référencée ;
- son modèle de données est validé ;
- ses cas documentaires sont couverts par des tests ;
- ses erreurs et incompatibilités produisent des résultats explicites ;
- le typecheck passe ;
- le lint passe sans avertissement ;
- les tests ciblés et associés passent ;
- le diff est limité au périmètre attendu ;
- aucune connaissance externe non documentée n’a été introduite.
