@names = (Danish,Satish,Rajesh,Manju,ANiket,shetty);
@newNames[0,1,2] = @names[1,3,5];
print "$names[2]\n";
print "@newNames\n";
print (@newNames); 
print "\n";
# Part 2 Lists

@list1 = (1..10);
print "\n";
print(@list1);
print "\n";
# 3##################################################

@listletters = (aa..ad);
print "\n";
print(@listletters);
print "\n";
print("@listletters \n");


###########################################################
#Sorting

@numbers = (9,29,394,596,97);
@names2 = ("rosy", "Mahesh", "Ruby", "John");
@sorted_num = sort @numbers;
@sorted_names = sort @names2;
# @descend_num = reverse sort @numbers;

print ("@sorted_num\n");
print ("@sorted_names\n");


#Joining Array Or merge the Elements of an array into a single string

#Syntax array
# string = join(array); 

print "\n";
print "#######  Merge the Elements of an array into a single string\n";
$string1 = join(" " ,"this","is","a","String");
$string2 = join("::" , "words", "and", "colons\n");
@arrString =("ANiket", "is", "SO","Creative");
@list = ("here","is","a");

print ($string1);
print "\n";
print ($string2);

@string3 = join(" ",@list,@arrString);
print ("@string3 \n");
print "\n";

#################################################
#Spliting the Strings into array 

print "###### Spliting the Strings into array #####\n";

$splitString = "Words::are::separeted::by::colons";
@splitedArray = split(/::/, $splitString);

print "@splitedArray"; 
print "\n";

 