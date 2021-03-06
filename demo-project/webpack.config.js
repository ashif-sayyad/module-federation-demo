const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "demoProject",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "demoProject",
        filename: "remoteEntry.js",
        exposes: {
          './defaults': './src/app/proc/defaults/defaults.module.ts',
          './defaults1': './src/app/proc/defaults1/defaults.module.ts',
          './defaults2': './src/app/proc/defaults2/defaults.module.ts',
          './defaults3': './src/app/proc/defaults3/defaults.module.ts',
          './defaults4': './src/app/proc/defaults4/defaults.module.ts',
          './defaults5': './src/app/proc/defaults5/defaults.module.ts',
          './defaults6': './src/app/proc/defaults6/defaults.module.ts',
          './defaults7': './src/app/proc/defaults7/defaults.module.ts',
          './defaults8': './src/app/proc/defaults8/defaults.module.ts',
          './defaults9': './src/app/proc/defaults9/defaults.module.ts',
          './defaults10': './src/app/proc/defaults10/defaults.module.ts',
          './defaults11': './src/app/proc/defaults11/defaults.module.ts',
          './defaults12': './src/app/proc/defaults12/defaults.module.ts',
          './defaults13': './src/app/proc/defaults13/defaults.module.ts',
          './defaults14': './src/app/proc/defaults14/defaults.module.ts',
          './defaults15': './src/app/proc/defaults15/defaults.module.ts',
          './defaults16': './src/app/proc/defaults16/defaults.module.ts',
          './defaults17': './src/app/proc/defaults17/defaults.module.ts',
          './defaults18': './src/app/proc/defaults18/defaults.module.ts',
          './defaults19': './src/app/proc/defaults19/defaults.module.ts',
          './defaults20': './src/app/proc/defaults20/defaults.module.ts',
          './defaults21': './src/app/proc/defaults21/defaults.module.ts',
          './defaults22': './src/app/proc/defaults22/defaults.module.ts',
          './defaults23': './src/app/proc/defaults23/defaults.module.ts',
          './defaults24': './src/app/proc/defaults24/defaults.module.ts',
          './defaults25': './src/app/proc/defaults25/defaults.module.ts',
          './defaults26': './src/app/proc/defaults26/defaults.module.ts',
          './defaults27': './src/app/proc/defaults27/defaults.module.ts',
          './defaults28': './src/app/proc/defaults28/defaults.module.ts',
          './defaults29': './src/app/proc/defaults29/defaults.module.ts',
          './defaults30': './src/app/proc/defaults30/defaults.module.ts',
          './defaults31': './src/app/proc/defaults31/defaults.module.ts',
          './defaults32': './src/app/proc/defaults32/defaults.module.ts',
          './defaults33': './src/app/proc/defaults33/defaults.module.ts',
          './defaults34': './src/app/proc/defaults34/defaults.module.ts',
          './defaults35': './src/app/proc/defaults35/defaults.module.ts',
          './defaults36': './src/app/proc/defaults36/defaults.module.ts',
          './defaults37': './src/app/proc/defaults37/defaults.module.ts',
          './defaults38': './src/app/proc/defaults38/defaults.module.ts',
          './defaults39': './src/app/proc/defaults39/defaults.module.ts',
          './defaults40': './src/app/proc/defaults40/defaults.module.ts',
          './defaults41': './src/app/proc/defaults41/defaults.module.ts',
          './defaults42': './src/app/proc/defaults42/defaults.module.ts',
          './defaults43': './src/app/proc/defaults43/defaults.module.ts',
          './defaults44': './src/app/proc/defaults44/defaults.module.ts',
          './defaults45': './src/app/proc/defaults45/defaults.module.ts',
          './defaults46': './src/app/proc/defaults46/defaults.module.ts',
          './defaults47': './src/app/proc/defaults47/defaults.module.ts',
          './defaults48': './src/app/proc/defaults48/defaults.module.ts',
          './defaults49': './src/app/proc/defaults49/defaults.module.ts',
          './defaults50': './src/app/proc/defaults50/defaults.module.ts'
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
