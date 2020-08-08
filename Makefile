.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	$(info available commands:)
	$(info -> test                   runs available tests)
	$(info -> run                    starts application locally)
	$(info -> publish                publishes changes to GitHub Pages)

.PHONY: test
test:
	npm test

.PHONY: run
run:
	npm start

.PHONY: publish
publish:
	npm run deploy
