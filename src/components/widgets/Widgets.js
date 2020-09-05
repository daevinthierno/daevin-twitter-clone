import React from "react";
import "./widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <h2>Easy Go!</h2>
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdaevin-twitter.web.app/%2F&layout=button_count&size=large&width=88&height=28&appId"
        width="88"
        height="28"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FCleverProgrammerr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="340"
        height="500"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
