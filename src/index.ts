import app from './app';

const port = process.env.NODE_PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening to http://localhost:${port}`);
  /* eslint-enable no-console */
});
