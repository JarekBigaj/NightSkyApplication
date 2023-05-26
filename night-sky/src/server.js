const SERVER = `http://127.0.0.1:3600`

const PATH_API_GET_CONSTELLATION_DATA = `/api/constellations/getDataSelectedConstellation?id=`;
const PATH_API_GET_CONSTELLATIONS_LIST = `/api/constellations/getAllDataConstellations`;
const PATH_API_GET_STARS_LIST =`/api/stars/getAllDataStars`;

export const API_GET_CONSTELLATION_DATA = SERVER+PATH_API_GET_CONSTELLATION_DATA;
export const API_GET_CONSTELLATION_LIST = SERVER+PATH_API_GET_CONSTELLATIONS_LIST;
export const API_GET_STARS_LIST = SERVER+PATH_API_GET_STARS_LIST;
