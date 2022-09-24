
export async  function fetchCountries(searchName) {
  const BASE_URL = 'https://restcountries.com/v3.1';
 
    try {
      const resp = await fetch(`${BASE_URL}/name/${searchName}?fields=name,capital,population,flags,languages`)
      const country = await resp.json()
        return country;
    } catch (error) {
      console.log(error.message);
    }
  
}