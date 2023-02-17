package com.merchandize.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import com.merchandize.services.Service;

public class Supplier extends Merchandise {
	private int _creditBalance;
	private String _aadharNumber;
	
	public int getCreditBalance() {
		return this._creditBalance;
	}
	
	public String getAadharNumber() {
	return this._aadharNumber;
	}
	
	
	public Supplier(int partnerId, String partnerName, String city, String state, int creditBalance,
			String aadharNumber){
		super(partnerId, partnerName, city, state);
		this._aadharNumber = aadharNumber.toUpperCase();
		this._creditBalance = creditBalance;
		printValidationMessage();
	}
	
	private void printValidationMessage() {
		List<String> validationErrors = new ArrayList<>();
		validationErrors = validate();
		if(validationErrors.size()==0) {
			Service.saveSupplierDetails(this);
			System.out.println("Record Added Successfully");
		}
		else {
			for(String error: validationErrors) {
				System.out.println(error);
			}
		}
	}
	
	
	
	
	@Override
	protected List<String> validate(){
		List<String> validationErrors = super.validate();
		if(!checkCreditBalanceNotBeyond75000()) {
		
			validationErrors.add("Credit Balance must not beyond 75,000");
		}
		if(!checkAadharCard()) {
			validationErrors.add("Aadhar Card Format is wrong. Format expected: xxxx xxxx xxxx xxxx");
		}
		
		return validationErrors;
	}
	
	
	private boolean checkCreditBalanceNotBeyond75000() {
		return this._creditBalance<=175000 && this._creditBalance>0?true:false;
	}
	
	private boolean checkAadharCard() {
//		System.out.println(this._aadharNumber.length());
		return Pattern.matches("([0-9]{4}) ([0-9]{4}) ([0-9]{4}) ([0-9]{4})", _aadharNumber);
//		if( this._aadharNumber.length()==19 && 
//			(this._aadharNumber.charAt(4) == ' ') && 
//			(this._aadharNumber.charAt(9) == ' ') &&
//			(this._aadharNumber.charAt(14) == ' ')) {
//			
//			return true;
//		}
//		return false;
	}
	
	@Override
	public String toString() {
		return "-----------------------\n" + "Partner Id: "+ this.getPartnerId() + "\n"
				+ "Partner Name: " + this.getPartnerName() + "\n"
				+ "City : " + this.getCity()  + "\n"
				+ "State: " + this.getState() + "\n"
				+ "credit balance: " + this.getCreditBalance() + "\n"
				+ "aadhar card: " + this.getAadharNumber() + "\n";
	}
	
}
