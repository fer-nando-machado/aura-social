.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	$(info available commands:)
	$(info -> build                   builds binary)
	$(info -> test                    runs available tests)
	$(info -> run                     runs application)

.PHONY: build
build:
	npm run build

.PHONY: test
test:
	npm test

.PHONY: run
run:
	npm start
