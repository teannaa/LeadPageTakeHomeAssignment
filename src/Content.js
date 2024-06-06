import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Content() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    fetchLikedFormSubmissions()
      .then(response => {
        const { formSubmissions } = response;
        //alert(response)
        setLikedSubmissions(formSubmissions);
      })
      .catch(error => {
        console.error('Error fetching liked form submissions:', error);
      });
  }, []);

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <div>
        {likedSubmissions.map((submission, index) => (
          <div key={index}>
            <p>{`Name: ${submission.firstName} ${submission.lastName}`}</p>
            <p>{`Email: ${submission.email}`}</p>
          </div>
        ))}
      </div>
    </Box>
  );
}
