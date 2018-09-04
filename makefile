APP_NAME = templates
AWS_ACCOUNT = $(shell aws sts get-caller-identity | jq '.Account')

build:
	yarn build

init:
	yarn

# Usage:
# make validate-template TEMPLATE=codepipeline
validate-template:
	aws cloudformation validate-template \
		--template-body file://./aws/$(TEMPLATE).yml

verify:
	yarn test
