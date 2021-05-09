#!/usr/bin/perl 
print "hello World This is How we Define Variables in Perl\n";


print  "Scalars\n";

$employee_name = "sagar";
$employee_age = 23;
$employee_salary = 440.5;

print "name = $employee_name\n";
print "Age = $employee_age\n";
print "salary = $employee_salary\n\n";



print "Arrays\n";

@names = ("Mohan","Ekansh","Heena");
@ages = (25,28,31);

print "ages[0] = $ages[0] \n";
print "\$ages[1] = $ages[1] \n";
print "ages[2] = $ages[2] \n\n";

print "\$names[0] = $names[0] \n";
print "names[1] = $names[1] \n";
print "names[2] = $names[2] \n\n";

print "HAshes (Objects)\n"; 

%emp_data = ('Danish',28,'Raju',40,'Ritesh',25);

print "data{'danish'} = $emp_data{'Danish'}\n";
print "\$data{'Raju'} = $emp_data{'Raju'}\n";
print "\$data{'Ritesh'} = $emp_data{'Ritesh'}\n";
 

