import React, { useState, useEffect } from 'react';
import '../App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@mariachakhtoura/yamli-custom-ckeditor/build/ckeditor.js';

const CustomTextarea = ({ timeStamp, onNewMention }) => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    if (editor && timeStamp) {
      const data = editor.getData();
      // const first = editor.model.document.selection.getFirstPosition();
      editor.model.change((writer) => {
        const insertPosition = editor.model.document.selection.getFirstPosition();
        debugger;
        const hours = (Math.floor(timeStamp / 3600) % 60)
          .toString()
          .padStart(2, 0);
        const minutes = (Math.floor(timeStamp / 60) % 60)
          .toString()
          .padStart(2, 0);
        const seconds = Math.floor(timeStamp % 60)
          .toString()
          .padStart(2, 0);
        debugger;
        const text =
          hours > 0
            ? `[${hours}:${minutes}:${seconds}]`
            : `[${minutes}:${seconds}]`;
        writer.insertText(
          //00:00:00:00
          text,
          // { bold: true },
          insertPosition,
          'before'
        );
      });
      debugger;
    }
  }, [timeStamp]);

  function getFeedItems(queryText) {
    // As an example of an asynchronous action, return a promise
    // that resolves after a 100ms timeout.
    // This can be a server request or any sort of delayed action.
    return new Promise((resolve) => {
      fetch(`https://oyamli-api.herokuapp.com/oyamli/${queryText}`, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((response) => {
          resolve(response.result);
        });
    });

    // Filtering function - it uses the `name` and `username` properties of an item to find a match.
    function isItemMatching(item) {
      // Make the search case-insensitive.
      const searchString = queryText.toLowerCase();

      // Include an item in the search results if the name or username includes the current user input.
      return (
        item.name.toLowerCase().includes(searchString) ||
        item.id.toLowerCase().includes(searchString)
      );
    }
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        language: {
          // The UI will be English.
          ui: 'en',

          // But the content will be edited in Arabic.
          content: 'ar',
        },
        mention: {
          feeds: [
            {
              marker: /\?$/,
              feed: ['?', '؟'],
              minimumCharacters: 1,
            },
            {
              marker: /@\b(\w+)\b$/,
              feed: onNewMention,
              minimumCharacters: 1,
            },
            {
              marker: /\b(?<!@\?)(\w+)\b$/,
              feed: getFeedItems,
              minimumCharacters: 1,
            },
          ],
        },
      }}
      data=""
      onReady={(editor) => {
        setEditor(editor);
      }}
      onChange={(event, editor) => {
        setEditor(editor);
        // const data = editor.getData();
      }}
      onBlur={(event, editor) => {}}
      onFocus={(event, editor) => {}}
    />
  );
};

export default CustomTextarea;
