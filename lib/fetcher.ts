// HTTP client to make GET requests with
import axios from 'axios';

// Defines a function that takes a single argument "url" to send the GET req, then returns a promise that takes the data property from the res
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;