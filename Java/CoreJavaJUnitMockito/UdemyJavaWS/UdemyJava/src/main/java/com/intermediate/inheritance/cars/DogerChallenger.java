package com.intermediate.inheritance.cars;

public class DogerChallenger extends Car {

    DogerChallenger(byte numberOfSeats,byte numberOfDoors,byte numberOfVehicleOwners,byte emissionaSticker,
    		short power, short horsePower, short co2Emission, short cubicCapacity, int price, int milage,
    		long registrationNumber,char energyEffeciencyCategory, String color, String carName)
    {
    	super(numberOfSeats, numberOfDoors, numberOfVehicleOwners, emissionaSticker,
    			power, horsePower, co2Emission, cubicCapacity, price, milage, registrationNumber,
    			energyEffeciencyCategory, color, carName);
    }
    
    @Override
    public void getDescription() {
    	System.out.println("Description of the dogerCar");
    	// TODO Auto-generated method stub
    	super.getDescription();
    	
    }
    
}
