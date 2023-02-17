package com.udemyJava.training.LabApi;
import java.util.Random;

public class BasketballPlayer {
	String name;
	String nickname;
	int yearOfBorn;
	String team;
	
	double freeThrowPercentage;
	double pointsPerGame;
	int gamesPlayed;
	
	
	public BasketballPlayer(String name, String nickname, int yearOfBorn, 
			String team, double freeThrowPercentage, double pointsPerGame,
			int gamesPlayed) {
		this.name = name;
		this.nickname = nickname;
		this.yearOfBorn = yearOfBorn;
		this.team = team;
		this.freeThrowPercentage = freeThrowPercentage;
		this.pointsPerGame = pointsPerGame;
		this.gamesPlayed = gamesPlayed;
	}
	
	public void freeThrow() {
		Random randomNumberGenerator = new Random();
		if((randomNumberGenerator.nextDouble()*100) > freeThrowPercentage) {
			System.out.println(this.name + " failed to score free thrown");
		}
		else
		{
			System.out.println(this.name + " scored free throw");
		}
	}
}
