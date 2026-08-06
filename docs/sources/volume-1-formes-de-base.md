---
document_id: "bouamara-volume-1-formes-de-base-2026"
title: "Modélisation des types morphologiques et de la conjugaison du verbe kabyle - Première partie : formes de base"
author: "Kamel Bouamara"
source_file: "Modélisation.pdf"
source_sha256: "d87b08e997a904311b350dec8f7a45a0b69e5741b010a6c6f8689067b601a9f6"
source_pages: 24
extraction_engine: "pdftotext"
extraction_engine_version: "pdftotext version 4.00"
extracted_at_utc: "2026-08-06T14:50:06.809Z"
unicode_normalization: "NFC"
content_kind: "faithful-machine-transcription"
review_status: "unreviewed"
---

# Modélisation des types morphologiques et de la conjugaison du verbe kabyle - Première partie : formes de base

> Transcription automatique page par page. Les tableaux et la mise en page doivent être contrôlés dans le PDF source avant d’être utilisés comme preuve linguistique définitive.

## Page PDF 1

<!-- source-page-pdf: 1 -->

~~~~text
Modélisation des types morphologiques et de la conjugaison
       du verbe kabyle. Première partie : Formes de base

                                      Kamel Bouamara

 To cite this version:

Kamel Bouamara. Modélisation des types morphologiques et de la conjugaison du verbe kabyle. Première
partie : Formes de base. 2026. ⟨hal-05647626⟩

        HAL Id: hal-05647626
https://hal.science/hal-05647626v1

          Preprint submitted on 7 Jun 2026

    HAL is a multi-disciplinary open access archive           L’archive ouverte pluridisciplinaire HAL, est des-
for the deposit and dissemination of scientific re-       tinée au dépôt et à la diffusion de documents scien-
search documents, whether they are published or not.      tifiques de niveau recherche, publiés ou non, émanant
The documents may come from teaching and research         des établissements d’enseignement et de recherche
institutions in France or abroad, or from public or pri-  français ou étrangers, des laboratoires publics ou
vate research centers.                                    privés.

Distributed under a Creative Commons CC BY-NC-SA 4.0 - Attribution - Non-commercial use - ShareAlike -
                                                     International License
~~~~

## Page PDF 2

<!-- source-page-pdf: 2 -->

~~~~text
           Modélisation des types morphologiques et de la conjugaison du verbe kabyle

                                       Première partie : Formes de base

                                               par Kamel Bouamara

Introduction

Le présent travail de recherche a pour objet la conjugaison du verbe kabyle (taqbaylit). Il constitue à la
fois un ouvrage de référence pour les linguistes, les enseignants et les apprenants, et un cadre normatif
destiné aux applications de traitement automatique du langage naturel (TALN). Il s'appuie principalement
sur nos travaux antérieurs, notamment Amyag n teqbaylit (2024), ainsi que sur leur développement en
langue française dans Un cas de génie linguistique : le verbe kabyle. Types morphologiques et
conjugaison (à paraître). Les principes théoriques sur lesquels repose cette modélisation ont déjà été
développés dans ces travaux. Le présent ouvrage se concentre sur leur formalisation sous forme de règles
explicites destinées à décrire le fonctionnement du système verbal kabyle.

