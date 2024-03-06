// // // // // SaveTemplate.jsx

// // // // import React from 'react';
// // // // import { NavLink } from 'react-router-dom';

// // // // const SaveTemplate = () => {
// // // //   return (
// // // //     <div className="sidebar">
// // // //       <h2>Save Template Sidebar</h2>
// // // //       <ul>
// // // //         <li>
// // // //           <NavLink to="/savetemplate">Save Template</NavLink>
// // // //         </li>
// // // //         {/* Add more navigation links as needed */}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SaveTemplate;

// // // // SaveTemplate.jsx

// // // // SaveTemplate.jsx

// // // import React from 'react';

// // // const SaveTemplate = () => {
// // //   return (
// // //     <div className="save-template-container">
// // //       <h2>Save Template</h2>
// // //       <p>This is the Save Template page content.</p>

// // //       {/* Additional Content */}
// // //       <div className="additional-content">
// // //         <h3>Additional Content</h3>
// // //         <p>This is some additional content for the Save Template page.</p>
// // //         {/* You can add more elements here */}
// // //       </div>

// // //       {/* More Options */}
// // //       <div className="more-options">
// // //         <h3>More Options</h3>
// // //         <ul>
// // //           <li>Option 1</li>
// // //           <li>Option 2</li>
// // //           <li>Option 3</li>
// // //         </ul>
// // //         {/* You can add more elements or components here */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SaveTemplate;


// // // // SaveTemplate.jsx
// // // // import React from 'react';
// // // // import SaveTemplateOption1 from './SaveTemplateOption1';
// // // // import SaveTemplateOption2 from './SaveTemplateOption2';

// // // // const SaveTemplate = () => {
// // // //   return (
// // // //     <div className="save-template-container">
// // // //       <h2>Save Template</h2>
      
// // // //       {/* Render your save template options here */}
// // // //       <SaveTemplateOption1 />
// // // //       <SaveTemplateOption2 />
      
// // // //       {/* Add more options as needed */}
      
// // // //       <div className="additional-content">
// // // //         <h3>Additional Content</h3>
// // // //         <p>This is some additional content for the Save Template page.</p>
// // // //         {/* You can add more elements here */}
// // // //       </div>

// // // //       <div className="more-options">
// // // //         <h3>More Options</h3>
// // // //         <ul>
// // // //           <li>Option 1</li>
// // // //           <li>Option 2</li>
// // // //           <li>Option 3</li>
// // // //         </ul>
// // // //         {/* You can add more elements or components here */}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SaveTemplate;

// // import React, { useState } from 'react';

// // const SaveTemplate = () => {
// //   // State for additional content visibility
// //   const [showAdditionalContent, setShowAdditionalContent] = useState(false);

// //   // Function to toggle additional content visibility
// //   const toggleAdditionalContent = () => {
// //     setShowAdditionalContent(!showAdditionalContent);
// //   };

// //   return (
// //     <div className="save-template-container">
// //       <h2>Save Template</h2>
// //       <p>This is the Save Template page content.</p>

// //       {/* Additional Content */}
// //       <div className={`additional-content ${showAdditionalContent ? 'visible' : 'hidden'}`}>
// //         <h3>Additional Content</h3>
// //         <p>This is some additional content for the Save Template page.</p>
// //         {/* You can add more elements here */}
// //       </div>

// //       {/* Toggle button for Additional Content */}
// //       <button onClick={toggleAdditionalContent}>
// //         {showAdditionalContent ? 'Hide Additional Content' : 'Show Additional Content'}
// //       </button>

// //       {/* More Options */}
// //       <div className="more-options">
// //         <h3>More Options</h3>
// //         <ul>
// //           <li>Option 1</li>
// //           <li>Option 2</li>
// //           <li>Option 3</li>
// //         </ul>
// //         {/* You can add more elements or components here */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SaveTemplate;


// import React, { useState } from 'react';

// const SaveTemplate = () => {
//   const [showAdditionalContent, setShowAdditionalContent] = useState(false);
//   const [templateName, setTemplateName] = useState('');
//   const [savedTemplates, setSavedTemplates] = useState([]);

//   const toggleAdditionalContent = () => {
//     setShowAdditionalContent(!showAdditionalContent);
//   };

