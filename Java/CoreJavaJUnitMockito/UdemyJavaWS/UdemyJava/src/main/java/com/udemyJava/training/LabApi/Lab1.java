package com.udemyJava.training.LabApi;
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.*;


public class Lab1 {
	public static boolean isPrime(int number) {
		int temp = number/2;
		for(int i=2;i<=temp; i++) {
			if(number%i ==0)
				return false;
		}
		return true;
	}
	
	public static void SwapWithoutTemp(int number1, int number2) {
		System.out.println("number 1: " + number1 + " number2: "+number2);
		number1= number2 - number1;
		number2 = number2 - number1;
		number1 = number2 + number1;
		System.out.println("number 1: " + number1 + " number2: "+number2);
	}
	
	public static void printPyramidLeftToBottom(int rows)
	{
		for(int i=0; i<rows; i++)
		{
			for(int j=0; j<=i; j++) {
				System.out.print("* ");
			}
			System.out.println();
		}
	}
	
	public static void printReverseString(String str) {
		for(int i=str.length()-1; i>=0; i--) {
			System.out.print(str.charAt(i));
		}
		System.out.println();
	}
	
	public static double getSimpleInterest(int principle,double rate, double duration) {
		return principle*(1 + rate*duration);
	}
	
	public static boolean checkPalindrome(int number) {
		int digit1 = number%10;
		int digit2 = (number/100)%10;
//		System.out.print(digit1 + " " + digit2);	
		return digit1 == digit2;
	}
	
	public static void validateUserName() {
		Scanner myObj = new Scanner(System.in);
		System.out.println("Enter Username");
		
		String userName = myObj.nextLine();
		
		System.out.println("Enter  Password");
		
		String password = myObj.nextLine();
		
		if(userName.length() < 6 && userName.length()<=12) {
			System.out.println("UserName must be minimum 6 and maximum 12");
		}
		else if(userName.indexOf(' ')!=-1) {
			System.out.println("UserName must not have space");
		}
		else if(!checkNumber(userName)) {
			System.out.println("UserName Must have a number");
		}
		else if(!checkCharacter(userName)) {
			System.out.println("UserName Must have a character");
		}
		else if(password.length()<8) {
			System.out.println("Password must be of minimum 8 Characters");
		}
		else 
		{
			System.out.println("Everything correct");
		}
	}
	
	public static void displayAccounts() {
		Account accounts[] = new Account[5];
		accounts[0] = new Account(100, "Mridul", 20000);
		accounts[1] = new Account(45, "Raunak", 33000);
		accounts[2] = new Account(56, "Rohan", 44300);
		accounts[3] = new Account(22, "Kaustubh", 40000);
		accounts[4] = new Account(84, "Priyanka", 3000);
		
		for(Account account: accounts) {
			System.out.println("ID: "+account.id + " Name: "
		+ account.name + " Balance " + account.balance);
		}
		System.out.println("==== Array After Sorting ======");
		
		Arrays.sort(accounts,(a,b)->a.id - b.id);
		
		for(Account account: accounts) {
			System.out.println("ID: "+account.id + " Name: "
		+ account.name + " Balance " + account.balance);
		}
		System.out.println();
		
	}
	
	
	static boolean checkNumber(String userName) {
		return Pattern.matches("(.*)(\\d*)(.*)",userName);
		
	}
	
	static boolean checkCharacter(String userName) {
		return Pattern.matches("(.*)([a-zA-Z]+)(.*)",userName);
	}
	
	
}
