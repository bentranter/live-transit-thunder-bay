# Live Transit Thunder Bay

Live Transit acts as a JSON proxy for realtime GTFS data feeds. Live Transit will accept the incoming .pb file, and spit it back out as JSON.

### Usage

1. Download Node.js
2. Clone this repo
3. Run `npm install && npm start`

Express should start, and the API should be available on port 3000.

### Endpoints

The API tries to be self documenting (you can see the endpoints at `'/'`), but the routes are:

- `GET /` returns a list of the available API endpoints
- `GET /vehicleupdates` returns the latest vehicle updates
- `GET /tripupdates` returns the latest trip updates
- `GET /alerts` returns the latest alerts

### License

MIT. See the license file for more info.