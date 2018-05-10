import React, { Component } from "react";

// footer contact icons
import IconGithub from 'react-icons/lib/fa/github';
import IconLinkedIn from 'react-icons/lib/fa/linkedin';
import IconAngellist from 'react-icons/lib/fa/angellist';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        Alexandra Savramis
        <a href="https://angel.co/alexandra-savramis">{<IconAngellist className="angellist-icon" size={15}/>}</a>
        <a href="https://www.linkedin.com/in/alexandrasavramis/">{<IconLinkedIn className="linkedin-icon" size={20}/>}</a>
        <a href="https://github.com/as6730">{<IconGithub className="github-icon" size={20}/>}</a>
      </div>
    </div>
  )
}
