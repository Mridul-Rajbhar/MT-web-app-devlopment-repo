package com.merchandize.entities;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.*;
import com.merchandize.services.Service;

public class Customer extends Merchandise{
	private int _creditLimit;
	private String _phoneNumber;
	private String _email;
//	private Service _service = new Service();
	
	public int getCreditLimit() {
		return this._creditLimit;
	}
	
	public String getPhoneNumber() {
		return this._phoneNumber;
	}
	
	public String getEmail() {
		return this._email;
	}

	
	public Customer(int partnerId, String partnerName,String city, String state, int creditLimit, String phoneNumber, String email){
		super(partnerId, partnerName, city, state);
		this._creditLimit = creditLimit;
		this._phoneNumber = phoneNumber;
		this._email = email;
		printValidationMessage();
	}
	
	private void printValidationMessage() {
		List<String> validationErrors = new ArrayList<>();
		validationErrors = validate();
		if(validationErrors.size()==0) {
			Service.saveCustomerDetails(this);
			System.out.println("Record Added Successfully");
		}
		else {
			for(String error: validationErrors) {
				System.out.println(error);
			}
		}
	}
	
	@Override
	protected  List<String> validate(){
		List<String> validationErrors = super.validate();
		
		if(!checkCreditLimitNotBeyond50000()) {
			validationErrors.add("credit limit should be between 0 to 50,000");
		}
		if(!checkPhoneNumbersDigitsOrNot())
			validationErrors.add("Not all phone number characters are numbers");
		
		if(!checkPhoneNumber10Digits()) {
			validationErrors.add("phone number must be of 10 digits");
		}
		if(!validateEmailFormat()) {
			validationErrors.add("email format is wrong. Format must be of pattern username@email.com");
		}
		
		return validationErrors;
	}
	
	private boolean checkCreditLimitNotBeyond50000() {
		return (this._creditLimit<50000 && this._creditLimit>=0)?true:false;
	}
	
	private boolean checkPhoneNumbersDigitsOrNot() {
		return Pattern.matches("([0-9]){10}", this._phoneNumber);
	}
	
	private boolean checkPhoneNumber10Digits() {
		return this._phoneNumber.length() == 10;
	}
	
	private boolean validateEmailFormat() {
		return Pattern.matches("(.*)@(.*).(.*)", this._email);
	}
	
	
	@Override
	public String toString() {
		return " -------------------------" + "\n"
				+ "Partner Id: "+ this.getPartnerId() + "\n"
				+ "Partner Name: " + this.getPartnerName() + "\n"
				+ "City : " + this.getCity()  + "\n"
				+ "State: " + this.getState() + "\n"
				+ "credit limit: " + this.getCreditLimit() + "\n"
				+ "phone number" +	this.getPhoneNumber() + "\n";
	}
	
	
	
}
