//axios is a popular fetching library you could post interact with api very easily

import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/clone1-dfec6/us-central1/api'
});

export default instance;


