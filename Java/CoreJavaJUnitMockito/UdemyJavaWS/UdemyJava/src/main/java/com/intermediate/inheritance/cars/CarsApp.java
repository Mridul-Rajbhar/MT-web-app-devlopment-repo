package com.intermediate.inheritance.cars;

public class CarsApp {
	public static void main(String args[]) {
		DogerChallenger dogerChallenger = new DogerChallenger((byte)6, (byte)4, (byte)1, (byte)12,
				(short)40,(short)440, (short)333, (short)212,
				40000, 20, 12345612121212l, 'A',"red", "Mridul");
		dogerChallenger.getDescription();
		dogerChallenger.startTheEngine();
		
		
		
	}
}
