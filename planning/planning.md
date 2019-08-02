# Exoplanet API (title tdb)

This API will include information on exoplanets, host stars, and their potential habitability. The idea is to include information for the exoplanets and stars while calculating to see if the exoplanet is within its host star's habitable zone. This is a simple calculation following the equations provided by the NASA Exoplanet archive.

## Goals

1. Bronze (MVP)

- 3 models
- CRUD for Star and Exoplanet
- A RESTful, Heroku deployed API

2. Silver

- Add CRUD specificity (ex: /:id)
- Search by exoplanets in the habitable zone

3. Gold Plan

- Handlebars implementation

## Project Checklist

- [x] Create a plan!
- [ ] Get JSON data from NASA Exoplanet Database
- [ ] Initialize filesystem
- [ ] Install dependencies/server
- [ ] Set up "hello world" connection in index.js
- [ ] Build out models
- [ ] Seed Data (start small)
- [ ] Create controllers/routers
- [ ] Create controllers/routers
- [ ] Test CRUD with Postman
- [ ] Add bells and whistles!

## Schema Relationship Chart

https://www.lucidchart.com/invitations/accept/c63d09c8-dfcd-4d43-a67f-9a42c4b119c0

- Each exoplanet can have one or many host stars.
- Each star can have one or many exoplanets.

- Each exoplanet can have one value for potential habitability.
- Each potential habitability can have one exoplanet.

## Data Used

The data for this project will come from NASA's Exoplanet Archive:

https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets

## Initial Models

1. Exoplanet

- name
- in_habitable_zone object ref
- semi_major_axis
- semi_major_axis reference
- orbital period
- mass
- radius
- density
- star object array ref

2. Potential Habitability

- in_habitable_zone
- exoplanet object ref

in_habitable_zone will be determined using the following equation (simple habitable zone):

https://exoplanetarchive.ipac.caltech.edu/docs/poet_calculations.html

If the semi_major_axis of the exoplanet is between R(inner) and R(outer), in_habitable_zone will be true

3. Star

- name
- spectral type
- luminosity
- mass
- effective_temperature
- radius
- exoplanet object array ref
