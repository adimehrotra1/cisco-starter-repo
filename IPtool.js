import React, { Component } from 'react';
import {useState,useEffect} from 'react'


function IPtool() {
  //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await fetch('https://api.ipify.org?format=json')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="IPbox">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default IPtool;
