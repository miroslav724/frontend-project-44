install: 
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brainCalc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint
