function char2workspace(emoji, spaceRight) {
  let spaceChars = ["\u200A", "\u2006", "\u2009", "\u2005", "\u2004", "\u2002", "\u2003"],
    event = {
      currentTarget: {
        dataset: {
          emoji: emoji + (spaceChars[spaceRight - 1] || ""),
        },
      },
    };

  let reactProps,
    element = document.querySelector("#modal-bg > div > form > div > ul > li");

  for (let key in element) {
    if (key.startsWith("__reactProps")) {
      reactProps = element[key];
      break;
    }
  }

  reactProps.onClick(event);
}
