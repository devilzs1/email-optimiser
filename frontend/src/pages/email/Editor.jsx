// import { useRef } from "react";
// import { render } from "react-dom";
// import EmailEditor from "react-email-editor";

// const Editor = (props) => {
//   const emailEditorRef = useRef(null);

//   const exportHtml = () => {
//     emailEditorRef.current.editor.exportHtml((data) => {
//       const { design, html } = data;
//       console.log("exportHtml", html);
//     });
//   };

//   const onLoad = () => {
//     // editor instance is created
//     // you can load your template here;
//     // const templateJson = {};
//     // emailEditorRef.current.editor.loadDesign(templateJson);
//   };

//   const onReady = () => {
//     // editor is ready
//     console.log("onReady");
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={exportHtml}>Export HTML</button>
//       </div>

//       <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
//     </div>
//   );
// };

// export default Editor;

import React, { useRef, useState } from "react";
// import styled from "styled-components";

import EmailEditor from "react-email-editor";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   height: 100%;
// `;

// const Bar = styled.div`
//   flex: 1;
//   background-color: #61dafb;
//   color: #000;
//   padding: 10px;
//   display: flex;
//   max-height: 40px;

//   h1 {
//     flex: 1;
//     font-size: 16px;
//     text-align: left;
//   }

//   button {
//     flex: 1;
//     padding: 10px;
//     margin-left: 10px;
//     font-size: 14px;
//     font-weight: bold;
//     background-color: #000;
//     color: #fff;
//     border: 0px;
//     max-width: 150px;
//     cursor: pointer;
//   }
// `;

const Example = () => {
  const emailEditorRef = useRef(null);
  const [preview, setPreview] = useState(false);

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design) => {
      console.log("saveDesign", design);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const togglePreview = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (preview) {
      unlayer?.hidePreview();
      setPreview(false);
    } else {
      unlayer?.showPreview("desktop");
      setPreview(true);
    }
  }

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.addEventListener("design:loaded", onDesignLoad);
  };

  const onReady = (unlayer) => {
    console.log("onReady", unlayer);
  };

  return (
    // <Container>
    <>
      {/* <Bar> */}
        <h1>Design Email template</h1>

        <button onClick={togglePreview}>
          {preview ? "Hide" : "Show"} Preview
        </button>
        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Export HTML</button>
      {/* </Bar> */}

      <React.StrictMode>
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
          options={{
            appearance: {
              theme: "modern_light",
            },
          }}
          minHeight={"100vh"}
        />
      </React.StrictMode>
     {/* </Container> */}
    </>
  );
};

export default Example;