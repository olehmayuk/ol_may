import {Controller, Get, Put, Post, Delete, Body, Param, Query} from '@nestjs/common';
import {CarService} from './car.service';
import {CarDto} from "./car.dto";

@Controller('car')
export class CarController {
    constructor (private CarService: CarService ) {}

    @Get ()
    public getCars () {
       return this.CarService.getCars ();
    }


    @Post()
    public postCars(@Body() car:CarDto) {
       return this.CarService.postCars(car);
    }

    @Get(':id')
    public async getCarById(@Param('id') id: number) {
       return await this.CarService.getCarById(id);
    }

    @Delete(':id')
    public async deleteCarById(@Param('id') id: number){
      this.CarService.deleteCarById(id);
    }

    @Put(':id')
    public async putCarById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.CarService.putCarById(id, propertyName,propertyValue);
    }

}
