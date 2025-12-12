const React = require("react");

function Footer() {
  return React.createElement(
    "div",
    {
      className: "py-4 text-center opacity-70 text-sm",
    },
    React.createElement(
      "a",
      {
        href: "https://cybernix.vn",
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: function (e) {
          // in case default navigation is prevented by surrounding app,
          // ensure the link opens in a new tab
          if (!e.defaultPrevented) {
            try {
              window.open(
                "https://cybernix.vn",
                "_blank",
                "noopener,noreferrer"
              );
            } catch (err) {
              // fallback to location change
              window.location.href = "https://cybernix.vn";
            }
          }
        },
        style: {
          color: "inherit",
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
      "© 2025 Cybernix.vn – All rights reserved."
    )
  );
}

module.exports = { Footer };
