install: 
	npm ci

brain-games: 
	node bin/brainGames.js

brain-even:
	node bin/brainEven.js

brain-calc:
	node bin/brainCalc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint
