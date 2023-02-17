
package com.udemyJava.training.LabApi;

public class BasketballApp {
	public static void main(String args[]){
		BasketballPlayer kobe = new BasketballPlayer("Kobe", 
				"Black Mamba", 1978, "Lakers", 83.7, 25.0, 1348);
		BasketballPlayer jordan = new BasketballPlayer("Jordan", 
				"John", 1963, "Trees", 80.7, 15.0, 1248);
		BasketballPlayer magic = new BasketballPlayer("Magic", 
				"M3", 1988, "Magician", 100, 23.0, 1000);
		
		BasketballPlayer  basketballPlayers[] = new BasketballPlayer[3];
		basketballPlayers[0] = kobe;
		basketballPlayers[1] = jordan;
		basketballPlayers[2] = magic;
		
		for(BasketballPlayer player: basketballPlayers) {
			player.freeThrow();
		}
		
	}
}	