La description scientifique du système verbal kabyle a longtemps souffert de modélisations
complexes qui, soit multipliaient excessivement les types morphologiques, soit réduisaient l'analyse
flexionnelle à deux aspects seulement (le prétérit affirmatif et l'aoriste simple). Ces approches
rendaient difficile la mise en évidence de la cohérence interne du système verbal et limitaient les
possibilités de standardisation de la langue ainsi que son intégration dans les technologies modernes
de l'information.

L'objectif du présent travail de recherche est de proposer une formalisation morphologique
rigoureuse, exhaustive et opérationnelle du verbe kabyle. Fondée sur les structures internes de la
langue, cette modélisation vise à fournir une description formelle précise, exempte d'ambiguïté et
directement exploitable par les systèmes informatiques.

Le système verbal kabyle repose sur une logique fondamentalement aspectuelle plutôt que
temporelle : l'action est envisagée selon qu'elle est accomplie ou non accomplie au moment de
l'énonciation. Son analyse s'appuie sur deux principes méthodologiques complémentaires: - Le critère
formel, fondé sur l'étude du schème abstrait du verbe, défini par l'organisation des consonnes radicales
et des voyelles ; - Le critère fonctionnel, fondé sur l'observation du comportement du thème à travers
les quatre aspects fondamentaux du système verbal : le prétérit affirmatif, le prétérit négatif, l'aoriste
simple et l'aoriste intensif, dont deux disposent d'une forme négative à thème distinct (le prétérit

                                                                                                                        1
~~~~

## Page PDF 3

<!-- source-page-pdf: 3 -->

~~~~text
négatif et l'aoriste intensif négatif), ce dernier se formant toutefois par simple préfixation d’un n- sans
alternance thématique.

L'analyse d'un corpus de 1 774 verbes de base montre que l'ensemble du lexique verbal kabyle se
répartit de manière régulière en quatre grands groupes morphologiques (G1, G2, G3 et G4), définis
selon le nombre de thèmes mobilisés pour exprimer les quatre aspects verbaux. Ces groupes se
subdivisent en 64 types morphologiques distincts, qui rendent compte de l'ensemble des structures
régulières observées dans la langue.

L'ouvrage est organisé en deux parties complémentaires. La première expose les principes généraux
du système verbal kabyle ainsi que les règles morphologiques et morphotactiques qui gouvernent la
conjugaison, notamment l'invariance des affixes, la distribution des allomorphes et le comportement
particulier des verbes d'état. La seconde présente, sous forme de tableaux de référence, les thèmes
verbaux caractéristiques des 64 types morphologiques identifiés, dégagés à partir de la forme de la
troisième personne du féminin singulier, retenue comme forme canonique de référence.

I. Règles générales

Règle 1: La forme de base du verbe (le lemme)

En kabyle, la forme de base d'un verbe (son « lemme ») est l'impératif à la deuxième personne du
singulier. On l'obtient à partir de l'aoriste simple en retirant le préfixe t- et le suffixe -ḍ propres à la
2e personne du singulier. Par exemple : ad t-aru-ḍ → lemme aru. Autres exemples : ɣer (lire), sew
(boire), ečč (manger), lhu (s'amuser), etc.

Règle 2 : Les affixes personnels ne changent pas

Les affixes personnels (préfixes et suffixes) qu'on ajoute aux verbes pour indiquer la personne sont
toujours les mêmes, quel que soit le verbe, son type ou l'aspect. Pour le préfixe de la 3e personne du
singulier masculin, cf. Règle 3.

Pour le verbe afeg (voler comme un oiseau) au prétérit :

Personne Forme Affixes

1sg  ufgeɣ -ɣ

2sg  tufgeḍ t-...-ḍ

3sg masc yufeg y-

3sg fém tufeg t-

1pl  nufeg n-

2pl  tufgem t-...-m

3pl masc ufgen -n

                                                          2
~~~~

## Page PDF 4

<!-- source-page-pdf: 4 -->

~~~~text
Personne Forme Affixes

3pl fém ufgent -nt
Pour le verbe aru (écrire) à l'aoriste simple :

Personne Forme

1sg  ad aruɣ

2sg  ad taruḍ

3sg masc ad yaru

3sg fém ad taru

1pl  ad naru

2pl  ad tarum

3pl masc ad arun

3pl fém ad arunt

Pour le verbe aweḍ (arriver) à l'aoriste simple:

Personne Forme

1sg  ad awḍeɣ

2sg  ad tawḍeḍ

3sg masc ad yaweḍ

3sg fém ad taweḍ

1pl  ad naweḍ

2pl  ad tawḍem

3pl masc ad awḍen

3pl fém ad awḍent

On aura remarqué que les affixes sont les mêmes pour ces deux verbes, même s'ils ont des structures
différentes.

Règle 3 : Le préfixe de la 3e personne du singulier masculin

Le préfixe varie selon la nature de l'initiale du thème verbal: y- devant un thème commençant par une
voyelle, i- devant un thème commençant par une consonne. Pour standardiser la langue et faciliter la
modélisation, c'est cette règle qui est retenue comme norme de référence.

Exemples : yufeg, yečča, yawi, yaru (initiale vocalique) ; irwi, ikteb, irna (initiale consonantique).

Règle 4 : Les quatre aspects du verbe

Pour rappel, le verbe kabyle est de type aspectuel, non pas temporel (passé-présent-futur) : c'est le
locuteur, au moment où il parle, qui évalue si l'action est accomplie (prétérit) ou non encore accomplie
(aoriste).

                                                                                                                        3
~~~~

## Page PDF 5

<!-- source-page-pdf: 5 -->

~~~~text
Les verbes kabyles se conjuguent à quatre aspects : le prétérit affirmatif, le prétérit négatif, l'aoriste
simple et l'aoriste intensif. Deux de ces aspects disposent d’une forme négative à thème distinct : le
prétérit négatif et l’aoriste intensif négatif. L’aoriste simple, quant à lui, ne possède pas de forme
négative à thème distinct. Il convient cependant de préciser que l’aoriste intensif négatif ne constitue
pas un aspect à part entière : à la différence du prétérit négatif, qui implique une alternance thématique
(ex. ura > uri), l’aoriste intensif négatif se forme mécaniquement par simple préfixation de n- sur le
thème de l’aoriste intensif affirmatif, sans aucune modification du thème (ex. ttcerrig > nettcerrig ;
ttcuddu > nettcuddu). C’est précisément ce critère — l’alternance thématique — qui définit le statut
aspectuel en kabyle et justifie le maintien d’un système à quatre aspects.

Mais dans l'usage, certains verbes ne se conjuguent pas à tous les aspects: ce sont des verbes défectifs
(aspectuellement).

Règle 4b: Définition de l'irrégularité (Le supplétisme)

Alors que la grande majorité des verbes du lexique sont réguliers et configurent leurs différents
thèmes à partir d'une seule et unique racine en s'insérant dans les types morphologiques du modèle
(Groupes G1 à G4), un verbe est qualifié d'irrégulier lorsqu'il possède l'un de ses thèmes
complètement différent des autres, du fait qu'il provient d'une autre racine (phénomène de
supplétisme).

Ce thème hétérogène, bien qu'irrégulier par rapport à la racine d'origine, a la particularité d'être
totalement stable et généralisable à toutes les personnes grammaticales au sein de l'aspect concerné.

Le supplétisme affecte exclusivement l'aoriste intensif. On en relève trois cas dans le corpus: efk
(donner), qui bascule à l'aoriste intensif sur le thème ttakk, lequel se généralise à toutes les
personnes (ittakk, tettakk, nettakk, ttakken, etc.) ; ini (dire), qui adopte à l'aoriste intensif le thème
qqaṛ, généralisable lui aussi à l'ensemble du paradigme (iqqaṛ, teqqaṛ, neqqaṛ, qqaṛen, etc.) ; et ečč
(manger), dont l'aoriste intensif recourt au thème ttett (racine √tt, distincte de la racine √čč), également
stable à toutes les personnes (ittett, tettett, nettett, ttetten, etc.).

Sur les 1 774 verbes de base du corpus, ces trois verbes supplétifs représentent moins de 0,17 % du
lexique verbal — ce qui atteste de la régularité exceptionnelle du système verbal kabyle. On notera
que ces trois verbes figurent parmi les plus fréquemment employés en taqbaylit, conformément au
principe typologique universel selon lequel les verbes les plus usités sont aussi les plus résistants à la
régularisation morphologique.

                                                                                                                        4
~~~~

## Page PDF 6

<!-- source-page-pdf: 6 -->

~~~~text
Règle 5: Les formes dérivées du verbe
En plus des quatre aspects, un verbe peut aussi avoir des formes qui en dérivent, simples ou
complexes.
Règle 5a : Les formes dérivées simples
Quand on ajoute le préfixe s-, le verbe devient transitif ou factitif, selon les verbes. Avec ttwa- ou ttu-
(ou plus rarement mm-), il devient passif : aru (écrire) → ttwaru ; semmi (nommer) → ttusemmi ; ečč
(manger) → mmečč. Le préfixe nn- le rend réfléchi : gzem (couper) → nnegzam (se couper soi-
même). Et avec my- ou mm-, il est réciproque : aru → myaru (s'écrire mutuellement) ; ečč → myečč
(se manger mutuellement) ; erẓ (casser) → mmerẓ (se briser mutuellement).
Règle 5b: Les formes dérivées complexes
Il y a aussi des formes plus complexes, où on mélange plusieurs préfixes. Par exemple, ms- est une
combinaison de réciproque et du transitif-factitif, qu'on ajoute à la forme de base du verbe.
Règle 6: Comment repérer les changements de thème des verbes
Pour voir comment le thème du verbe change d'un aspect à l'autre, on utilise souvent la 3e personne
du singulier féminin. Cette forme permet de bien visualiser ces changements. Par exemple : t-ura, ur
t-uri, ad t-aru, te-ttaru. Autres exemples : t-uzzel, ur t-uzzil, ad t-azzel, te-ttazzal; te-mmut, ur te-
mmut, ad te-mmet, te-ttmettat; t-ufa, ur t-ufi, ad t-af, te-ttaf.
Règle 7: Les quatre grandes familles de verbes
Les verbes sont classés en quatre groupes (G1, G2, G3, G4), selon la façon dont leur thème change
d'un aspect à l'autre.
Règle 7a: Groupe 1 (G1)
Dans ce groupe, les trois premiers aspects ont le même thème. Ces verbes sont défectifs
(aspectuellement), en ce sens qu'ils n'ont pas d'aoriste intensif, car leur forme de base commence déjà
par tt-.
Règle 7b: Groupe 2 (G2)
Ici, on a deux thèmes différents : un pour les trois premiers aspects, et un autre pour l'aoriste intensif.
Règle 7c: Groupe 3 (G3)
Le G3 se divise en deux sous-groupes :

                                                                                                                        5
~~~~

## Page PDF 7

<!-- source-page-pdf: 7 -->

~~~~text
G3.1: Le prétérit et l'aoriste simple ont un thème en commun ; le prétérit négatif et l'aoriste intensif
ont chacun un thème différent.

G3.2: Le prétérit affirmatif et le prétérit négatif ont un thème en commun ; l'aoriste simple et l'aoriste
intensif ont chacun un thème différent.

Règle 7d : Groupe 4 (G4)

Dans ce dernier groupe, il y a quatre thèmes différents, un pour chaque aspect.

Règle 8 : Les types de verbes

Chacun de ces quatre groupes comprend différents types de verbes. Selon le livre Amyag n teqbaylit
(2024): Le Groupe 1 compte 11 types (de G1-1 à G1-11) ; Le Groupe 2 en a 21 (de G2-1 à G2-
22) ;Le Groupe 3.1 contient 2 types (G3.1-1 et G3.1-2); Le Groupe 3.2 a 20 types (de G3.2-1 à G3.2-
18, y compris G3.2-7a/7b et G3.2-11a/11b); Le Groupe 4 comprend 10 types (de G4-1 à G4-10).

En tout, cela fait bien 11 + 21 + 2 + 20 + 10 = 64 types différents.

Règle 9 : Les verbes d'état

Dans le corpus, on distingue deux catégories de verbes de base : les verbes ordinaires et les verbes
d'état. Ces derniers ont une conjugaison particulière au prétérit (affirmatif et négatif), tandis qu'aux
deux aoristes ils se conjuguent comme les verbes ordinaires.

Au prétérit, la particularité essentielle des verbes d'état est l'absence des affixes de début (préfixes
personnels). La conjugaison repose uniquement sur cinq suffixes : -eɣ (1sg), -eḍ (2sg), -∅ (3sg masc),
-et (3sg fém), -it (pluriel, toutes personnes).

Le pluriel est syncrétique : une seule forme pour les trois personnes.

Personne imlul (être blanc) uzur (être gros)

1sg  melluɣ                    zureɣ

2sg  melluleḍ                  zureḍ

3sg masc mellul                zur

3sg fém mellulet               zuret

1pl, 2pl, 3pl mellulit         zurit

Au prétérit négatif, on ajoute simplement la particule ur devant la forme affirmative.

Les verbes d'état se répartissent en deux catégories: les verbes d'état communs (6 types, 42
occurrences) et les formes passives en m- (5 types, 20 occurrences), soit au total 11 types et 62

                                                                                 6
~~~~

## Page PDF 8

<!-- source-page-pdf: 8 -->

~~~~text
occurrences, représentant environ 3,5 % du corpus. Les formes passives en m- désignent des états
résultant d'une action subie: mectuḥ (être petit), mechuṛ (être célèbre), mussnaw (être connu).

Les deux types les plus représentatifs sont G3.2-7a (schème iC1C2uC3, ex. ifsus, être léger) avec 23
occurrences, et TG1-1 (schème C1eC2C3uC4, ex. mectuḥ, être petit) avec 15 occurrences.

Règle 10: Occurrences et représentativité dans le corpus

Les données qui suivent portent uniquement sur les 1 774 verbes de base (les 1 108 formes dérivées
étant traitées dans les règles précédentes).

Groupe Occurrences Représentativité

G1  18       1,01 %

G2  726      40,92 %

G3  841      47,41 %

G4  189      10,66 %

Total 1 774  100 %

Règle 11 : Les types les plus représentatifs

Trois types se détachent nettement dans le corpus par leur représentativité: - G3.1-1 (schème
C1C2eC3, ex. lmed, apprendre) : 480 verbes, soit 66,11 % du G3 et 27,07 % du corpus total. C'est le
type le plus représenté de tout le système verbal kabyle ; - G2-1 (schème C1eC2C2eC3, ex. cerreg,
déchirer) : 356 verbes, soit 49,06 % du G2 et 20 % du corpus total; -G4-1 (schème C1C2u, ex. bḍu,
diviser) : 106 verbes, soit 56,08 % du G4 et 5,95 % du corpus total.

Ces trois types représentent à eux seuls plus de la moitié du corpus (52,91 %).

Règle 12 : Types à faible représentativité

De nombreux types, répartis dans les quatre groupes, sont faiblement représentés dans le corpus:
certains ne comptent que deux occurrences, voire une seule. Cela ne signifie pas pour autant qu'ils
sont rares dans l'usage. Ainsi, le type G4-9 (schème iC1(C1)iC2, ex. idir, vivre ; issin, savoir) ne
compte que deux occurrences dans le corpus, alors que ces deux verbes figurent parmi les plus
fréquemment employés en taqbaylit. Ce décalage illustre la différence entre représentativité
typologique — le nombre de verbes relevant d'un type — et fréquence lexicale — la fréquence
d'emploi réel dans le discours.

                                                          7
~~~~

## Page PDF 9

<!-- source-page-pdf: 9 -->

~~~~text
Règle 13 : Le participe

Le verbe kabyle dispose d'au moins quatre formes participiales, soit une forme pour chaque aspect.
Pour rappel, la forme du participe est invariable selon les personnes grammaticales.

Sa formation est simple: pour les aspects affirmatifs (prétérit, aoriste simple, aoriste intensif), le
participe s'obtient par l'ajout du suffixe -n à la 3e personne du masculin singulier. Pour les aspects
négatifs (prétérit négatif, aoriste intensif négatif), c'est le préfixe n- qui s'ajoute à cette même forme.
Dans les deux cas, n est un affixe intégré à la forme verbale et non un élément graphiquement séparé.

Exemples (affirmatifs) : yura > yura-n ; ad yaru > yaru-n ; yettaru > yettaru-n ; Exemples
(négatifs) : ur yuri > ur nuri ; ur yečči > ur nečči ; ur yettaru > ur nettaru ; ur yettili > ur nettili.

Règle 14 : Comportement du schwa e selon l'environnement morphologique

Le schwa e est une voyelle d'appui instable dont l'unique fonction est d'éviter le blocage phonétique
des groupes de consonnes. Son comportement dépend de deux facteurs : la nature du suffixe (zéro ou
vocalique) et la position du e dans le radical.

14.1. Devant suffixe zéro (3sg masc, 3sg fém, 1pl)

Le suffixe n'apportant pas de voyelle, le e du radical se maintient à sa place d'origine.

a. Sans préfixe (3sg masc) : le radical s'articule seul, le e se maintient. Exemple. ilmed, ikcem, iɣiwel,
iddem, iger.

b. Avec préfixe consonantique (3sg fém : t- ; 1pl : n-) : le comportement dépend de la position du e
dans le radical :

- Si le e est entre C1 et C2 : le préfixe s'attache directement, le e médian suffit à assurer l'articulation.
Exemple : tger, nger ;

- Si le e est entre C2 et C3, ou si le radical commence par une géminée : un e d'appui s'insère
obligatoirement entre le préfixe et le radical. Exemples : telmed, nelmed; tekcem, nekcem; teddem,
neddem; tɣiwel, nɣiwel; tels, nels.
14.2. Devant suffixe vocalique (-eɣ, -eḍ, -em, -emt, -en, -ent)

La voyelle du suffixe prend en charge la dernière consonne et libère la fin du mot. Le e du radical
s'efface.

a. Sans préfixe : le comportement varie selon la position du e dans le radical et la nature des
consonnes :

                                                                                                                        8
~~~~

## Page PDF 10

<!-- source-page-pdf: 10 -->

~~~~text
-Si le e est entre C1 et C2 (consonnes simples libres ou bilitères) : il s'efface ; s'il n'y a pas de préfixe,
les consonnes restantes s'articulent directement avec le suffixe. Exemples : kcem → kecmeɣ, kecmen;
rfed → refdeɣ, rfeden; els → lseɣ, lsen; ger → greɣ, gren.
-Si le e est entre C2 et C3 : il s'efface simplement sans basculer. Exemples: lmed → lemdeɣ,
lemden.
-Si géminée initiale : il s'efface simplement. Exemple: ddem → ddmeɣ, ddmen.
-Si semi-voyelle : il s'efface simplement. Exemple: ɣiwel → ɣiwleɣ, ɣiwlen.
b. Avec préfixe consonantique : un e d'appui s'insère toujours entre le préfixe et le radical, quelle
que soit la structure du radical. Exemples : tlemdeḍ, tlemdem, teddmeḍ; tgreḍ, tegrem, tegremt;
telsem, telsemt.
Règle 15 : Traitement des voyelles d'appui et des collisions d'affixes
Pour garantir la régularité de la conjugaison automatique (TALN) et faciliter le travail de recherche
de l'apprenant, deux règles de cohérence phonétique et graphique doivent être appliquées:
15.1. Nature des suffixes de la 1re et 2e personne du singulier
Les suffixes de la 1re personne du singulier (-eɣ) et de la 2e personne du singulier (-eḍ) sont
structurellement des suffixes vocaliques. C’est la voyelle initiale de ces suffixes qui provoque
l'effacement du schwa final du radical et déclenche sa bascule automatique vers le début du mot
(conformément à la Règle 14, Cas A).
Exemple : pour le verbe kcem, on écrit obligatoirement kecmeɣ (et non kcmeɣ), et tkecmeḍ (et non
tkcmeḍ).
15.2. Règle de la collision des dentales (tett-) à l'aoriste intensif
À l'aoriste intensif, de nombreux types morphologiques présentent un thème qui commence déjà par
la géminée tt- (ex : ttcuddu). Lorsque l'on y adjoint le préfixe personnel t- (propre aux 2sg, 3sg fém.
et 2pl), le système phonétique refuse la succession de trois consonnes identiques (~~tttc...~~). On
insère alors systématiquement un schwa d'appui e pour dissocier le préfixe du thème.
Exemple : t- (préfixe) + ttcuddu (thème) + ḍ (suffixe) > tettcudduḍ (tu noues).
Cette règle de réécriture s'applique uniformément aux formes suivantes : tettcudduḍ (2sg), tettcuddu
(3sg fém.), tettcuddum (2pl masc.) et tettcuddumt (2pl fém.).

                                                                                                                        9
~~~~

## Page PDF 11

<!-- source-page-pdf: 11 -->

~~~~text
Règle 16: Loi de l’environnement post-schwa et dynamique des bilitères
16.1. Énoncé de la contrainte (Schwa non final)
En kabyle, la contrainte de fermeture syllabique exige que tout schwa (e) non final soit
immédiatement verrouillé en aval selon deux options exclusives:
Option A: par une consonne tendue (e + C1C1) : tessuden, tameṭṭut, tedder.
Option B : Par deux consonnes distinctes (e + C1C2) : els, taslent.
Exception : Cette contrainte exclut le schwa structurel des verbes bilitères au prétérit (azzel), où la
tension est inhérente au radical et se situe en amont (C1C1eC2).
16.2. Typologie et comportement des bilitères : eC1C2 VS C1eC2
La position du schwa au lemme (aoriste) divise les verbes bilitères à voyelle zéro en deux catégories
strictes. Cette structure initiale détermine entièrement la trajectoire de formation de leur aoriste
intensif:
A. La structure avec schwa initial
Quand le début du verbe est vide, la voyelle « e » se place tout au début pour soutenir le groupe de
consonnes qui suit (par exemple : els). À l’Aoriste Simple, la position de cette voyelle initiale entraîne
deux comportements différents:
1. Devant une terminaison (suffixe commençant par une voyelle): La voyelle « e » du début
disparaît complètement. Le verbe commence alors directement par ses deux consonnes. Exemples :
lseɣ (pour « je », exemple : ad lseɣ), lsen (pour « ils », exemple : ad lsen).
2. Devant une lettre de personne (préfixe) : La voyelle « e » du début reste en place et sert de
support pour attacher le préfixe, ce qui évite tout blocage de prononciation. Exemples : telseḍ (pour
« tu », exemple : ad telseḍ), nels (pour « nous », exemple : ad nels), yels (pour « il », obtenu par la
combinaison de la lettre « y » et du verbe els, exemple : ad yels).
À l’Aoriste Intensif, cette structure ne peut pas simplement doubler sa dernière consonne. Elle impose
de rajouter le préfixe tt- au début du verbe, combiné à un changement de voyelle avec la lettre u selon
le modèle général où le verbe reçoit le préfixe tt- suivi de la première consonne, de la voyelle u, de
la deuxième consonne, et d’une voyelle u optionnelle à la fin : els devient ttlusu ; ens devient ttnus ou
ttnusu ; ers devient ttrus ou ttrusu ; enz devient ttnuz ou ttnuzu.

                                                                                                                      10
~~~~

## Page PDF 12

<!-- source-page-pdf: 12 -->

~~~~text
B. La structure C1eC2 (Schwa médian)
Quand la première consonne ouvre le mot, le schwa s'insère entre les deux radicaux. À l'aoriste
intensif, la structure se densifie par la fin en redoublant la seconde consonne (C2). Le schwa est alors
conservé et bascule spontanément sous le coup de l'Option A (fermeture par consonne tendue) :

C1eC2 > C1eC2C2. Ex. ger > ggar; gen > ggan; ẓer > ẓerr ou ẓẓar; ḍer > ṭṭar; ɣez > ɣɣaz ou qqaz,
…

B.1. Interaction morphotactique à l'Aoriste Simple (Loi d'effacement et de réparation)À
l'Aoriste Simple, l'adjonction d'un suffixe vocalique (singulier -eɣ, -eḍ ou pluriel -em, -emt, -en, -ent)
entraîne l'effacement du schwa médian du radical (ex. ger devient gr-). Cet effacement crée deux
situations distinctes selon la structure des personnes:

(i)Les formes sans préfixe (structure stable): Les deux consonnes restantes du radical s'articulent
directement avec le suffixe. Exemples: ad greɣ (1sg), ad gren (3pl masc); (ii). Les formes avec
préfixe consonantique (réparation phonotactique) : L'adjonction d'un préfixe personnel purement
consonantique (t- ou n-) engendre une suite interdite de trois consonnes initiales libres (t-g-r ou n-g-
r). Pour rétablir l'équilibre syllabique, un schwa d'appui s'insère obligatoirement juste après le préfixe
personnel. Exemples : ad tegreḍ (2sg, et non ~~tgreḍ~~), ad tegrem (2pl masc, et non tgrem), ad
negrem (1pl, et non ngrem).

II. Tableaux récapitulatifs des thèmes

2.1.Tableau récapitulatif des thèmes des G1: un thème

Type   Nombre Schème abstrait  Exemple   Thème 1          Thème 1   Thème 1               Aoriste Intensif
       d’occurrenc
       es                      (Lemme)   (Prétérit Aff.) (Prétérit Nég.) (Aoriste                  -
                                                                                 Simple)           -
                               ttkembeṣ                                                            -
G1-1   1  ttC1eC2C3eC4         ttḥenṭid  ttkembeṣ         ttkembeṣ  ttkembeṣ                       -
G1-2                           ttalas    ttḥenṭid         ttḥenṭid  ttḥenṭid                       -
G1-3   2  ttC1eC2C3iC4         ttfay     ttalas           ttalas    ttalas                         -
G1-4                           ttrayi    ttfay            ttfay     ttfay                          -
G1-5   3  ttaC1aC2             ttnekkay  ttrayi           ttrayi    ttrayi                         -
G1-6                           ttfafa    ttnekkay         ttnekkay  ttnekkay
G1-7   1  ttC1aC2              ttsimi    ttfafa           ttfafa    ttfafa                         -
G1-8                                     ttsimi           ttsimi    ttsimi                         -
       3  ttC1aC2i             ttiḥil                                                              -
G1-9                           ttemrafi  ttiḥil           ttiḥil    ttiḥil
G1-10  1  ttC1eC2C2aC3         ttiqqi    ttemrafi         ttemrafi  ttemrafi
G1-11                                    ttiqqi           ttiqqi    ttiqqi
       3  ttC1aC2aC3

       2  ttC1iC2i

       2  ttiC1iC2

       1  tteC1C2aC3i

       1  ttiC1C1i

2.2.Tableau récapitulatif des thèmes des G2: deux thèmes

                                                                                          11
~~~~

## Page PDF 13

<!-- source-page-pdf: 13 -->

~~~~text
Type    nombre schème abstrait exemple (Lemme)            thème 1    thème 1   thème 1                     thème 2
        d’occurren
        ces                                               (Prétérit Aff.) (Prétérit Nég.) (Aoriste         aoriste Intensif
                                                                                                  Simple)
                                                                                                           ttcerrig
G2-1    356 C1eC2C2eC3             cerreg (déchirer)      cerreg     cerreg    cerreg                      ttcuddu
G2-2    63 C1uC2(C2)               cudd (lier, nouer)     cudd       cudd      cudd                        ttkuffur
G2-3a                              kuffer (ê. en colère)  uffer      kuffer    Kuffer
                 C1uC2C2eC3                                                                                ssudun
G2-3b                              suden (embrasser)      ssuden     ssuden    ssuden
        60                                                                                                 ttbuzduw

                 C1uC2(C2)eC3                                                                              Fessi

G2-4    20 C1uC2C3eC4              buzdew (ê. en pente ou bbuzdew    bbuzdew   bbuzdew                     ttbeḥbiḥ
                                   pentu)
G2-5                                                                 fsi       fsi                         steɛmir
        33 C1C2i                   fsi (dénouer)          fsi                                              ttecmumuḥ
G2-6                                                                 bbeḥbeḥ   bbeḥbeḥ                     tturar
        64 C1C1eC2C3eC4 bbeḥbeḥ (devenir                  bbeḥbeḥ                                          ttergigi
G2-7                                   aphone)                       steɛmeṛ   steɛmeṛ                     ttmerǧeǧǧay
G2-8                                                                 cmumeḥ    cmumeḥ
G2-9    8 C1C2eC3C4eC5 steɛmeṛ (coloniser) steɛmeṛ                   urar      urar                        ttemlellay
G2-10                                                                rgagi     rgagi                       ttfalṭay
G2-11   46 C1C2uC3(C3)eC4 cmumeḥ (sourire)                cmumeḥ     merǧeǧǧi  merǧeǧǧi                    sfayday
                                                          urar                                             ttezzi
G2-12   11 uC1aC2                  urar (jouer)           rgagi      mlelli    mlelli                      ttbedday/
G2-13                                                     merǧeǧǧi   falṭi     falṭi                       ttbaddad
G2-14   14 C1C2aC3i                rgagi (trembler)                  sfaydi    sfaydi                      ttxerbubuc
G2-15                                                                zzi       zzi                         ttsal
G2-16   7 C1eC2C3eC3C3i Merǧeǧǧi (avoir le                           bedd      bedd
                                                                                                           ttif
G2-17                              tournis)                          xerbubec  xerbubec                    ttru
G2-18                                                                sal       sal                         sburay
        7       C1C2eC3C3i         mlelli (avoir le vertige) mlelli
G2-19                                                                if        if
G2-20   3       C1aC2C3i           falṭi (fauter)         falṭi      ru        ru
G2-21                                                                sbur      sbur
        3       C1C2aC3C4i         Sfaydi (bénéficier) sfaydi

        8       C1C1i              zzi (tourner)          zzi

        4       C1eC2C2            bedd (se mettre debout) bedd

        8 C1eC2C3uC4eC5 xerbubec (gribouiller) xerbubec

        5       C1aC2              sal (passer le bonjour, sal

                                   saluer)

        2       iC1                If (surpasser)         if

        2 Cu                       Ru (pleurer)           ru

        1       C1C2uC3            Sbur (se couvrir la tête) sbur

2.3.Tableau récapitulatif des thèmes des G3.1: trois thèmes

Type    Nombre            Schème            Exemple       Thème 1    Thème 2   Thème 1                     Thème 3
                                            (Lemme)                                                        Aoriste Intensif
        d’occurrences abstrait                            (Prétérit Aff.) (Prétérit Nég.) (Aoriste
                                                                                                  Simple)  bedder
                                                                                                           ttecceg
G3.1-1          480       C1C2eC3           bder (citer) bder        bdir      bder

                47        C1C1eC2           cceg (glisser) cceg      ccig      cceg

Tableau récapitulatif des thèmes des G3.2: trois thèmes

        Nombre         Schème abstrait Exemple            Thème 1    Thème 1   Thème 2                     Thème 3
                                                                                                           Aoriste Intensif
Type    d’occurrences                        (Lemme)      (Prétérit Aff.) (Prétérit Nég.) (Aoriste

                                                                                                           12
~~~~

## Page PDF 14

<!-- source-page-pdf: 14 -->

~~~~text
G3.2-1    75  C1aC2eC3                caṛeɛ (ester en cuṛeɛ    cuṛeɛ   Simple)  ttcaṛaɛ
G3.2-2                                                         grareb  caṛeɛ    ttegririb
G3.2-3                                justice)                 faq     grireb   ttfiq
                                                                       fiq
G3.2-4    25  C1C2iC3eC4              grireb (rouler, grareb   ufaf

G3.2-5                                dégringoler)             gguma
G3.2-6                                                         cuba
          33  C1iC2                   fiq (se rendre faq       jerra
G3.2-7a
G3.2-7b                               compte)                  mellul
G3.2-8                                                         bnin
G3.2-9        NB. le verbe ɣil                                 ffud
                                                               kkukra
G3.2-10       (croire) bien qu’il
G3.2-11a                                                       mlal
G3.2-11b      appartienne à C1iC2,                             ɛlay
G3.2-12a                                                       uḥwaǧ
              il se conjugue                                   ṭaxeṛ

              comme un G2

          4   IC1iC2                  ifif (ê. tamiser) ufaf           ifif     ttifif

              NB. le verbe iẓid (ê.
              doux, sucré) est un
              verbe d’état, bien
              qu’il appartienne à
              iC1iC2,.

              C1C1aC2i                ggami (refuser) gguma            ggami    ttgami
                                                                       cabi     ttcabi
          29  ou                                                       jerri    ttjerri

              C1aC2i                  cabi (être      cuba

                                      semblable à)

          37  C1eC2C2i                Jerri (distribuer jerra

                                      les cartes)

              NB. les verbes cekti

              (ou : cetki), setḥi, …

              de type

              C1eC2C3i se

              conjuguent comme

              les C1eC2C2i

          22  iC1C2uC3                imlul (ê. blanc) mellul          imlul    ttimlul
                                                                       ibnin    ttibnin
              NB. préterit>                                            ffad     ttfad
                                                                       kkukru   ttkkukru
              C1eC2C2uC3

          9   IC1C2uC3                ibnin (avoir un bnin

              NB. Prétérit>           bon goût)

              C1C2iC3

          14  C1C1VC2                 ffad (avoir soif) ffud

              NB. V= (voyelle):

              a, i

          17  C1uC2C3u                kukru (hésiter, kkukra

                                      avoir peur)

              NB. les verbes

              mɛuqqu et stufu se

              manifestent

              également sous

              d’autres schèmes,

              respectivement

              mɛuqq et stif

          10  C1C2iC3                 mlil (rencontrer)mlal            mlil     ttemlil ou
                                                                       aɛlay    ttemlili
              aC1C2aC3                aɛlay (prendre ɛlay                       ttɛlay
                                                                       aḥwaǧ
                                      de la hauteur)                            ttaḥwaǧ
                                                                       ṭixeṛ
              NB. Prétérit >                                                    ṭixiṛ

              C1C2aC3

              aC1C2aC3                Aḥwaǧ (avoir uḥwaǧ

                                      besoin)

              NB. Prétérit >

              uC1C2aC3

          2   C1iC2eC3                ṭixeṛ (quitter, ṭaxeṛ

                                      démissionner)

              NB. aoriste intensif

              > C1iC2iC3

                                                                                            13
~~~~

## Page PDF 15

<!-- source-page-pdf: 15 -->

~~~~text
G3.2-12b     8       C1iC2eC3              Ciweṛ (prendre caweṛ        caweṛ             ciweṛ               ttacawaṛ

G3.2-13                                    conseil)                                                          ttali
G3.2-14                                                                                                      stehnay
G3.2-15              NB. aoriste intensif                                                                    ttzegziw

G3.2-16              > ttC1aC2aC3                                                                            ttuzur
G3.2-17                                                                                                      ttferǧiǧǧiw
G3.2-18      6       aC1i ou aC1C1i        ali (monter) uli            uli               ali                 ttargu
G3.2-19                                                                                                      tteɣẓaẓ
G3.2-20      3       C1C2eC3C4i            stehni           stehna     stehna            stehni              ttilih

             2       C1eC2C3eC4            Zegzew (ê. vert, zegzaw     zegzaw            zegzew

                     NB. zegzew, ḥercew tendre)

                     sont des verbes

                     d’état.

             2       uC1uC2                uzur (ê. gros, zur          zur               uzur

                                           adulte)

             2       C1eC2C3iC4C4C5 ferǧiǧǧew               ferǧaǧǧew  ferǧaǧǧew         ferǧiǧǧew

                                           (avoir peur)

             1       aC1C2u                Argu (rêver) urga           urga              argu

             1       C1eC2C2               ɣeẓẓ (grignoter, ɣeẓẓa      ɣeẓẓa             ɣeẓẓ

                                           mordre)

             1       C1C1iC2eC3            Ttileh (serendre ttaleh     ttaleh            ttileh

                                           compte, prendre

                                           conscience)

2.4.Tableau récapitulatif des thèmes des G4: quatre thèmes

Type      Nombre     Schème                Exemple          Thème 1    Thème 2           Thème 3             Thème 4
                                           (Lemme)                                                           Aoriste Intensif
          d’occurrences abstrait                            (Prétérit Aff.) (Prétérit Nég.) (Aoriste
                                                                                                    Simple)

G4-1            106  C1C2u                 bḍu (diviser) bḍa           bḍa               bḍu                 beṭṭu
G4-2
                30   aC1eC2                Afeg (voler ufeg            ufig              afeg                ttafeg
G4-3
                     ou                    comme un
G4-4
G4-5                 aC1C1eC2              oiseau)
G4-6
                10   C1eC2                 ɣer (lire)       ɣra        ɣri               ɣer                 ɣɣar ou qqar

                     NB. les verbes

                     ḍer, gen, ger,

                     fel, … sont des

                     G3.1

                9    eC1C1                 ečč (manger) čča            čči               ečč                 ttett

                5    C1C1u                 ẓẓu (planter) ẓẓa           ẓẓi               ẓẓu                 tteẓẓu

                5    aC1u                  aru (écrire) ura            uri               aru                 ttaru

G4-7            4    iC1i                  ini              nna        nni               ini                 qqar
G4-8
G4-9            7    eC1C2                 els (s’habiller) lsa        lsi               els                 ttlus ou ttlusu

                     iC1C1iC2              issin (savoir) ssen         ssin              issin               ttissin

G4-10     5          aC1                   af               ufa        ufi               af                  ttaf

III. Conjugaison de quelques verbes kabyles

                                                         G1-9: ttiC1iC2
                              Verbe : ttinit (avoir des envies pour une femme enceinte)

Aspect               réterit affirmatif                aoriste simple          prétérit       aoriste intensif
                     thème 1                           thème 1                 ibaw           thème 1
                                                                               thème 1

          1ere       ttiniteɣ                          ttiniteɣ                ttiniteɣ

                                                                                                                           14
~~~~

## Page PDF 16

<!-- source-page-pdf: 16 -->

~~~~text
           2e          tettiniteḍ                   tettiniteḍ                  tettiniteḍ

singulier  3e:masculi  ittinit/yettinit             ittinit/yettinit            ittinit/
           n           tettinit                     tettinit                    yettinit
           3e:féminin                                                           tettinit
                       nettinit                     Nettinit
           1ere                                                                 Nettinit
                       tettinitem                   Tettinitem
           2e:masculi  tettinitemt                  tettinitemt                 tettinitem
           n
           2e:féminin  Ttinitem                     Ttinitem                    tettinitemt              –
                       ttinitemt                    Ttinitemt
pluriel    3e:masculi
           n                             impératif simple
           3e:féminin                                                           Ttinitem
                                                                                Ttinitemt

           mode                                                                              impératif intensif

singulier  2e                                     ttinit                                              –
pluriel
           2e :                             ttinitet/ttinitem
           masculin                             ttinitemt
           2e :
           féminin                       participe affirmatif
                                            aoriste (+ara)
                                                    –                                        participe négatif

Participe              prétérit                                       Prétérit              prétérit             Prétérit
                       ittiniten                                      intensif                                   intensif

                                                                          –                 nettinit             –

                                                                                                                           15
~~~~

## Page PDF 17

<!-- source-page-pdf: 17 -->

~~~~text
                                         G2-1 : C1eC2C2eC3
                                       Verbe: gennez (sauter)

Aspect                  préterit    Aoriste simple                Prétérit négatif            aoriste intensif
                        affirmatif  thème 1                       thème 1                             tt–i–
                        thème 1
                                                                                                    thème 2

          1ere          gennzeɣ             gennzeɣ               gennzeɣ                        ttgennizeɣ
                                            tgennzeḍ              tgennzeḍ                       tettgennizeḍ
singulie  2e            tgennzeḍ            Igennez               igennez                        ittgenniz
    r                                       Tgennez               tgennez                        tettgenniz
          3e:masculin   Igennez
          3e:féminin    tgennez             Ngennez               Ngennez                        nettgenniz

          1ere          ngennez             Tgennzem              tgennzem                       tettgennizem
                                            Tgennzemt             tgennzemt                      tettgennizemt
pluriel   2e:masculin   tgennzem
          2e:féminin    tgennzemt           gennzen               gennzen                        ttgennizen
                                            gennzent              gennzent                       ttgennizent
          3e:masculin   gennzen     impératif simple                                impératif intensif
          3e:féminin    gennzent

          mode

singulie                            Gennez                                          ttgenniz
r
          2e                        gennzet/gennzem                                 ttgennizem
pluriel                                 gennzemt                                    ttgennizemt
          2e :
          masculin
          2e : féminin

                                    participe affirmatif                            participe négatif

        Participe       prétérit    aoriste  Prétérit intensif    prétérit                    Prétérit intensif
                                    (+ara)

                        Igennzen    –                ittgennizen  ngennez                              nettgenniz

                                                                                                                   16
~~~~

## Page PDF 18

<!-- source-page-pdf: 18 -->

~~~~text
                                          G3.1-1, C1eC2eC3
                                    Verbe: bder (évoquer, citer)

Aspect                  Préterit    Aoriste simple               Prétérit négatif      aoriste intensif
                        affirmatif  thème 1                                 –R2i–             –R2R2–
                        thème 1
                                                                 thème 2            thème 3
          1ere          bedreɣ              bedreɣ               bdireɣ
                                            tbedreḍ              tebdireḍ           beddreɣ
singulie  2e            tbedreḍ             i/yebder             i/yebdir
    r                                       tebder               tebdir             tbeddreḍ
          3e:masculin   i/yebder
          3e:féminin    tebder              Nebder                                  ibedder
                                                                                    tbedder
                                            Tbedrem
          1ere          nebder              Tbedremt             Nebdir             nbedder

          2e:masculin   tbedrem             Bedren               tebdirem           tbeddrem
          2e:féminin    tbedremt            Bedrent              tebdiremt          tbeddremt
                                    impératif simple
pluriel   3e:masculin   bedren                                   bdiren                          beddren
          3e:féminin    bedrent                                  bdirent                         beddrent

          mode                                                                      impératif intensif

singulie  2e                        Bder                                            bedder
r
          2e :                      bedret/–                                        beddret/–m
pluriel   masculin                  bedremt                                          beddremt
          2e : féminin

                                    participe affirmatif                            participe négatif

        Participe       prétérit    aoriste   Prétérit intensif           prétérit          Prétérit intensif
                                    (+ara)

                        ibedren     ibedren           ibeddren              nebdir                     nbedder

                                                                                                                17
~~~~

## Page PDF 19

<!-- source-page-pdf: 19 -->

~~~~text
                                                 G3.2-13, aC1
                                             Verbe: ali (monter)

                      Préterit affirmatif Aoriste simple                Prétérit négatif     aoriste intensif
                                                                        thème 1                           tt–
Aspect                thème 1         thème 2
                                                                                          thème 3

          1ere        uliɣ                     aliɣ                     uliɣ                         ttaliɣ
                                               taliḍ
          2e          tuliḍ                    yali                     tuliḍ                        tettaliḍ
                                               tali
singulie 3e:masculi yuli                                                yuli                         ittali
                                               Nali
r         n           tuli                                              tuli                         tettali
                                               talim
          3e:féminin                           talimt

          1ere        Nuli                     alin                     Nuli                         Nettali
                                               alint
          2e:masculi  tulim                                             tulim                        tettalim
          n           tulimt          impératif simple                  tulimt                       tettalimt
          2e:féminin

pluriel   3e:masculi
          n
          3e:féminin  ulin                                              Ulin                              ttalin
                      ulint                                             Ulint                            ttalint

          mode                                                                        impératif intensif

singulie  2e                          Ali                                                 Ttali
r
          2e :                        alit/–m                                             ttalit/–m
pluriel   masculin                     alimt                                               ttalimt
          2e :
          féminin

                                      participe affirmatif                                participe négatif

   Participe                prétérit  aoriste               Prétérit            prétérit             Prétérit intensif
                                      (+ara)                intensif

                      Yulin           yalin                 i/yettalin          nuli                         Nettali

                                                                                                                      18
~~~~

## Page PDF 20

<!-- source-page-pdf: 20 -->

~~~~text
                                                G3.2-16, uC1uC2
                                    Verbe d’état: uzur (être gros, grand)

                                                  Aoriste simple        Prétérit            aoriste intensif
                      Préterit affirmatif                               négatif
                                                                                            thème 3
Aspect                thème 1       thème 2                             thème 1                              tt–

          1ere        zureɣ                 uzureɣ                      zureɣ               ttuzureɣ
                                            tuzureḍ                     zureḍ               tettuzureḍ
          2e          zureḍ                                                                 i/yettuzur
                                            yuzur                       zur                 tettuzur
singulie  3e:masculi  zur                   tuzur                       zuret
    r     n           zuret                                                                 Nettuzur
          3e:féminin                        Nuzur                       zurit
                                                                                            tettuzurem
          1ere        Zurit                 tuzurem                     zurit               tettuzuremt
                                            tuzuremt                    zurit
          2e:masculi  zurit                                                                 ttuzuren
          n           zurit                 uzuren                      zurit               ttuzurent
          2e:féminin                        uzurent                     zurit            impératif intensif

pluriel   3e:masculi                impératif simple
          n
          3e:féminin  zurit
                      zurit

          mode

singulie  2e                        Uzur                                                 Ttuzur
r
          2e :                      uzuret/–m                                            ttuzuret/–m
pluriel   masculin                   uzuremt                                              ttuzuremt
          2e :
          féminin

                                    participe affirmatif                                 participe négatif

Participe                 prétérit  aoriste    Prétérit intensif               prétérit          Prétérit intensif
                      Zuren         (+ara)

                                    yuzuren               i/yettuzuren            zuren               Nettuzur

                                                                                                                  19
~~~~

## Page PDF 21

<!-- source-page-pdf: 21 -->

~~~~text
                                                      G4-1, C1C2u
                                       verbe : cfu (se souvenir, se rappeler)

                      préterit affirmatif aoriste simple            prétérit négatif        aoriste intensif
                                                                    thème 3                        –R2R2–
Aspect                thème 1          thème 2
                                                                                         thème 4

           1ere       cfiɣ             cfuɣ                         cfiɣ                 ceffuɣ
                                       tecfuḍ                       tecfiḍ               tceffuḍ
           2e         tecfiḍ
                                       i/yecfu                      i/yecfi              iceffu
singulier  3e:        i/yecfa          tecfu                        tecfi                tceffu
           masculin   tecfa
           3e:                                                      necfi                nceffu
           féminin
                                                                    tecfim               tceffum
           1ere       necfa            Necfu                        tecfimt              tceffumt

           2e:mascu   tecfim=tecfam    Tecfum
           lin        tecfimt=tecfamt  tecfumt
           2e:fémini
           n                           Cfun
                                       cfunt
pluriel    3e:mascu
           lin
           3e:fémini  cfan                                          cfin                 ceffun
           n          cfant
                                                                    cfint                ceffunt

        mode                    impératif simple                                      impératif intensif

singulier  2e                          Cfu                                                 ceffu
pluriel
           2e :                        Cfut/–m                                           ceffut/–m
           masculin                     Cfumt                                             ceffumt
           2e :
           féminin

                                participe affirmatif                                  participe négatif

Participe             prétérit         aoriste   Prétérit intensif             prétérit             Prétérit intensif
                                       (+ara)

                      i/yecfan         i/yecfun       iceffun                  necfi                      nceffu

                                                                                                                  20
~~~~

## Page PDF 22

<!-- source-page-pdf: 22 -->

~~~~text
                                                       G4- 9, iC1C1iC2
                                                    Verbe: issin (savoir)

                        préterit affirmatif  aoriste simple                prétérit négatif      aoriste intensif
                        thème 1              thème 2                       thème 3                            tt–

                                                                                              thème 4

Aspect

          1ere          ssneɣ                issineɣ                       ssineɣ                  ttissineɣ
                                             tissineḍ                      tessineḍ                tettissineḍ
singulie  2e            tessneḍ              yissin                        yessin                  i/yettissin
    r                                        tissin                        tessin                  tettissin
          3e: masculin  i/yessen
          3e:féminin    tessen               nissin                        nessin                  nettissin

          1ere          nessen               tissinem                      tessinem                tettissinem
                                             tissinemt                     tessinemt               tettissinemt
pluriel   2e:masculin tessnem
          2e:féminin tessnemt                issinen                       ssinen                  ttissinen
                                             issinent                      ssinent                 ttissinent
          3e: masculin ssnen      impératif simple                                            impératif intensif
          3e: féminin ssnent

          mode

singulie  2e                                 issin                                            ttissin
r
          2e :                    issinet/–m                                                  ttissinet/–m
pluriel   masculin                 issinemt                                                    ttissinemt
          2e : féminin

                                  participe affirmatif                                        participe négatif

        Participe       prétérit  aoriste           Prétérit intensif      prétérit                    Prétérit intensif
                                  (+ara)

                        i/yessnen yissinen i/yettissinen                              nessin                      nettissin

Conclusion

Le présent travail a permis de formaliser, de manière rigoureuse et opérationnelle, l'ensemble
du système verbal kabyle à partir d'un corpus de 1 774 verbes de base. La modélisation proposée
repose sur quatre groupes morphologiques (G1 à G4) et 64 types distincts, qui rendent compte
de la quasi-totalité des structures verbales régulières attestées en taqbaylit.

Plusieurs résultats méritent d'être soulignés. D'abord, la très grande régularité du système :
moins de 0,17 % des verbes du corpus présentent un supplétisme, et trois types seulement —
G3.1-1, G2-1 et G4-1 — couvrent à eux seuls près de 53 % du lexique verbal. Ensuite, la
pertinence du modèle à quatre aspects, qui restitue fidèlement la logique aspectuelle de la
langue, là où les descriptions antérieures se limitaient souvent à deux aspects. Enfin, la
formalisation explicite des règles morphotactiques — notamment le comportement du schwa e

                                                                                                               21
~~~~

## Page PDF 23

<!-- source-page-pdf: 23 -->

~~~~text
(Règle 14), la loi d'effacement et de réparation à l'aoriste simple (Règle 16), et la règle de
collision des dentales à l'aoriste intensif (Règle 15) — offre une base directement exploitable
par les systèmes de traitement automatique du langage naturel.
La seconde grande partie de cette étude sera consacrée aux formes dérivées du verbe kabyle,
dont le corpus compte 1 108 occurrences. Elle en proposera une formalisation systématique
selon la même démarche, couvrant les mécanismes de dérivation — transitif-factitif, passif,
réfléchi, réciproque et leurs combinaisons — et complétant ainsi la description de l'ensemble
du système verbal taqbaylit.

                                                                                                               22
~~~~

## Page PDF 24

<!-- source-page-pdf: 24 -->

~~~~text
Bibliographie
Bouamara, K., Issin wis sin [Dictionnaire unilingue kabyle-kabyle]. Éditions L'Odyssée, Tizi
Ouzou, 2017.
Bouamara, K., Amyag n teqbaylit. Asesmel n talɣiwin n yimyagen akked tseftay-nsen. Éditions
Boussekine, Béjaia, 2024.
Bouamara, K., Amyag n teqbaylit. Asesmel n talɣiwin n yimyagen akked tseftay-nsen [Le verbe
kabyle. Classification des types morphologiques et conjugaison]. HAL, hal-05530651v1, 27
mars 2026.
Bouamara, K., Un cas de génie linguistique: le verbe kabyle. Types morphologiques et
conjugaison. À paraître.
Dallet, Jean-Marie. 1982. Dictionnaire kabyle-français : parler des At Mangellat, Algérie.
Paris: SELAF (Société d'Études Linguistiques et Anthropologiques de France).

                                                                                                               23
~~~~
