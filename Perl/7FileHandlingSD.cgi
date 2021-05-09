#!C:\xampp\perl\bin\perl.exe
 BEGIN{
     use CGI::Carp qw(carpout);      # Import this function. used for log generation
     open(LOG, ">para-cgi1.log")or die "Can't append to para-cgi1.log: $!\n";
     carpout(*LOG);
 }
use strict;
use warnings;
use diagnostics;
use feature 'say';
use feature "switch";
use v5.28.1;
use CGI qw(param header);
#use CGI::Carp qw(fatalToBrowser);



# edit lines in a file Tie package will return an array of every lines read from a file.
use Tie::File;
my($a,$i);
my(@a);
tie @a, 'Tie::File', 'file/text.txt' or die $!;

# to Find Length of an array use $#a
print ("Array Lendth of a is $#a "); 
for $i(0..$#a){
    if($a[$i]){ # 0
        print ("\n$a[$i]\n")
        # add conditional code to modify lines here..
    }
    else{
        # add code to deal with empty lines here..
    }
}