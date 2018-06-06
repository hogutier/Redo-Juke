import React from 'react';

const Sidebar = ({goHome}) => {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <a onClick={() => goHome() }>ALBUMS</a>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;
