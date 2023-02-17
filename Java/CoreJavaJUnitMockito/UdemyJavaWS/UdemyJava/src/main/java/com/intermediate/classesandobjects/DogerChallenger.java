package com.intermediate.classesandobjects;

public class DogerChallenger {

    byte numberOfSeats = 5;
    byte numberOfDoors = 3;
    byte numberOfVehicleOwners = 1;
    byte emissionSticker = 4;

    short power = 362;
    short horsePower = 492;
    short co2Emission = 333;
    short cubicCapacity = 6417;

    int price = 29999;
    int milage = 14999;

    long registrationNumber = 233333333333333333L;

    float fuelConsumptionCombined = 15.5f;
    float fuelConsumptionUrban = 21.5F;
    float fuelConsumptionExtraUrban = 13.5F;

    double fuelConsumptionPreciseAverage = 122222.344444444444444444444;

    boolean isDamaged = true;
    char energyEfficiencyCategory = 'G';
    
    String color;
    
    public DogerChallenger(){
    	System.out.println("Doger Challenge object is created");
    }
    
    DogerChallenger(byte numberOfSeats,byte numberOfDoors,byte numberOfVehicleOwners,byte emissionaSticker,
    		short power, short horsePower, short co2Emission, short cubicCapacity, int price, int milage,
    		long registrationNumber, float fuelConsumptionCombined, float fuelConsumptionUrban,
    		float fuelConsumptionExtaUrban, double fuelConsumptionPreciseAverage, boolean isDamaged,
    		char energyEffeciencyCategory, String color){
    	
    	this.color = color;
    	this.numberOfSeats = numberOfSeats;
    	this.numberOfDoors = numberOfDoors;
    	this.numberOfVehicleOwners = numberOfVehicleOwners;
    	this.emissionSticker = emissionaSticker;
    	this.power = power;
    	this.horsePower = horsePower;
    	this.co2Emission = co2Emission;
    	this.cubicCapacity = cubicCapacity;
    	this.price = price;
    	this.milage = milage;
    	this.registrationNumber = registrationNumber;
    	this.fuelConsumptionCombined = fuelConsumptionCombined;
    	this.fuelConsumptionUrban  = fuelConsumptionUrban;
    	this.fuelConsumptionExtraUrban = fuelConsumptionExtaUrban;
    	this.fuelConsumptionPreciseAverage = fuelConsumptionPreciseAverage;
    	this.isDamaged = isDamaged;
    	this.energyEfficiencyCategory = energyEffeciencyCategory;
    }
    
    public void startTheEngine() {
    	System.out.println("The engine is started");
    }
    
    public void getDescription() {
        System.out.println("2018 Dodge Challenger");
        System.out.println("Price: $" + price);

        System.out.println("------------conversion--------------");
        short newNumberOfSeats = numberOfSeats;
        System.out.println("new number of seats:" + newNumberOfSeats); 

        System.out.println("--------explicit conversion -------------");
        byte newPower = (byte)power;
        System.out.println("new power: "+ newPower);
        System.out.println("power: " + power);

    }
    
    
    
}
