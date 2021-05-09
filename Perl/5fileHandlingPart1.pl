#!/usr/bin/perl 
  
# Opening File Hello.txt in Read mode 
open(r, "<", "myTxt.txt");  
  
# Printing the existing content of the file 
print("Existing Content of Hello.txt: " . <r>);  

#Opening File in Write Mode
open(w, ">" , "Mytxt.txt");

# Set r to the beginning of Mytxt.txt
seek r, 0, 0;  

print "\n Writing to file..";

## Writing to Mytxt.txt using print 
print w "Content of this file is changed";

# Closing the FileHandle 
close(w);  
  
# Set r to the beginning of MyFile.txt
seek r, 0, 0;  

# Print the current contents of MyFile.txt
print("\nUpdated Content of MyFile.txt: ".<r>);  

#Close the FileHandle;
close(r);



# Mode=”>>”
# This is Append Mode.


