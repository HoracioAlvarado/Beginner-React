const API_URL = 'https://api.publicapis.org/entries';

const fetchAPIs = async () => {
  const response = await fetch(API_URL)
    .catch((error) => {
      console.log(error);
    });
  const apis = await response.json();

  return apis;
}

const getAPIsMapped = (apis) => {
  const mappedAPIs = {};
  apis.forEach((api) => {
    if (!mappedAPIs[api.Category]) mappedAPIs[api.Category] = [];
    mappedAPIs[api.Category].push(api)
  });

  return mappedAPIs;
}

const getDivCategoriesAndApis = (apisMapped) => {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-container');

  for (const [category, apis] of Object.entries(apisMapped)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('grid-item');
    const h2 = document.createElement('h2');
    h2.textContent = category + ' ' + apis.length;
    categoryDiv.append(h2);
    const ol = document.createElement('ol');
    apis.forEach((api) => {
      const apiDiv = document.createElement('li');
      apiDiv.classList.add('api');
      const h3 = document.createElement('h3');
      h3.textContent = api.API;
      apiDiv.append(h3);
      ol.append(apiDiv)
    })
    categoryDiv.append(ol);
    gridDiv.append(categoryDiv);
  }

  return gridDiv;
}

const buildHtml = async () => {
  const apis = await fetchAPIs();
  const apisMapped = getAPIsMapped(apis.entries);

  const drawCategoriesAndApis = getDivCategoriesAndApis(apisMapped);
  document.body.appendChild(drawCategoriesAndApis);

}

buildHtml();