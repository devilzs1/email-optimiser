import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useRef, useState, useEffect } from "react";
// import styled from "styled-components";

import EmailEditor from "react-email-editor";


const TemplateEditor = ({setHtmlContent, handleClose, htmlContent}) => {
  const emailEditorRef = useRef(null);
  const [preview, setPreview] = useState(false);

  // const saveDesign = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   unlayer?.saveDesign((design) => {
  //     console.log("saveDesign", design);
  //     alert("Design JSON has been logged in your developer console.");
  //   });
  // };



  const exportHtml = () => {
    let unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setHtmlContent({ design, html }); // Save both the design object and the HTML string
      handleClose();
    });
  };


  // const togglePreview = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   if (preview) {
  //     unlayer?.hidePreview();
  //     setPreview(false);
  //   } else {
  //     unlayer?.showPreview("desktop");
  //     setPreview(true);
  //   }
  // }

  const onDesignLoad = (data) => {
    // console.log("onDesignLoad", data);
  };

  const onLoad = (unlayer) => {
    unlayer.addEventListener("design:loaded", onDesignLoad);
    if (htmlContent && htmlContent.design) {
      unlayer.loadDesign(htmlContent.design);
    }
  };

  const onReady = (unlayer) => {
    // console.log("onReady", unlayer);
  };

  return (
    <>
      <AppBar position="fixed">
      <Toolbar sx={{justifyContent: "space-between"}}>
        <h1>Design Email template</h1>
        <Button onClick={exportHtml} variant="contained"  color="success">Save & Exit</Button>
      </Toolbar>

      </AppBar>
      <Box mt={10}/>

        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
          options={{
            appearance: {
              theme: "modern_light",
            },
          }}
          minHeight={"90vh"}
          
        />
    </>
  );
};

export default TemplateEditor;
