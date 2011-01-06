// Project:   SCUI Samples - mixinsPage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */

// This page describes the main user interface for your application.  
Samples.graphsPage = SC.Page.design({
  
  mainView: SC.View.design({
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'master detail'.w(),
    
    master: SC.ListView.design({
      layout: { left: 10, top: 10, width: 150, bottom: 10 },
      rowHeight: 35,
      selectionBinding: 'Samples.graphsSourceController.selection',
      contentBinding: 'Samples.graphsSourceController',
      contentValueKey: 'name',
      actOnSelect: YES,
      target: 'Samples.graphsSourceController',
      action: 'graphSelected'
    }),
    
    detail: SC.SceneView.design({
      layout: {top: 10, left: 160, right: 10, bottom: 10},
      scenes: ['Samples.lineGraphsPage.mainView', 'Samples.barGraphsPage.mainView', 'Samples.hBarGraphsPage.mainView', 'Samples.pieChartsPage.mainView'],
      nowShowing: 'Samples.pieChartsPage.mainView'
    })
  })  
});
