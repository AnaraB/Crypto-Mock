import useSWR from "swr";

function Price(props) {
  let priceData = []
  const fetcher = (...args) =>
    fetch(new Request(...args), {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
        authorization:
          'Apikey "7a8bd0d679fc1ef6e8884f50d98b9936c0323c5dea683ebb9952a67e4adddeef"',
      }),
    }).then(function (response) {
  
      return response.json()

    })

    // .then((data) => {
    //   // console.log(data);
    //   priceData = data;
    // }
    // )

  // Implements useSWR  
  const { data, error, isLoading } = useSWR(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${props.crypto}&tsyms=GBP`,
    fetcher,
    { refreshInterval: 10000000 }
  );
  // console.log(data);
  // const coinPrice = data.DISPLAY[props.crypto].GBP.PRICE
  // console.log("hello");
  // console.log(coinPrice);


  return (
    <div>
      {error ? (
        <div>failed to load</div>
      ) : isLoading ? (
        <div>loading...</div>
      ) : (
        <p className="mb-0">
          {data.DISPLAY[props.crypto].GBP.PRICE}
          <span
            className={
              data.DISPLAY[props.crypto].GBP.CHANGEPCTDAY > 0
                ? "text-success ms-4"
                : "text-danger ms-4"
            }
          >
            {data.DISPLAY[props.crypto].GBP.CHANGEPCTDAY}%
          </span>
        </p>
      )}
    </div>
  );
}

export default Price;
