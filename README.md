# dic-video-switching

JavaScript Ajax series assignment - Video switching page.

`javascripts/ajax_sample.js` refactored so that `ajax.json` is requested only
once, on the first click, instead of on every click.

## How it works

- `data` holds the array retrieved from `ajax.json`. While it is empty, no
  successful request has been made yet.
- `changeVideo()` registers the click handler. On each click it calls
  `getData()` only when `data` is still empty; otherwise it reuses the data
  already stored.
- `showVideo()` writes the title, the description and the video URL for the
  current index, then advances the index, wrapping back to the first video
  after the last one.

## Files

```
index.html
ajax.json
javascripts/ajax_sample.js
```

`ajax.json` is loaded over XMLHttpRequest, so the page needs to be served over
HTTP rather than opened straight from the file system, for example:

```
python3 -m http.server
```

then open <http://localhost:8000/>.
