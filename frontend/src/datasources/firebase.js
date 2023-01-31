import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from '@/datasources/firebase.config'

//여기서 firebaseConfig 다른 곳에서 불러와야 되니까 위에서 import도 해줘야한다. 
firebase.initializeApp(firebaseConfig)

export const database = firebase.database();