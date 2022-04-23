import axios from "axios";

export default axios.create({ 
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _khBklFDBWn6HgV3FQZLIx0CKQwvu43e_wJHrfHsBzk'
    }
})