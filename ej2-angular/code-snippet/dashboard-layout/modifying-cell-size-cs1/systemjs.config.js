System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.2.43/",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",
        "@syncfusion/ej2-angular-layouts": "syncfusion:ej2-angular-layouts/dist/ej2-angular-layouts.umd.min.js",
        
        '@angular/core': 'angular:core@5.2.0/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.0/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.0/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.0/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.0/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.0/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.0/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.0/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.0/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'index' },
    }
});

System.import('app');