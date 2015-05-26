# Live Transit Thunder Bay

Live Transit acts as a JSON proxy for the Thunder Bay realtime GTFS data feeds (data feeds = all the city bus info). Live Transit accepts the incoming .pb file, and spits it back out as JSON. This means that whenever you send a request to one of the Live Transit endpoints, you're sure to get the latest data. CORS is also enabled for all endpoints. More info Thunder Bay Transit Open Data can be read [here](http://www.thunderbay.ca/Living/Getting_Around/Thunder_Bay_Transit/Developers_-_Open_Data.htm).

### Usage

1. Download Node.js
2. Run `npm install live-transit-thunder-bay --save`
3. Use the API:

```js
var liveTransit = require('live-transit-thunder-bay');
liveTransit.start();
```

Run `node index.js`. Express should start, and the API should be available on port 3000.

### Endpoints

The API tries to be self documenting (you can see the endpoints at `'/'`), but the routes are:

- `GET /` returns a list of the available API endpoints
- `GET /vehicleupdates` returns the latest vehicle updates
- `GET /tripupdates` returns the latest trip updates
- `GET /alerts` returns the latest alerts

### License

MIT. See the license file for more info.