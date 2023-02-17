package com.merchandize.services;

import java.util.ArrayList;
import java.util.List;

import com.merchandize.entities.Customer;
import com.merchandize.entities.Supplier;

public class Service {
		static List<Customer> customerDetails = new ArrayList<>();
		static List<Supplier> supplierDetails = new ArrayList<>();
		
		public static void saveCustomerDetails(Customer customer) {
			customerDetails.add(customer);
		}
		
		public static List<Customer> getAllCustomer(){
			return customerDetails;
		}
		
		public static Customer getCustomerById(int customerId) {
			for(Customer customer: customerDetails) {
				if(customer.getPartnerId() == customerId) {
					return customer;
				}
			}
			return null;
		}
		
		public static void saveSupplierDetails(Supplier supplier) {
			supplierDetails.add(supplier);
		}
		
		public static List<Supplier> getAllSupplier(){
			return supplierDetails;
		}
		
		
}
