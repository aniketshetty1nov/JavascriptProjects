#!/usr/bin/perl 

#  Append File >>

open(r, "<", "Mytxt.txt");
# print (<r>);

open(A, ">>" , "Mytxt.txt");
seek r,0,0;

print A "\n Aniket is, was and always will be everyones Favourite and amazing Person";


close(A);
seek r,0,0;

print <r>;
close(r);