import React from 'react';
import '../App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@mariachakhtoura/yamli-custom-ckeditor/build/ckeditor.js';

const CustomTextarea = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor 5!</p>"
      onReady={(editor) => {}}
      onChange={(event, editor) => {
        const data = editor.getData();
      }}
      onBlur={(event, editor) => {}}
      onFocus={(event, editor) => {}}
    />
  );
};

export default CustomTextarea;
