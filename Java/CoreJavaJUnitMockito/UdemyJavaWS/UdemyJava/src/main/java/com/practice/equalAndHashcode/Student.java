package com.practice.equalAndHashcode;

public class Student {
	private String registrationNumber;
	
	public Student(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}
	
	public String getRegistrationNumber() {
		return this.registrationNumber;
	}
	
	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}
	
	public boolean equals(Object obj) {
		if(obj!=null && obj instanceof Student ) {
			String regNumber = ((Student)obj).getRegistrationNumber();
			if(regNumber!=null && regNumber.equals(this.getRegistrationNumber())) {
				return true;
			}
		}
		return false;
	}
	
	public int hashCode() {
		return this.registrationNumber.hashCode();
	}
}
