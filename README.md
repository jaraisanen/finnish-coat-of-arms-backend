# finnish-coat-of-arms backend

Backend repository for serving Finnish coat of arms with minimal information. The coat of arms svgs are served from Heroku Cloudinary. Relevant information about the coat of arms store in PostgreSQL in Heroku.

![Run backend tests](https://github.com/jaraisanen/finnish-coat-of-arms-backend/actions/workflows/tests-run.yml/badge.svg)

## Running locally

To run the project locally the following things are required to be installed locally:

* Node v14.16 or later

### PostgreSQL Connection

TODO

### Commands

To run the project head to the project's root and run:

`npm i && npm run dev`

 Database data from Statistics Finland / Tilastokeskus.
 Downloaded from Statistics Finland API on 13.3.2021 with 
 license CC BY 4.0 https://creativecommons.org/licenses/by/4.0/deed.en
 https://data.stat.fi/api/classifications/v2/classifications/kunta_1_20210101/classificationItems?content=data&meta=max&lang=fi 
 
 