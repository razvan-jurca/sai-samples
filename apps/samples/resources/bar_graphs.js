// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.barGraphsPage = SC.Page.design({
  
  mainView: SC.ScrollView.design({
    contentView: SC.View.design({
      layout: { left: 0, right: 0, width: 870, height: 1320 },
      classNames: ['bargraph-sample'],
      childViews: 'basic multi stacked stackedInput stroke chartLayout gridStyling legend'.w(),
      
      basic: Sai.BarChartView.design({
        layout: { left: 25, top: 0, height: 300, width: 300 },
        backgroundColor: 'pink',
        data: [5, 10, 87, 15, 56],
        dataAttrs: {barWidth: 25, color: 'green'},
        grid: {color: 'lightgrey'},
        yaxis: {step: 5, weight: 1, color: 'black'},
        xaxis: {color: 'black', labels: ['Early', 'Morning', 'Afternoon', 'Evening', 'Night'], labelAttrs: {fontSize: '9'}}
      }),
      
      multi: Sai.BarChartView.design({
        layout: { left: 345, top: 0, height: 300, width: 500 },
        backgroundColor: 'yellow',
        //data: [[5, 30], [8, 10], [20, 6]],
        //data: [[5, 10, 15], [8, 9, 10], [20, 30, 40]],
        data: [[5, 10, 15, 5], [8, 9, 10, 12], [20, 30, 40, 10]],
        dataAttrs: {barWidth: 10, barSpacing: 2, colors: ['red', 'green', 'blue', 'purple']},
        grid: {color: 'lightgrey'},
        yaxis: {step: 5, weight: 1, hidden: YES, color: 'black'},
        xaxis: {color: 'black', labels: ['Morning', 'Afternoon', 'Evening']}
      }),
      
      stacked: Sai.BarChartView.design({
        layout: { left: 25, top: 320, height: 300, width: 300 },
        backgroundColor: 'lightgreen',
        //data: [[5, 10, 15, 12], [8, 9, 10, 45], [20, 30, 40, 5]],
        dataBinding: 'Samples.graphController.dataArray',
        dataAttrs: {stacked: YES, barWidth: 20, colors: ['red', 'green', 'blue', 'purple']},
        grid: {color: 'lightgrey'},
        yaxis: {step: 10, weight: 1, color: 'black'},
        xaxis: {color: 'black', labels: ['Morning', 'Afternoon', 'Evening']}
      }),
      
      stackedInput: SC.TextFieldView.design({
        layout: { left: 25, top: 640, height: 22, width: 300 },
        valueBinding: 'Samples.graphController.content'
      }),
      
      stroke: Sai.BarChartView.design({
        layout: { left : 25, top: 680, width: 400, height: 300 },
        data: [ 20, 23, 16, 15, 21 ],
        dataAttrs: { color: 'blue', stroke: 'black', strokeWidth: 1 },
        backgroundColor: 'white',
        grid: { verticals: NO }
      }),

      chartLayout: Sai.BarChartView.design({
        layout: { left: 445, top: 680, width: 400, height: 300 },
        data: [ 20, 23, 16, 15, 21 ],
        dataAttrs: { color: 'blue', stroke: 'black', strokeWidth: 1 },
        chartLayout: { left: 0, right: 0, top: 0, bottom: 0 },
        backgroundColor: 'white',
        grid: null
      }),

      gridStyling: Sai.BarChartView.design({
        layout: { left: 25, top: 1000, width: 400, height: 300 },
        data: [ 20, 23, 16, 15, 21 ],
        dataAttrs: { color: 'blue', stroke: 'black', strokeWidth: 1 },
        backgroundColor: 'white',
        grid: { pathAttr: { stroke: 'red', strokeWidth: 1, dotted: 'dot' } }
      }),

      legend: Sai.BarChartView.design({
        layout: { left: 445, top: 1000, width: 400, height: 300 },
        data: [ [20, 23], [15, 21] ],
        dataAttrs: { colors: ['blue', 'red'], stroke: 'black', strokeWidth: 1 },
        chartLayout: { top: 25 },
        legend: {
          labels: ['Label A', 'Label B', 'Label C'],
          layout: {
            width: 300,
            valign: 'fill',
            halign: 'center',
            position: 'top'
          },
          text: {
            align: 'center',
            fontSize: 14,
            fill: 'black'
          },
          sample: {
            colors: ['red', 'blue', 'green'],
            shape: 'rect',
            size: {width: 10, height: 10},
            stroke: 'black',
            strokeWidth: 1
          }
        },
        backgroundColor: 'white'
      })
    })
  })
});

