import React from "react";
import { Text ,View} from 'react-native'

const   TextCaption = ({text}) => {
  return (  
      <Text style={{color: '#F4A261', fontSize: 12, fontWeight: 'bold'}}>{text}</Text>
  );
}

export default TextCaption;



