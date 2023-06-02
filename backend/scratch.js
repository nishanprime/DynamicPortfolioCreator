import mongoose from 'mongoose';
import IconModel from './models/iconModel.js';
import dotenv from 'dotenv';
dotenv.config()
const allArr = [
  {
    name: 'adonisjs',
    tags: ['nodejs', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#5A45FF',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'aftereffects',
    tags: ['video', 'editor'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#1F0740',
    aliases: [],
  },
  {
    name: 'amazonwebservices',
    tags: ['cloud', 'hosting', 'server'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#F7A80D',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'android',
    tags: ['os', 'mobile'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#A4C439',
    aliases: [],
  },
  {
    name: 'androidstudio',
    tags: ['application', 'editor', 'ide', 'android', 'mobile'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#4285F4',
    aliases: [],
  },
  {
    name: 'aarch64',
    tags: ['architecture', 'programming', 'language', 'ARM'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#16358C',
    aliases: [],
  },
  {
    name: 'angularjs',
    tags: ['framework', 'javascript'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#c4473a',
    aliases: [],
  },
  {
    name: 'ansible',
    tags: ['automation', 'provisioning', 'deployment', 'continuous-delivery'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#1A1918',
    aliases: [],
  },
  {
    name: 'apache',
    tags: ['php'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#303284',
    aliases: [],
  },
  {
    name: 'apachekafka',
    tags: ['streaming', 'open-source'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#231f20',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'appcelerator',
    tags: ['app', 'mobile'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#ac162c',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'apple',
    tags: ['brand', 'mobile'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'appwrite',
    tags: ['cloud', 'platform', 'server'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#f02e65',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
      {
        base: 'plain-wordmark',
        alias: 'original-wordmark',
      },
    ],
  },
  {
    name: 'arduino',
    tags: ['microcontroller', 'hardware'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00979d',
    aliases: [],
  },
  {
    name: 'atom',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#67595D',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'azure',
    tags: ['cloud', 'devops'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0089D6',
    aliases: [],
  },
  {
    name: 'babel',
    tags: ['javascript', 'transpiler'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#f9dc3e',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
    ],
  },
  {
    name: 'backbonejs',
    tags: ['javascript', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#002A41',
    aliases: [],
  },
  {
    name: 'bamboo',
    tags: ['platform', 'integration', 'server'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#1068e2',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'bash',
    tags: ['shell', 'command'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#293138',
    aliases: [],
  },
  {
    name: 'behance',
    tags: ['social', 'website'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0071e0',
    aliases: [],
  },
  {
    name: 'bitbucket',
    tags: ['version-control'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#205081',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'bootstrap',
    tags: ['css', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#59407f',
    aliases: [],
  },
  {
    name: 'bulma',
    tags: ['css', 'framework'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#00d1b2',
    aliases: [],
  },
  {
    name: 'bower',
    tags: ['package', 'manager'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#ef5734',
    aliases: [],
  },
  {
    name: 'c',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#03599c',
    aliases: [
      {
        base: 'plain',
        alias: 'plain-wordmark',
      },
      {
        base: 'line',
        alias: 'line-wordmark',
      },
    ],
  },
  {
    name: 'cakephp',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#D43D44',
    aliases: [],
  },
  {
    name: 'canva',
    tags: ['design'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#00C4CC',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'centos',
    tags: ['server', 'linux'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#932178',
    aliases: [],
  },
  {
    name: 'ceylon',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain'],
    },
    color: '#AB710A',
    aliases: [],
  },
  {
    name: 'chrome',
    tags: ['browser'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#ce4e4e',
    aliases: [],
  },
  {
    name: 'circleci',
    tags: ['integration', 'platform'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#343434',
    aliases: [],
  },
  {
    name: 'clojure',
    tags: ['language'],
    versions: {
      svg: ['original', 'line'],
      font: ['line', 'plain'],
    },
    color: '#5881d8',
    aliases: [
      {
        base: 'line',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'cmake',
    tags: ['build'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0e8a16',
    aliases: [],
  },
  {
    name: 'clojurescript',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#96ca4b',
    aliases: [],
  },
  {
    name: 'codecov',
    tags: ['platform', 'integration'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#e0225c',
    aliases: [],
  },
  {
    name: 'codeigniter',
    tags: ['php', 'framework'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#ee4323',
    aliases: [],
  },
  {
    name: 'codepen',
    tags: ['social', 'website', 'editor'],
    versions: {
      svg: ['plain', 'original-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#231F20',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
    ],
  },
  {
    name: 'coffeescript',
    tags: ['javascript', 'language'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#28334c',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'composer',
    tags: ['package', 'manager', 'php'],
    versions: {
      svg: ['original', 'line', 'line-wordmark'],
      font: ['line', 'line-wordmark'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'line',
        alias: 'plain',
      },
      {
        base: 'line-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'confluence',
    tags: ['collaboration', 'documentation', 'wiki'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#205081',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'couchdb',
    tags: ['database'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#e42528',
    aliases: [],
  },
  {
    name: 'cplusplus',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#9c033a',
    aliases: [
      {
        base: 'plain',
        alias: 'plain-wordmark',
      },
      {
        base: 'line',
        alias: 'line-wordmark',
      },
    ],
  },
  {
    name: 'csharp',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#68217a',
    aliases: [
      {
        base: 'plain',
        alias: 'plain-wordmark',
      },
      {
        base: 'line',
        alias: 'line-wordmark',
      },
    ],
  },
  {
    name: 'css3',
    tags: ['language', 'programming'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#3d8fc6',
    aliases: [],
  },
  {
    name: 'cucumber',
    tags: ['framework'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00a818',
    aliases: [],
  },
  {
    name: 'crystal',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'd3js',
    tags: [],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#f7974e',
    aliases: [],
  },
  {
    name: 'dart',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00A8E1',
    aliases: [],
  },
  {
    name: 'debian',
    tags: ['os', 'server'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#A80030',
    aliases: [],
  },
  {
    name: 'denojs',
    tags: ['javascript', 'rust', 'language'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'devicon',
    tags: ['iconset'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#60BE86',
    aliases: [],
  },
  {
    name: 'django',
    tags: [],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#092e20',
    aliases: [],
  },
  {
    name: 'docker',
    tags: ['platform', 'deploy'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#019bc6',
    aliases: [],
  },
  {
    name: 'doctrine',
    tags: [],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#f56d39',
    aliases: [],
  },
  {
    name: 'dot-net',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#1384c8',
    aliases: [],
  },
  {
    name: 'dotnetcore',
    tags: ['framework'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#623697',
    aliases: [],
  },
  {
    name: 'drupal',
    tags: ['cms'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0073BA',
    aliases: [],
  },
  {
    name: 'digitalocean',
    tags: ['cloud', 'hosting', 'database', 'storage'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0080FF',
    aliases: [],
  },
  {
    name: 'discordjs',
    tags: ['wrapper', 'api_wrapper', 'nodejs'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2a2c3e',
    aliases: [],
  },
  {
    name: 'electron',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#47848f',
    aliases: [],
  },
  {
    name: 'eleventy',
    tags: ['ssg', 'static site generator'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#1f1f1f',
    aliases: [],
  },
  {
    name: 'elixir',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#380A4D',
    aliases: [],
  },
  {
    name: 'elm',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#34495E',
    aliases: [],
  },
  {
    name: 'ember',
    tags: ['framework'],
    versions: {
      svg: ['original-wordmark'],
      font: ['original-wordmark'],
    },
    color: '#dd3f24',
    aliases: [
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'embeddedc',
    tags: ['language', 'programming'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#444444',
    aliases: [],
  },
  {
    name: 'erlang',
    tags: [],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#a90533',
    aliases: [],
  },
  {
    name: 'eslint',
    tags: ['linter', 'javascript', 'code-quality', 'coding-style'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#4b32c3',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'express',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#444',
    aliases: [],
  },
  {
    name: 'facebook',
    tags: ['auth'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#3d5a98',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
    ],
  },
  {
    name: 'feathersjs',
    tags: ['framework', 'rest'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#333333',
    aliases: [],
  },
  {
    name: 'figma',
    tags: ['design'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#f24e1e',
    aliases: [],
  },
  {
    name: 'filezilla',
    tags: ['ftp'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#b30000',
    aliases: [],
  },
  {
    name: 'firebase',
    tags: ['auth', 'hosting', 'storage', 'cloud'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#f58220',
    aliases: [],
  },
  {
    name: 'firefox',
    tags: ['browser'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#DD732A',
    aliases: [],
  },
  {
    name: 'flask',
    tags: ['python', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#010101',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'flutter',
    tags: ['framework', 'sdk'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#3FB6D3',
    aliases: [],
  },
  {
    name: 'foundation',
    tags: ['framework', 'css'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#008cba',
    aliases: [],
  },
  {
    name: 'fsharp',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#378BBA',
    aliases: [],
  },
  {
    name: 'gatling',
    tags: ['framework', 'testing'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#E77500',
    aliases: [],
  },
  {
    name: 'gatsby',
    tags: ['reactjs', 'framework'],
    versions: {
      svg: ['plain', 'original', 'original-wordmark', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#64328B',
    aliases: [],
  },
  {
    name: 'rect',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#262626',
    aliases: [],
  },
  {
    name: 'gcc',
    tags: ['compiler', 'linux'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#ffcfab',
    aliases: [],
  },
  {
    name: 'gentoo',
    tags: ['linux', 'distribuition', 'desktop'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain-wordmark', 'plain'],
    },
    color: '#9991d9',
    aliases: [],
  },
  {
    name: 'gimp',
    tags: ['graphic'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain'],
    },
    color: '#716955',
    aliases: [],
  },
  {
    name: 'git',
    tags: ['version-control'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#f34f29',
    aliases: [],
  },
  {
    name: 'github',
    tags: ['version-control'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#181616',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'gitlab',
    tags: ['version-control'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#E24329',
    aliases: [],
  },
  {
    name: 'gitter',
    tags: ['social', 'chat'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'go',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'line'],
      font: ['original-wordmark', 'plain', 'line'],
    },
    color: '#00acd7',
    aliases: [
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'google',
    tags: ['auth'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#587dbd',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
      {
        base: 'plain-wordmark',
        alias: 'original-wordmark',
      },
    ],
  },
  {
    name: 'googlecloud',
    tags: ['google', 'cloud'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#557ebf',
    aliases: [],
  },
  {
    name: 'gradle',
    tags: ['task-runner'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#02303a',
    aliases: [],
  },
  {
    name: 'grafana',
    tags: [
      'monitoring',
      'analytics',
      'metrics',
      'logs',
      'visualization',
      'web-application',
    ],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#E78040',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'grails',
    tags: ['framework'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#feb672',
    aliases: [],
  },
  {
    name: 'graphql',
    tags: ['language', 'data', 'query'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#e434aa',
    aliases: [],
  },
  {
    name: 'groovy',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#619cbc',
    aliases: [],
  },
  {
    name: 'grunt',
    tags: ['task-runner', 'nodejs'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#fcaa1a',
    aliases: [],
  },
  {
    name: 'gulp',
    tags: ['task-runner', 'nodejs'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#eb4a4b',
    aliases: [],
  },
  {
    name: 'godot',
    tags: ['game-engine', 'open-source'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#478cbf',
    aliases: [],
  },
  {
    name: 'haskell',
    tags: ['language', 'functional'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#5E5185',
    aliases: [],
  },
  {
    name: 'handlebars',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'haxe',
    tags: ['language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#EA8220',
    aliases: [],
  },
  {
    name: 'heroku',
    tags: ['cloud'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
    },
    color: '#6762a6',
    aliases: [
      {
        base: 'line',
        alias: 'original',
      },
      {
        base: 'line-wordmark',
        alias: 'original-wordmark',
      },
    ],
  },
  {
    name: 'html5',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#e54d26',
    aliases: [],
  },
  {
    name: 'hugo',
    tags: ['framework', 'ssg', 'static-site-generator', 'go', 'html', 'css'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#FF4088',
    aliases: [],
  },
  {
    name: 'ie10',
    tags: ['browser'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#1EBBEE',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'ifttt',
    tags: ['automation', 'applets', 'programming'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'illustrator',
    tags: ['editor', 'vector'],
    versions: {
      svg: ['plain', 'line'],
      font: ['plain', 'line'],
    },
    color: '#faa625',
    aliases: [],
  },
  {
    name: 'inkscape',
    tags: ['editor', 'vector'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'intellij',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#136BA2',
    aliases: [],
  },
  {
    name: 'ionic',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#4e8ef7',
    aliases: [],
  },
  {
    name: 'jamstack',
    tags: ['javascript', 'markup'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#F0047F',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'jasmine',
    tags: ['testing'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#8a4182',
    aliases: [],
  },
  {
    name: 'java',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#EA2D2E',
    aliases: [],
  },
  {
    name: 'javascript',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#f0db4f',
    aliases: [],
  },
  {
    name: 'jeet',
    tags: ['framework', 'css'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#FF664A',
    aliases: [],
  },
  {
    name: 'jest',
    tags: ['testing', 'javascript'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#99425b',
    aliases: [],
  },
  {
    name: 'jenkins',
    tags: ['platform', 'integration', 'server'],
    versions: {
      svg: ['line', 'original', 'plain'],
      font: ['line', 'plain'],
    },
    color: '#F0D6B7',
    aliases: [],
  },
  {
    name: 'jetbrains',
    tags: ['ide'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#FDCC21',
    aliases: [],
  },
  {
    name: 'jira',
    tags: ['platform', 'organize'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2684ff',
    aliases: [],
  },
  {
    name: 'jquery',
    tags: ['library', 'javascript'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0769ad',
    aliases: [],
  },
  {
    name: 'julia',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#28a745',
    aliases: [],
  },
  {
    name: 'jupyter',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#F37726',
    aliases: [],
  },
  {
    name: 'kaggle',
    tags: ['platform', 'auth', 'machine-learning'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#20BEFF',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'karma',
    tags: ['testing', 'test-runner'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#56c5a8',
    aliases: [],
  },
  {
    name: 'kotlin',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#7C6DB2',
    aliases: [],
  },
  {
    name: 'knockout',
    tags: ['framework', 'javascript'],
    versions: {
      svg: ['plain-wordmark'],
      font: ['plain-wordmark'],
    },
    color: '#e42e16',
    aliases: [],
  },
  {
    name: 'krakenjs',
    tags: ['nodejs', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0081C2',
    aliases: [],
  },
  {
    name: 'kubernetes',
    tags: ['container', 'deployment'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#486bb3',
    aliases: [],
  },
  {
    name: 'labview',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#fed500',
    aliases: [],
  },
  {
    name: 'laravel',
    tags: ['php', 'framework'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#fd4f31',
    aliases: [],
  },
  {
    name: 'latex',
    tags: ['latex3', 'latex2e', 'markup', 'tex', 'typesetting-system'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'less',
    tags: ['css', 'pre-processor'],
    versions: {
      svg: ['plain-wordmark'],
      font: ['plain-wordmark'],
    },
    color: '#2a4d80',
    aliases: [],
  },
  {
    name: 'linkedin',
    tags: ['social', 'auth'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0076b2',
    aliases: [],
  },
  {
    name: 'lua',
    tags: [
      'programming',
      'language',
      'object-oriented',
      'scripting',
      'procedural',
      'prototype-based',
      'functional',
    ],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#000080',
    aliases: [],
  },
  {
    name: 'linux',
    tags: ['os'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'materialui',
    tags: ['framework', 'design', 'ui'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#1FA6CA',
    aliases: [],
  },
  {
    name: 'matlab',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['plain', 'line'],
    },
    color: '#6dd0c7',
    aliases: [],
  },
  {
    name: 'magento',
    tags: ['php', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'line'],
      font: ['original', 'original-wordmark', 'line'],
    },
    color: '#f26322',
    aliases: [],
  },
  {
    name: 'markdown',
    tags: ['markup', 'language'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'maya',
    tags: [
      'mel',
      'pymel',
      'python',
      '3d',
      'programming',
      'vfx',
      'graphic',
      'graphics',
      'game',
      'animation',
    ],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#149B9A',
    aliases: [],
  },
  {
    name: 'meteor',
    tags: ['javascript'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#df5052',
    aliases: [],
  },
  {
    name: 'minitab',
    tags: ['package', 'statistics'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#8dc63f',
    aliases: [],
  },
  {
    name: 'mocha',
    tags: ['testing'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#8d6748',
    aliases: [],
  },
  {
    name: 'modx',
    tags: ['cms', 'php', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00decc',
    aliases: [],
  },
  {
    name: 'mongodb',
    tags: ['database'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#4FAA41',
    aliases: [],
  },
  {
    name: 'moodle',
    tags: ['platform'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#F7931E',
    aliases: [],
  },
  {
    name: 'msdos',
    tags: ['os'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['line'],
    },
    color: '#ff0000',
    aliases: [],
  },
  {
    name: 'mysql',
    tags: ['database', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00618a',
    aliases: [],
  },
  {
    name: 'neo4j',
    tags: ['database'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#018BFF',
    aliases: [],
  },
  {
    name: 'nestjs',
    tags: ['framework'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#DF234F',
    aliases: [],
  },
  {
    name: 'networkx',
    tags: ['graph', 'library', 'python'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#2C7FB8',
    aliases: [],
  },
  {
    name: 'nextjs',
    tags: ['framework'],
    versions: {
      svg: ['original', 'line', 'original-wordmark'],
      font: [
        'original',
        'plain',
        'line',
        'original-wordmark',
        'plain-wordmark',
      ],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'nginx',
    tags: ['server'],
    versions: {
      svg: ['original'],
      font: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
    },
    color: '#090',
    aliases: [
      {
        base: 'original',
        alias: 'original-wordmark',
      },
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'nixos',
    tags: ['os'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#5277C3',
    aliases: [],
  },
  {
    name: 'nodejs',
    tags: ['javascript', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#83CD29',
    aliases: [],
  },
  {
    name: 'nodewebkit',
    tags: [],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#3d3b47',
    aliases: [],
  },
  {
    name: 'npm',
    tags: ['package', 'manager'],
    versions: {
      svg: ['original-wordmark'],
      font: ['original-wordmark'],
    },
    color: '#cb3837',
    aliases: [],
  },
  {
    name: 'nuget',
    tags: ['package', 'manager'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#004880',
    aliases: [],
  },
  {
    name: 'numpy',
    tags: ['library', 'python'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#4DABCF',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'nuxtjs',
    tags: ['js', 'javascript', 'framework', 'frontend', 'vuejs'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00c48d',
    aliases: [],
  },
  {
    name: 'objectivec',
    tags: ['programming', 'language'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#0b5a9d',
    aliases: [],
  },
  {
    name: 'opera',
    tags: ['browser'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#f7192d',
    aliases: [],
  },
  {
    name: 'ocaml',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#F18803',
    aliases: [],
  },
  {
    name: 'openal',
    tags: ['library', 'audio', 'game', '3d'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#7e000d',
    aliases: [],
  },
  {
    name: 'opengl',
    tags: ['library', 'graphics', 'game', '3d'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#5586a4',
    aliases: [],
  },
  {
    name: 'opensuse',
    tags: ['linux', 'distribuition', 'desktop'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#73ba25',
    aliases: [],
  },
  {
    name: 'oracle',
    tags: ['database'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#EA1B22',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'pandas',
    tags: ['library', 'python'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#130754',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'perl',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#212177',
    aliases: [],
  },
  {
    name: 'phalcon',
    tags: ['php', 'framework'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#76c39b',
    aliases: [],
  },
  {
    name: 'photoshop',
    tags: ['editor', 'graphic'],
    versions: {
      svg: ['plain', 'line'],
      font: ['plain', 'line'],
    },
    color: '#80b5e2',
    aliases: [],
  },
  {
    name: 'php',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#6181b6',
    aliases: [],
  },
  {
    name: 'phpstorm',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#5058A6',
    aliases: [],
  },
  {
    name: 'podman',
    tags: ['container', 'pods', 'docker'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#872b9e',
    aliases: [],
  },
  {
    name: 'polygon',
    tags: ['ethereum', 'erc20', 'blockchain'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#38285B',
    aliases: [],
  },
  {
    name: 'postgresql',
    tags: ['database'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#336791',
    aliases: [],
  },
  {
    name: 'premierepro',
    tags: ['editor', 'video'],
    versions: {
      svg: ['plain', 'original'],
      font: ['plain'],
    },
    color: '#2A0634',
    aliases: [],
  },
  {
    name: 'processing',
    tags: ['java', 'python', 'android', 'application', 'ide', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'protractor',
    tags: ['framework', 'javascript'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#b7111d',
    aliases: [],
  },
  {
    name: 'putty',
    tags: ['ssh', 'server'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#0000fc',
    aliases: [],
  },
  {
    name: 'pycharm',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#4D8548',
    aliases: [],
  },
  {
    name: 'python',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#ffd845',
    aliases: [],
  },
  {
    name: 'pytorch',
    tags: ['programming', 'framework', 'machine-learning', 'python'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#EE4C2C',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'raspberrypi',
    tags: ['arm', 'computer'],
    versions: {
      svg: ['original', 'original-wordmark', 'line', 'line-wordmark'],
      font: ['line', 'line-wordmark'],
    },
    color: '#c51850',
    aliases: [],
  },
  {
    name: 'phoenix',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#F15524',
    aliases: [],
  },
  {
    name: 'qt',
    tags: ['framework'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#41cd52',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'r',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'plain'],
      font: ['original', 'plain'],
    },
    color: '#2369bc',
    aliases: [],
  },
  {
    name: 'rails',
    tags: ['framework'],
    versions: {
      svg: ['original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#CC0000',
    aliases: [],
  },
  {
    name: 'react',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#61dafb',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'redhat',
    tags: ['server', 'linux'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#e93442',
    aliases: [],
  },
  {
    name: 'redis',
    tags: ['server'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#d82c20',
    aliases: [],
  },
  {
    name: 'redux',
    tags: ['framework'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#764abc',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'rocksdb',
    tags: ['database'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#f5be17',
    aliases: [],
  },
  {
    name: 'ruby',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#d91404',
    aliases: [],
  },
  {
    name: 'rubymine',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#C12C4C',
    aliases: [],
  },
  {
    name: 'rust',
    tags: ['programming', 'language'],
    versions: {
      svg: ['plain'],
      font: ['plain'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'safari',
    tags: ['browser'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line-wordmark',
        'line',
      ],
      font: ['plain', 'plain-wordmark', 'line-wordmark', 'line'],
    },
    color: '#1B88CA',
    aliases: [],
  },
  {
    name: 'salesforce',
    tags: ['platform', 'ecommerce'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#00a1e0',
    aliases: [],
  },
  {
    name: 'sdl',
    tags: ['library', 'cross-platform', 'multimedia', 'game'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#173354',
    aliases: [],
  },
  {
    name: 'rstudio',
    tags: ['editor', 'package', 'statistics'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#75aadb',
    aliases: [],
  },
  {
    name: 'sass',
    tags: ['pre-processor', 'css'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#cc6699',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'scala',
    tags: ['programming', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#de3423',
    aliases: [],
  },
  {
    name: 'selenium',
    tags: ['webdrive', 'automation'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#CF0A2C',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'sequelize',
    tags: ['database', 'language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#3b4b72',
    aliases: [
      {
        base: 'plain',
        alias: 'plain',
      },
      {
        base: 'plain-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'shopware',
    tags: ['cloud', 'platform'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#179eff',
    aliases: [],
  },
  {
    name: 'shotgrid',
    tags: [
      'web-application',
      'autodesk',
      'project-management',
      'pipeline',
      'production-tool',
      'production-tracking',
    ],
    versions: {
      svg: ['original', 'original-wordmark', 'plain'],
      font: ['plain', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'sketch',
    tags: ['application'],
    versions: {
      svg: ['original', 'original-wordmark', 'line', 'line-wordmark'],
      font: ['line', 'line-wordmark'],
    },
    color: '#fdad00',
    aliases: [],
  },
  {
    name: 'slack',
    tags: ['chat'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2D333A',
    aliases: [],
  },
  {
    name: 'socketio',
    tags: ['library', 'networking', 'websockets'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#010101',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'solidity',
    tags: ['programming', 'language', 'blockchain'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#383838',
    aliases: [],
  },
  {
    name: 'sourcetree',
    tags: ['version-control'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#205081',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'spring',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#5FB832',
    aliases: [],
  },
  {
    name: 'spss',
    tags: ['package', 'statistics'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#cc1e4c',
    aliases: [],
  },
  {
    name: 'sqlalchemy',
    tags: ['python', 'orm'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain'],
      font: ['plain', 'original-wordmark'],
    },
    color: '#333333',
    aliases: [
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'sqlite',
    tags: ['sql', 'database', 'db'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0f80cc',
    aliases: [],
  },
  {
    name: 'subversion',
    tags: ['svn', 'version'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original'],
    },
    color: '#809cc8',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'microsoftsqlserver',
    tags: ['database'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#909DAA',
    aliases: [],
  },
  {
    name: 'ssh',
    tags: ['security'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#231F20',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'stylus',
    tags: ['css', 'pre-processor'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#333333',
    aliases: [],
  },
  {
    name: 'svelte',
    tags: ['javascript', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#ff3e00',
    aliases: [],
  },
  {
    name: 'swift',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#F05138',
    aliases: [],
  },
  {
    name: 'symfony',
    tags: ['framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#1A171B',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'storybook',
    tags: ['framework', 'documentation', 'ui'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#FF4785',
    aliases: [],
  },
  {
    name: 'tailwindcss',
    tags: ['css', 'framework'],
    versions: {
      svg: ['original-wordmark', 'plain'],
      font: ['original-wordmark', 'plain'],
    },
    color: '#2298BD',
    aliases: [],
  },
  {
    name: 'tensorflow',
    tags: ['library', 'machine-learning', 'deep-learning'],
    versions: {
      svg: ['original', 'original-wordmark', 'line', 'line-wordmark'],
      font: ['original', 'original-wordmark', 'line', 'line-wordmark'],
    },
    color: '#ff6f00',
    aliases: [],
  },
  {
    name: 'terraform',
    tags: ['deployment', 'architecture', 'automation'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#5c4ee5',
    aliases: [],
  },
  {
    name: 'threejs',
    tags: ['javascript', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'tomcat',
    tags: ['server'],
    versions: {
      svg: ['original', 'original-wordmark', 'line', 'line-wordmark'],
      font: ['line', 'line-wordmark'],
    },
    color: '#D1A41A',
    aliases: [],
  },
  {
    name: 'tortoisegit',
    tags: ['git'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['plain', 'line'],
    },
    color: '#4a8fb5',
    aliases: [],
  },
  {
    name: 'towergit',
    tags: ['git'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#d18900',
    aliases: [],
  },
  {
    name: 'travis',
    tags: ['platform', 'integration'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#bb2031',
    aliases: [],
  },
  {
    name: 'thealgorithms',
    tags: ['organization', 'algorithms'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#00BCB4',
    aliases: [],
  },
  {
    name: 'trello',
    tags: ['platform', 'organize'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#23719f',
    aliases: [],
  },
  {
    name: 'twitter',
    tags: ['auth'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#1da1f2',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'typescript',
    tags: ['programming', 'transpiler'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#007acc',
    aliases: [
      {
        base: 'plain',
        alias: 'original',
      },
    ],
  },
  {
    name: 'typo3',
    tags: ['cms', 'php'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#f49700',
    aliases: [],
  },
  {
    name: 'ubuntu',
    tags: ['os'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#dd4814',
    aliases: [],
  },
  {
    name: 'unity',
    tags: ['csharp', 'engine', 'game'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [],
  },
  {
    name: 'unix',
    tags: ['os'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#4051b5',
    aliases: [],
  },
  {
    name: 'unrealengine',
    tags: ['c++', 'engine', 'game'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#000000',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'uwsgi',
    tags: ['hosting'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#bad05e',
    aliases: [],
  },
  {
    name: 'vagrant',
    tags: ['platform'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#127eff',
    aliases: [],
  },
  {
    name: 'vim',
    tags: ['editor'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#179a33',
    aliases: [],
  },
  {
    name: 'visualstudio',
    tags: ['editor'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#68217A',
    aliases: [],
  },
  {
    name: 'vuejs',
    tags: ['framework'],
    versions: {
      svg: [
        'original',
        'original-wordmark',
        'plain',
        'plain-wordmark',
        'line',
        'line-wordmark',
      ],
      font: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    },
    color: '#41B883',
    aliases: [],
  },
  {
    name: 'vuestorefront',
    tags: ['framework'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#5ecf7b',
    aliases: [],
  },
  {
    name: 'vscode',
    tags: ['editor', 'ide'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#3C99D4',
    aliases: [],
  },
  {
    name: 'webflow',
    tags: ['cms', 'ecommerce'],
    versions: {
      svg: ['original'],
      font: ['original'],
    },
    color: '#4353ff',
    aliases: [],
  },
  {
    name: 'weblate',
    tags: ['localization'],
    versions: {
      svg: ['original', 'plain', 'original-wordmark', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2eccaa',
    aliases: [],
  },
  {
    name: 'webpack',
    tags: ['package', 'manager'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#1C78C0',
    aliases: [],
  },
  {
    name: 'webstorm',
    tags: ['editor'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2788B5',
    aliases: [],
  },
  {
    name: 'windows8',
    tags: ['os'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#00adef',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'woocommerce',
    tags: ['ecommerce'],
    versions: {
      svg: ['original', 'plain', 'original-wordmark', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#7f54b3',
    aliases: [],
  },
  {
    name: 'wordpress',
    tags: ['cms'],
    versions: {
      svg: ['original', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#494949',
    aliases: [],
  },
  {
    name: 'xamarin',
    tags: [
      'application',
      'programming',
      'editor',
      'ide',
      'ios',
      'mobile',
      'apple',
      'android',
      'windows',
    ],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#3498DB',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'xcode',
    tags: ['application', 'editor', 'ide', 'ios', 'iphone', 'mobile', 'apple'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#069CEC',
    aliases: [],
  },
  {
    name: 'xd',
    tags: ['design', 'editor', 'ui'],
    versions: {
      svg: ['plain', 'line'],
      font: ['plain', 'line'],
    },
    color: '#DD80BC',
    aliases: [],
  },
  {
    name: 'yarn',
    tags: ['package', 'manager'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#2c8ebb',
    aliases: [],
  },
  {
    name: 'yii',
    tags: ['php', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#0073bb',
    aliases: [],
  },
  {
    name: 'yunohost',
    tags: ['os'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#ffffff',
    aliases: [],
  },
  {
    name: 'zend',
    tags: ['php', 'framework'],
    versions: {
      svg: ['plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#68b604',
    aliases: [],
  },
  {
    name: 'zig',
    tags: ['language'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#f7a41d',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'pytest',
    tags: ['python', 'framework', 'testing'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#009fe3',
    aliases: [],
  },
  {
    name: 'opencv',
    tags: ['library', 'c/c++', 'computer-vision'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#128dff',
    aliases: [],
  },
  {
    name: 'fastapi',
    tags: ['python', 'framework'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#009688',
    aliases: [],
  },
  {
    name: 'k3s',
    tags: ['kubernetes', 'container', 'platform'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain-wordmark'],
      font: ['original', 'plain-wordmark'],
    },
    color: '#ffc519',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
    ],
  },
  {
    name: 'packer',
    tags: ['infrastructure', 'infrastructure-as-code', 'continuous-delivery'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#1d94dd',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'anaconda',
    tags: ['python', 'data-science'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#3eb049',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'rspec',
    tags: ['ruby', 'framework', 'testing'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#6de1fa',
    aliases: [
      {
        base: 'original',
        alias: 'plain',
      },
      {
        base: 'original-wordmark',
        alias: 'plain-wordmark',
      },
    ],
  },
  {
    name: 'argocd',
    tags: ['gitops', 'continuous-delivery'],
    versions: {
      svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
      font: ['plain', 'plain-wordmark'],
    },
    color: '#ef7b4d',
    aliases: [],
  },
  {
    name: 'prometheus',
    tags: ['monitoring', 'observability', 'analysis'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#e75225',
    aliases: [],
  },
  {
    name: 'blender',
    tags: ['modelling', 'python', '3d', 'animation'],
    versions: {
      svg: ['original', 'original-wordmark'],
      font: ['original', 'original-wordmark'],
    },
    color: '#DC7B2E',
    aliases: [],
  },
  {
    name: 'dropwizard',
    tags: ['java', 'framework'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#24265d',
    aliases: [],
  },
  {
    name: 'vuetify',
    tags: ['css', 'framework', 'vuejs-library', 'material-design'],
    versions: {
      svg: ['original', 'plain', 'line'],
      font: ['line', 'plain'],
    },
    color: '#1697F6',
    aliases: [],
  },
  {
    name: 'fedora',
    tags: ['linux', 'distribuition', 'desktop'],
    versions: {
      svg: ['original', 'plain'],
      font: ['plain'],
    },
    color: '#294172',
    aliases: [],
  },
];
const result = allArr.map((item) => {
  return {
    name: item.name,
    imgLink: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.name}/${item.name}-${item.versions.svg[0]}.svg`,
  };
});
let MONGO_URI =process.env.MONGO_URI
const connectTODB = async () => {
  console.log(MONGO_URI);
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
//drop icons collection
// const dropCollection = async () => {
//   try {
//     await connectTODB();
//     await IconModel.deleteMany();
//     console.log('Collection Dropped');
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };
// dropCollection();

// const insertData = async () => {
//   try {
//     await connectTODB();
//     console.log(result);
//     await IconModel.insertMany(result);
//     console.log('Data inserted');
//     process.exit();
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };
// insertData();
const findOne = async () => {
  try {
    await connectTODB();
    const data = await IconModel.findOne({ name: 'angularjs' });
    console.log(data);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
findOne();
