use List::Util qw(min max);

@price;
# %leaders;
open($fh, '<', "myFile.rpt");
     #  < means Read mode.
while($line = <$fh>){
      @data = split(' ',$line);
      if($data[-1] != 'price'){
         push(@price,$data[-1]);

         $name = $data[0];
         $leaders{$data[-1]} = $name;
      }
      # print("@price\n");
      # print("@data\n");

}


$maxprice = max @price;
print "\n$maxprice\n"; 
print "@price";
print("\n$leaders{$maxprice}\n");

