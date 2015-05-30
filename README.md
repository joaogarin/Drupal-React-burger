# Drupal-React-burger
A React component being rendered in Drupal

This is a sample react component being rendered in Drupal. It is just a test to how one can integrate Drupal and React. It does not call render on the server but on a javascript file.

The react frmework is being added manually, one should of course use bower for that but this is just a quick test.

the component creates a burger in a Drupal block. Drupal passes the data to the javascript file via settings and the component gets rendered with this data, when the user interacts with the component it re-renders itself but does not push the changes to the server. That could be accomplished using node, or ajax.

This component includes react-tools npm package to be able to compile the JSX to plain javascript so to get started on that run: 

npm install

to start the watch for the JSX run : jsx --watch js/ build/
