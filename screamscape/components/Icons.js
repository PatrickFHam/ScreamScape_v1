import React from "react";


const YellowCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" >
      <circle cx="63.93" cy="64" r="60" fill="#f2a600"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#ffcc32"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#fff170"></path>
    </svg>
  )
};

const BlueCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="63.93" cy="64" r="60" fill="#1976d2"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#2196f3"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#90caf9"></path>
    </svg>
  )
}

const PurpleCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="63.93" cy="64" r="60" fill="#8e24aa"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#ab47bc"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#ce93d8"></path>
    </svg>
  )
}

const RedCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="63.93" cy="64" r="60" fill="#c33"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#f44336"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#ff8a80"></path>
    </svg>
  )
}

const GreenCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="63.93" cy="64" r="60" fill="#689f38"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#7cb342"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#aed581"></path>
    </svg>
  )
}

const GreyCircle = ({fill, size, width=24, height=24, ...props}) => {
  return (
    <svg width={size || height} height={size || height} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="63.93" cy="64" r="60" fill="#575757"></circle>
      <circle cx="60.03" cy="63.1" r="56.1" fill="#424242"></circle>
      <path d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z" fill="#787878"></path>
    </svg>
  )
}


export const icons = {
  yellow: <YellowCircle size={30} />,
  blue: <BlueCircle size={30} />,
  purple: <PurpleCircle size={30} />,
  red: <RedCircle size={30} />,
  green: <GreenCircle size={30} />,
  grey: <GreyCircle size={30} />,
};