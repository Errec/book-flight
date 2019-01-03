import axios from 'axios'

const SEARCH_FLIGHTS_API = 'https://flight-price-hmg.maxmilhas.com.br'

export function searchFlight (token, postData) {
  axios.create({
    headers: { "token": token}
  })
  axios.post(`${SEARCH_FLIGHTS_API }/search?time=${Date.now()}`, postData).then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    });
}

// BASIC DATA USAGE :

/*const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kIiwic3ViIjoidGVzdGUtZnJvbnRlbmQiLCJlbnYiOiJobWcifQ.nM6wMem6dxF0CcDlig5iA9az5ZfmbXDjq1e4ypZXwjU"

const postData = {
    tripType: "RT",
    from: "REC",  //origem
    to: "RIO",  //destino
    outboundDate: "2018-02-22", //data de partida
    inboundDate: "2018-03-28", //data de volta
    cabin: "EC", //classe econômica (EC) ou executiva (EX)
    adults: 2, //adultos
    children: 1, //crianças
    infants: 0 //bebês
}
searchFlight(token, postData)*/
