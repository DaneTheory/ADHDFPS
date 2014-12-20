
(function() {

    var decrunchWorker = new Worker('crunch-worker.js');
    var decrunchCallbacks = [];
    decrunchWorker.onmessage = function(msg) {
      decrunchCallbacks[msg.data.callbackID](msg.data.data);
      console.log('decrunched ' + msg.data.filename + ' in ' + msg.data.time + ' ms, ' + msg.data.data.length + ' bytes');
      decrunchCallbacks[msg.data.callbackID] = null;
    };
    function requestDecrunch(filename, data, callback) {
      decrunchWorker.postMessage({
        filename: filename,
        data: new Uint8Array(data),
        callbackID: decrunchCallbacks.length
      });
      decrunchCallbacks.push(callback);
    }

  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'base', true, true);
Module['FS_createPath']('/packages', 'models', true, true);
Module['FS_createPath']('/packages/models', 'ffflag', true, true);
Module['FS_createPath']('/packages/models', 'ffpit', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'packages/base/colos.cfg', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.cfg');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.cfg');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/base/colos.ogz', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.ogz failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.ogz', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.ogz');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.ogz');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/base/colos.wpt', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/base/colos.wpt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'colos.wpt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/colos.wpt');

      });
    };
    Module['addRunDependency']('fp packages/base/colos.wpt');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/models/ffflag/md5.cfg', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/md5.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'md5.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/md5.cfg');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/md5.cfg');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/models/ffflag/ffflag_cc.dds', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_cc.dds');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/models/ffflag/ffflag_nm.dds', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_nm.dds');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/models/ffflag/ffflag_sc.dds', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag_sc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffflag/ffflag_sc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag_sc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag_sc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag_sc.dds');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/models/ffflag/ffflag.md5mesh', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag.md5mesh failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag.md5mesh', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag.md5mesh');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag.md5mesh');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/models/ffflag/ffflag.md5anim', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/models/ffflag/ffflag.md5anim failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffflag', 'ffflag.md5anim', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffflag/ffflag.md5anim');

      });
    };
    Module['addRunDependency']('fp packages/models/ffflag/ffflag.md5anim');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/models/ffpit/md5.cfg', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/md5.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'md5.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/md5.cfg');

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/md5.cfg');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/models/ffpit/ffpit_01_gk_sc.dds', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_sc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_sc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_sc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_sc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_sc.dds');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/models/ffpit/ffpit_01_gk_cc.dds', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_cc.dds');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/models/ffpit/ffpit_01_gk_nm.dds', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit_01_gk_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/models/ffpit/ffpit_01_gk_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit_01_gk_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit_01_gk_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit_01_gk_nm.dds');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/models/ffpit/ffpit.md5mesh', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/models/ffpit/ffpit.md5mesh failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/models/ffpit', 'ffpit.md5mesh', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/models/ffpit/ffpit.md5mesh');

      });
    };
    Module['addRunDependency']('fp packages/models/ffpit/ffpit.md5mesh');
    filePreload13.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'low.data';
    var REMOTE_PACKAGE_NAME = 'low.data';
    var PACKAGE_UUID = '15829dba-a75c-4d34-add6-8c1bb8856dc0';
  
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        curr = DataRequest.prototype.requests['packages/base/colos.cfg'];
        var data = byteArray.subarray(0, 1169);
        var ptr = Module['_malloc'](1169);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 1169);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/colos.ogz'];
        var data = byteArray.subarray(1169, 555211);
        var ptr = Module['_malloc'](554042);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 554042);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/colos.wpt'];
        var data = byteArray.subarray(555211, 566675);
        var ptr = Module['_malloc'](11464);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 11464);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/md5.cfg'];
        var data = byteArray.subarray(566675, 566927);
        var ptr = Module['_malloc'](252);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 252);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_cc.dds'];
        var data = byteArray.subarray(566927, 738631);
        var ptr = Module['_malloc'](171704);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 171704);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_nm.dds'];
        var data = byteArray.subarray(738631, 893009);
        var ptr = Module['_malloc'](154378);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 154378);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag_sc.dds'];
        var data = byteArray.subarray(893009, 1049520);
        var ptr = Module['_malloc'](156511);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 156511);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag.md5mesh'];
        var data = byteArray.subarray(1049520, 1072941);
        var ptr = Module['_malloc'](23421);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 23421);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffflag/ffflag.md5anim'];
        var data = byteArray.subarray(1072941, 1164696);
        var ptr = Module['_malloc'](91755);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 91755);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/md5.cfg'];
        var data = byteArray.subarray(1164696, 1164976);
        var ptr = Module['_malloc'](280);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 280);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_sc.dds'];
        var data = byteArray.subarray(1164976, 1230298);
        var ptr = Module['_malloc'](65322);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 65322);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_cc.dds'];
        var data = byteArray.subarray(1230298, 1298482);
        var ptr = Module['_malloc'](68184);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 68184);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit_01_gk_nm.dds'];
        var data = byteArray.subarray(1298482, 1365801);
        var ptr = Module['_malloc'](67319);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 67319);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/models/ffpit/ffpit.md5mesh'];
        var data = byteArray.subarray(1365801, 1410998);
        var ptr = Module['_malloc'](45197);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 45197);
        curr.onload();
                Module['removeRunDependency']('datafile_low.data');

    };
    Module['addRunDependency']('datafile_low.data');

    function handleError(error) {
      console.error('package error:', error);
    };
  
    if (!Module.preloadResults)
      Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      fetchRemotePackage(REMOTE_PACKAGE_NAME, processPackageData, handleError);
      });

  if (!Module['postRun']) Module['postRun'] = [];
  Module["postRun"].push(function() {
    decrunchWorker.terminate();
  });

})();

