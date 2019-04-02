import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyAGzlpCDZ5rg7vZ9XVzYqI4-LiXZ8ectX8",
  authDomain: "test-45931.firebaseapp.com",
  databaseURL: "https://test-45931.firebaseio.com",
  projectId: "test-45931",
  storageBucket: "test-45931.appspot.com",
  messagingSenderId: "576273254451"
};

firebase.initializeApp(config);

var db = firebase.firestore();

export default db;