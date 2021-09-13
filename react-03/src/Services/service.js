import axios from "axios";

const baseAPI = "https://api.shrtco.de/v2/";

const ShortenLinkAPI = {
  onfetchAPI:(url) =>{
    return  axios.get(`${baseAPI}/shorten?url=${url}`)
  }
}

export default ShortenLinkAPI;