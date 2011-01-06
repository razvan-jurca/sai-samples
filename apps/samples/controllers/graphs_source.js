// ==========================================================================
// Samples.graphSourceController
// ==========================================================================
/*globals Samples */
/** @static

  This ArrayController that serves up the SourceList to the Graph Library
  
  @extends SC.ArrayController
  @author Evin Grano

*/

Samples.graphsSourceController = SC.ArrayController.create(
/** @scope Samples.graphSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: "Line Graph", view: 'Samples.lineGraphsPage.mainView'}),
      SC.Object.create({ name: "Bar Graph", view: 'Samples.barGraphsPage.mainView'}),
      SC.Object.create({ name: "H-Bar Graph", view: 'Samples.hBarGraphsPage.mainView'}),
      SC.Object.create({ name: 'Pie Chart', view: 'Samples.pieChartsPage.mainView' })
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[3]) );
  },
  
  graphSelected: function(){
    var sel = this.getPath('selection.firstObject');
    if (sel) {
      var scene = Samples.graphsPage.getPath('mainView.detail');
      var view = sel.get('view');
      scene.set('nowShowing', view);
    } 
    else {
      console.log('There is no selection...');
    }
    
  }
  
});
