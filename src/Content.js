import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Content() {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    fetchLikedFormSubmissions()
      .then(response => {
        const { formSubmissions } = response;
        setLikedSubmissions(formSubmissions);
      })
      .catch(error => {
        console.error('Error fetching liked form submissions:', error);
      });
  }, []);

  return (
    <Container className="mt-3">
      <h4 className="mb-4">Liked Form Submissions</h4>

      <Row>
        {likedSubmissions.map((submission, index) => (
          <Col key={index} xs={12} md={6}>
            <div className="p-3 mb-3 bg-light rounded">
              <p><strong>Name:</strong> {`${submission.firstName} ${submission.lastName}`}</p>
              <p><strong>Email:</strong> {submission.email}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
