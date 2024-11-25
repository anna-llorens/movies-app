module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
