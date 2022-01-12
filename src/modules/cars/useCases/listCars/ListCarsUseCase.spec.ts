import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-momory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRespositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRespositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRespositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "038b4af6-a0b6-4e42-89cf-2b892c6aaf83",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by brand", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "038b4af6-a0b6-4e42-89cf-2b892c6aaf83",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand",
    });
    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by name", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "038b4af6-a0b6-4e42-89cf-2b892c6aaf83",
    });

    const cars = await listCarsUseCase.execute({
      name: "Car3",
    });
    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by Category", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "Car4",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-2345",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "038b4af6-a0b6-4e42-89cf-2b892c6aaf83",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "Car3",
    });
    expect(cars).toEqual([car]);
  });
});
