import cars from "@/data/cars.json";
export default defineEventHandler(async (event) => {
  const { make, minPrice, maxPrice } = getQuery(event);
  const { city } = event.context.params;
  console.log(minPrice);
  let filterdCar = cars;
  //   console.log(filterdCar.make.toLowerCase());
  
  filterdCar = filterdCar.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });
  if (make) {
    filterdCar = filterdCar.filter((car) => {
        return car.make.toLowerCase() === make.toLowerCase();
      });
  }
  if (minPrice) {
    filterdCar = filterdCar.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }
  if (maxPrice) {
    filterdCar = filterdCar.filter((car) => {
        return car.price >= parseInt(maxPrice);
      });
  }
  return filterdCar;
});
