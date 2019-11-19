import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-3e20b4c4.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["al-viewer",[[0,"al-viewer",{"dracoDecoderPath":[1,"draco-decoder-path"],"width":[1],"height":[1],"angles":[32],"boundingBoxEnabled":[32],"camera":[32],"controlsEnabled":[32],"controlsType":[32],"displayMode":[32],"edges":[32],"graphEnabled":[32],"material":[32],"nodes":[32],"nodesVisible":[32],"optionsEnabled":[32],"optionsVisible":[32],"orientation":[32],"selected":[32],"slicesIndex":[32],"slicesMaxIndex":[32],"src":[32],"srcLoaded":[32],"units":[32],"volumeSteps":[32],"volumeWindowCenter":[32],"volumeWindowWidth":[32],"load":[64],"resize":[64],"setNode":[64],"setGraph":[64],"deleteNode":[64],"clearGraph":[64],"selectNode":[64],"deleteEdge":[64],"deleteAngle":[64],"setEdge":[64],"recenter":[64],"setBoundingBoxEnabled":[64],"setDisplayMode":[64],"setControlsEnabled":[64],"setControlsType":[64],"setGraphEnabled":[64],"setMaterial":[64],"setOrientation":[64],"setSlicesIndex":[64],"setUnits":[64],"setVolumeSteps":[64],"setVolumeBrightness":[64],"setVolumeContrast":[64]}]]],["al-console",[[1,"al-console",{"graph":[1025],"tabSize":[1026,"tab-size"]}]]],["al-settings",[[1,"al-settings",{"boundingBoxEnabled":[1028,"bounding-box-enabled"],"controlsType":[1025,"controls-type"],"displayMode":[1025,"display-mode"],"graphEnabled":[1028,"graph-enabled"],"graphVisible":[1028,"graph-visible"],"orientation":[1025],"slicesIndex":[1026,"slices-index"],"slicesMaxIndex":[1026,"slices-max-index"],"slicesBrightness":[1026,"slices-brightness"],"slicesContrast":[1026,"slices-contrast"],"units":[1025],"volumeBrightness":[1026,"volume-brightness"],"volumeContrast":[1026,"volume-contrast"],"volumeSteps":[1026,"volume-steps"],"volumeStepsHighEnabled":[1028,"volume-steps-high-enabled"]}]]],["al-tabs",[[1,"al-tabs",{"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64]}]]],["al-url-picker",[[1,"al-url-picker",{"urls":[1040],"url":[1025]}]]],["al-angle-editor",[[1,"al-angle-editor",{"angle":[1040]}]]],["al-edge-editor",[[1,"al-edge-editor",{"edge":[1040]}]]],["al-node-editor",[[1,"al-node-editor",{"node":[1040]}]]],["al-node-list",[[1,"al-node-list",{"nodes":[1040],"selected":[1025]}]]],["al-graph-editor",[[1,"al-graph-editor",{"node":[1040],"nodes":[1040],"angles":[1040],"edges":[1040],"selected":[1025]}]]],["al-control-panel",[[1,"al-control-panel",{"angles":[1040],"boundingBoxEnabled":[1028,"bounding-box-enabled"],"consoleTabEnabled":[1028,"console-tab-enabled"],"controlsType":[1025,"controls-type"],"displayMode":[1025,"display-mode"],"edges":[1040],"graphEnabled":[1028,"graph-enabled"],"graphTabEnabled":[1028,"graph-tab-enabled"],"nodes":[1040],"orientation":[1025],"selected":[1025],"settingsTabEnabled":[1028,"settings-tab-enabled"],"slicesBrightness":[1026,"slices-brightness"],"slicesContrast":[1026,"slices-contrast"],"slicesIndex":[1026,"slices-index"],"slicesMaxIndex":[1026,"slices-max-index"],"srcTabEnabled":[1028,"src-tab-enabled"],"tabContentHeight":[1025,"tab-content-height"],"units":[1025],"url":[1025],"urls":[1040],"volumeBrightness":[1026,"volume-brightness"],"volumeContrast":[1026,"volume-contrast"],"volumeSteps":[1026,"volume-steps"],"volumeStepsHighEnabled":[1028,"volume-steps-high-enabled"]}]]]], options);
});
