# Star Wars Character App
Tech: React, Tailwind CSS, Axios, SWAPI

## Run
### npm install
### npm run dev

## What I implemented
- List characters from SWAPI with pagination
- Character cards with Picsum images
- Modal with details + homeworld fetch
- Search by name
- Mock authentication + silent token refresh
- Unit/integration test verifying modal opens with details

## Trade-offs
- Species name fetching adds extra network calls per page (simple approach). Could cache species globally for performance.
- Mock auth is client-only, no backend.
