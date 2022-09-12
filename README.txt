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
10.) Take the freshly named files out of the "output" folder

HELPFUL: You can press the up arrow while in the terminal to
see the last command you executed

To clear the terminal from all clutter, run the command Ctrl + l

Troubleshooting:
If ever you accidentally break the application by deleting something
by accident, refer back to step #1 to for a fresh download

* If ever you see an error in the console it means one of two things:
-You have more foldrs in the "input" folder than the corresponding variable entries in the .env file
-You have more variable entries in the .env file than the corresponding folder entries in the "input" folder

The application will work once you fix the errors. Once you have fixed the errors,
run "node index.js" to try again
