export default async function getStocksData() {
  const date = "2020-12-09";
  const access_key = "aa8f23728ea519f5821f43a6f4c68603";

  const res = await fetch(
    `http://api.marketstack.com/v1/eod/${date}?access_key=${access_key}&symbols=AAPL,TSLA,NFLX`
  );
  const resJSON = await res.json();
  return resJSON.data;
}
