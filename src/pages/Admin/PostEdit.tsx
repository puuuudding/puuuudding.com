import React from 'react';
import { useParams } from 'react-router-dom';

function PagePostEdit() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>post edit {id}</div>
  );
}

export default PagePostEdit;
