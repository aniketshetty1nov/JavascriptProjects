#!/uer/bin/perl
use Switch;

#IF Else Condition

$salary = 10500;

if($salary > 10000){
      print "Employee is Managerr\n";
}

elsif($salary < 1000 ){
      print "Employee is Staff \n";
}

#Unless Condition
######## Logic ##########
#     condition is False => Excecute this statement
#     condition is True =>  Exit

$a = 22;
unless( $a < 20){
      print("a is greater than 20 \n");

}


#### Switch Statement


$var = 30;
@Myarray = (10,20,30);
%Myhash = ('key1'=> 10, 'key2' => 20 );

switch($var){
      case 10 { print "number 100 " }
      case "a" { print "string a  " }  
      case [1..10,42] { print "no. in discontuinues lists " }
      case (\@Myarray) { print " in array " } 
      case (\%Myhash) { print "entry in hash " }
      else { print " cases not true " }      

      }