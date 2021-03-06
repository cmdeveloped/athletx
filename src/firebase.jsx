import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCggRzSh-uzAsEadxUIM_NgCe2d5k6K1r0",
  authDomain: "react-athletx.firebaseapp.com",
  databaseURL: "https://react-athletx.firebaseio.com",
  projectId: "react-athletx",
  storageBucket: "react-athletx.appspot.com",
  messagingSenderId: "678292007498"
};
firebase.initializeApp(config);

const auth = firebase.auth()
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
const currentUser = auth.currentUser
db.settings(settings);

// collections
const users = db.collection('users')
const sports = db.collection('sports')

export {
  auth,
  db,
  currentUser,
  users,
  sports,
  firebase
}
