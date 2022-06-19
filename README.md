# kata-tennis
Kata provenant de Coding dojo : https://codingdojo.org/kata/Tennis/

<b>Enoncé</b>

This Kata is about implementing a simple tennis game. I came up with it while thinking about Wii tennis, where they have simplified tennis, so each set is one game.

The scoring system is rather simple:

Each player can have either of these points in one game “love” “15” “30” “40”
If you have 40 and you win the point you win the game, however there are special rules.
If both have 40 the players are “deuce”.
If the game is in deuce, the winner of a point will have advantage
If the player with advantage wins the ball he wins the game
If the player without advantage wins they are back at deuce.

# Installation

<code>npm install</code>

# Démarrage

<code>npm start</code>

# Test

<code>npm test</code>

# Usage

Appelez la fonction scoreToDisplay avec en 1er paramètre le nombre de point du Player A et en 2nd paramètre le nombre de point du Player B et en retour vous recevrez une string qui vous donnera le score ou le gagnant s'il y en a un.

# Feedback

Peut-être que vous n'allez pas tomber sur cette partie, mais je voulais vous donnez un peu mon ressenti par rapport à ce test technique en toute transparence.

Après m'être renseigner sur Wemanity j'ai compris que le software craftsmanship (Big up à Mr Kong pour son excellent talk sur youtube) était l'approche adoptée, donc ce test technique était l'occasion de mettre un premier pied dans ce monde !

<b>TDD</b> : Avant ce kata j'ai eu l'opportunité de pratiqué le TDD une seule fois durant un mob programming et on n'avait malheureusement pas fini. J'ai eu un peu de mal a commencé, j'ai essayé de me gérer pour ne pas aller trop vite et sauté des étapes, mais à la fin j'ai aimé l'organisation de mon code et sa simplicité ainsi que la facilité avec laquelle j'ai pu organiser mes idées et avancer dans mon code. C'est une expérience qui va changer ma façon de coder à l'avenir. Je vais essayer de pratiquer le TDD réguliérement pour qu'il me soit plus simple et naturel à mettre en place.

L'exercice en soit est plutôt très simple mais je pense que c'était exactement ce qu'il me fallait pour mon 1er TDD en autonomie !

<h4>Conclusion</h4>

Si vous pouviez me faire une review de mon code pour que je puisse continuer à m'améliorer, un feedback approfondi (si possible) sur ma façon de pratiquer le TDD, ainsi que des conseils sur le software craftmanship je vous en serais reconnaissant.
Merci pour ce test et merci de m'avoir initier au software craftsmanship !

