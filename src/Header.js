import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createMockFormSubmission, saveLikedFormSubmission } from './service/mockServer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

export default function Header() {
  const [data, setData] = useState(null);

  const handleNewSubmissionClick = () => {
    const formSubmission = createMockFormSubmission();
    const { data: submissionData } = formSubmission;
    setData(submissionData);

    const handleLikeClick = () => {
      if (submissionData) {
        saveLikedFormSubmission(submissionData)
          .then(response => {
            // Handle success response
            toast.success(response.message, { position: toast.POSITION.TOP_RIGHT });
          })
          .catch(error => {
            // Handle error response
            toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
          });
      }
    };

    const toastMessage = (
      <div>
        <p>{`Name: ${submissionData.firstName} ${submissionData.lastName}`}</p>
        <p>{`Email: ${submissionData.email}`}</p>
        <Button variant="contained" color="secondary" onClick={handleLikeClick}>
          Like
        </Button>
      </div>
    );

    toast.info(toastMessage, { position: toast.POSITION.TOP_RIGHT }); // Display toast with the constructed message
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleNewSubmissionClick}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
