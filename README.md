##Run dev
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
##Down dev
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml down` 
##Run prod
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --no-deps -d`
##Down prod
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml down` 
