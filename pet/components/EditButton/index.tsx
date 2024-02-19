
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';

export default function EditButton() {
  
  const [hover, setHover] = useState(false);
  function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            setHover(true);
        } else {
            setHover(false);
        }
    }

  return (
    <button className="editbutton"  
    style={
                hover
                    ? {
                          border: '2px solid black',
                          boxShadow: '5px 4px #472F05',
                          backgroundColor: '#F79762',
                          cursor: 'pointer',
                      }
                    : {
                          border: '2px solid black',
                          boxShadow: '5px 4px #472F05',
                          backgroundColor: '#F3DDD1',
                          cursor: 'default',
                      }
            }
            onMouseOver={(event) => onMouseAction(event)}
            onMouseOut={(event) => onMouseAction(event)}
            
    >
      <p>🖊️EditProfile</p>
    </button>
  );
};



