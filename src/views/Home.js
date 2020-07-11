import React, { useEffect, useState } from 'react';
import fire from './fire';
export default function Home() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    fire.database().ref().child('contacts').on('value', snapshot => {
      if (snapshot.val() != null) {
        const count = snapshot.numChildren();
        setCount(count)
      }
    })
  }, [])
  return (
    <>

    </>
  )
}