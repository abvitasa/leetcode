// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m

let colorCode = {
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
  blue: '\u001b[34m',
  purple: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m',
  reset: '\u001b[39m',
};

const logType = (mess, eol, type, stream, colors) => {
  if (!stream) stream = process.stdout;
  if (colors) {
    stream.write(colorCode[colors[type] || 'white']);
  }
  stream.write(mess + eol);
  if (colors) {
    stream.write(colorCode.reset);
  }
};

const fullLog = (
  mess = '',
  type = 'cyan',
  eol = '',
  colors = false,
  typeObj = { cyan: process.stdout, red: process.stderr }
) => {
  // log
  logType(mess, eol, type, typeObj[type], colors);
};

// typically log function
const api = (mess, type, eol) => {
  fullLog(mess, type, eol, {
    cyan: 'cyan',
    red: 'red',
    yellow: 'yellow',
    green: 'green',
  });
};

// typical settings for clean output
api.clean = (mess, type) => {
  fullLog(mess, type, '', false);
};

// making full log method public
api.fullLog = fullLog;

module.exports = api;
