# finnish-coat-of-arms backend

Backend repository for providing Finnish coat of arms information through API. Relevant information about the coat of arms are stored in PostgreSQL. Github actions used for running automated tests and deploys.

![Run backend tests](https://github.com/jaraisanen/finnish-coat-of-arms-backend/actions/workflows/tests-run.yml/badge.svg)

## Running locally

To run the project locally the following things are required to be installed locally:

* Docker Compose v1.25.0 or newer

  **or** 

* Node v14.16 or newer 

### PostgreSQL Connection

If **Docker Compose is not used** for local run: 

Use for example dotenv package with .env file on the project root and specify following environment values with your database credentials: 

* In .env file specify the following with your local db connection values:

```
LOCAL_DB_USER=your-value-here
LOCAL_DB_PASSWORD=your-value-here
LOCAL_DB_HOST=your-value-here
LOCAL_DB_PORT=v-value-here
LOCAL_DB=your-value-here
```

* In db_connection.ts file use:

```javascript
import dotenv from 'dotenv'

dotenv.config()
```

* Remember to run the municipalities.sql dump on your db

### Commands

To run the project head to the project's root and run:

* Without Docker
`npm i && npm run dev`

* With Docker
`docker-compose -f docker-compose.yml up`

Backend now runs on 

* http://localhost:8000/finnish-coat-of-arms/

### Running tests

To run the project's tests head to the project's root and run:

* With Docker
`docker-compose -f docker-compose-test.yml up --abort-on-container-exit`

* Without Docker (needs manual connection to db, see PostgreSQL Connection section)
`npm run test`

 #### Database data from Statistics Finland / Tilastokeskus

 Generated from Statistics Finland API on 13.3.2021 with 
 license CC BY 4.0 https://creativecommons.org/licenses/by/4.0/deed.en
 https://data.stat.fi/api/classifications/v2/classifications/kunta_1_20210101/classificationItems?content=data&meta=max&lang=en 
 
