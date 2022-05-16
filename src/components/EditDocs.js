import React from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditDocs = () => {

    let params = useParams();

  return (
    <div>
        <h1>Edit Docs</h1>
        <ReactQuill/>
    </div>
  )
}

export default EditDocs;