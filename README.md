# Nom de l'application

CinéSearch

# Description

Cette application web a été développée dans le cadre du projet final du cours 420-211-H26 Applications Web au Cégep MARIE-VICTORIN. L'objectif de l'application est de permettre aux utilisateurs de rechercher et consulter des films et séries à partir de l'API OMDb. L'utilisateur peut parcourir une liste de films, effectuer une recherche par titre, consulter les détails de chaque oeuvre et sauvegarder ses favoris. L'interface est stylisée à l'aide de Tailwind CSS et les favoris sont conservés grâce à l'utilisation du localStorage.

# Fonctionnalités principales

- Affichage d'une liste de films sous forme de cartes
- Recherche dynamique de films par titre
- Consultation des détails d'un film (affiche, réalisateur, année, genre, synopsis, etc.)
- Ajout et suppression de favoris
- Sauvegarde et persistance des favoris à l'aide du localStorage

# API utilisée

- Nom : OMDb API
- URL : http://www.omdbapi.com/

# Planification du projet

## Semaine 1

- [ ] créer la repo github
- [ ] rédiger readme
- [ ] obtenir clé api
- [ ] mettre en place structure dossier et configurer tailwind
- [ ] configurer routage
- [ ] céer composant bar de nav
- [ ] créer footer
- [ ] créer données statique basé sur l'api

## Semaine 2

- [ ] construire page d'acceuil
- [ ] créer un service pour appeler l'api
- [ ] construire page de recherche
- [ ] créer composant carte pour montrer le titre, image du film
- [ ] connecter bar de recherche a l'api
- [ ] créer un service pour appeler un film et ses détails avec son identifiant
- [ ] construire un vue détaillé dun film qui affiche au moins cinq détails
- [ ] gérer les états de chargement et d'érreur

## Semaine 3

- [ ] état global pour la gestion des favoris
- [ ] ajouter bouton d'ajout et de retrait pour les favoris
- [ ] construire page des fav en affichant uniquement les films sauvegardé
- [ ] localstorage pour la persistance des fav
- suppression dun fav doit le faire disparaitre instantanément


Auteur: Walid Outaleb
