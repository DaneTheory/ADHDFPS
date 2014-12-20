
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
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'future', true, true);
Module['FS_createPath']('/packages/gk/future', 'skysfJPG', true, true);
Module['FS_createPath']('/packages/gk', 'modern', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_05', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_03', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_01', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_04', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_08', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_02', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_07', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_06', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'packages/gk/future/skysfJPG/skysfJ_bk.jpg', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_bk.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_bk.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_bk.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_bk.jpg');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/gk/future/skysfJPG/skysfJ_ft.jpg', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_ft.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_ft.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_ft.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_ft.jpg');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/gk/future/skysfJPG/skysfJ_rt.jpg', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_rt.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_rt.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_rt.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_rt.jpg');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/gk/future/skysfJPG/skysfJ_lf.jpg', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_lf.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_lf.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_lf.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_lf.jpg');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/gk/future/skysfJPG/skysfJ_dn.jpg', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_dn.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_dn.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_dn.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_dn.jpg');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/gk/future/skysfJPG/skysfJ_up.jpg', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_up.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_up.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_up.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_up.jpg');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/gk/modern/bunker_wall_gk_05/package.cfg', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/package.cfg');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/gk/modern/bunker_wall_gk_03/package.cfg', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/package.cfg');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/gk/modern/bunker_wall_gk_01/package.cfg', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/package.cfg');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/gk/modern/bunker_wall_gk_04/package.cfg', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/package.cfg');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/gk/modern/bunker_wall_gk_08/package.cfg', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/package.cfg');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/gk/modern/bunker_wall_gk_02/package.cfg', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/package.cfg');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/gk/modern/bunker_wall_gk_07/package.cfg', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/package.cfg');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/gk/modern/bunker_wall_gk_06/package.cfg', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/package.cfg');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_cc_a.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_nm_a.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds');
    filePreload31.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'modern.data';
    var REMOTE_PACKAGE_NAME = 'modern.data';
    var PACKAGE_UUID = '546a4d18-8e7c-426f-95b6-98408ad46ed6';
  
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
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_bk.jpg'];
        var data = byteArray.subarray(0, 198544);
        var ptr = Module['_malloc'](198544);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 198544);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_ft.jpg'];
        var data = byteArray.subarray(198544, 376475);
        var ptr = Module['_malloc'](177931);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 177931);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_rt.jpg'];
        var data = byteArray.subarray(376475, 545673);
        var ptr = Module['_malloc'](169198);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 169198);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_lf.jpg'];
        var data = byteArray.subarray(545673, 716646);
        var ptr = Module['_malloc'](170973);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 170973);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_dn.jpg'];
        var data = byteArray.subarray(716646, 911844);
        var ptr = Module['_malloc'](195198);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 195198);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_up.jpg'];
        var data = byteArray.subarray(911844, 1019298);
        var ptr = Module['_malloc'](107454);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 107454);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/package.cfg'];
        var data = byteArray.subarray(1019298, 1019965);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/package.cfg'];
        var data = byteArray.subarray(1019965, 1020632);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/package.cfg'];
        var data = byteArray.subarray(1020632, 1021299);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/package.cfg'];
        var data = byteArray.subarray(1021299, 1021966);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/package.cfg'];
        var data = byteArray.subarray(1021966, 1022633);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/package.cfg'];
        var data = byteArray.subarray(1022633, 1023300);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/package.cfg'];
        var data = byteArray.subarray(1023300, 1023967);
        var ptr = Module['_malloc'](667);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 667);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/package.cfg'];
        var data = byteArray.subarray(1023967, 1025231);
        var ptr = Module['_malloc'](1264);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 1264);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.dds'];
        var data = byteArray.subarray(1025231, 1275352);
        var ptr = Module['_malloc'](250121);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 250121);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.dds'];
        var data = byteArray.subarray(1275352, 1703429);
        var ptr = Module['_malloc'](428077);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 428077);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.dds'];
        var data = byteArray.subarray(1703429, 1771227);
        var ptr = Module['_malloc'](67798);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 67798);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.dds'];
        var data = byteArray.subarray(1771227, 1841429);
        var ptr = Module['_malloc'](70202);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 70202);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.dds'];
        var data = byteArray.subarray(1841429, 1879627);
        var ptr = Module['_malloc'](38198);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 38198);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.dds'];
        var data = byteArray.subarray(1879627, 1915935);
        var ptr = Module['_malloc'](36308);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 36308);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.dds'];
        var data = byteArray.subarray(1915935, 2044530);
        var ptr = Module['_malloc'](128595);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 128595);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.dds'];
        var data = byteArray.subarray(2044530, 2177103);
        var ptr = Module['_malloc'](132573);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 132573);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.dds'];
        var data = byteArray.subarray(2177103, 2215077);
        var ptr = Module['_malloc'](37974);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 37974);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.dds'];
        var data = byteArray.subarray(2215077, 2253817);
        var ptr = Module['_malloc'](38740);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 38740);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.dds'];
        var data = byteArray.subarray(2253817, 2511359);
        var ptr = Module['_malloc'](257542);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 257542);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.dds'];
        var data = byteArray.subarray(2511359, 2769654);
        var ptr = Module['_malloc'](258295);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 258295);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.dds'];
        var data = byteArray.subarray(2769654, 3026490);
        var ptr = Module['_malloc'](256836);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 256836);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.dds'];
        var data = byteArray.subarray(3026490, 3284117);
        var ptr = Module['_malloc'](257627);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 257627);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.dds'];
        var data = byteArray.subarray(3284117, 3322385);
        var ptr = Module['_malloc'](38268);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 38268);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.dds'];
        var data = byteArray.subarray(3322385, 3360593);
        var ptr = Module['_malloc'](38208);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 38208);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.dds'];
        var data = byteArray.subarray(3360593, 3492724);
        var ptr = Module['_malloc'](132131);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 132131);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.dds'];
        var data = byteArray.subarray(3492724, 3625565);
        var ptr = Module['_malloc'](132841);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 132841);
        curr.onload();
                Module['removeRunDependency']('datafile_modern.data');

    };
    Module['addRunDependency']('datafile_modern.data');

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

