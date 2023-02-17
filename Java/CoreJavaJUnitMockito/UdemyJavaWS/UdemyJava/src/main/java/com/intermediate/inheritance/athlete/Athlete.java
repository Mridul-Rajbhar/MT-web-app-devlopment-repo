package com.intermediate.inheritance.athlete;

public class Athlete {
	private String name;
	private String nickname;
	private int yearOfBorn;
	private String team;
	private int gamesPlayed;
	
	public String getName() {
		return name;
	}
	
	public Athlete(String name, String nickname, int yearOfBorn, String team, int gamesPlayed) {
		this.name = name;
		this.nickname = nickname;
		this.yearOfBorn = yearOfBorn;
		this.team = team;
		this.gamesPlayed = gamesPlayed;
	}
	
	public void getBio() {
		System.out.println(""
				+ "name: " + this.name + "\n"
				+ "nickname: " + this.nickname + "\n"
				+ "yearOfBorn: " + this.yearOfBorn + "\n"
				+ "team: " + this.team + "\n"
				+ "gamesPlayed: " + this.gamesPlayed);
		 
	}
	
	
}
