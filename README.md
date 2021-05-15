# finnish-coat-of-arms backend

Backend repository for serving Finnish coat of arms with minimal information. The coat of arms svgs are served from Heroku Cloudinary. Relevant information about the coat of arms store in PostgreSQL in Heroku.

![Run backend tests](https://github.com/jaraisanen/finnish-coat-of-arms-backend/actions/workflows/tests-run.yml/badge.svg)

## Running locally

To run the project locally the following things are required to be installed locally:

* Node v14.16 or later
* Docker

### PostgreSQL Connection

Environment values need to be changed in docker-compose.yml, if you need connection for other than local db

### Commands

To run the project head to the project's root and run:

* Without Docker
`npm i && npm run dev`

* With Docker
`docker-compose -f docker-compose.yml up`

 #### Database data from Statistics Finland / Tilastokeskus

 Downloaded from Statistics Finland API on 13.3.2021 with 
 license CC BY 4.0 https://creativecommons.org/licenses/by/4.0/deed.en
 https://data.stat.fi/api/classifications/v2/classifications/kunta_1_20210101/classificationItems?content=data&meta=max&lang=en 
 
 