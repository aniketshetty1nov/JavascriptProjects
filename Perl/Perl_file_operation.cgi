
my($fh);
$f = 'test.txt';
# Sample for writing a new line, if file already exists it will replace the existing one
open($fh,">","/mktg/log/$f") or die "Unable to open $f: $!";
print $fh "My first line";
close $fh;

# Sample for appending a line, if file already exists it will append added print line, if file does not exist then it will create that file and write the line with print statement.
open($fh,">>","/mktg/log/$f") or die "Unable to open $f: $!";
print $fh "My second line";
close $fh;

# Sample for reading file;
open($fh,"<","/mktg/log/$f") or die "Unable to open $f: $!";
while(<$fh>){

}
close $fh;

sub readFile{
     my($file,$in,$content);
     $content = 0;
     $file = $_[0];
     if(-f $file){
          open $in,  '<',  $file or die "Can't read file $file: $!";
          $content = do { local $/; <$in> }; # slurp!
     }
     return $content;
}


# edit lines in a file
my($a, $i, $wf, $);
use Tie::File;
tie @a, 'Tie::File', '/file/path/for/process' or die $!;
for $i(0..$#a){
    if($a[$i]){ # 0
    print $a[$i]
        # add conditional code to modify lines here..
    }
    else{
        # add code to deal with empty lines here..
    }
}