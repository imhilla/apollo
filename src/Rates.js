import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD"){
      currency
      rate
    }
  }
`
function Rates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>loading</p>
  if (error) return <p>Error</p>
  if (data) return data.rates.map(({ currency, rate }) => (
    <div className="App">
      {console.log(data.rates)}
      <h1>{currency}: {rate}</h1>
    </div>)
  );
}

export default Rates;
