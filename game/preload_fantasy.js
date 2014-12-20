
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
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_plaster_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_intersection_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v03', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_plates_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_planks_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_roof_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasyJPG', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_lf.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_dn.crn', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_dn.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_dn.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.crn');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_dn.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_lf.crn', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_lf.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_lf.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.crn');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_up.dds', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_up.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_up.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_up.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.dds');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_rt.crn', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_rt.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_rt.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.crn');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_up.crn', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_up.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_up.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.crn');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_rt.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_rt.png', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_rt.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_rt.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.png');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_ft.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_up.png', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_up.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_up.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.png');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_bk.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_bk.png', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_bk.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_bk.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.png');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_lf.png', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_lf.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_lf.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.png');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_ft.crn', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_ft.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_ft.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.crn');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_bk.crn', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_bk.crn failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_bk.crn', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.crn');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.crn');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_ft.png', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_ft.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_ft.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.png');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_dn.png', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_dn.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_dn.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.png');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/package.cfg', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/package.cfg', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/package2.cfg', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package2.cfg');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/package.cfg', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/package2.cfg', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package2.cfg');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/package.cfg', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/package2.cfg', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package2.cfg');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/package.cfg', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/package2.cfg', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package2.cfg');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/package.cfg', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    filePreload31.send(null);

    var filePreload32 = new DataRequest();
    filePreload32.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg', true);
    filePreload32.responseType = 'arraybuffer';
    filePreload32.onload = function() {
      var arrayBuffer = filePreload32.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg');
    filePreload32.send(null);

    var filePreload33 = new DataRequest();
    filePreload33.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/package.cfg', true);
    filePreload33.responseType = 'arraybuffer';
    filePreload33.onload = function() {
      var arrayBuffer = filePreload33.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    filePreload33.send(null);

    var filePreload34 = new DataRequest();
    filePreload34.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/package2.cfg', true);
    filePreload34.responseType = 'arraybuffer';
    filePreload34.onload = function() {
      var arrayBuffer = filePreload34.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package2.cfg');
    filePreload34.send(null);

    var filePreload35 = new DataRequest();
    filePreload35.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/package.cfg', true);
    filePreload35.responseType = 'arraybuffer';
    filePreload35.onload = function() {
      var arrayBuffer = filePreload35.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    filePreload35.send(null);

    var filePreload36 = new DataRequest();
    filePreload36.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/package2.cfg', true);
    filePreload36.responseType = 'arraybuffer';
    filePreload36.onload = function() {
      var arrayBuffer = filePreload36.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package2.cfg');
    filePreload36.send(null);

    var filePreload37 = new DataRequest();
    filePreload37.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/package.cfg', true);
    filePreload37.responseType = 'arraybuffer';
    filePreload37.onload = function() {
      var arrayBuffer = filePreload37.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    filePreload37.send(null);

    var filePreload38 = new DataRequest();
    filePreload38.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/package2.cfg', true);
    filePreload38.responseType = 'arraybuffer';
    filePreload38.onload = function() {
      var arrayBuffer = filePreload38.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package2.cfg');
    filePreload38.send(null);

    var filePreload39 = new DataRequest();
    filePreload39.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/package.cfg', true);
    filePreload39.responseType = 'arraybuffer';
    filePreload39.onload = function() {
      var arrayBuffer = filePreload39.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    filePreload39.send(null);

    var filePreload40 = new DataRequest();
    filePreload40.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg', true);
    filePreload40.responseType = 'arraybuffer';
    filePreload40.onload = function() {
      var arrayBuffer = filePreload40.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg');
    filePreload40.send(null);

    var filePreload41 = new DataRequest();
    filePreload41.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg', true);
    filePreload41.responseType = 'arraybuffer';
    filePreload41.onload = function() {
      var arrayBuffer = filePreload41.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    filePreload41.send(null);

    var filePreload42 = new DataRequest();
    filePreload42.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/package2.cfg', true);
    filePreload42.responseType = 'arraybuffer';
    filePreload42.onload = function() {
      var arrayBuffer = filePreload42.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package2.cfg');
    filePreload42.send(null);

    var filePreload43 = new DataRequest();
    filePreload43.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/package.cfg', true);
    filePreload43.responseType = 'arraybuffer';
    filePreload43.onload = function() {
      var arrayBuffer = filePreload43.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    filePreload43.send(null);

    var filePreload44 = new DataRequest();
    filePreload44.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg', true);
    filePreload44.responseType = 'arraybuffer';
    filePreload44.onload = function() {
      var arrayBuffer = filePreload44.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'package2.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg');
    filePreload44.send(null);

    var filePreload45 = new DataRequest();
    filePreload45.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg', true);
    filePreload45.responseType = 'arraybuffer';
    filePreload45.onload = function() {
      var arrayBuffer = filePreload45.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    filePreload45.send(null);

    var filePreload46 = new DataRequest();
    filePreload46.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds', true);
    filePreload46.responseType = 'arraybuffer';
    filePreload46.onload = function() {
      var arrayBuffer = filePreload46.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds');
    filePreload46.send(null);

    var filePreload47 = new DataRequest();
    filePreload47.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds', true);
    filePreload47.responseType = 'arraybuffer';
    filePreload47.onload = function() {
      var arrayBuffer = filePreload47.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds');
    filePreload47.send(null);

    var filePreload48 = new DataRequest();
    filePreload48.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds', true);
    filePreload48.responseType = 'arraybuffer';
    filePreload48.onload = function() {
      var arrayBuffer = filePreload48.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds');
    filePreload48.send(null);

    var filePreload49 = new DataRequest();
    filePreload49.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds', true);
    filePreload49.responseType = 'arraybuffer';
    filePreload49.onload = function() {
      var arrayBuffer = filePreload49.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds');
    filePreload49.send(null);

    var filePreload50 = new DataRequest();
    filePreload50.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds', true);
    filePreload50.responseType = 'arraybuffer';
    filePreload50.onload = function() {
      var arrayBuffer = filePreload50.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds');
    filePreload50.send(null);

    var filePreload51 = new DataRequest();
    filePreload51.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds', true);
    filePreload51.responseType = 'arraybuffer';
    filePreload51.onload = function() {
      var arrayBuffer = filePreload51.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds');
    filePreload51.send(null);

    var filePreload52 = new DataRequest();
    filePreload52.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds', true);
    filePreload52.responseType = 'arraybuffer';
    filePreload52.onload = function() {
      var arrayBuffer = filePreload52.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds');
    filePreload52.send(null);

    var filePreload53 = new DataRequest();
    filePreload53.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds', true);
    filePreload53.responseType = 'arraybuffer';
    filePreload53.onload = function() {
      var arrayBuffer = filePreload53.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds');
    filePreload53.send(null);

    var filePreload54 = new DataRequest();
    filePreload54.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds', true);
    filePreload54.responseType = 'arraybuffer';
    filePreload54.onload = function() {
      var arrayBuffer = filePreload54.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds');
    filePreload54.send(null);

    var filePreload55 = new DataRequest();
    filePreload55.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds', true);
    filePreload55.responseType = 'arraybuffer';
    filePreload55.onload = function() {
      var arrayBuffer = filePreload55.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds');
    filePreload55.send(null);

    var filePreload56 = new DataRequest();
    filePreload56.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds', true);
    filePreload56.responseType = 'arraybuffer';
    filePreload56.onload = function() {
      var arrayBuffer = filePreload56.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds');
    filePreload56.send(null);

    var filePreload57 = new DataRequest();
    filePreload57.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds', true);
    filePreload57.responseType = 'arraybuffer';
    filePreload57.onload = function() {
      var arrayBuffer = filePreload57.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds');
    filePreload57.send(null);

    var filePreload58 = new DataRequest();
    filePreload58.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds', true);
    filePreload58.responseType = 'arraybuffer';
    filePreload58.onload = function() {
      var arrayBuffer = filePreload58.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds');
    filePreload58.send(null);

    var filePreload59 = new DataRequest();
    filePreload59.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds', true);
    filePreload59.responseType = 'arraybuffer';
    filePreload59.onload = function() {
      var arrayBuffer = filePreload59.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds');
    filePreload59.send(null);

    var filePreload60 = new DataRequest();
    filePreload60.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds', true);
    filePreload60.responseType = 'arraybuffer';
    filePreload60.onload = function() {
      var arrayBuffer = filePreload60.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds');
    filePreload60.send(null);

    var filePreload61 = new DataRequest();
    filePreload61.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds', true);
    filePreload61.responseType = 'arraybuffer';
    filePreload61.onload = function() {
      var arrayBuffer = filePreload61.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds');
    filePreload61.send(null);

    var filePreload62 = new DataRequest();
    filePreload62.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds', true);
    filePreload62.responseType = 'arraybuffer';
    filePreload62.onload = function() {
      var arrayBuffer = filePreload62.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds');
    filePreload62.send(null);

    var filePreload63 = new DataRequest();
    filePreload63.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds', true);
    filePreload63.responseType = 'arraybuffer';
    filePreload63.onload = function() {
      var arrayBuffer = filePreload63.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds');
    filePreload63.send(null);

    var filePreload64 = new DataRequest();
    filePreload64.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds', true);
    filePreload64.responseType = 'arraybuffer';
    filePreload64.onload = function() {
      var arrayBuffer = filePreload64.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds');
    filePreload64.send(null);

    var filePreload65 = new DataRequest();
    filePreload65.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds', true);
    filePreload65.responseType = 'arraybuffer';
    filePreload65.onload = function() {
      var arrayBuffer = filePreload65.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds');
    filePreload65.send(null);

    var filePreload66 = new DataRequest();
    filePreload66.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds', true);
    filePreload66.responseType = 'arraybuffer';
    filePreload66.onload = function() {
      var arrayBuffer = filePreload66.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds');
    filePreload66.send(null);

    var filePreload67 = new DataRequest();
    filePreload67.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds', true);
    filePreload67.responseType = 'arraybuffer';
    filePreload67.onload = function() {
      var arrayBuffer = filePreload67.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds');
    filePreload67.send(null);

    var filePreload68 = new DataRequest();
    filePreload68.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds', true);
    filePreload68.responseType = 'arraybuffer';
    filePreload68.onload = function() {
      var arrayBuffer = filePreload68.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds');
    filePreload68.send(null);

    var filePreload69 = new DataRequest();
    filePreload69.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds', true);
    filePreload69.responseType = 'arraybuffer';
    filePreload69.onload = function() {
      var arrayBuffer = filePreload69.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds');
    filePreload69.send(null);

    var filePreload70 = new DataRequest();
    filePreload70.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds', true);
    filePreload70.responseType = 'arraybuffer';
    filePreload70.onload = function() {
      var arrayBuffer = filePreload70.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds');
    filePreload70.send(null);

    var filePreload71 = new DataRequest();
    filePreload71.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds', true);
    filePreload71.responseType = 'arraybuffer';
    filePreload71.onload = function() {
      var arrayBuffer = filePreload71.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds');
    filePreload71.send(null);

    var filePreload72 = new DataRequest();
    filePreload72.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds', true);
    filePreload72.responseType = 'arraybuffer';
    filePreload72.onload = function() {
      var arrayBuffer = filePreload72.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_cc.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds');
    filePreload72.send(null);

    var filePreload73 = new DataRequest();
    filePreload73.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds', true);
    filePreload73.responseType = 'arraybuffer';
    filePreload73.onload = function() {
      var arrayBuffer = filePreload73.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
        var ddsHeader = byteArray.subarray(0, 128);
        requestDecrunch('packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds', byteArray.subarray(128), function(ddsData) {
          byteArray = new Uint8Array(ddsHeader.length + ddsData.length);
          byteArray.set(ddsHeader, 0);
          byteArray.set(ddsData, 128);

      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_nm.dds', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');

        });

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds');
    filePreload73.send(null);

    var filePreload74 = new DataRequest();
    filePreload74.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg', true);
    filePreload74.responseType = 'arraybuffer';
    filePreload74.onload = function() {
      var arrayBuffer = filePreload74.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_up.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg');
    filePreload74.send(null);

    var filePreload75 = new DataRequest();
    filePreload75.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg', true);
    filePreload75.responseType = 'arraybuffer';
    filePreload75.onload = function() {
      var arrayBuffer = filePreload75.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_bk.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg');
    filePreload75.send(null);

    var filePreload76 = new DataRequest();
    filePreload76.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg', true);
    filePreload76.responseType = 'arraybuffer';
    filePreload76.onload = function() {
      var arrayBuffer = filePreload76.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_dn.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg');
    filePreload76.send(null);

    var filePreload77 = new DataRequest();
    filePreload77.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg', true);
    filePreload77.responseType = 'arraybuffer';
    filePreload77.onload = function() {
      var arrayBuffer = filePreload77.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_rt.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg');
    filePreload77.send(null);

    var filePreload78 = new DataRequest();
    filePreload78.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg', true);
    filePreload78.responseType = 'arraybuffer';
    filePreload78.onload = function() {
      var arrayBuffer = filePreload78.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_lf.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg');
    filePreload78.send(null);

    var filePreload79 = new DataRequest();
    filePreload79.open('GET', 'packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg', true);
    filePreload79.responseType = 'arraybuffer';
    filePreload79.onload = function() {
      var arrayBuffer = filePreload79.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasyJPG', 'skyfantasy_ft.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg');
    filePreload79.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'fantasy.data';
    var REMOTE_PACKAGE_NAME = 'fantasy.data';
    var PACKAGE_UUID = 'e759e3da-5dd1-41c3-ab99-3493c910fecf';
  
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
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_lf.dds'];
        var data = byteArray.subarray(0, 13737);
        var ptr = Module['_malloc'](13737);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13737);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_dn.crn'];
        var data = byteArray.subarray(13737, 28051);
        var ptr = Module['_malloc'](14314);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14314);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_dn.dds'];
        var data = byteArray.subarray(28051, 42365);
        var ptr = Module['_malloc'](14314);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14314);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_lf.crn'];
        var data = byteArray.subarray(42365, 56102);
        var ptr = Module['_malloc'](13737);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13737);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_up.dds'];
        var data = byteArray.subarray(56102, 68921);
        var ptr = Module['_malloc'](12819);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 12819);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_rt.crn'];
        var data = byteArray.subarray(68921, 82554);
        var ptr = Module['_malloc'](13633);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13633);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_up.crn'];
        var data = byteArray.subarray(82554, 95373);
        var ptr = Module['_malloc'](12819);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 12819);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_rt.dds'];
        var data = byteArray.subarray(95373, 109006);
        var ptr = Module['_malloc'](13633);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13633);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_rt.png'];
        var data = byteArray.subarray(109006, 3609068);
        var ptr = Module['_malloc'](3500062);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 3500062);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_ft.dds'];
        var data = byteArray.subarray(3609068, 3622752);
        var ptr = Module['_malloc'](13684);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13684);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_up.png'];
        var data = byteArray.subarray(3622752, 6437179);
        var ptr = Module['_malloc'](2814427);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 2814427);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_bk.dds'];
        var data = byteArray.subarray(6437179, 6450648);
        var ptr = Module['_malloc'](13469);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13469);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_bk.png'];
        var data = byteArray.subarray(6450648, 10013690);
        var ptr = Module['_malloc'](3563042);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 3563042);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_lf.png'];
        var data = byteArray.subarray(10013690, 13537407);
        var ptr = Module['_malloc'](3523717);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 3523717);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_ft.crn'];
        var data = byteArray.subarray(13537407, 13551091);
        var ptr = Module['_malloc'](13684);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13684);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_bk.crn'];
        var data = byteArray.subarray(13551091, 13564560);
        var ptr = Module['_malloc'](13469);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 13469);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_ft.png'];
        var data = byteArray.subarray(13564560, 17242967);
        var ptr = Module['_malloc'](3678407);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 3678407);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_dn.png'];
        var data = byteArray.subarray(17242967, 21236184);
        var ptr = Module['_malloc'](3993217);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 3993217);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21236184, 21236623);
        var ptr = Module['_malloc'](439);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 439);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/package.cfg'];
        var data = byteArray.subarray(21236623, 21237058);
        var ptr = Module['_malloc'](435);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 435);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21237058, 21237515);
        var ptr = Module['_malloc'](457);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 457);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/package.cfg'];
        var data = byteArray.subarray(21237515, 21237967);
        var ptr = Module['_malloc'](452);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 452);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/package2.cfg'];
        var data = byteArray.subarray(21237967, 21238681);
        var ptr = Module['_malloc'](714);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 714);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/package.cfg'];
        var data = byteArray.subarray(21238681, 21239386);
        var ptr = Module['_malloc'](705);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 705);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/package2.cfg'];
        var data = byteArray.subarray(21239386, 21240100);
        var ptr = Module['_malloc'](714);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 714);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/package.cfg'];
        var data = byteArray.subarray(21240100, 21240805);
        var ptr = Module['_malloc'](705);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 705);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21240805, 21241600);
        var ptr = Module['_malloc'](795);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 795);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg'];
        var data = byteArray.subarray(21241600, 21242385);
        var ptr = Module['_malloc'](785);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 785);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21242385, 21243084);
        var ptr = Module['_malloc'](699);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 699);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/package.cfg'];
        var data = byteArray.subarray(21243084, 21243773);
        var ptr = Module['_malloc'](689);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 689);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21243773, 21244442);
        var ptr = Module['_malloc'](669);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 669);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/package.cfg'];
        var data = byteArray.subarray(21244442, 21245101);
        var ptr = Module['_malloc'](659);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 659);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21245101, 21245831);
        var ptr = Module['_malloc'](730);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 730);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/package.cfg'];
        var data = byteArray.subarray(21245831, 21246553);
        var ptr = Module['_malloc'](722);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 722);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/package2.cfg'];
        var data = byteArray.subarray(21246553, 21246984);
        var ptr = Module['_malloc'](431);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 431);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/package.cfg'];
        var data = byteArray.subarray(21246984, 21247411);
        var ptr = Module['_malloc'](427);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 427);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21247411, 21248126);
        var ptr = Module['_malloc'](715);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 715);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/package.cfg'];
        var data = byteArray.subarray(21248126, 21248831);
        var ptr = Module['_malloc'](705);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 705);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21248831, 21249263);
        var ptr = Module['_malloc'](432);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 432);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/package.cfg'];
        var data = byteArray.subarray(21249263, 21249690);
        var ptr = Module['_malloc'](427);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 427);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21249690, 21250484);
        var ptr = Module['_malloc'](794);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 794);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg'];
        var data = byteArray.subarray(21250484, 21251270);
        var ptr = Module['_malloc'](786);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 786);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21251270, 21251685);
        var ptr = Module['_malloc'](415);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 415);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/package.cfg'];
        var data = byteArray.subarray(21251685, 21252096);
        var ptr = Module['_malloc'](411);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 411);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/package2.cfg'];
        var data = byteArray.subarray(21252096, 21252559);
        var ptr = Module['_malloc'](463);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 463);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg'];
        var data = byteArray.subarray(21252559, 21253018);
        var ptr = Module['_malloc'](459);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 459);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.dds'];
        var data = byteArray.subarray(21253018, 21371613);
        var ptr = Module['_malloc'](118595);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 118595);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.dds'];
        var data = byteArray.subarray(21371613, 21390470);
        var ptr = Module['_malloc'](18857);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 18857);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.dds'];
        var data = byteArray.subarray(21390470, 21508516);
        var ptr = Module['_malloc'](118046);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 118046);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.dds'];
        var data = byteArray.subarray(21508516, 21527289);
        var ptr = Module['_malloc'](18773);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 18773);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.dds'];
        var data = byteArray.subarray(21527289, 21558220);
        var ptr = Module['_malloc'](30931);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30931);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.dds'];
        var data = byteArray.subarray(21558220, 21588615);
        var ptr = Module['_malloc'](30395);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30395);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.dds'];
        var data = byteArray.subarray(21588615, 21618969);
        var ptr = Module['_malloc'](30354);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30354);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.dds'];
        var data = byteArray.subarray(21618969, 21637573);
        var ptr = Module['_malloc'](18604);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 18604);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.dds'];
        var data = byteArray.subarray(21637573, 21863328);
        var ptr = Module['_malloc'](225755);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 225755);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.dds'];
        var data = byteArray.subarray(21863328, 22080663);
        var ptr = Module['_malloc'](217335);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 217335);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.dds'];
        var data = byteArray.subarray(22080663, 22095471);
        var ptr = Module['_malloc'](14808);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14808);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.dds'];
        var data = byteArray.subarray(22095471, 22109602);
        var ptr = Module['_malloc'](14131);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14131);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.dds'];
        var data = byteArray.subarray(22109602, 22228536);
        var ptr = Module['_malloc'](118934);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 118934);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.dds'];
        var data = byteArray.subarray(22228536, 22298671);
        var ptr = Module['_malloc'](70135);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 70135);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.dds'];
        var data = byteArray.subarray(22298671, 22417652);
        var ptr = Module['_malloc'](118981);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 118981);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.dds'];
        var data = byteArray.subarray(22417652, 22448748);
        var ptr = Module['_malloc'](31096);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 31096);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.dds'];
        var data = byteArray.subarray(22448748, 22565125);
        var ptr = Module['_malloc'](116377);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 116377);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.dds'];
        var data = byteArray.subarray(22565125, 22595924);
        var ptr = Module['_malloc'](30799);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30799);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.dds'];
        var data = byteArray.subarray(22595924, 22624785);
        var ptr = Module['_malloc'](28861);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 28861);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.dds'];
        var data = byteArray.subarray(22624785, 22653106);
        var ptr = Module['_malloc'](28321);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 28321);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.dds'];
        var data = byteArray.subarray(22653106, 22683993);
        var ptr = Module['_malloc'](30887);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30887);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.dds'];
        var data = byteArray.subarray(22683993, 22714431);
        var ptr = Module['_malloc'](30438);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 30438);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.dds'];
        var data = byteArray.subarray(22714431, 22779393);
        var ptr = Module['_malloc'](64962);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 64962);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.dds'];
        var data = byteArray.subarray(22779393, 22844568);
        var ptr = Module['_malloc'](65175);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 65175);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.dds'];
        var data = byteArray.subarray(22844568, 22859413);
        var ptr = Module['_malloc'](14845);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14845);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.dds'];
        var data = byteArray.subarray(22859413, 22874124);
        var ptr = Module['_malloc'](14711);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 14711);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.dds'];
        var data = byteArray.subarray(22874124, 22881581);
        var ptr = Module['_malloc'](7457);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 7457);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.dds'];
        var data = byteArray.subarray(22881581, 22910439);
        var ptr = Module['_malloc'](28858);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 28858);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_up.jpg'];
        var data = byteArray.subarray(22910439, 22993280);
        var ptr = Module['_malloc'](82841);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 82841);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_bk.jpg'];
        var data = byteArray.subarray(22993280, 23149726);
        var ptr = Module['_malloc'](156446);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 156446);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_dn.jpg'];
        var data = byteArray.subarray(23149726, 23335177);
        var ptr = Module['_malloc'](185451);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 185451);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_rt.jpg'];
        var data = byteArray.subarray(23335177, 23484616);
        var ptr = Module['_malloc'](149439);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 149439);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_lf.jpg'];
        var data = byteArray.subarray(23484616, 23633678);
        var ptr = Module['_malloc'](149062);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 149062);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasyJPG/skyfantasy_ft.jpg'];
        var data = byteArray.subarray(23633678, 23787513);
        var ptr = Module['_malloc'](153835);
        Module['HEAPU8'].set(data, ptr);
        curr.response = Module['HEAPU8'].subarray(ptr, ptr + 153835);
        curr.onload();
                Module['removeRunDependency']('datafile_fantasy.data');

    };
    Module['addRunDependency']('datafile_fantasy.data');

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

