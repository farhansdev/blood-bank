import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import Footer from "./footer";

import Navbar from "./navbar";

const DonorProfile = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const donorCollection = await getDocs(collection(db, 'donors'));
      setDonors(donorCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchDonors();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Donor Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donors.map((donor) => (
          <div key={donor.id} className="border p-4 rounded-lg bg-white shadow">
            <h2 className="text-lg font-bold">{donor.name}</h2>
            <p>Age: {donor.age}</p>
            <p>Gender: {donor.gender}</p>
            <p>Blood Group: {donor.bloodGroup}</p>
            <a href='https://wa.me/183040822' target='_blank'>Contact: {donor.contact}</a>
            <p>City: {donor.city}</p>
          </div>
        ))}
      </div>
    </div>
    {/* <Footer /> */}
    </>

  );
};

export default DonorProfile;
