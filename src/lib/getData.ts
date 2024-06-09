export default async function getPage(query: string) {

  const response = await fetch(`${process.env.GRAPHQL_QUERY_URL}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query
    })
  })
  // console.log('RESPONSE ', response)
  const json = await response.json();
  // console.log('PAGE DATA', json);
  return json;
}