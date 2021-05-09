@names = ("Ragav","Yogita","Ankit","Vyas","Pradeep","Pavan");

#To know the length of the array we need to assign array into scalar variable
$size = @names;

for($i = 0; $i < $size; $i = $i+1 ){
      print "$i ";
      print "$names[$i] \n";
      
      # print "$size";
}


#Until loop --- is opposite of While
# repetedly executes a target Statement as long as given condition is False

$a = 5;
until($a > 10)
{
      print "\nANiket is Wise\n";
      $a = $a + 1;

}

#ForEach Loop

foreach $employee (@names)
{
      print "\nname of employee: $employee\n";
}

