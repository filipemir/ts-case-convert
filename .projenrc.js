const {
  TypeScriptProject,
  NodePackageManager,
  ProjectType,
} = require('projen');

const project = new TypeScriptProject({
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.TypeScriptProject',
  name: 'typescript-case-convert',
  authorEmail: 'npm@fmpm.dev',
  authorName: 'Filipe Miranda',
  description:
    'Typescript type-preserving conversion of objects between camelCase, snake_case, and PascalCase',
  entrypoint: 'lib/index.js',
  keywords: [
    'typescript',
    'conversion',
    'camelCase',
    'camel-case',
    'snake_case',
    'snake-case',
    'PascalCase',
    'pascal-case',
  ],
  packageManager: NodePackageManager.YARN,
  repository: 'https://github.com/filipemir/typescript-case-convert.git',
  codeCov: true,
  codeCovTokenSecret: 'CODECOV_TOKEN',
  releaseToNpm: true,
  license: 'Apache-2.0',
  projectType: ProjectType.LIBRARY,
  tsconfig: {
    compilerOptions: {
      noUnusedLocals: false,
    },
  },
  jestOptions: {
    typescriptConfig: {
      compilerOptions: {
        noUnusedLocals: false,
      },
    },
  },
});

project.eslint.addRules({
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/indent': 'off',
  'comma-dangle': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],
});

project.synth();
