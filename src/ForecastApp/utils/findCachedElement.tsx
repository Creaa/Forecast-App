const findCachedElement = (city: string, dataCache: any) => {
  return dataCache.find((element: any) => element.city.name === city);
};

export { findCachedElement };