//   const handleTemplateNameChange = (e) => {
//     setTemplateName(e.target.value);
//   };

//   const handleSaveTemplate = () => {
//     if (templateName.trim() !== '') {
//       setSavedTemplates([...savedTemplates, templateName]);
//       setTemplateName('');
//     }
//   };

//   const handleSearchTemplate = (searchTerm) => {
//     // Implement search functionality based on the searchTerm
//     console.log(`Searching for template with term: ${searchTerm}`);
//   };

//   return (
//     <div className="save-template-container">
//       <h2>Save Template</h2>
//       <p>This is the Save Template page content.</p>

//       {/* Additional Content */}
//       <div className={`additional-content ${showAdditionalContent ? 'visible' : 'hidden'}`}>
//         <h3>Additional Content</h3>
//         <p>This is some additional content for the Save Template page.</p>
//         {/* You can add more elements here */}
//       </div>

//       {/* Toggle button for Additional Content */}
//       <button onClick={toggleAdditionalContent}>
//         {showAdditionalContent ? 'Hide Additional Content' : 'Show Additional Content'}
//       </button>

//       {/* Save Template Section */}
//       <div className="save-template-section">
//         <h3>Save Template Option</h3>
//         <label>
//           Template Name:
//           <input type="text" value={templateName} onChange={handleTemplateNameChange} />
//         </label>
//         <button onClick={handleSaveTemplate}>Save Template</button>
//       </div>

//       {/* Saved Templates Section */}
//       <div className="saved-templates-section">
//         <h3>Saved Templates</h3>
//         <ul>
//           {savedTemplates.map((template, index) => (
//             <li key={index}>{template}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Search Template Section */}
//       <div className="search-template-section">
//         <h3>Search Template</h3>
//         <label>
//           Search Term:
//           <input type="text" onChange={(e) => handleSearchTemplate(e.target.value)} />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default SaveTemplate;

import React, { useState } from 'react';

const SaveTemplate = () => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [savedTemplates, setSavedTemplates] = useState([]);

  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  const handleTemplateNameChange = (e) => {
    setTemplateName(e.target.value);
  };

  const handleSaveTemplate = () => {
    if (templateName.trim() !== '') {
      setSavedTemplates([...savedTemplates, templateName]);
      setTemplateName('');
    }
  };

  const handleDeleteTemplate = (index) => {
    const updatedTemplates = [...savedTemplates];
    updatedTemplates.splice(index, 1);
    setSavedTemplates(updatedTemplates);
  };

  const handleSearchTemplate = (searchTerm) => {
    // Implement search functionality based on the searchTerm
    console.log(`Searching for template with term: ${searchTerm}`);
  };

  return (
    <div className="save-template-container">
    <h2 class="custom-heading">Save Template</h2>
      {/* <p>This is the Save Template page content.</p> */}

      {/* Additional Content */}
      <div className={`additional-content ${showAdditionalContent ? 'visible' : 'hidden'}`}>
        {/* <h3>Additional Content</h3>
        <p>This is some additional content for the Save Template page.</p> */}
        {/* You can add more elements here */}
      </div>

      {/* Toggle button for Additional Content */}
      {/* <button onClick={toggleAdditionalContent}>
        {showAdditionalContent ? 'Hide Additional Content' : 'Show Additional Content'}
      </button> */}

      {/* Save Template Section */}
      <div className="save-template-section">
        <h3>Save Template Option:</h3>
        <label>
          Template Name:
          <input type="text" value={templateName} onChange={handleTemplateNameChange} />
        </label>
        <button onClick={handleSaveTemplate}>Save Template</button>
      </div>

      {/* Saved Templates Section */}
      <div className="saved-templates-section">
        <h3>Saved Templates</h3>
        <ul>
          {savedTemplates.map((template, index) => (
            <li key={index}>
              {template}
              <button onClick={() => handleDeleteTemplate(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Template Section */}
      {/* <div className="search-template-section">
        <h3>Search Template</h3>
        <label>
          Search Term:
          <input type="text" onChange={(e) => handleSearchTemplate(e.target.value)} />
        </label>
      </div> */}
    </div>
  );
};

export default SaveTemplate;
