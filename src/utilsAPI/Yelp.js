const apiKey="vibNPblG6H--td0flpj-QZO9kPbtzTxpfHqBxPcI9YJVujFALMXgW6nxz8LYJd4T7Md1VrN2QeHDg3KdlElwIA-ODUUXc7ghHLKMzg7y-xuraPWaLZegX1KmeS_KYXYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    }).then(response => {
      if (response){
        return response.json();
      }
    })
  }
};