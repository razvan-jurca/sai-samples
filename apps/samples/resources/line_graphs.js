// ==========================================================================
// Project:   Sai Samples - textPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.lineGraphsPage = SC.Page.design({
  
  mainView: SC.ScrollView.design({
    contentView: SC.View.design({
      classNames: ['linegraph-sample'],
      layout: { top: 0, left: 0, width: 550, height: 980 },
      childViews: 'basic styling legend'.w(),
    
      basic: Sai.LineChartView.design({
        layout: { left: 25, top: 20, height: 300, width: 500 },
        backgroundColor: 'pink',
        data: [[[1,10], [20,50], [30,10], [50,100]], [[2, 5], [5,20], [15,25], [25,50], [90,100]]],
        dataAttrs: [{stroke: 'red', strokeWidth: 1}, {stroke: 'green', strokeWidth: 1}],
        grid: {color: 'lightgrey'},
        yaxis: {min: 0, max: 100, step: 5, weight: 1, color: 'black'},
        xaxis: {min: 0, max: 100, step: 5, weight: 1, color: 'black'}
      }),
    
      styling: Sai.LineChartView.design({
        layout: { left: 25, top: 340, width: 500, height: 300 },
        data: [[[0, 6], [1,10], [20,50], [30,10], [50,100]], [[0, 0], [2, 5], [5,20], [15,25], [25,50], [90,100]]],
        dataAttrs: [{stroke: 'red', strokeWidth: 2}, {stroke: 'blue', strokeWidth: 2, dotted: 'alternate' }],
        yaxis: {min: 0, max: 100, step: 10, weight: 1, color: 'black'},
        xaxis: {min: 0, max: 100, step: 10, weight: 1, color: 'black', hidden: YES},
        backgroundColor: 'white',
        grid: { pathAttr: { stroke: 'green', strokeWidth: 1, dotted: 'dot' } }
      }),
      
      legend: Sai.LineChartView.design({
        layout: { left: 25, top: 660, height: 300, width: 500 },
        backgroundColor: 'pink',
        data: [[[1,10], [20,50], [30,10], [50,100]], [[2, 5], [5,20], [15,25], [25,50], [90,100]]],
        dataAttrs: [{stroke: 'red', strokeWidth: 1}, {stroke: 'green', strokeWidth: 1}],
        grid: {color: 'lightgrey'},
        yaxis: {min: 0, max: 100, step: 5, weight: 1, color: 'black'},
        xaxis: {min: 0, max: 100, step: 5, weight: 1, color: 'black'},
        chartLayout: { left: 10, right: 130, top: 10, bottom: 10 },
        legend: ['Line A', 'Line B', 'Line not in graph'],
        legendAttrs: { 
          height: 80,
          sampleBarSize: 10,
          align: 'left',
          fontSize: 12,
          labelColor: 'black',
          defaultBarColor: '#aaa',
          colors: ['red', '#32CD32', '#FF8C00', '#1E90FF']
        }
      })
    })
  })
});

