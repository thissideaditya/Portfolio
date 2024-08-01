'use client'

import React, { useEffect, useState } from 'react'

 const TypeWriter = ({text, delay}) =>{

    const [curText, setCurText] = useState('');
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        if (curIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurText(prevText => prevText + text[curIndex]);
            setCurIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [curIndex, delay, text]);


    return (
        <span>{curText}</span>
    )
}

export default TypeWriter