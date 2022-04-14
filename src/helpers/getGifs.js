export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=iZf9lLEv9kO7L7gBdohAU7NjGYuf4Yzg&q=${encodeURI( category )}&limit=10`
  const r = await fetch( url );
  const {data} = await r.json();
  const gifs = data.map((img) => {
    return {
      id   : img.id,
      title: img.title,
      url  : img.images?.downsized_medium.url
    }
  })
  return gifs
}