[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16250971&assignment_repo_type=AssignmentRepo)
# Mobile Apps Week 3 Lab
The goals of this weeks lab are to:
  - Add Images to our app
  - Add a Component and Import it from another file
  - Add multiple inputs
  - Add a button
  - Make the button respond when pressed

# Step 1 - Adding an Image
Create a new Snack on expo.dev. Go online and search for TUDublin Logo. Find the one you like best and save it in your downloads as TUDublinLogo.png or TUDublinLogo.jpg. Make sure it's a png or jpg file if you find a logo that isn't png or jpg keep looking. Go back to expo.dev. Beside the Project folder on the left in the files section, click on the three dots to expand the Menu underneath and select the "Import files" option. Import the file png or jpg file and make sure it gets moved or saved into the assets folder.
To add in this logo to our snack we are going to create it as a separate component. To do this, Underneath the Project folder, right click on the "components" folder and select the "New file" option. Call the file Logo.js. Add the following code into your new Logo.js file.

```
import {Image} from 'react-native';

export default function Logo() {
  return (   
    <Image source={require('../assets/tudublin.png')}/>
  )
}
```
To use this componenet in your app. Add the <Logo/> inside the <View> </View> tags inside your App.js component.
Save your work to your github repo and commit your changes.

# Step 2 - Adding TextInputs
To capture some information from the user we need to add state variables and the useState() hook. To import the useState() hook add the following line at the top of App.js
```
import React, {useState} from 'react';
```
Then, to create three state variables which can be controlled by useState hooks add the following three lines of code inside your function but before the return ( ) block.
```
const [fname, setFname] = useState("Joe");
const [lname, setLname] = useState("Bloggs");
const [dob, setDob] = useState("22 August 1990");
```
Add the following three <TextInput> components inside the <View></View> tags below the <Logo/> tag in your App.js. (**N.B**. To use the TextInput component it must be included in the list of components being imported at the top of the file.)
```
<TextInput placeholder="Enter your firstname" onChangeText={(val) => setFname(val)}/>
<TextInput placeholder="Enter your lastname" onChangeText={(val) => setLname(val)}/>
<TextInput placeholder="Enter your date of birth" onChangeText={(val) => setDob(val)}/>
```
See if you can type values into your fields without causing errors to appear. If you can, add the following tag
```
<Text>Hello {fname} {lname}. You were born on {dob}</Text>
```
Try this - if it works as you type values into the fields the values in the field at the bottom of the screen should change.
Save your work and commit your changes.

# Step 3 - Adding a Button
Add a Button to the list of components you are importing at the top of your file.
Add the following function inside your App() function but before the return block (either before or after the useState variables)
```
function buttonClicked() {
    Alert.alert("button clicked");
}
```
Add the following JSX code inside the <View></View> tag underneath the three <TextInput>s and the <Text> component.
```
<Button title="SUBMIT" onPress={buttonClicked}/>
```
Change the buttonClicked function so instead of just saying "button clicked" it displays the firstname, lastname and date of birth entered by the user.







