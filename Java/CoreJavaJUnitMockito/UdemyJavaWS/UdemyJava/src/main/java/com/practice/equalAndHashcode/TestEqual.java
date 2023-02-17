package com.practice.equalAndHashcode;

import java.util.HashMap;
import java.util.Map;

public class TestEqual {
	public static void main(String[] args) {
		Student s1 = new Student("Mridul");
		Student s2 = new Student("Mridul");
		
		System.out.println(s1.equals(s2));
		
		Map<Student, ReportCard> studentReport = new HashMap<Student, ReportCard>();
		studentReport.put(s1, new ReportCard());
		studentReport.put(s2, new ReportCard());
	}
}
