# AGENTS.md
1. Mission : construire un moteur morphologique kabyle déterministe, explicable et indépendant de toute API, CLI ou UI.
2. Sources : n’encoder que les documents validés; conserver provenance, statut et conflits; ne jamais publier une source sans autorisation explicite.
3. Linguistique : distinguer forme générée, attestée, formelle, variante ou inconnue; ne jamais inventer un type, une règle ou une attestation.
4. Architecture : séparer domain/data/engine/analysis/validation; types déclaratifs, exceptions lexicales explicites, aucune source de vérité dupliquée.
5. Code : TypeScript strict ESM/NodeNext, imports relatifs .js, fonctions fléchées, pas de any; NFC aux frontières et alphabet kabyle préservé.
6. Tests : RED–GREEN–REFACTOR à partir d’exemples sourcés; couvrir cas limites, erreurs, variantes et NFC/NFD; ne jamais adapter un test à une sortie fausse.
7. Git : avant toute mutation vérifier repository, branche, HEAD, status et staging; préserver toute modification locale hors périmètre.
8. Workflow : une seule action logique à la fois; attendre et analyser la preuve terminal/GitHub avant l’étape suivante ou toute annonce de succès.
9. Scripts : Bash avec set +e, abort=0, garde après chaque échec, aucun exit, fin par true et sections PRÉCONDITIONS/ACTION/VALIDATION/ÉTAT FINAL/RÉSULTAT.
10. Livraison : npm run validate + git diff --check avant commit, staging par liste blanche; jamais git add . ou -A; commit/push/merge dédiés, PR vers dev, jamais une feature vers main.
