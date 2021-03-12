import React, { useEffect, useState } from 'react';
import BackPage from '../components/BackPage.js';
import ListItem from '../components/Listitem.js';
import firebase from 'firebase';
import { firestore } from '../api/firebase.js';
function UrgentPage(props) {
  function getData() {
    console.log('hello');
    firestore
      .collection('Request')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
        });
      });
  }
  const [requests, setReq] = useState([]);
  useEffect(() => {
    console.log('hello');
    const promise = firestore.collection('Request').get();
    promise.then((querySnapshot) => {
      const reqs = [];
      querySnapshot.forEach((doc) => {
        const id = doc.data();
        reqs.push(id);
        console.log(doc.id, ' => ', doc.data());
      });
      setReq(reqs);
    });
  }, []);
  console.log('These are req', requests);
  useEffect(() => {
    props.setDonReq(requests.filter((r) => r.fulfullied === 'no'));
  }, [requests]);

  return (
    <div>
      <BackPage
        title="Feeds"
        children={<ListItem requests={props.donReq} />}
      ></BackPage>
    </div>
  );
}

export default UrgentPage;
