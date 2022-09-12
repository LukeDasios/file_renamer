To setup file_renamer:

1.) Go to https://github.com/LukeDasios/file_renamer
2.) Click the green button that says "code"
3.) Click "Download Zip"
4.) Uncompress the zip file in your desktop
5.) Create two folders in your Desktop,
one called "input" and one called "output".
Spelling matters. Make sure they are spelt correctly and are lowercase.

6.) Open VSCode and drag the file_renamer folder into it
7.) Open the .env file and enter your input variables
8.) Move the files that need to be renamed and that correspond
to your input variables into the "input" folder
9.) In your VSCode console, type "node index.js" and press enter
You should see output in the console with a success message if it worked
* A potential reason it may not have worked is if you had more variables specified than files included in the input folder

10.) Take the freshly named files out of the "output" folder
11.) If ever you accidentally break the application by deleting something
by accident, refer back to step #1 to for a fresh download