import React, { useRef, useState, useMemo } from "react";

import "jodit";
import JoditEditor, { Jodit } from "jodit-react";

export const JoditEditorComponent = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = {
    height: 400,
    iframe: true,
    spellcheck: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    uploader: {
      insertImageAsBase64URI: true,
    },
    buttons:
      "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut,preview",
    buttonsMD:
      "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut,preview",
    buttonsSM:
      "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut,preview",
    buttonsXS:
      "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut,preview",
    minHeight: 0,
    minWidth: 0,
    allowResizeY: false,
    insertImageAsBase64URI: true,

    // filebrowser: {
    //   permissionsPresets: {
    //     allowFiles: false,
    //     allowFileMove: false,
    //     allowFileUpload: false,
    //     allowFileUploadRemote: false,
    //     allowFileRemove: false,
    //     allowFileRename: false,
    //     allowFolders: false,
    //     allowFolderCreate: false,
    //     allowFolderMove: false,
    //     allowFolderRemove: false,
    //     allowFolderRename: false,
    //     allowImageResize: false,
    //     allowImageCrop: false,
    //   },
    //   ajax: {
    //     url: `${END_POINT.BASE_URL}/admin/upload-file`, // Replace with your server-side file browser URL
    //     data: {
    //       // You can include additional parameters or headers here
    //       Authorization: `Bearer ${token}`,
    //     },
    //     contentType: "application/json",
    //   },
    // },

    // iframe: true,
    // uploader: {
    //   insertImageAsBase64URI: true,
    // },
    // spellcheck: true,
    // toolbarButtonSize: "small",
    // enter: "P",
    // defaultMode: "1",
    // toolbarStickyOffset: null,
    // showCharsCounter: false,
    // showWordsCounter: false,
    // showXPathInStatusbar: false,
    // inline: true,
    // toolbarInlineForSelection: true,
    // showPlaceholder: false,
    // buttons:
    //   "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,superscript,subscript,classSpan,file,image,video,speechRecognize,spellcheck",

    //
    //   filesVariableName: "file",
    //   process: handleFileUpload,
    // },

    //   // uploader: {
    //   //   insertImageAsBase64URI: true,

    //   //   prepareData: function (formData: any) {
    //   //     // Intercept the upload process and store uploaded files for later action
    //   //     const file = formData.get("files[]"); // Assuming input name is 'files[]'
    //   //     setSelectedFiles(file);
    //   //     // uploadedFiles.push(file);

    //   //     // Clear the formData so that the file doesn't get uploaded immediately
    //   //     // formData.delete("files[]");
    //   //     return formData.delete();
    //   //   },

    //   //   // process: function (files: any, formData: any) {
    //   //   //   // Store uploaded files in the 'uploadedFiles' array
    //   //   //   setSelectedFiles(files);
    //   //   //   console.log("files", files);
    //   //   //   // Array.from(files).forEach((file) => {
    //   //   //   //   // uploadedFiles.push(file);
    //   //   //   // });

    //   //   //   // Return empty array to prevent immediate upload
    //   //   //   return [];
    //   //   // }, // // URL where the files will be uploaded

    //   //   url: `${END_POINT.BASE_URL}/admin/upload-file`,
    //   //   format: "json",
    //   //   headers: {
    //   //     Authorization: `Bearer ${token}`,
    //   //   },

    //   //   process: function (files: any) {
    //   //     // Store uploaded files in the state
    //   //     setSelectedFiles([...files]);

    //   //     // Upload the first selected file to the server
    //   //     if (files.length > 0) {
    //   //       const file = files[0];
    //   //       // handleFileUpload(file);
    //   //     }
    //   //     // Return false to prevent Jodit from further processing
    //   //     return false;
    //   //   },

    //   //   // process: function (files) {
    //   //   //   // Handle the file(s) when uploaded
    //   //   //   if (files.length > 0) {
    //   //   //     const file = files[0]; // Assuming only one file is uploaded
    //   //   //     handleFileUpload(file); // Call function to upload the file to your endpoint
    //   //   //   }
    //   //   //   return false; // Prevent Jodit from processing the file(s) further
    //   //   // },
    //   // },
  };

  return (
    <JoditEditor
      ref={editor}
      config={config}
      value={content}
      onBlur={setContent}
    />
  );
};
