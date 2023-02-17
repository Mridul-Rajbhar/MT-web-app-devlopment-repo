package com.practice.equalAndHashcode;

public class ReportCard {
	private int mathScore;
	
	public ReportCard() {
		mathScore = (int)(Math.random()*100);
	}

	public int getMathScore() {
		return mathScore;
	}

	public void setMathScore(int mathScore) {
		this.mathScore = mathScore;
	}
	
}
