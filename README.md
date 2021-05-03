<h1 align="center">
  <img alt="Plant Manager" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">An app developed for the user to be able to register plants and be reminded of when to water them.<br/>You can see the project layout <a href="https://www.figma.com/file/Q3RMUnGwkVh66cVhE6bgKd/PlantManager-(Copy)?node-id=0%3A1">here</a>. Developed during the <a href="http://www.rocketseat.com.br/">Rocketseat</a> NLW #5.</p>

## Screenshots

<p> align="center">
 <img alt="Mobile Mockups" title="Mobile Mockups" src=".github/plantmanager.png" width="100%"/> 
</p>

## Technologies used

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)

## Install

```bash
# Clone this repository
$ git clone https://github.com/adelonmedeiros/plant-manager.git

# Go into the repository
$ cd plant-manager

# Open the repository in the IDE (If you use VS Code)
$ code .

# Install dependencies with npm or yarn
$ yarn or npm install

# Start the application
$ expo start

# Start the fake api to simulate requests (replace <iphere> with your ip local address)
$ yarn server (
change to your <ip> in the package json file line 9) 
Or
$ json-server ./src/services server.json --host <iphere> --port 3333 --delay 700


# Ready!
```