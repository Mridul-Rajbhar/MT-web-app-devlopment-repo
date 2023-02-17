package com.udemyJava.training.LabApi;

public class Account {
	public short id;
	public String name;
	public int balance;
	
	Account(int id, String name, int balance){
		this.id = (short)id;
		this.name = name;
		this.balance = balance;
	}
}
