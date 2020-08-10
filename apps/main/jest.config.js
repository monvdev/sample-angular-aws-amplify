module.exports = {
  name: 'main',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/main',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
