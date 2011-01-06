// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.pieChartsPage = SC.Page.design({
  
  mainView: SC.ScrollView.design({
    contentView: SC.View.design({
      layout: { left: 0, right: 0, top: 0, bottom: 0 },
      classNames: ['piechart-sample'],
      childViews: 'legend'.w(),
      
      legend: Sai.PieChart2View.design({
        layout: { left: 10, top: 10, right: 10, bottom: 10 },
        backgroundColor: 'white',
        chartLayout: { left: 300, right: 20, top: 20, bottom: 20 },
        data: [10, 1, 20],
        attrs: {
          colors: ['red', 'green', 'blue'],
          strokeWidth: 3
        },
        legend: {
          labels: ['Test A', 'Test B'],
          layout: {
            valign: 'center',
            halign: 'center',
            position: 'left',
            height: 80,
            width: 100
          },
          text: {
            fontSize: 16,
            fill: 'black'
          },
          sample: {
            shape: 'custom',
            size: {width: 20, height: 14}
          }
        },
        legendShapeRenderer_custom: function(canvas, position, layout, attrs) {
          var x = position.cx + layout.dx, y = position.cy + layout.dy, w = layout.w, h = layout.h,
              path = 'M%@,%@L%@,%@M%@,%@L%@,%@'.fmt(x,y,x+w,y+h,x+w,y,x,y+h);
          canvas.path(path, { stroke: 'red', strokeWidth: 3 });
        }
      })
      
    })
  })
});

