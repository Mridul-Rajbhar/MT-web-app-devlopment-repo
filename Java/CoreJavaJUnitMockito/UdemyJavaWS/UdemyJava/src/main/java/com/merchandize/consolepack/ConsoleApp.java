package com.merchandize.consolepack;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.merchandize.entities.*;
import com.merchandize.services.*;

public class ConsoleApp {
	
	static Scanner myInput = new Scanner(System.in);
//	static Service service;
	
	public static String getInput(String message) {
		System.out.println(message);
		return myInput.nextLine();
	}
	
	
	public static void main(String args[]) {
		char option = 'F';
		int partnerId, creditLimit, creditBalance;
		String partnerName, city, state, phoneNumber, email, aadharNumber;
		
		do {
	
		String optionString = getInput("--------- MENU -----------\n "
				+ "A. Add Customer \n"
				+ "B. Add Supplier \n"
				+ "C. Display Customer \n"
				+ "D. Display Supplier \n"
				+ "E. Enter Cusotmer ID \n"
				+ "F. Exit\n").toUpperCase();
		option = optionString.length()==1?optionString.charAt(0):'R';
		
		switch(option) {
		case 'A':
			
			partnerName = getInput("Enter Username: \n");
			try {
			partnerId = Integer.parseInt(getInput("Enter Partner Id\n"));
			creditLimit = Integer.parseInt( getInput("Enter credit Limit\n"));
			}
			catch (Exception e)
			{
				System.out.println("Must be a number");
				break;
			}
			city = getInput("Enter city name\n");
			state = getInput("Enter state name\n");
			phoneNumber = getInput("Enter phone number\n");
			email = getInput("Enter Email\n");
			
			Customer newCustomer = new Customer(partnerId, partnerName, city, state,
					creditLimit, phoneNumber, email);
			break;
			
		case 'B':
			
			partnerName = getInput("Enter Username: \n");
			
			try {
				partnerId = Integer.parseInt(getInput("Enter Partner Id\n"));
				creditBalance =Integer.parseInt(getInput("Enter Credit Balance\n"));
				}
			catch (Exception e)
				{
					System.out.println("Must be a number");
					break;
				}
			city = getInput("Enter city name\n");
			state = getInput("Enter state name\n");
			
			aadharNumber = getInput("Enter Adhar Card\n");
			
			Supplier newSupplier = new Supplier(partnerId, partnerName, city, state,
					creditBalance, aadharNumber);
			
			break;
		
		case 'C':
			List<Customer> customerDetails = Service.getAllCustomer();
			for(Customer customer: customerDetails) {
				System.out.println(customer);
			}
			
			break;
		
		case 'D':
			List<Supplier> supplierDetails = Service.getAllSupplier();
			for(Supplier supplier: supplierDetails) {
				System.out.println(supplier);
			}
			break;
		
		case 'E':
			int customerId;
			try {
				customerId = Integer.parseInt(getInput("Enter customer id \n"));
			}
			catch(Exception e) {
				System.out.println("CustomerId Must be a number");
				break;
			}
			Customer customer = Service.getCustomerById(customerId);
			if(customer!= null)
				System.out.println(customer);
			else
				System.out.println("Wrong Id");
			break;
		
		case 'F':
			System.out.println("Exited");
			break;
		default:
			System.out.println("Wrong Option Selected Retry Again");
		}
		}while(option != 'F');
	}
}
