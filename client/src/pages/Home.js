import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="card col-12 col-md-8 mb-3">
          <h2>
            Useful Links
          </h2>
          <a href="https://emot.co/featured-weddings/">View Gallery</a>
          <br></br>
          <br></br>
          <a href="https://emot.co/check-availability/">Check Availability</a>
          <br></br>
          <br></br>
          <a href="https://emot.co/booking/">Book Now</a>
          <br></br>
          <br></br>
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="What some of our clients are looking for..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
