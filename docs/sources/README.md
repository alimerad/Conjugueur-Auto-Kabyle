# Sources linguistiques transcrites

Ce dossier contient des transcriptions automatiques, page par page, des quatre documents utilisés pour formaliser le moteur morphologique kabyle.

## Documents

- `volume-1-formes-de-base.md` : formes de base et types G1 à G4.
- `analyse-morphologique.md` : régularité, supplétisme et défectivité.
- `volume-2-formes-derivees.md` : formes dérivées simples et complexes.
- `manifest.json` : empreintes SHA-256, nombre de pages, moteur d’extraction et statut de révision.

## Règles d’utilisation par les agents

1. Ces fichiers sont des transcriptions automatiques, pas une édition critique.
2. Conserver les marqueurs `source-page-pdf` lors de toute citation interne.
3. Vérifier dans le PDF source les tableaux, graphes, colonnes ou passages dont la mise en page est déterminante.
4. Ne jamais corriger silencieusement une incohérence : documenter la source, la page et la décision prise.
5. Normaliser toute donnée linguistique en Unicode NFC avant comparaison ou stockage.
6. Distinguer systématiquement règle productive, patron morphologique, exception lexicale, variante et statut d’attestation.

## Priorité documentaire provisoire

- Les volumes 1 et 2 sont prioritaires pour les règles morphophonologiques explicitement numérotées.
- L’analyse morphologique est prioritaire pour les notions de régularité, supplétisme et défectivité.
- Toute divergence doit rester traçable dans une décision architecturale ou linguistique dédiée.
