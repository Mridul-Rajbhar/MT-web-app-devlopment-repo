package com.merchandize.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

public class Merchandise {
	private int	_partnerId;
	private String _partnerName, _city, _state;
	
	public Merchandise(int partnerId, String partnerName,String city, String state){
		this._partnerId = partnerId;
		this._partnerName = partnerName;
		this._state = state;
		this._city = city;
	}
	
	
	public int getPartnerId() {
		return this._partnerId;
	}
	
	public String getPartnerName() {
		return this._partnerName;
	}
	
	public String getCity() {
		return this._city;
	}
	public String getState() {
		return this._state;
	}
	
	
	protected List<String> validate() {
		List<String> validationErrors = new ArrayList<>();
		if(this._partnerId <= 0) {
			validationErrors.add("Partner Id cannot be less than or equal to 0");
		}
		checkStringLengthParameters(5, "Partner Name", this._partnerName, validationErrors);
		checkStringLengthParameters(3, "City Name", this._city, validationErrors);
		checkStringLengthParameters(3, "State Name", this._state, validationErrors);
		
		return validationErrors;
	}
	

	private void checkStringLengthParameters(int minimumLength, String parameterName, String parameterValue, List<String> validationErrors) {
		
//		System.out.println(Pattern.matches("([a-zA-Z]){" + minimumLength + "}", parameterValue));
		
		if(parameterValue == "")
		{
			validationErrors.add(parameterName + " is required");
		}
		else if(parameterValue.length() < minimumLength) {
			validationErrors.add(parameterName + " is should be of minimum length " + minimumLength);
		}
//		else if(!Pattern.matches("[a-zA-Z ]", parameterValue)) {
//			validationErrors.add(parameterName + " should contain only alphabets ");
//		}
		
//		System.out.println(validationErrors.size());
	}	
}