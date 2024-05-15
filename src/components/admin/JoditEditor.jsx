import React, { useRef } from "react";
// import JoditEditor from "jodit-react";
// import "jodit";

export const JoditEditorComponent = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = {
    height: 400,
    iframe: true,
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
    minHeight: "80%",
    minWidth: 0,
    allowResizeY: false,
    insertImageAsBase64URI: true,
    askBeforePasteHTML: false,
  };

  return (
    // <JoditEditor
    //   ref={editor}
    //   config={config}
    //   value={content}
    //   onBlur={setContent}
    // />
    <div>working</div>
  );
};
