package com.intermediate.inheritance.athlete;
import java.util.Random;

public class BasketballPlayer extends Athlete {
	private double freeThrowPercentage;
	private double pointsPerGame;
	
	
	public BasketballPlayer(String name, String nickname, int yearOfBorn, String team, int gamesPlayed,
			double freeThrowPercentage, double pointsPerGame) {
		super(name, nickname, yearOfBorn, team, gamesPlayed);
		this.freeThrowPercentage = freeThrowPercentage;
		this.pointsPerGame = pointsPerGame;
	}


	public void freeThrow() {
		Random randomNumberGenerator = new Random();
		if((randomNumberGenerator.nextDouble()*100) > freeThrowPercentage) {
			System.out.println(super.getName() + " failed to score free thrown");
		}
		else
		{
			System.out.println(super.getName() + " scored free throw");
		}
	}
	
	@Override
	public void getBio() {
		// TODO Auto-generated method stub
		super.getBio();
		System.out.println("free throw percentage: " + this.freeThrowPercentage);
		System.out.println("points per game: "+ this.pointsPerGame);
	}
}
