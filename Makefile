log:
	docker logs node-app_node-app_1 -f

run-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

build-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

down-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

run-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

down-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down