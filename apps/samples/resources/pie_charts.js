// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.pieChartsPage = SC.Page.design({
  
  mainView:SC.View.design({
    layout: { left: 0, right: 0, top: 0, bottom: 0 },
    classNames: ['piechart-sample'],
    childViews: 'legend loading'.w(),
    
    legend: Sai.PieChart2View.design({
      layout: { left: 10, top: 10, right: 10, height: 400 },
      backgroundColor: 'white',
      chartLayout: { left: 300, right: 5, top: 5, bottom: 5 },
      data: [1000, 300, 2000],
      attrs: {
        colors: ['red', 'green', 'blue'],
        strokeWidth: 3,
        clicks: YES,
        values: {
          percents: YES,
          text: {
            fontSize: 12,
            fontWeight: 'bold'
          },
          fill: 'white',
          stroke: 'black',
          strokeWidth: 1
        }
      },
      
      sliceClicked: function(index) {
        alert("Clicked on slice #%@!".fmt(index));
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
          fill: 'black',
          fontWeight: 'blod'
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
    }),
    
    loading: Sai.PieChart2View.design(Sai.Spinner, {
      layout: { top: 420, left: 10, width: 200, height: 200 },
      
      backgroundColor: 'white',
      spinnerOverlayColor: 'red',
      spinnerOverlayOpacity: 0.25,
      spinnerSize: 60,
      
      renderCanvas: function(canvas, firstTime) {
        sc_super();
        this.renderSpinner(canvas, firstTime);
      }
    })
  })
});

