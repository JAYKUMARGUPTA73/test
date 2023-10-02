import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; // Import library to add icons
import { faIconName } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon

// Add the imported icon to the library
library.add(faIconName);

function MyFontAwesomeIcon({ icon, size, color }) {
  return (
    <FontAwesomeIcon icon={icon} size={size} color={color}/>
  );
}

export default MyFontAwesomeIcon;
