# Personal Website Using React + TypeScript + Vite
This TypeScript + React personal website built with Vite showcases my biography, mini-projects, and lists of skills, experiences, and education.

## Hosted on: [https://aestampa.github.io](https://aestampa.github.io)

## Mini-Projects
### Current Events Globe
This mini-project uses Cesium to render a 3D globe with current event markers by converting article locations into geo-coordinates and pinning those locations onto the globe. These current events, in the form of news articles, are fetched using CurrentsAPI  (https://currentsapi.services/en). The location (e.g., "New York City") is extracted out of the current event using nlp, and that location is fed into the OpenCage Geocoding API (https://opencagedata.com/api#quickstart) to convert that location into geo-coordinates. These geo-coordinates are then used to drop a billboard marker onto the Cesium globe. When the marker is clicked on, the article's title, description, and link to the original page are shown.
